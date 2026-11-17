// The snapping contract. With a mouse or trackpad at any window size, and on touch tablets, every stage is a rest point
// from the first to the end of the page, and one gesture moves exactly one rest point: a mouse tick, three ticks in one
// burst, a trackpad flick (40 decaying events), PageDown/PageUp, Space/Shift+Space, the arrows, a finger swipe. End and
// Home go to the ends, a nav link lands on its stage, and a second tick during a settle is queued, not dropped.
// Phones (a coarse pointer under 768px wide) do not snap: the browser scrolls.
//   node lab/snap-test.mjs                      wide window, mouse and keys (1440x900)
//   node lab/snap-test.mjs --w 1280 --h 577     any window size
//   node lab/snap-test.mjs --tablet             768x1024 touch: the stacked layout, snapping, finger swipes
//   node lab/snap-test.mjs --mobile             390x844 phone: no snap
//   SITE_URL=http://localhost:4520/ by default
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2), arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const mobile = argv.includes('--mobile'), tablet = argv.includes('--tablet'), touch = mobile || tablet;
const W = +arg('--w', mobile ? 390 : tablet ? 768 : 1440), H = +arg('--h', mobile ? 844 : tablet ? 1024 : 900);
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: touch, hasTouch: touch });
const p = await ctx.newPage();
await p.goto(process.env.SITE_URL || 'http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('sf-ready') && (document.documentElement.classList.contains('gl-live') || document.documentElement.classList.contains('gl-off')), null, { timeout: 60000 });
await p.waitForTimeout(1200);
const info = await p.evaluate(() => ({ on: window.__sf.snapOn(), points: window.__sf.snap.points, tops: window.__sf.tops, maxY: document.documentElement.scrollHeight - innerHeight, stages: [...document.querySelectorAll('[data-product]')].map((s) => s.dataset.product) }));
const P = info.points, last = P.length - 1;
let fails = 0;
const ok = (label, pass, detail = '') => { if (!pass) fails++; console.log(`  ${label.padEnd(64)} ${pass ? 'ok' : 'FAIL'} ${detail}`); };
const idle = async () => { let y0 = -1, still = 0; for (let k = 0; k < 120; k++) { await p.waitForTimeout(50); const [y, an] = await p.evaluate(() => [Math.round(scrollY), window.__sf.snap.animating]); if (!an && y === y0) { if (++still >= 5) return y; } else still = 0; y0 = y; } return y0; };
const at = (y) => P.findIndex((q) => Math.abs(q - y) <= 2);
const jump = async (i) => { await p.evaluate((y) => { document.activeElement && document.activeElement.blur(); window.__sf.snap.jump(y); dispatchEvent(new Event('scroll')); }, P[i]); await p.waitForTimeout(700); };
const cdp = await ctx.newCDPSession(p);
const swipe = async (dir) => { const x = W / 2, y0 = dir > 0 ? H * 0.7 : H * 0.35, y1 = dir > 0 ? H * 0.35 : H * 0.7; await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y: y0 }] }); for (let k = 1; k <= 8; k++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x, y: y0 + ((y1 - y0) * k) / 8 }] }); await p.waitForTimeout(16); } await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }); };
console.log(`${W}x${H}${touch ? ' touch' : ''}: snap ${info.on ? 'on' : 'off'}, ${info.stages.length} stages, ${P.length} rest points: ${P.join(' ')} (page end ${info.maxY})`);

if (mobile) {
  ok('phones do not snap', !info.on);
  const y0 = await p.evaluate(() => scrollY); await swipe(1); await p.waitForTimeout(1500);
  const y1 = await p.evaluate(() => scrollY); await p.waitForTimeout(900); const y2 = await p.evaluate(() => scrollY);
  ok('a swipe scrolls natively and the page stays where it stopped', y1 > y0 + 100 && Math.abs(y2 - y1) < 1, `moved ${Math.round(y1 - y0)}, then ${Math.round(y2 - y1)}`);
} else {
  ok('snapping is on', info.on);
  const tops = info.tops.map((t) => Math.min(t, info.maxY)), missing = info.stages.filter((_, i) => !P.some((q) => Math.abs(q - tops[i]) < 40));
  ok('every stage top is a rest point', !missing.length, missing.join(','));
  ok('the end of the page is the last rest point', P[last] === info.maxY);
  const flick = (dir) => p.evaluate(async (d) => { const el = document.elementFromPoint(innerWidth / 2, innerHeight * 0.4) || document.body; for (let k = 0; k < 40; k++) { el.dispatchEvent(new WheelEvent('wheel', { deltaY: d * Math.max(2, 70 * Math.exp(-k / 9)), bubbles: true, cancelable: true })); await new Promise((r) => setTimeout(r, 16)); } }, dir);
  const inputs = {
    'mouse tick': async (d) => { await p.mouse.move(W / 2, H * 0.4); await p.mouse.wheel(0, 100 * d); },
    'three ticks in one burst': async (d) => { await p.mouse.move(W / 2, H * 0.4); for (let k = 0; k < 3; k++) await p.mouse.wheel(0, 100 * d); },
    'trackpad flick': flick,
    'PageDown / PageUp': (d) => p.keyboard.press(d > 0 ? 'PageDown' : 'PageUp'),
    'Space / Shift+Space': (d) => p.keyboard.press(d > 0 ? 'Space' : 'Shift+Space'),
    'ArrowDown / ArrowUp': (d) => p.keyboard.press(d > 0 ? 'ArrowDown' : 'ArrowUp'),
    ...(touch ? { 'finger swipe': swipe } : {}),
  };
  for (const [name, act] of Object.entries(inputs)) {
    const bad = [];
    for (const dir of [1, -1]) {
      await jump(dir > 0 ? 0 : last); let i = dir > 0 ? 0 : last;
      for (let n = 0; n < P.length + 3 && (dir > 0 ? i < last : i > 0); n++) { await act(dir); const y = await idle(), j = at(y); if (j !== i + dir) { bad.push(`${dir > 0 ? 'down' : 'up'} from #${i} -> y=${y}${j < 0 ? ' (not a rest point)' : ' = #' + j}`); if (j < 0) await jump(i + dir); } i = j < 0 ? i + dir : j; }
    }
    ok(`${name}: one rest point per gesture, top to footer and back`, !bad.length, bad.slice(0, 3).join(' | '));
  }
  await jump(0); await p.keyboard.press('End'); const ye = await idle(); await p.keyboard.press('Home'); const yh = await idle();
  ok('End goes to the end of the page, Home to the top', at(ye) === last && yh === 0, `End ${ye}, Home ${yh}`);
  // a second tick during a settle is queued: two rest points, never three, never one
  await jump(0); await p.mouse.move(W / 2, H * 0.4); await p.mouse.wheel(0, 100); await p.waitForTimeout(250); await p.mouse.wheel(0, 100);
  ok('a tick during a settle is queued', at(await idle()) === 2);
  // an opposite tick during a settle goes back to where it came from
  await jump(2); await p.mouse.wheel(0, 100); await p.waitForTimeout(200); await p.mouse.wheel(0, -100);
  ok('an opposite tick during a settle reverses it', at(await idle()) === 2);
  if (W > 1240) { await p.click('.nav__link[data-jump="why"]'); await p.waitForTimeout(700); const [st, y] = await p.evaluate(() => [document.documentElement.dataset.stage, Math.round(scrollY)]); ok('a nav link lands on its stage, at rest', st === 'why' && at(y) >= 0, `${st} at ${y}`); }
}
console.log(fails ? `FAILURES: ${fails}` : 'all snap checks passed');
await b.close(); process.exitCode = fails ? 1 : 0;
