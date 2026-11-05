// Full-page screenshots: every stage at rest, every transition mid-way, and one
// interaction per stage. Reports console errors and failed requests.
//   node lab/shoot-all.mjs [--w 1440 --h 900] [--reduced] [--no-webgl] [--out lab/all-d]
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900), OUT = path.resolve(arg('--out', 'lab/all-d'));
const REDUCED = argv.includes('--reduced'), NOGL = argv.includes('--no-webgl'), mobile = W < 900;
fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: NOGL ? ['--disable-webgl', '--disable-3d-apis'] : ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, reducedMotion: REDUCED ? 'reduce' : 'no-preference', isMobile: mobile, hasTouch: mobile });
const errs = [], failed = [];
p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
p.on('response', (r) => r.status() >= 400 && failed.push(`${r.status()} ${r.url()}`));
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForSelector('html.sf-ready'); await p.evaluate(() => document.fonts.ready);
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live') || document.documentElement.classList.contains('gl-off'), null, { timeout: 30000 });
await p.waitForTimeout(1200);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; }); // harness drives exact positions; no auto-settle
let n = 0;
const shot = async (name) => { await p.screenshot({ path: path.join(OUT, `${String(n++).padStart(2, '0')}-${name}.png`) }); };
const go = async (y, ms = 900) => { await p.evaluate((y) => window.__sf.snap.jump(y), Math.round(y)); await p.waitForTimeout(ms); };
const info = await p.evaluate(() => ({ gl: document.documentElement.classList.contains('gl-live'), overflowX: document.documentElement.scrollWidth > innerWidth, tops: window.__sf.tops, stages: [...document.querySelectorAll('[data-product]')].map((s) => s.dataset.product) }));
console.log(`viewport ${W}x${H} reduced=${REDUCED} gl=${info.gl} overflowX=${info.overflowX}`);
const TRAVEL = { default: 0.5, 'how>inside': 0.75 };
const act = async (id) => {
  try { if (mobile) { await p.tap(id, { timeout: 4000 }); } else { await p.click(id, { timeout: 4000 }); } }
  catch (e) { console.log('  !! could not act on ' + id + ': ' + String(e.message).slice(0, 120)); }
};
for (let i = 0; i < info.stages.length; i++) {
  const s = info.stages[i];
  if (i > 0) {
    const span = H * (TRAVEL[`${info.stages[i - 1]}>${s}`] || TRAVEL.default);
    await go(info.tops[i] - span * 0.5, 700); await shot(`travel-${info.stages[i - 1]}-${s}`);
  }
  await go(info.tops[i]); await shot(`${s}-rest`);
  const st = await p.evaluate(() => document.documentElement.dataset.stage);
  if (st !== s) console.log(`  !! expected stage ${s}, got ${st}`);
  // one interaction per stage
  if (s === 'explorer') { if (!mobile) { await p.hover('#tab-schools'); await p.waitForTimeout(300); } await act('#tab-teams'); await p.waitForTimeout(900); await shot('explorer-teams'); }
  if (s === 'how') { await act('#step-1'); await p.waitForTimeout(600); await shot('how-step2-mid'); await p.waitForTimeout(1000); await shot('how-step2'); await act('#step-2'); await p.waitForTimeout(1700); await shot('how-step3'); await act('#step-3'); await p.waitForTimeout(1400); await shot('how-step4'); await act('#step-0'); await p.waitForTimeout(500); await shot('how-step1-mid'); await p.waitForTimeout(800); }
  if (s === 'inside') { await act('.layer-btn[data-layer="2"]'); await p.waitForTimeout(700); await shot('inside-layer3'); await p.keyboard.press('Escape'); await p.waitForTimeout(400); }
  if (s === 'customize') { await act('.swatch[data-color="sage"]'); await p.waitForTimeout(500); await act('.size[data-size="L"]'); await p.waitForTimeout(900); await shot('customize-sage-L'); if (!mobile) { const d = await p.locator('[data-drag]').boundingBox(); await p.mouse.move(d.x + d.width / 2, d.y + d.height / 2); await p.mouse.down(); await p.mouse.move(d.x + d.width / 2 + 160, d.y + d.height / 2, { steps: 8 }); await shot('customize-drag'); await p.mouse.up(); await p.waitForTimeout(1200); } }
  if (s === 'bulk') { await p.click('[data-form="bulk"] button[type=submit]'); await p.waitForTimeout(300); await shot('bulk-invalid'); console.log('  bulk type preselected =', await p.inputValue('#b-type')); }
  if (s === 'why') { await act('.method[data-method="spray"]'); await p.waitForTimeout(600); await shot('why-spray'); await act('.method[data-method="disposable"]'); await p.waitForTimeout(600); await shot('why-disposable'); await act('.method[data-method="moisture"]'); await p.waitForTimeout(600); await shot('why-moisture'); await act('.method[data-method="solefresh"]'); await p.waitForTimeout(500); }
  if (s === 'story') { await act('[data-ms="research"]'); await p.waitForTimeout(300); await act('.faq__item:nth-of-type(2) summary'); await p.waitForTimeout(400); await shot('story-faq'); console.log('  faq open count =', await p.evaluate(() => document.querySelectorAll('.faq__item[open]').length)); }
  if (s === 'close') { await p.fill('#w-email', 'athlete@example.com'); await p.click('[data-form="waitlist"] button[type=submit]'); await p.waitForTimeout(900); await shot('close-waitlist'); console.log('  waitlist status:', await p.textContent('[data-form="waitlist"] .form__status')); }
}
// nav jump back to Inside
if (!mobile) { await p.click('.nav__link[data-jump="inside"]'); await p.waitForTimeout(700); await shot('navjump-inside'); console.log('  nav jump stage =', await p.evaluate(() => document.documentElement.dataset.stage)); }
console.log('errors:', errs.length ? errs : 'none'); console.log('failed:', failed.length ? failed : 'none');
await b.close();
