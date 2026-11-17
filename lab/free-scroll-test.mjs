// The late stages (pilot, comparison, story, FAQ, close and the footer) used to scroll freely. They snap now, like the
// first five, and this file checks the things that used to go wrong there. The file name is kept so old commands still run.
//   - each of those stages fits its one view, and at rest its controls are on screen (the submit button, the footer)
//   - from the pilot to the footer and back, every gesture lands on a stage (mouse, trackpad flick, keys)
//   - a form error does not switch snapping off, and neither does focus in a field
//   - the result of a failed submission is on screen, above the button
//   - a wheel over a long message scrolls the message, not the page
//   - opening an FAQ answer keeps the page at rest on the FAQ
//   - a stalled main thread does not turn one flick into two stages
//   - Tab into the pilot form brings the pilot stage to rest
//   node lab/free-scroll-test.mjs [--w 1366 --h 768]        SITE_URL=http://localhost:4520/ by default
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2), arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900);
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: W, height: H } });
const p = await ctx.newPage();
await p.route('**/api/**', (r) => r.fulfill({ status: 503, contentType: 'application/json', body: JSON.stringify({ ok: false, code: 'not_connected' }) }));
await p.goto(process.env.SITE_URL || 'http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('sf-ready') && (document.documentElement.classList.contains('gl-live') || document.documentElement.classList.contains('gl-off')), null, { timeout: 60000 });
await p.waitForTimeout(1200);
let fails = 0;
const ok = (label, pass, detail = '') => { if (!pass) fails++; console.log(`  ${label.padEnd(66)} ${pass ? 'ok' : 'FAIL'} ${detail}`); };
const S = () => p.evaluate(() => ({ points: window.__sf.snap.points, tops: window.__sf.tops, stages: [...document.querySelectorAll('[data-product]')].map((s) => s.dataset.product), maxY: document.documentElement.scrollHeight - innerHeight, view: innerHeight - document.querySelector('.nav').offsetHeight }));
const idle = async () => { let y0 = -1, still = 0; for (let k = 0; k < 120; k++) { await p.waitForTimeout(50); const [y, an] = await p.evaluate(() => [Math.round(scrollY), window.__sf.snap.animating]); if (!an && y === y0) { if (++still >= 5) return y; } else still = 0; y0 = y; } return y0; };
const goStage = async (name) => { await p.evaluate((n) => { const s = window.__sf, i = [...document.querySelectorAll('[data-product]')].findIndex((x) => x.dataset.product === n); document.activeElement && document.activeElement.blur(); s.snap.jump(s.tops[i]); dispatchEvent(new Event('scroll')); }, name); await p.waitForTimeout(800); };
const stageNow = () => p.evaluate(() => document.documentElement.dataset.stage);
const info = await S(), late = ['bulk', 'why', 'story', 'faq', 'close'];
console.log(`${W}x${H}: ${info.points.length} rest points for ${info.stages.length} stages: ${info.points.join(' ')}`);

// each late stage fits its one view, and its own controls are on screen at rest
for (const st of late) {
  await goStage(st);
  const r = await p.evaluate((n) => { const el = document.querySelector(`[data-product="${n}"]`), nav = document.querySelector('.nav').getBoundingClientRect().bottom; const ctr = [...el.querySelectorAll('a[href], button, input:not([type=hidden]), select, textarea, summary')].filter((e) => { const r0 = e.getBoundingClientRect(), cs = getComputedStyle(e); return r0.width > 1 && cs.visibility !== 'hidden' && !e.closest('.hp'); }); return { h: el.offsetHeight, hidden: ctr.filter((e) => { const r0 = e.getBoundingClientRect(); return r0.bottom > innerHeight + 1 || r0.top < nav - 1; }).length, n: ctr.length }; }, st);
  ok(`${st}: fits its view, every control on screen at rest`, r.h > info.view + 40 || r.hidden === 0, `height ${r.h} in a view of ${info.view}; ${r.hidden}/${r.n} controls off screen`);
}
// pilot -> footer -> pilot, a stage per gesture
const flick = (dir) => p.evaluate(async (d) => { const el = document.elementFromPoint(innerWidth / 2, innerHeight * 0.4) || document.body; for (let k = 0; k < 40; k++) { el.dispatchEvent(new WheelEvent('wheel', { deltaY: d * Math.max(2, 70 * Math.exp(-k / 9)), bubbles: true, cancelable: true })); await new Promise((r) => setTimeout(r, 16)); } }, dir);
for (const [name, act] of [['mouse tick', async (d) => { await p.mouse.move(W / 2, H * 0.4); await p.mouse.wheel(0, 100 * d); }], ['trackpad flick', flick], ['PageDown / PageUp', (d) => p.keyboard.press(d > 0 ? 'PageDown' : 'PageUp')]]) {
  await goStage('bulk'); const seen = [await stageNow()], offRest = [];
  for (const dir of [1, -1]) for (let n = 0; n < 12; n++) { const y0 = Math.round(await p.evaluate(() => scrollY)); await act(dir); const y = await idle(); if (y === y0) break; const cur = await S(); if (!cur.points.some((q) => Math.abs(q - y) <= 2)) offRest.push(y); seen.push(await stageNow()); if (dir < 0 && seen.at(-1) === 'bulk') break; }
  const down = seen.slice(0, seen.indexOf('close') + 1).filter((s, i, a) => s !== a[i - 1]).join('>');
  ok(`${name}: pilot to footer and back, always at rest on a stage`, !offRest.length && down === late.join('>') && seen.at(-1) === 'bulk', `${down}${offRest.length ? ' off rest at ' + offRest.join(',') : ''}`);
}
// a form error does not switch snapping off
await goStage('bulk'); await p.click('[data-form="bulk"] button[type=submit]'); await p.waitForTimeout(400);
const errs = await p.evaluate(() => [...document.querySelectorAll('[data-form="bulk"] .field__err')].filter((e) => e.textContent).length);
await p.mouse.move(W / 2, H * 0.4); await p.mouse.wheel(0, -100); await idle();
ok('after a form error (focus in a field), a tick still steps one stage', (await stageNow()) === 'customize' && errs > 0, `${errs} error lines shown, now on ${await stageNow()}`);
// the result of a submission is on screen
await goStage('bulk'); await p.fill('#b-org', 'Test Lanes'); await p.selectOption('#b-type', 'Bowling center'); await p.fill('#b-name', 'Test'); await p.fill('#b-email', 'test@example.com'); await p.click('[data-form="bulk"] button[type=submit]'); await p.waitForTimeout(900);
const st = await p.evaluate(() => { const e = document.querySelector('[data-form="bulk"] .form__status'), r = e.getBoundingClientRect(); return { text: e.textContent.slice(0, 60), on: r.top >= document.querySelector('.nav').getBoundingClientRect().bottom && r.bottom <= innerHeight }; });
ok('a failed submission says so on screen, above the button', st.on && st.text.length > 10, JSON.stringify(st));
// a long message scrolls itself
await p.fill('#b-msg', Array(40).fill('line').join('\n')); await p.hover('#b-msg'); const y0 = await p.evaluate(() => scrollY); await p.mouse.wheel(0, 100); await p.waitForTimeout(500);
const m = await p.evaluate(() => ({ y: scrollY, ta: document.querySelector('#b-msg').scrollTop })); ok('a wheel over a long message scrolls the message, not the page', Math.abs(m.y - y0) < 2 && m.ta > 0, `page moved ${Math.round(m.y - y0)}, message scrolled ${m.ta}`);
// an FAQ answer opening keeps the page at rest on the FAQ
await goStage('faq'); await p.click('.faq__item:nth-of-type(7) summary'); await p.waitForTimeout(900); const yf = await idle(), cur = await S();
ok('opening an FAQ answer keeps the page at rest on the FAQ', (await stageNow()) === 'faq' && cur.points.some((q) => Math.abs(q - yf) <= 2));
// a stalled main thread: one flick is still one stage
const cdp = await ctx.newCDPSession(p); let doubles = 0;
for (let t = 0; t < 4; t++) {
  await goStage('explorer');
  await p.evaluate(() => setTimeout(() => { const t0 = performance.now(); while (performance.now() - t0 < 160); }, 250));
  const sends = []; for (let k = 0; k < 42; k++) { sends.push(cdp.send('Input.dispatchMouseEvent', { type: 'mouseWheel', x: W / 2, y: H / 2, deltaX: 0, deltaY: Math.max(1, 60 * Math.exp(-k / 11)) })); await new Promise((r) => setTimeout(r, 10)); }
  await Promise.all(sends); const y = await idle(); if (Math.round(y / info.view) > 1) doubles++;
}
ok('a 160ms stall during a flick: still one stage', doubles === 0, `${doubles}/4 flicks moved two stages`);
// Tab from the sizes into the form brings the pilot to rest
await goStage('customize'); await p.focus('.size[data-size="L"]'); for (let k = 0; k < 6 && (await p.evaluate(() => document.activeElement.id)) !== 'b-org'; k++) await p.keyboard.press('Tab');
const yt = await idle(), now = await S(); ok('Tab into the pilot form rests on the pilot stage', (await stageNow()) === 'bulk' && now.points.some((q) => Math.abs(q - yt) <= 2) && (await p.evaluate(() => document.activeElement.id)) === 'b-org', `stage ${await stageNow()}, y ${yt}`);
console.log(fails ? `FAILURES: ${fails}` : 'all late-stage checks passed');
await b.close(); process.exitCode = fails ? 1 : 0;
