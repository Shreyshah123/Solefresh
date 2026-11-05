// Jumps and history: every nav link lands exactly on its anchor and stays there, updates the hash, and is one history
// entry; Back and Forward return; a deep link lands; a reload stays put. On wide screens snapping stands aside while a
// form or the FAQ has focus. Under 900px the page scrolls natively with no snap.
//   node lab/anchor-test.mjs [--mobile]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const MOBILE = process.argv.includes('--mobile');
const W = MOBILE ? 390 : 1440, H = MOBILE ? 844 : 900;
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: MOBILE, hasTouch: MOBILE });
const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
const ready = async () => { await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await p.waitForTimeout(700); };
await p.goto('http://localhost:4520/', { waitUntil: 'load' }); await ready();
let fails = 0; const check = (l, ok, x = '') => { if (!ok) fails++; console.log(`  ${l.padEnd(66)} ${ok ? 'ok' : 'FAIL'}${x ? '  ' + x : ''}`); };
// how far the element's top is from where it should rest: under the nav, and under the band if the band is pinned over it
const offBy = (id) => p.evaluate((id) => {
  const el = document.getElementById(id), nav = document.querySelector('.nav').getBoundingClientRect().height, w = document.querySelector('[data-world]');
  const pinned = getComputedStyle(w).position === 'sticky' && el.closest('.pin');
  const maxY = document.documentElement.scrollHeight - innerHeight;
  const off = el.getBoundingClientRect().top - nav - (pinned ? w.offsetHeight : 0);
  return Math.abs(scrollY - maxY) < 2 && off > 0 ? 0 : Math.round(off); // the page's end can stop a last anchor short
}, id);
const click = async (jump) => { await p.evaluate((j) => document.querySelector(`[data-jump="${j}"]`).click(), jump); };
const links = await p.evaluate(() => [...document.querySelectorAll('.nav__link')].map((a) => ({ jump: a.dataset.jump, id: a.getAttribute('href').slice(1) })));

console.log('nav links land on their anchors and stay');
for (const l of links) {
  await click(l.jump); await p.waitForTimeout(150); const first = await offBy(l.id); await p.waitForTimeout(900); const later = await offBy(l.id);
  const hash = await p.evaluate(() => location.hash);
  check(`${l.jump} -> #${l.id}`, Math.abs(first) <= 1 && Math.abs(later) <= 1 && hash === `#${l.id}`, `off ${first} then ${later}, ${hash}`);
}
console.log('history');
await p.goto('http://localhost:4520/', { waitUntil: 'load' }); await ready();
const y0 = await p.evaluate(() => { const y = window.__sf.tops[2]; window.__sf.snap.jump(y); return y; }); await p.waitForTimeout(700);
const len0 = await p.evaluate(() => history.length);
await click('story'); await p.waitForTimeout(700); await click('faq'); await p.waitForTimeout(700);
check('each jump is one history entry', (await p.evaluate(() => history.length)) === len0 + 2);
await p.goBack(); await p.waitForTimeout(800);
check('Back: the previous anchor', (await p.evaluate(() => location.hash)) === '#story' && Math.abs(await offBy('story')) <= 1, `off ${await offBy('story')}`);
await p.goBack(); await p.waitForTimeout(800);
const yb = await p.evaluate(() => Math.round(scrollY));
check('Back again: exactly where the visitor was before the first jump', Math.abs(yb - y0) <= 1 && (await p.evaluate(() => location.hash)) === '', `y ${yb}, was ${y0}`);
check('and the stage follows', (await p.evaluate(() => document.documentElement.dataset.stage)) === 'how');
await p.goForward(); await p.waitForTimeout(800);
check('Forward: the anchor again', (await p.evaluate(() => location.hash)) === '#story' && Math.abs(await offBy('story')) <= 1);
console.log('arriving');
await p.goto('http://localhost:4520/#customize', { waitUntil: 'load' }); await ready();
check('a deep link lands on its anchor', Math.abs(await offBy('customize')) <= 1, `off ${await offBy('customize')}`);
check('and the page knows its stage', (await p.evaluate(() => document.documentElement.dataset.stage)) === 'customize');
await p.goto('http://localhost:4520/#faq', { waitUntil: 'load' }); await ready(); await p.waitForTimeout(500);
check('a deep link to the FAQ stays on it', Math.abs(await offBy('faq')) <= 1, `off ${await offBy('faq')}`);
await p.evaluate(() => window.__sf.snap.jump(window.__sf.tops[1])); await p.waitForTimeout(800);
const yr = await p.evaluate(() => Math.round(scrollY)); await p.reload({ waitUntil: 'load' }); await ready();
check('a reload stays where the visitor was', Math.abs((await p.evaluate(() => Math.round(scrollY))) - yr) <= 2, `y ${await p.evaluate(() => Math.round(scrollY))}, was ${yr}`);

if (!MOBILE) {
  console.log('snapping stands aside for forms and the FAQ');
  await p.goto('http://localhost:4520/', { waitUntil: 'load' }); await ready();
  const SNAP = await p.evaluate(() => window.__sf.SNAP_MS), onPoint = () => p.evaluate(() => window.__sf.snap.points.some((v) => Math.abs(v - scrollY) <= 2));
  await click('bulk'); await p.waitForTimeout(600);
  await p.focus('#b-name'); await p.waitForTimeout(200);
  check('a focused form field pauses snapping', await p.evaluate(() => window.__sf.snapPaused()));
  await p.mouse.move(W / 2, H / 2); const a = await p.evaluate(() => scrollY); await p.mouse.wheel(0, 60); await p.waitForTimeout(SNAP + 400); // inside the snapped part of the stage: past snap.end the page is free anyway
  const c = await p.evaluate(() => scrollY);
  check('the wheel scrolls freely, and nothing pulls the page back', c > a + 40 && !(await onPoint()), `moved ${Math.round(c - a)}, on a rest point: ${await onPoint()}`);
  await p.keyboard.press('Tab'); await p.keyboard.press('Tab'); await p.waitForTimeout(SNAP);
  check('tabbing between fields does not snap', !(await p.evaluate(() => window.__sf.snap.animating)) && (await p.evaluate(() => document.activeElement.id)) === 'b-phone', await p.evaluate(() => document.activeElement.id));
  await p.evaluate(() => document.activeElement.blur()); await p.mouse.wheel(0, 100); await p.waitForTimeout(SNAP + 450);
  check('away from the field, snapping is back', await onPoint());
  await click('faq'); await p.waitForTimeout(600);
  await p.click('.faq__item:nth-of-type(2) summary'); await p.waitForTimeout(300);
  check('a focused FAQ question pauses snapping', await p.evaluate(() => window.__sf.snapPaused()));
  const f0 = await p.evaluate(() => scrollY); await p.mouse.wheel(0, 90); await p.waitForTimeout(SNAP + 400);
  check('the wheel scrolls freely in the FAQ', Math.abs((await p.evaluate(() => scrollY)) - f0 - 90) < 30);
  const closeTop = await p.evaluate(() => { const c = document.getElementById('close'); return Math.round(c.getBoundingClientRect().top + scrollY - document.querySelector('.nav').getBoundingClientRect().height); });
  check('opening an answer re-measures the page below it', (await p.evaluate(() => window.__sf.tops.at(-1))) === closeTop);
  await p.evaluate(() => document.activeElement.blur());
} else {
  console.log('native scrolling');
  await p.goto('http://localhost:4520/', { waitUntil: 'load' }); await ready();
  check('no Lenis, no settle', await p.evaluate(() => !window.__sf.lenis));
  await p.evaluate(() => scrollTo(0, 1234)); await p.waitForTimeout(800);
  check('a scroll stays where it is put', (await p.evaluate(() => Math.round(scrollY))) === 1234, String(await p.evaluate(() => Math.round(scrollY))));
  const notCancelled = await p.evaluate(() => { const e = new WheelEvent('wheel', { deltaY: 100, bubbles: true, cancelable: true }); document.elementFromPoint(100, 500).dispatchEvent(e); return !e.defaultPrevented; });
  check('the wheel is left to the browser', notCancelled);
  await p.keyboard.press('ArrowDown'); await p.waitForTimeout(300);
  check('no stage step on a key', !(await p.evaluate(() => window.__sf.snap.animating)));
  // the band: pinned through Customize, gone before everything below
  const band = () => p.evaluate(() => { const r = document.querySelector('[data-world]').getBoundingClientRect(), nav = document.querySelector('.nav').getBoundingClientRect().height; return { top: Math.round(r.top), bottom: Math.round(r.bottom), nav: Math.round(nav) }; });
  for (const id of ['explorer', 'what', 'how', 'inside', 'customize']) { await p.evaluate((id) => document.querySelector(`.nav__link[data-jump="${id}"]`).click(), id); await p.waitForTimeout(350); const r = await band(); check(`band pinned on ${id}`, r.top === r.nav, JSON.stringify(r)); }
  for (const [id, jump] of [['pilot', 'bulk'], ['why', 'why'], ['story', 'story'], ['faq', 'faq'], ['close', 'close']]) { await click(jump); await p.waitForTimeout(350); const r = await band(); check(`band gone on #${id}`, r.bottom <= r.nav, JSON.stringify(r)); }
  const rendering = await p.evaluate(() => window.__sf.world.visible);
  check('the world stops rendering once the band has gone', rendering === false);
}
if (errs.length) { console.log('page errors:', errs); fails++; }
console.log(fails ? `FAILURES: ${fails}` : 'all anchor checks passed');
await b.close();
