// Stage 3 contact sheets: each step scrubbed to evenly spaced moments (effects
// included), the working loop, and the scroll-out down to Inside, laid out
// one sheet per row group in lab/s3/.
//   node lab/s3-frames.mjs [--w 1440 --h 900] [--n 12]
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900), N = +arg('--n', 12);
const OUT = new URL('./s3/', import.meta.url); fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, isMobile: W < 900, hasTouch: W < 900 });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(800);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; });
if (W >= 900) await p.click('.nav__link[data-jump="how"]'); else await p.evaluate(() => document.querySelector('.nav__link[data-jump="how"]').click());
await p.waitForTimeout(800);
// the scene's screen box: shoes plus the product's highest reach
const clip = await p.evaluate(() => {
  const w = window.__sf.world, V = (x, y, z) => w.slot.position.clone().set(x, y, z);
  const pts = [[-1.75, -0.05, -0.95], [1.0, -0.05, 0.3], [-1.75, 1.45, -0.95], [1.0, 1.45, 0.3], [-1.1, 0, 0.35], [1.0, 0, -0.95]].map(([x, y, z]) => w.project(V(x, y, z)));
  const r = document.querySelector('.world__gl').getBoundingClientRect();
  const xs = pts.map((q) => q.x + r.left), ys = pts.map((q) => q.y + r.top);
  const x0 = Math.max(0, Math.min(...xs) - 10), y0 = Math.max(0, Math.min(...ys) - 10);
  return { x: x0, y: y0, width: Math.min(innerWidth - x0, Math.max(...xs) - x0 + 20), height: Math.min(innerHeight - y0, Math.max(...ys) - y0 + 20) };
});
const shots = [];
const grab = async (label) => { await p.waitForTimeout(60); shots.push({ label, png: (await p.screenshot({ clip })).toString('base64') }); };
const sheet = async (name, cols = 4) => {
  const html = `<body style="margin:0;background:#F1EFEA;font:12px system-ui"><div style="display:grid;grid-template-columns:repeat(${cols},1fr);gap:6px;padding:6px">${shots.map((s) => `<figure style="margin:0"><img style="width:100%;display:block;border:1px solid #ddd" src="data:image/png;base64,${s.png}"><figcaption>${s.label}</figcaption></figure>`).join('')}</div></body>`;
  const q = await b.newPage({ viewport: { width: 1600, height: 400 } }); await q.setContent(html); await q.waitForTimeout(100);
  await q.screenshot({ path: new URL(`${name}.png`, OUT).pathname.slice(1), fullPage: true }); await q.close(); shots.length = 0;
  console.log(`wrote lab/s3/${name}.png`);
};
const names = ['finish', 'place', 'work', 'remove'];
for (let i = 0; i < 4; i++) {
  for (let k = 0; k < N; k++) { const t = k / (N - 1); await p.evaluate(([i, t]) => window.__sf.world.scrub(i, t), [i, t]); await grab(`step ${i + 1} ${names[i]}  t ${t.toFixed(2)}`); }
  await sheet(`step${i + 1}-${names[i]}${W < 900 ? '-m' : ''}`);
}
// working loop: play step 3 for real, then sample the loop
await p.evaluate(() => { const w = window.__sf.world; w.s3.tl = null; w.playStep(2); });
await p.waitForTimeout(2900);
for (let k = 0; k < 8; k++) { await grab(`loop +${(k * 0.35).toFixed(2)}s`); await p.waitForTimeout(290); }
await sheet(`loop${W < 900 ? '-m' : ''}`);
// scroll-out from inside, down then up
for (const [dir, from, to] of [['down', 'how', 'inside'], ['up', 'what', 'how']]) {
  await p.evaluate(() => { const w = window.__sf.world; w.setTravel('how', 'how', 0); w.scrub(2, 1); });
  for (let k = 0; k < N; k++) {
    const e = k / (N - 1), u = dir === 'down' ? e * 0.6 : 1 - e * 0.6;
    await p.evaluate(([f, t, u]) => window.__sf.world.setTravel(f, t, u), [from, to, u]); await grab(`scroll-out ${dir}  u ${u.toFixed(2)}`);
  }
  await p.evaluate(([f, t, u]) => window.__sf.world.setTravel(f, t, u), [from, to, dir === 'down' ? 0 : 1]);
  await sheet(`exit-${dir}${W < 900 ? '-m' : ''}`);
}
await b.close();
