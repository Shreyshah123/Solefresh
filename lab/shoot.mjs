// Stage screenshots + interaction checks.
//   node lab/shoot.mjs [--w 1440 --h 900] [--reduced] [--no-webgl] [--out lab/s1-d] [--posters]
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900), OUT = path.resolve(arg('--out', 'lab/s1-d'));
const REDUCED = argv.includes('--reduced'), NOGL = argv.includes('--no-webgl'), POSTERS = argv.includes('--posters');
const mobile = W < 900;
fs.mkdirSync(OUT, { recursive: true });
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: NOGL ? ['--disable-webgl', '--disable-3d-apis'] : argv.includes('--software') ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: POSTERS ? 1 : 1, reducedMotion: REDUCED ? 'reduce' : 'no-preference', isMobile: mobile, hasTouch: mobile });
await p.addInitScript(() => { Element.prototype.requestPointerLock = function () { return Promise.reject(new Error('disabled')); }; Element.prototype.setPointerCapture = function () {}; });
const errs = [], failed = [];
p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
p.on('response', (r) => r.status() >= 400 && failed.push(`${r.status()} ${r.url()}`));
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForSelector('html.sf-ready'); await p.evaluate(() => document.fonts.ready);
if (!NOGL) await p.waitForFunction(() => document.documentElement.classList.contains('gl-live') || document.documentElement.classList.contains('gl-off'), null, { timeout: 30000 });
const idle = async (ms = 900) => { await p.waitForTimeout(ms); };
const shot = async (name) => { await p.screenshot({ path: path.join(OUT, name + '.png') }); };
const info = await p.evaluate(() => ({ gl: document.documentElement.classList.contains('gl-live'), overflowX: document.documentElement.scrollWidth > innerWidth, h: document.documentElement.scrollHeight }));
console.log(`viewport ${W}x${H} reduced=${REDUCED} gl=${info.gl} overflowX=${info.overflowX}`);
await idle(1200); await shot('00-bowling');

if (POSTERS) {
  for (const a of ['bowling', 'rinks', 'schools', 'teams', 'people']) {
    await p.evaluate((id) => window.__sf.select(id, { animate: false }), a); await idle(1200);
    const url = await p.evaluate(() => window.__sf.explorer.capture());
    fs.writeFileSync(`assets/posters/${a}.webp`, Buffer.from(url.split(',')[1], 'base64'));
  }
  // Stage 2 poster: the product in its 'what' pose, venue floor faded.
  await p.evaluate(() => { window.__sf.explorer.setTravel('hero', 'what', 1); }); await idle(1200);
  fs.writeFileSync('assets/posters/what.webp', Buffer.from((await p.evaluate(() => window.__sf.explorer.capture())).split(',')[1], 'base64'));
  console.log('posters written'); await b.close(); process.exit(0);
}

// hover thumbnail (desktop) on the third item
if (!mobile) { await p.hover('#tab-schools'); await idle(500); await shot('01-hover-schools'); }
// click through every audience
let n = 2;
for (const id of ['rinks', 'schools', 'teams', 'people']) {
  if (mobile) await p.tap(`#tab-${id}`); else await p.click(`#tab-${id}`);
  await idle(1100); await shot(String(n++).padStart(2, '0') + '-' + id);
  const s = await p.evaluate(() => ({ sel: document.querySelector('[aria-selected="true"]').dataset.aud, org: !document.querySelector('[data-panel-org]').hidden, ind: !document.querySelector('[data-panel-ind]').hidden, line: document.querySelector('[data-panel-line]').textContent }));
  console.log(`  ${id}: selected=${s.sel} orgPanel=${s.org} indPanel=${s.ind} line="${s.line}"`);
}
// keyboard: arrows move the selection
await p.focus('#tab-people'); await p.keyboard.press('ArrowUp');
console.log('  keyboard ArrowUp from people ->', await p.evaluate(() => document.activeElement.dataset.aud));
// menu (narrow)
if (W <= 1180) { await p.click('.nav__menu'); await idle(300); await shot(String(n++).padStart(2, '0') + '-menu'); console.log('  menu open:', await p.evaluate(() => !document.getElementById('menu').hidden)); await p.keyboard.press('Escape'); }
// ---- stage 2: mid-transition frame, arrival, hover/tap a hotspot
const tops = await p.evaluate(() => window.__sf.tops);
await p.evaluate((y) => scrollTo({ top: y, behavior: 'instant' }), Math.round(tops[1] - H * 0.25)); await idle(700);
await shot(String(n++).padStart(2, '0') + '-travel-mid');
console.log('  mid-travel stage =', await p.evaluate(() => document.documentElement.dataset.stage));
await p.evaluate((y) => scrollTo({ top: y, behavior: 'instant' }), Math.round(tops[1])); await idle(900);
await shot(String(n++).padStart(2, '0') + '-what');
console.log('  at stage 2 =', await p.evaluate(() => document.documentElement.dataset.stage));
if (mobile) { await p.tap('.hotspot--moisture .hotspot__btn'); } else { await p.hover('.hotspot--odor .hotspot__btn'); }
await idle(500); await shot(String(n++).padStart(2, '0') + '-what-hotspot');
console.log('  hotspot open:', await p.evaluate(() => [...document.querySelectorAll('.hotspot')].map((h) => { const cs = getComputedStyle(h.querySelector('.hotspot__text')); return h.className.replace('hotspot ', '') + ':' + (cs.visibility === 'visible' && cs.display !== 'none'); })));
await p.keyboard.press('Escape');
console.log('errors:', errs.length ? errs : 'none'); console.log('failed:', failed.length ? failed : 'none');
await b.close();
