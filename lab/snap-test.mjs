// Snapping contract on wide screens, Stage 1 through the pilot stage: one stage per gesture for a
// mouse tick, a trackpad flick (40 decaying events) and keys; the page rests on a point after
// each; nav links still jump anywhere. Past it see free-scroll-test.mjs. Phones (--mobile): no snap.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2);
const mobile = argv.includes('--mobile');
const W = mobile ? 390 : 1440, H = mobile ? 844 : 900;
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: mobile, hasTouch: mobile });
const p = await ctx.newPage();
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(1200);
const SNAP = await p.evaluate(() => window.__sf.SNAP_MS);
const points = await p.evaluate(() => window.__sf.snap.points);
const at = async () => { const y = await p.evaluate(() => Math.round(scrollY)); const i = points.findIndex((v) => Math.abs(v - y) <= 2); return { y, i }; };
const settle = async () => { await p.waitForTimeout(SNAP + 450); return at(); };
console.log(`${W}x${H}: ${points.length} rest points, SNAP_MS ${SNAP}: ${points.join(' ')}`);
let fails = 0;
const expect = (label, r, want) => { const ok = r.i === want; if (!ok) fails++; console.log(`  ${label.padEnd(44)} -> point ${r.i} (y ${r.y}) ${ok ? 'ok' : `WANT ${want}`}`); };
if (!mobile) {
  await p.mouse.move(W / 2, H / 2);
  await p.mouse.wheel(0, 100); expect('one mouse tick', await settle(), 1);
  await p.mouse.wheel(0, 100); await p.mouse.wheel(0, 100); await p.mouse.wheel(0, 100); expect('three ticks within one lock window', await settle(), 2);
  // a trackpad flick: 40 decaying events 16ms apart
  await p.evaluate(async () => { const el = document.elementFromPoint(innerWidth / 2, innerHeight / 2); for (let k = 0; k < 40; k++) { el.dispatchEvent(new WheelEvent('wheel', { deltaY: Math.max(2, 70 * Math.exp(-k / 9)), bubbles: true, cancelable: true })); await new Promise((r) => setTimeout(r, 16)); } });
  expect('trackpad flick down (40 decaying events)', await settle(), 3);
  await p.evaluate(async () => { const el = document.elementFromPoint(innerWidth / 2, innerHeight / 2); for (let k = 0; k < 40; k++) { el.dispatchEvent(new WheelEvent('wheel', { deltaY: -Math.max(2, 70 * Math.exp(-k / 9)), bubbles: true, cancelable: true })); await new Promise((r) => setTimeout(r, 16)); } });
  expect('trackpad flick up', await settle(), 2);
  await p.keyboard.press('PageDown'); expect('PageDown', await settle(), 3);
  await p.keyboard.press('ArrowDown'); expect('ArrowDown', await settle(), 4);
  await p.keyboard.press('Space'); expect('Space', await settle(), 5);
  await p.keyboard.press('PageUp'); expect('PageUp', await settle(), 4);
  await p.keyboard.press('ArrowUp'); expect('ArrowUp', await settle(), 3);
  await p.keyboard.press('End'); await p.waitForTimeout(500);
  { const [y, m] = await p.evaluate(() => [Math.round(scrollY), document.documentElement.scrollHeight - innerHeight]), ok = y >= m - 1; if (!ok) fails++; console.log(`  ${'End goes to the end of the page'.padEnd(44)} -> y ${y} of ${m} ${ok ? 'ok' : 'FAIL'}`); }
  await p.keyboard.press('Home'); expect('Home', await settle(), 0);
  // mid-animation second tick does not double-step
  await p.mouse.wheel(0, 100); await p.waitForTimeout(SNAP * 0.4); await p.mouse.wheel(0, 100); expect('tick during a settle (queued, then played)', await settle(), 2);
  // nav link still jumps anywhere
  await p.click('.nav__link[data-jump="why"]'); await p.waitForTimeout(600);
  console.log('  nav link -> stage', await p.evaluate(() => document.documentElement.dataset.stage), 'at y', await p.evaluate(() => Math.round(scrollY)));
} else {
  // phones have no snap: a swipe moves the page as far as the finger took it, and it stays there
  const cdp = await ctx.newCDPSession(p);
  const swipe = async (dir) => {
    const x = W / 2, y0 = dir > 0 ? H * 0.7 : H * 0.3, y1 = dir > 0 ? H * 0.3 : H * 0.7;
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y: y0 }] });
    for (let k = 1; k <= 8; k++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y0 + ((y1 - y0) * k) / 8 }] }); await p.waitForTimeout(16); }
    await p.waitForTimeout(120); await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  };
  const y0 = await p.evaluate(() => scrollY); await swipe(1); await p.waitForTimeout(1200);
  const y1 = await p.evaluate(() => scrollY); await p.waitForTimeout(900); const y2 = await p.evaluate(() => scrollY);
  const moved = y1 > y0 + 150, stayed = Math.abs(y2 - y1) < 1;
  if (!moved || !stayed) fails++;
  console.log(`  a swipe scrolls natively and the page stays put: moved ${Math.round(y1 - y0)}, then ${Math.round(y2 - y1)} ${moved && stayed ? 'ok' : 'FAIL'}`);
}
console.log(fails ? `FAILURES: ${fails}` : 'all snap checks passed');
await b.close();
