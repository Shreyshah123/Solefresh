// Seam detector. Scans frames across every stage boundary for a thin,
// low-chroma horizontal line spanning most of the viewport width, ignoring
// rows covered by intentional rules (nav, footer, buttons, cards).
// Static mode photographs fixed scroll positions; --motion photographs frames
// during the snap settle across each boundary, which is when a seam shows.
//   node lab/seam.mjs [--browser chrome|edge] [--dpr 1|1.25|1.5] [--zoom 0.9|1|1.1] [--motion] [--step 60]
import { createRequire } from 'node:module';
import zlib from 'node:zlib';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const BROWSER = arg('--browser', 'chrome'), DPR = +arg('--dpr', 1), ZOOM = +arg('--zoom', 1), STEP = +arg('--step', 60), MOTION = argv.includes('--motion');
const EXE = BROWSER === 'edge' ? 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' : 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const W = 1440, H = 900;

function decodePNG(buf) {
  let p = 8, w = 0, h = 0, ct = 0; const idat = [];
  while (p < buf.length) { const len = buf.readUInt32BE(p), type = buf.toString('ascii', p + 4, p + 8), data = buf.subarray(p + 8, p + 8 + len); if (type === 'IHDR') { w = data.readUInt32BE(0); h = data.readUInt32BE(4); ct = data[9]; } else if (type === 'IDAT') idat.push(data); p += 12 + len; }
  const bpp = ct === 6 ? 4 : 3, raw = zlib.inflateSync(Buffer.concat(idat)), stride = w * bpp, out = Buffer.alloc(h * stride);
  let q = 0;
  for (let y = 0; y < h; y++) { const f = raw[q++], o = y * stride, up = o - stride; for (let x = 0; x < stride; x++) { const a = x >= bpp ? out[o + x - bpp] : 0, b = y ? out[up + x] : 0, c = x >= bpp && y ? out[up + x - bpp] : 0, v = raw[q++]; let r; if (f === 0) r = v; else if (f === 1) r = v + a; else if (f === 2) r = v + b; else if (f === 3) r = v + ((a + b) >> 1); else { const pp = a + b - c, pa = Math.abs(pp - a), pb = Math.abs(pp - b), pc = Math.abs(pp - c); r = v + (pa <= pb && pa <= pc ? a : pb <= pc ? b : c); } out[o + x] = r & 255; } }
  return { w, h, bpp, data: out };
}
function findLines(img, excl) {
  const { w, h, bpp, data } = img, hits = [], cols = Math.floor(w / 4);
  for (let y = 4; y < h - 4; y++) {
    if (excl.some(([a, b2]) => y >= a && y <= b2)) continue;
    let diff = 0, grey = 0, rs = 0, gs = 0, bs = 0;
    for (let i = 0; i < cols; i++) {
      const x = i * 4, o = y * w * bpp + x * bpp, u = o - 3 * w * bpp, d = o + 3 * w * bpp;
      const dU = Math.abs(data[o] - data[u]) + Math.abs(data[o + 1] - data[u + 1]) + Math.abs(data[o + 2] - data[u + 2]);
      const dD = Math.abs(data[o] - data[d]) + Math.abs(data[o + 1] - data[d + 1]) + Math.abs(data[o + 2] - data[d + 2]);
      if (dU > 18 && dD > 18) { diff++; rs += data[o]; gs += data[o + 1]; bs += data[o + 2]; const mx = Math.max(data[o], data[o + 1], data[o + 2]), mn = Math.min(data[o], data[o + 1], data[o + 2]); if (mx - mn < 40) grey++; }
    }
    const cov = diff / cols;
    if (cov > 0.5 && grey / Math.max(1, diff) > 0.7) hits.push({ y, cov, rgb: [Math.round(rs / diff), Math.round(gs / diff), Math.round(bs / diff)] });
  }
  const merged = []; for (const hit of hits) { const last = merged[merged.length - 1]; if (last && hit.y - last.y1 <= 2) { last.y1 = hit.y; last.cov = Math.max(last.cov, hit.cov); } else merged.push({ y0: hit.y, y1: hit.y, cov: hit.cov, rgb: hit.rgb }); }
  return merged;
}
// Rows that may legitimately hold a grey rule: chrome and bordered UI.
const INTENTIONAL = '.nav, .menu:not([hidden]), .footer, .steps, .bulk__card, .paths, .week, .faq, .who__list, .panel, .sheet__body, .hs-card, .milestone__text, .explorer__view, .timeline, .covers, .inside__list, .sizes, .methods, .swatches';

const b = await chromium.launch({ executablePath: EXE, headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: DPR });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
if (ZOOM !== 1) { await p.evaluate((z) => { document.documentElement.style.zoom = String(z); }, ZOOM); await p.waitForTimeout(300); await p.evaluate(() => window.__sf.measureStages()); }
await p.waitForTimeout(1200);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; }); // static positions stay put
// Headless capture composites fixed layers from a stale scroll offset mid-animation, which draws the nav displaced; hide it so only content can register.
await p.addStyleTag({ content: '.nav, .menu { visibility: hidden !important; }' });
const { tops, stages, points, SNAP } = await p.evaluate(() => ({ tops: window.__sf.tops, stages: [...document.querySelectorAll('[data-product]')].map((s) => s.dataset.product), points: window.__sf.snap.points, SNAP: window.__sf.SNAP_MS }));
const vh = await p.evaluate(() => innerHeight);
import fs from 'node:fs';
const saved = {};
// Exclusion rects are measured BEFORE the capture; the page can move during a
// capture mid-settle, so each rect is padded by the distance it moved. Rects
// come back in layout px; `k` maps them to visual px under root zoom.
const scan = async (label, scrollY) => {
  const before = await p.evaluate((sel) => ({ y: scrollY, k: innerHeight / document.documentElement.clientHeight, rects: [...document.querySelectorAll(sel)].map((el) => { const r = el.getBoundingClientRect(); return r.height && r.width ? [r.top, r.bottom] : null; }).filter(Boolean) }), INTENTIONAL);
  const png = await p.screenshot({ type: 'png' });
  const after = await p.evaluate(() => scrollY);
  const shift = (after - before.y) * before.k;
  const navNow = [0, 0, Math.round(after)];
  const excl = before.rects.map(([a, b2]) => [(a * before.k - Math.max(0, shift) - 3) * DPR, (b2 * before.k + Math.max(0, -shift) + 3) * DPR]);
  const lines = findLines(decodePNG(png), excl);
  if (lines.length && argv.includes('--save') && !saved[label]) { saved[label] = true; const f = `lab/seam-${label.replace(/[^a-z]+/g, '-')}.png`; fs.writeFileSync(f, png); console.log(`  saved ${f} scrollY ${Math.round(scrollY)} shift ${Math.round(shift)} lines ${lines.map((l) => Math.round(l.y0 / DPR)).join(',')}`); }
  return lines.map((l) => ({ boundary: label, scrollY: Math.round(scrollY), y: Math.round(l.y0 / DPR), cov: +l.cov.toFixed(2), rgb: l.rgb }));
};
let total = 0, found = [];
for (let i = 1; i < stages.length; i++) {
  const label = `${stages[i - 1]}>${stages[i]}`;
  if (!MOTION) {
    const from = Math.round(tops[i] - vh * 1.1), to = Math.round(tops[i] + vh * 0.1);
    for (let y = from; y <= to; y += STEP) {
      await p.evaluate((y) => window.__sf.snap.jump(y), y); await p.waitForTimeout(160);
      found.push(...(await scan(label, y))); total++;
    }
  } else {
    const pi = points.indexOf(Math.round(Math.max(0, tops[i - 1])));
    await p.evaluate((y) => window.__sf.snap.jump(y), points[pi]); await p.waitForTimeout(300);
    await p.evaluate(() => window.__sf.snap.go(1));
    const t0 = Date.now();
    while (Date.now() - t0 < SNAP + 120) { found.push(...(await scan(label, await p.evaluate(() => scrollY)))); total++; await p.waitForTimeout(40); }
    await p.waitForTimeout(200);
    await p.evaluate(() => window.__sf.snap.go(-1));
    const t1 = Date.now();
    while (Date.now() - t1 < SNAP + 120) { found.push(...(await scan(label + ' (up)', await p.evaluate(() => scrollY)))); total++; await p.waitForTimeout(40); }
    await p.waitForTimeout(200);
  }
}
await b.close();
console.log(`${BROWSER} dpr=${DPR} zoom=${ZOOM} ${MOTION ? 'during settles' : 'static'}: ${total} frames scanned, ${found.length} line frames`);
const by = {}; for (const f of found) (by[f.boundary] ||= []).push(f);
for (const k of Object.keys(by)) { const ys = by[k].map((f) => f.y); console.log(`  ${k}: ${by[k].length} frames, line at viewport y ${Math.min(...ys)}..${Math.max(...ys)} (e.g. scrollY ${by[k][0].scrollY}, cov ${by[k][0].cov}, rgb ${by[k][0].rgb})`); }
if (!found.length) console.log('  no seam lines found');
