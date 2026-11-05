// One screenshot of every stage at rest, the page really scrolled there, for looking at the product in each pose.
//   node lab/frames.mjs [--w 1440 --h 900] [--out lab/frames] [--only what,how] [--color sage] [--size L]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900), OUT = path.resolve(arg('--out', 'lab/frames')), ONLY = arg('--only', ''), COLOR = arg('--color', ''), SIZE = arg('--size', '');
fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, isMobile: W < 900, hasTouch: W < 900 });
const errs = []; p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(800);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; });
if (COLOR) await p.evaluate((c) => window.__sf.setColor(c), COLOR);
if (SIZE) { await p.evaluate((s) => window.__sf.setSizeId(s), SIZE); await p.waitForTimeout(800); }
const stages = await p.evaluate(() => [...document.querySelectorAll('[data-product]')].map((s) => s.dataset.product));
for (const [i, s] of stages.entries()) {
  if (ONLY && !ONLY.split(',').includes(s)) continue;
  await p.evaluate((i) => window.__sf.snap.jump(window.__sf.tops[i]), i); await p.waitForTimeout(800);
  await p.screenshot({ path: path.join(OUT, `${String(i).padStart(2, '0')}-${s}${W < 900 ? '-m' : ''}.png`) });
}
console.log(errs.length ? errs : 'no page errors');
await b.close();
