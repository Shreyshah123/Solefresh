// Contact sheets of the two Bulk travels (Customize to Bulk, Bulk to Why) at
// evenly spaced scroll positions, written to lab/s3/. Full viewport frames, so
// the copy panels that travel with the page show as well.
//   node lab/bulk-frames.mjs [--w 1440 --h 900] [--n 10]
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900), N = +arg('--n', 10);
const OUT = new URL('./s3/', import.meta.url); fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, isMobile: W < 900, hasTouch: W < 900 });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(800);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; });
const tops = await p.evaluate(() => window.__sf.tops);
const order = ['explorer', 'what', 'how', 'inside', 'customize', 'bulk', 'why', 'story', 'close'];
const shots = [];
const sheet = async (name, cols = 5) => {
  const html = `<body style="margin:0;background:#F1EFEA;font:12px system-ui"><div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:6px;padding:6px">${shots.map((s) => `<figure style="margin:0"><img style="width:100%;display:block;border:1px solid #ddd" src="data:image/png;base64,${s.png}"><figcaption>${s.label}</figcaption></figure>`).join('')}</div></body>`;
  const q = await b.newPage({ viewport: { width: 1600, height: 400 } }); await q.setContent(html); await q.waitForTimeout(100);
  await q.screenshot({ path: new URL(`${name}.png`, OUT).pathname.slice(1), fullPage: true }); await q.close(); shots.length = 0;
  console.log(`wrote lab/s3/${name}.png`);
};
// the real page scrolled through each travel (the world follows the scroll), so copy and scene line up as a visitor sees them
for (const [from, to] of [['customize', 'bulk'], ['bulk', 'why']]) {
  const z = tops[order.indexOf(to)];   // each travel is the last half viewport of scroll before the next stage's top
  for (let k = 0; k < N; k++) {
    const u = k / (N - 1);
    await p.evaluate((y) => window.__sf.snap.jump(y), z - Math.round(H * 0.5 * (1 - u))); await p.waitForTimeout(140);
    const t = await p.evaluate(() => { const t = window.__sf.world.travel; return `${t.from}>${t.to} u ${t.u.toFixed(2)}`; });
    shots.push({ label: t, png: (await p.screenshot()).toString('base64') });
  }
  await sheet(`travel-${from}-${to}${W < 900 ? '-m' : ''}`);
}
await b.close();
