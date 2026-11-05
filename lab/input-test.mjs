// Input contract: scroll input is queued, never dropped. Replays realistic,
// timed event streams in-page and checks where the page comes to rest.
//   node lab/input-test.mjs [--mobile]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
if (process.argv.includes('--mobile')) { console.log('phones scroll natively: nothing to queue (see anchor-test --mobile)'); process.exit(0); }
const MOBILE = false, W = 1440, H = 900;
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: MOBILE, hasTouch: MOBILE });
const p = await ctx.newPage();
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(1200);
const { SNAP, GAP, points } = await p.evaluate(() => ({ SNAP: window.__sf.SNAP_MS, GAP: window.__sf.GESTURE_GAP_MS, points: window.__sf.snap.points }));
console.log(`${W}x${H}  SNAP_MS ${SNAP}  GESTURE_GAP_MS ${GAP}  ${points.length} rest points`);

// In-page helpers: a timed wheel stream, and a recorder of scroll extremes.
await p.addInitScript(() => {});
await p.evaluate(() => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const target = () => document.elementFromPoint(innerWidth / 2, innerHeight / 2) || document.body;
  window.__stream = async (events) => { for (const [delay, dy] of events) { if (delay) await sleep(delay); target().dispatchEvent(new WheelEvent('wheel', { deltaY: dy, deltaMode: 0, bubbles: true, cancelable: true })); } };
  window.__rec = { min: 0, max: 0 }; addEventListener('scroll', () => { window.__rec.min = Math.min(window.__rec.min, scrollY); window.__rec.max = Math.max(window.__rec.max, scrollY); }, { passive: true });
});
const rnd = (() => { let s = 7; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); })();
// Trackpad swipe: noisy contact phase then exponential momentum (Windows precision touchpad style), ~120 Hz.
const swipe = (sign, { contact = [5, 14, 9, 26, 18, 38, 27, 44, 36], v0 = 40, decay = 0.93, step = 8, until = 0.8 } = {}) => {
  const ev = contact.map((d) => [step, sign * d]);
  for (let v = v0; v > until; v *= decay) ev.push([step, sign * Math.max(1, v * (0.9 + rnd() * 0.2))]);
  return ev;
};
const notch = (sign, delay = 0) => [[delay, sign * 100]];
const burst = (sign, n = 3, every = 30) => Array.from({ length: n }, (_, i) => [i ? every : 0, sign * 100]);
const at = async () => { const y = await p.evaluate(() => Math.round(scrollY)); let i = 0; for (let k = 1; k < points.length; k++) if (Math.abs(points[k] - y) < Math.abs(points[i] - y)) i = k; return { y, i }; };
const idle = async () => { for (let k = 0; k < 120; k++) { await p.waitForTimeout(60); if (await p.evaluate(() => !window.__sf.snap.animating && !window.__sf.snap.queued)) break; } await p.waitForTimeout(250); };
const home = async (i) => { await p.evaluate((y) => { window.__sf.snap.jump(y); window.__rec = { min: y, max: y }; }, points[i]); await p.waitForTimeout(400); };
let fails = 0;
const report = (label, start, r, want, extra = '') => { const ok = r.i === start + want; if (!ok) fails++; console.log(`  ${label.padEnd(62)} ${want >= 0 ? '+' : ''}${r.i - start} stage(s)  ${ok ? 'ok' : `WANT ${want >= 0 ? '+' : ''}${want}`}${extra}`); };
const run = async (label, start, want, events, { pauseBefore = 0 } = {}) => { await home(start); if (pauseBefore) await p.waitForTimeout(pauseBefore); await p.evaluate((ev) => window.__stream(ev), events); await idle(); report(label, start, await at(), want); };

{
  console.log('mouse wheel');
  await run('one notch', 2, 1, notch(1));
  await run('one quick spin (3 notches, 30ms apart)', 2, 1, burst(1, 3, 30));
  await run('one fast spin (6 notches, 20ms apart)', 2, 1, burst(1, 6, 20));
  await run('two spins 250ms apart (second lands mid-transition)', 2, 2, [...burst(1), ...burst(1).map(([d, v], k) => [k ? d : 250, v])]);
  await run('two single notches 150ms apart', 2, 2, [...notch(1), ...notch(1, 150)]);
  await run('second notch just after the settle ends (700ms)', 2, 2, [...notch(1), ...notch(1, 700)]);
  await run('three spins inside one transition (cap: one queued)', 2, 2, [...burst(1), ...burst(1).map(([d, v], k) => [k ? d : 150, v]), ...burst(1).map(([d, v], k) => [k ? d : 150, v])]);
  await run('two spins up', 5, -2, [...burst(-1), ...burst(-1).map(([d, v], k) => [k ? d : 250, v])]);

  console.log('trackpad');
  await run('one swipe (noisy contact + momentum)', 2, 1, swipe(1));
  await run('one long flick (momentum ~1.6s, outlasts the settle)', 2, 1, swipe(1, { v0: 70, decay: 0.965 }));
  for (const after of [180, 300, 450]) {
    const a = swipe(1), cut = Math.round(after / 8), second = swipe(1);
    await run(`two quick swipes, second ${after}ms in, rising out of momentum`, 2, 2, [...a.slice(0, cut), ...second]);
  }
  for (let k = 0; k < 5; k++) { const a = swipe(1), cut = 25 + Math.floor(rnd() * 25); await run(`two quick swipes, trial ${k + 1} (cut at ${cut * 8}ms)`, 2, 2, [...a.slice(0, cut), ...swipe(1)]); }
  await run('two swipes with momentum fully ended between', 2, 2, [...swipe(1), [300, 0.0001], ...swipe(1)]);
  await run('gentle single swipe (small deltas)', 2, 1, swipe(1, { contact: [3, 6, 5, 9, 8, 12], v0: 12, decay: 0.92 }));

  console.log('reversal during a transition');
  {
    await home(3); await p.evaluate((ev) => window.__stream(ev), [...burst(1), ...notch(-1, 250)]); await idle();
    const r = await at(), rec = await p.evaluate(() => window.__rec);
    report('down, then up 250ms later', 3, r, 0, `  (went to y ${rec.max}, back to ${r.y})`);
  }
  {
    await home(3); const a = swipe(1); await p.evaluate((ev) => window.__stream(ev), [...a.slice(0, 30), ...swipe(-1)]); await idle();
    const r = await at(); report('trackpad down, then swipe up inside its momentum', 3, r, 0);
  }
  {
    await home(3); await p.evaluate((ev) => window.__stream(ev), [...burst(1), ...notch(-1, 200), ...notch(1, 200)]); await idle();
    report('down, up, down again (each mid-transition)', 3, await at(), 1);
  }

  console.log('keyboard');
  const keys = async (label, start, want, seq) => { await home(start); for (const [d, k] of seq) { if (d) await p.waitForTimeout(d); await p.keyboard.press(k); } await idle(); report(label, start, await at(), want); };
  await keys('PageDown twice, 120ms apart', 2, 2, [[0, 'PageDown'], [120, 'PageDown']]);
  await keys('ArrowDown twice, 60ms apart', 2, 2, [[0, 'ArrowDown'], [60, 'ArrowDown']]);
  await keys('Space then Space', 2, 2, [[0, ' '], [200, ' ']]);
  await keys('PageDown x3 quickly (cap: one queued)', 2, 2, [[0, 'PageDown'], [80, 'PageDown'], [80, 'PageDown']]);
  await keys('PageDown then PageUp 150ms later (reverses)', 3, 0, [[0, 'PageDown'], [150, 'PageUp']]);
}
console.log(fails ? `FAILURES: ${fails}` : 'all input checks passed');
await b.close();
