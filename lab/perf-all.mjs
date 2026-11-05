// Performance: down the whole page and back, interacting in each stage on the way
// down. Wide screens: one wheel gesture per rest point, then the wheel past the pilot
// stage. Phones: a native scroll from stage to stage. rAF frame times are bucketed by stage and by transition.
// Reports fps per bucket plus a Chrome trace.
//   node lab/perf-all.mjs [--w 1440 --h 900]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900), mobile = W < 900;
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: mobile, hasTouch: mobile });
const p = await ctx.newPage();
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(1500);
const gpu = await p.evaluate(() => { const c = document.createElement('canvas'); const g = c.getContext('webgl2'); const d = g.getExtension('WEBGL_debug_renderer_info'); return g.getParameter(d.UNMASKED_RENDERER_WEBGL); });
const SNAP = await p.evaluate(() => window.__sf.SNAP_MS);
const n = await p.evaluate(() => (window.__sf.lenis ? window.__sf.snap.points : window.__sf.tops).length);
await p.evaluate(() => {
  window.__ft = []; window.__long = []; let last = performance.now();
  const f = (t) => { window.__ft.push([t - last, document.documentElement.dataset.stage || 'explorer', document.documentElement.dataset.travel || '']); last = t; if (window.__run) requestAnimationFrame(f); };
  window.__run = true; requestAnimationFrame(f);
  try { new PerformanceObserver((l) => l.getEntries().forEach((e) => window.__long.push([e.duration, document.documentElement.dataset.stage]))).observe({ type: 'longtask', buffered: false }); } catch {}
});
const tracePath = `lab/trace-all-${W}x${H}.json`;
await b.startTracing(p, { path: tracePath, screenshots: false, categories: ['disabled-by-default-devtools.timeline.frame', 'devtools.timeline', 'disabled-by-default-devtools.timeline', 'toplevel', 'gpu', 'cc'] });
const t0 = Date.now();
// phones: a finger-speed scroll to the next stage, done by the browser's own scroller
let at = 0;
const gesture = async (dir) => {
  if (mobile) { at += dir; await p.evaluate((i) => new Promise((done) => { const y0 = scrollY, y1 = window.__sf.tops[i], t0 = performance.now(), step = (t) => { const u = Math.min(1, (t - t0) / 700); scrollTo(0, y0 + (y1 - y0) * (1 - (1 - u) ** 3)); if (u < 1) requestAnimationFrame(step); else done(); }; requestAnimationFrame(step); }), at); await p.waitForTimeout(120); return; }
  await p.mouse.move(W / 2, H / 2); await p.mouse.wheel(0, 120 * dir); await p.waitForTimeout(SNAP + 260);
};
const interact = { how: async () => { await p.click('#step-1'); await p.waitForTimeout(1500); }, inside: async () => { await p.click('.layer-btn[data-layer="1"]'); await p.waitForTimeout(400); if (mobile) { await p.keyboard.press('Escape'); await p.waitForTimeout(250); } }, customize: async () => { await p.click('.swatch[data-color="sage"]'); await p.waitForTimeout(350); await p.click('.size[data-size="L"]'); await p.waitForFunction(() => window.__sf.world.slot.sizeId === 'L'); await p.waitForTimeout(350); }, why: async () => { await p.click('.method[data-method="spray"]'); await p.waitForTimeout(350); }, story: async () => { await p.click('.faq__item:nth-of-type(1) summary'); await p.waitForTimeout(250); await p.evaluate(() => document.activeElement.blur()); } };
const done = new Set();
const stageNow = () => p.evaluate(() => document.documentElement.dataset.stage);
for (let i = 0; i < n - 1; i++) { await gesture(1); const s = await stageNow(); if (interact[s] && !done.has(s)) { done.add(s); await interact[s](); } }
// wide screens: past the pilot stage the page is the browser's own, so it is wheeled there and back, a notch at a time
const free = async (dir) => {
  for (let k = 0; k < 500; k++) {
    const [y, end, max] = await p.evaluate(() => [scrollY, window.__sf.snap.end, document.documentElement.scrollHeight - innerHeight]);
    if (dir > 0 ? y >= max - 1 : y <= end + 1) break;
    await p.mouse.wheel(0, 80 * dir); await p.waitForTimeout(16);
    const s = await stageNow(); if (dir > 0 && interact[s] && !done.has(s)) { done.add(s); await interact[s](); }
  }
  await p.waitForTimeout(300);
};
if (!mobile) { await p.mouse.move(W / 2, H / 2); await free(1); await free(-1); }
for (let i = 0; i < n - 1; i++) await gesture(-1);
const secs = (Date.now() - t0) / 1000;
await b.stopTracing();
const r = await p.evaluate(() => { window.__run = false; return { ft: window.__ft, long: window.__long }; });
await b.close();
const by = {};
for (const [ms, st, tv] of r.ft) { if (ms <= 0 || ms > 1000) continue; const k = tv ? `transition ${tv}` : `stage ${st}`; (by[k] ||= []).push(ms); }
console.log(`viewport ${W}x${H}  renderer: ${gpu}\nwindow: ${secs.toFixed(1)}s, ${r.ft.length} frames, ${n - 1} gestures down and ${n - 1} up (SNAP_MS ${SNAP}), one interaction per stage`);
console.log('bucket                           frames   mean    p95    worst  >20ms');
for (const k of Object.keys(by).sort()) { const a = by[k].sort((x, z) => x - z); const mean = a.reduce((s, v) => s + v, 0) / a.length; console.log(`${k.padEnd(32)} ${String(a.length).padStart(6)}  ${mean.toFixed(1).padStart(5)}  ${a[Math.floor(a.length * 0.95)].toFixed(1).padStart(5)}  ${a[a.length - 1].toFixed(1).padStart(6)}  ${a.filter((v) => v > 20).length}`); }
const all = r.ft.map((x) => x[0]).filter((v) => v > 0 && v < 1000).sort((a, b2) => a - b2);
console.log(`overall: mean ${(all.reduce((s, v) => s + v, 0) / all.length).toFixed(1)}ms (${(1000 / (all.reduce((s, v) => s + v, 0) / all.length)).toFixed(0)} fps), p95 ${all[Math.floor(all.length * 0.95)].toFixed(1)}ms, frames >20ms: ${all.filter((v) => v > 20).length}`);
console.log(`long tasks: ${r.long.length}${r.long.length ? ' ' + r.long.map(([d, s]) => `${d.toFixed(0)}ms@${s}`).join(' ') : ''}  trace: ${tracePath}`);
