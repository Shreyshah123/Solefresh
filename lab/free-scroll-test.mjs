// Past the pilot stage the page is the browser's own. From the pilot stage to the footer and back with a mouse wheel, a
// trackpad stream with momentum, the keyboard and (--mobile) touch: every wheel event left alone, the page moving by what
// was asked, no settle afterwards, the footer reached every time, FAQ items opened and closed along the way, the 6>7 and
// 7>8 transitions following the scroll, and the way back into the snapped stages seamless.
//   node lab/free-scroll-test.mjs [--mobile] [--w 1440 --h 900]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const MOBILE = process.argv.includes('--mobile'), W = +arg('--w', MOBILE ? 390 : 1440), H = +arg('--h', MOBILE ? 844 : 900);
let bad = 0; const check = (ok, msg) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${msg}`); if (!ok) bad++; };
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: MOBILE, hasTouch: MOBILE });
const p = await ctx.newPage(); const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await p.waitForTimeout(1000);
const cdp = await ctx.newCDPSession(p);

await p.evaluate(() => { window.__w = { n: 0, stopped: 0 }; addEventListener('wheel', (e) => { const w = window.__w; w.n++; queueMicrotask(() => { if (e.defaultPrevented) w.stopped++; }); }, { passive: true }); });
const info = () => p.evaluate(() => { const d = document.documentElement; return { y: Math.round(scrollY), end: window.__sf.snap.end, max: d.scrollHeight - innerHeight, stage: d.dataset.stage, foot: Math.round(document.querySelector('.footer').getBoundingClientRect().bottom - innerHeight) }; });
const toBulkEnd = async () => { await p.evaluate(() => window.__sf.snap.jump(window.__sf.snap.end)); await p.waitForTimeout(700); };
const stats = () => p.evaluate(() => { const w = window.__w, r = { ...w }; w.n = 0; w.stopped = 0; return r; });

if (MOBILE) {
  // a real finger on the page: dy < 0 moves the finger up, which scrolls down
  const swipe = async (dy) => {
    const y0 = dy < 0 ? H - 120 : 120, x = 12, steps = 8;
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y: y0 }] });
    for (let k = 1; k <= steps; k++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y0 + (dy * k) / steps }] }); await p.waitForTimeout(12); }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  };
  await p.evaluate(() => window.scrollTo(0, window.__sf.tops[5])); await p.waitForTimeout(500);
  let n = 0, i = await info();
  while (i.y < i.max - 1 && n < 60) { await swipe(-650); await p.waitForTimeout(60); i = await info(); n++; }
  check(i.y >= i.max - 1, `touch: pilot stage to the footer in ${n} swipes (y ${i.y} of ${i.max})`);
  check(i.foot <= 1, `the footer is fully on screen (${i.foot}px past the bottom)`);
  const h0 = i.max; await p.evaluate(() => { const d = document.querySelectorAll('.faq__item'); d[1].open = true; }); await p.waitForTimeout(300);
  await p.evaluate(() => document.querySelector('#faq').scrollIntoView()); await p.waitForTimeout(300);
  for (const k of [2, 4, 6]) { await p.evaluate((q) => { document.querySelectorAll('.faq__item summary')[q].click(); }, k); await p.waitForTimeout(120); await swipe(-140); await p.waitForTimeout(120); }
  n = 0; i = await info(); while (i.y < i.max - 1 && n < 40) { await swipe(-650); await p.waitForTimeout(60); i = await info(); n++; }
  check(i.y >= i.max - 1, `with FAQ items opened mid-scroll, the footer is still reached (y ${i.y} of ${i.max}, page ${i.max - h0}px longer)`);
  n = 0; while (i.y > 2 && n < 80) { await swipe(650); await p.waitForTimeout(40); i = await info(); n++; }
  check(i.y <= 2, `and back to the top in ${n} swipes`);
} else {
  // ------------------------------------------------------------------ mouse
  await toBulkEnd(); await p.mouse.move(W / 2, H / 2); await stats();
  let i0 = await info(), n = 0, i = i0;
  const first = await (async () => { await p.mouse.wheel(0, 100); await p.waitForTimeout(250); return info(); })();
  check(first.y - i0.y >= 95 && first.y - i0.y <= 105, `one mouse notch from the last rest moves the page by the notch (${first.y - i0.y}px)`);
  const t0 = Date.now();
  while (i.y < i.max - 1 && n < 200) { await p.mouse.wheel(0, 100); await p.waitForTimeout(16); i = await info(); n++; }
  const ms = Date.now() - t0;
  await p.waitForTimeout(500); const rest = await info();
  let w = await stats();
  check(i.y >= i.max - 1, `mouse: reaches the end in ${n} notches, ${ms} ms (y ${i.y} of ${i.max})`);
  check(!w.stopped, `no wheel event intercepted (${w.n} events)`);
  check(rest.y === i.y && rest.foot <= 1, `stays at the footer: no settle (${rest.y})`);
  // stop anywhere: it stays there
  for (const f of [0.15, 0.4, 0.62, 0.85]) {
    const y = Math.round(i0.y + (i.max - i0.y) * f);
    await p.evaluate((q) => scrollTo(0, q), y); await p.waitForTimeout(650);
    const a = await info(); check(Math.abs(a.y - y) <= 1, `left at ${y}, it stays there (${a.y})`);
  }
  // ---------------------------------------------------------------- trackpad
  await toBulkEnd(); await p.mouse.move(W / 2, H / 2); await stats();
  const flick = async (dir) => { for (let k = 0; k < 42; k++) { await p.mouse.wheel(0, dir * Math.max(1, 60 * Math.exp(-k / 11))); await p.waitForTimeout(8); } };
  n = 0; i = await info(); while (i.y < i.max - 1 && n < 60) { await flick(1); await p.waitForTimeout(40); i = await info(); n++; }
  w = await stats();
  check(i.y >= i.max - 1, `trackpad: reaches the end in ${n} flicks (y ${i.y} of ${i.max})`);
  check(!w.stopped, `no wheel event intercepted (${w.n} events)`);
  // FAQ open and close mid-scroll, then the end again
  await p.evaluate(() => document.querySelector('#faq').scrollIntoView()); await p.waitForTimeout(300);
  const h0 = (await info()).max;
  for (const k of [0, 3, 5, 7]) { await p.evaluate((q) => document.querySelectorAll('.faq__item summary')[q].click(), k); await p.waitForTimeout(60); await p.mouse.wheel(0, 90); await p.waitForTimeout(160); }
  const hOpen = (await info()).max;
  n = 0; i = await info(); while (i.y < i.max - 1 && n < 60) { await flick(1); await p.waitForTimeout(40); i = await info(); n++; }
  check(i.y >= i.max - 1 && hOpen !== h0, `FAQ items opened mid-scroll: the footer is reached (page height ${h0} to ${hOpen})`);
  await p.evaluate(() => { const o = document.querySelector('.faq__item[open] summary'); if (o) o.click(); }); await p.waitForTimeout(300);
  i = await info();
  const cur = await p.evaluate(() => ({ tops: window.__sf.tops, sh: document.documentElement.scrollHeight }));
  const real = await p.evaluate(() => { const e = document.querySelector('[data-product="close"]'); let y = 0; for (let n = e; n; n = n.offsetParent) y += n.offsetTop; return y - document.querySelector('.nav').getBoundingClientRect().height; });
  check(Math.abs(cur.tops[8] - real) <= 1, `stage positions are recomputed after an FAQ item closes (${cur.tops[8]} against ${real})`);
  n = 0; i = await info(); while (i.y < i.max - 1 && n < 60) { await flick(1); await p.waitForTimeout(40); i = await info(); n++; }
  check(i.y >= i.max - 1, 'and the footer is still reached after it closes');
  // back up with the trackpad, into the snapped stages
  n = 0; i = await info(); while (i.y > i.end + 1 && n < 60) { await flick(-1); await p.waitForTimeout(40); i = await info(); n++; }
  await p.waitForTimeout(1300); i = await info();
  const pts = await p.evaluate(() => window.__sf.snap.points);
  check(i.y <= i.end + 1 && pts.some((q) => Math.abs(q - i.y) <= 2), `trackpad back up: meets the snap and comes to rest on a stage (y ${i.y})`);
  // ---------------------------------------------------------------- keyboard
  for (const [key, label] of [['PageDown', 'PageDown'], ['Space', 'Space'], ['ArrowDown', 'ArrowDown']]) {
    await toBulkEnd(); await p.evaluate(() => document.activeElement?.blur?.()); await p.mouse.click(8, H - 8);
    n = 0; i = await info(); while (i.y < i.max - 1 && n < (key === 'ArrowDown' ? 140 : 30)) { await p.keyboard.press(key); await p.waitForTimeout(key === 'ArrowDown' ? 20 : 120); i = await info(); n++; }
    check(i.y >= i.max - 1, `${label}: reaches the end in ${n} presses (y ${i.y} of ${i.max})`);
  }
  await toBulkEnd(); await p.keyboard.press('End'); await p.waitForTimeout(600); i = await info(); check(i.y >= i.max - 1, `End: goes to the end (y ${i.y})`);
  await p.keyboard.press('PageUp'); await p.waitForTimeout(500); const up = await info(); check(up.y < i.y - 100, `PageUp: moves up natively (y ${up.y})`);
  await p.keyboard.press('Home'); await p.waitForTimeout(1200); i = await info(); check(i.y === 0, `Home: back to the top (y ${i.y})`);
  // -------------------------------------------- the product follows the scroll
  const rows = await p.evaluate(async () => {
    const { tops, snap } = window.__sf, w = window.__sf.world, out = [];
    for (let y = snap.end; y <= tops[7]; y += 40) { scrollTo(0, y); await new Promise((z) => setTimeout(z, 34)); out.push(`${w.travel.from}>${w.travel.to}`); }
    return [...new Set(out)];
  });
  check(rows.includes('bulk>why') && rows.includes('why>story'), `6>7 and 7>8 play on the scroll position (${rows.join(', ')})`);
  // the snapped stages still snap
  await p.evaluate(() => window.__sf.snap.jump(window.__sf.tops[1])); await p.waitForTimeout(700);
  await p.mouse.wheel(0, 100); await p.waitForTimeout(1050);
  const sn = await p.evaluate(() => ({ y: Math.round(scrollY), t: window.__sf.tops[2] }));
  check(Math.abs(sn.y - sn.t) <= 2, `the stages up to the pilot still snap (y ${sn.y}, stage ${sn.t})`);
}
check(!errs.length, `no page errors${errs.length ? `: ${errs[0]}` : ''}`);
await b.close();
console.log(bad ? `${bad} FAILED` : 'all free-scroll checks passed');
process.exitCode = bad ? 1 : 0;
