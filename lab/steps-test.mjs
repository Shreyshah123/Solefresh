// Stage 3 consistency: for several click orders (including skips, replays
// and interrupts) the scene ends in the expected physical state, the insert
// goes in toe first and comes out heel first, the progress indicator runs, scrolling away
// mid-step and back resumes the step, and leaving resets the stage. Also
// checks the layer-by-layer open-up reverses. Wall crossings at every moment
// are covered by lab/wall-test.mjs.
//   node lab/steps-test.mjs [--reduced]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const REDUCED = process.argv.includes('--reduced');
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: REDUCED ? 'reduce' : 'no-preference' });
const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(1000);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; }); // harness drives exact positions
await p.click('.nav__link[data-jump="how"]'); await p.waitForTimeout(700);
const s3 = () => p.evaluate(() => {
  const w = window.__sf.world, s = w.s3, P = s.P, H = w.st3.HOVER, S = w.st3.SEAT;
  const r = (v, n = 3) => +v.toFixed(n);
  return { at: Math.hypot(P.cx - H.cx, P.cy - H.cy) < 0.01 ? 'hover' : Math.hypot(P.cx - S.cx, P.cy - S.cy) < 0.02 ? 'inside' : 'between', cx: r(P.cx), cy: r(P.cy), roll: r(P.roll, 2), vis: r(P.vis, 2), shoe: r(P.aRel, 2), glow: r(P.glow, 2), loop: !!s.loop, playing: !!s.tl, frozen: !!s.frozen, step: window.__sf.state.step, bar: +(getComputedStyle(document.querySelector(`#step-${window.__sf.state.step}`)).getPropertyValue('--p') || 0) };
});
let fails = 0;
const check = (label, ok, extra = '') => { if (!ok) fails++; console.log(`  ${label.padEnd(66)} ${ok ? 'ok' : 'FAIL'}${extra ? '  ' + extra : ''}`); };
const click = (i) => p.click(`#step-${i}`);
let r = await s3(); console.log('arrival:', JSON.stringify(r));
check('arrives hovering, shoe opaque, nothing playing', r.at === 'hover' && r.shoe > 0.99 && !r.playing && r.step === 0);
// Step 2, sampled: through the collar it is tilted toe down (roll +), so the toe end leads it in
await click(1);
const samples = [];
for (let k = 0; k < 40; k++) { samples.push(await s3()); await p.waitForTimeout(35); }
const passing = samples.filter((s) => s.cy > 0.42 && s.cy < 0.75);
check('Step 2: toe end first, tilted down through the collar', REDUCED || (passing.length > 0 && passing.every((s) => s.roll > 0.5)), `${passing.length} samples at the rim, roll ${passing.map((s) => s.roll).join(' ')}`);
check('Step 2: progress indicator ran', REDUCED || samples.some((s) => s.playing && s.bar > 0 && s.bar < 1));
await p.waitForTimeout(1200);
r = await s3(); check('Step 2 ends inside, shoe see-through', r.at === 'inside' && r.shoe < 0.7 && !r.playing, JSON.stringify(r));
await click(2); await p.waitForTimeout(2900); r = await s3();
check('Step 3: a soft glow, working (loop on, no bar), product still inside', r.at === 'inside' && r.glow >= 0.3 && (REDUCED || r.loop) && r.bar === 0, JSON.stringify(r));
await click(3);
const out = []; for (let k = 0; k < 40; k++) { out.push(await s3()); await p.waitForTimeout(35); }
await p.waitForTimeout(400); r = await s3();
const rising = out.filter((s) => s.cy > 0.42 && s.cy < 0.75);
check('Step 4: heel end first, tilted up as it leaves the collar', REDUCED || (rising.length > 0 && rising.every((s) => s.roll > 0.5) && rising[rising.length - 1].cy >= rising[0].cy), `${rising.length} samples at the rim, roll ${rising.map((s) => s.roll).join(' ')}`);
check('Step 4 ends hovering, glow off, shoe opaque', r.at === 'hover' && r.glow < 0.05 && r.shoe > 0.99 && !r.loop, JSON.stringify(r));
// skip ahead from hovering straight to Step 4: a quick swap puts it inside first
await click(3); await p.waitForTimeout(120); const early = await s3(); await p.waitForTimeout(1800); r = await s3();
check('Skip to Step 4 from hovering: swaps inside first, ends hovering', (REDUCED || early.vis < 0.9 || early.at === 'inside') && r.at === 'hover', JSON.stringify(early));
await click(2); await p.waitForTimeout(3000); r = await s3();
check('Skip to Step 3 from hovering: product inside and glowing', r.at === 'inside' && r.glow >= 0.3);
await click(0); await p.waitForTimeout(1700); r = await s3();
check('Step 1 from inside: product hovering, no glow, shoe opaque', r.at === 'hover' && r.glow < 0.05 && r.shoe > 0.99);
await click(1); await p.waitForTimeout(600); await click(3); await p.waitForTimeout(2000); r = await s3();
check('Interrupt Step 2 with Step 4: clean end state (hovering)', r.at === 'hover' && !r.playing);
await click(0); await p.waitForTimeout(150); const rp = await s3(); check('Replaying the active step runs again', REDUCED || rp.playing);
await p.waitForTimeout(1500);
// scroll away mid-step and back: the scene freezes, the product leaves along its exit, and the step resumes on return
if (!REDUCED) {
  await click(1); await p.waitForTimeout(500);
  const before = await s3();
  const [top, top3] = await p.evaluate(() => [window.__sf.tops[2], window.__sf.tops[3]]);
  await p.evaluate((y) => window.__sf.snap.jump(y), top3 - Math.round(900 * 0.75 * 0.85)); await p.waitForTimeout(300); // 15% into the travel to Inside
  const away = await s3();
  await p.evaluate((y) => window.__sf.snap.jump(y), top); await p.waitForTimeout(150);
  const back = await s3(); await p.waitForTimeout(1600); const done = await s3();
  check('Scroll away mid-step: frozen while away, resumes and finishes on return', away.frozen && !back.frozen && done.at === 'inside' && !done.playing, `before ${before.cy} away frozen=${away.frozen} done ${done.at}`);
}
// a frame stamped a little before the click (it happens with real input) must not break the step clock
{
  const nan = await p.evaluate(() => {
    const w = window.__sf.world; w.playStep(0); w.frame(performance.now() - 4); w.frame(performance.now());
    const m = w.slot.parts[0].mats[0].m, P = w.s3.P;
    return [w.slot.cur.highlight, m.emissive.r, m.emissiveIntensity, P.cx, P.cy, P.vis, P.glow].some((v) => !Number.isFinite(v));
  });
  check('A frame stamped before the click leaves everything finite (no black product)', !nan);
  await p.waitForTimeout(1700);
}
// keyboard: Space on a focused step presses it (the page stays on Stage 3)
{
  await p.focus('#step-1'); await p.keyboard.press(' '); await p.waitForTimeout(250);
  const k = await p.evaluate(() => ({ stage: window.__sf.state.stage, step: window.__sf.state.step, playing: !!window.__sf.world.s3.tl || window.__sf.world.s3.still !== null }));
  check('Space on a focused step plays it and does not scroll the page', k.stage === 'how' && k.step === 1 && k.playing, JSON.stringify(k));
  await p.waitForTimeout(1700);
}
if (!REDUCED) {
  // a nav click while the product is already climbing out carries the exit on; it never drops back into the shoe
  const top3 = await p.evaluate(() => window.__sf.tops[3]);
  await p.evaluate((y) => window.__sf.snap.jump(y), top3 - Math.round(900 * 0.75 * (1 - 0.5))); await p.waitForTimeout(120);
  const mid = await p.evaluate(() => ({ e: window.__sf.world.s3.exitE, cy: window.__sf.world.s3.frozen ? window.__sf.world._P3.cy : -1 }));
  const ys = await p.evaluate(async () => { document.querySelector('.nav__link[data-jump="customize"]').click(); const out = []; for (let k = 0; k < 6; k++) { await new Promise((r) => requestAnimationFrame(r)); out.push(window.__sf.world.s3.frozen ? window.__sf.world.s3.exitE : 1); } return out; });
  check('A nav click mid-exit carries the exit on (never back to the start)', mid.e > 0.3 && ys.every((e) => e >= mid.e - 1e-6), `exit ${mid.e.toFixed(2)} then ${ys.map((e) => e.toFixed(2)).join(' ')}`);
  await p.waitForTimeout(800);
  // after a nav jump away from Stage 3, scrolling back toward it is an arrival, not a departure
  await p.click('.nav__link[data-jump="how"]'); await p.waitForTimeout(700);
  await p.click('.nav__link[data-jump="inside"]'); await p.waitForTimeout(700);
  const t3 = await p.evaluate(() => window.__sf.tops[3]);
  await p.evaluate((y) => window.__sf.snap.jump(y), t3 - Math.round(900 * 0.75 * 0.1)); await p.waitForTimeout(150);
  const arr = await p.evaluate(() => ({ leaving: !!(window.__sf.world.s3.frozen && window.__sf.world.s3.frozen.leaving), explode: +window.__sf.world.S.explode.toFixed(2) }));
  check('Scrolling back up after a nav jump away is an arrival (no departure pacing)', !arr.leaving && arr.explode > 0.5, JSON.stringify(arr));
  await p.click('.nav__link[data-jump="how"]'); await p.waitForTimeout(700);
}
if (!REDUCED) {
  // a long spell with no input: Step 3's loop calms and the frame loop rests on a still; the next input wakes it
  await click(2); await p.waitForTimeout(3100);
  await p.evaluate(() => { const w = window.__sf.world; w.loopIdle = 0.6; w.loopCalm = 0.6; });
  await p.waitForTimeout(2600);
  const look = () => p.evaluate(() => { const w = window.__sf.world; return { running: w.running, amp: w.s3.loop ? +w.s3.loop.amp.toFixed(3) : null }; });
  const calm = await look();
  await p.mouse.move(600, 420); await p.mouse.move(640, 430); await p.waitForTimeout(250);
  const woke = await look();
  await p.evaluate(() => { const w = window.__sf.world; w.loopIdle = 30; w.loopCalm = 8; });
  check('Idle on Step 3: the loop calms and rendering rests; the next input wakes it', calm.running === false && calm.amp === 0 && woke.running && woke.amp > 0 && woke.amp < 1, JSON.stringify({ calm, woke }));
}
// leaving the stage resets it
await click(1); await p.waitForTimeout(1900);
await p.click('.nav__link[data-jump="inside"]'); await p.waitForTimeout(700);
const after = await p.evaluate(() => ({ at: window.__sf.world.s3.P.cy, touched: window.__sf.world.s3.touched, step: window.__sf.state.step, explode: +window.__sf.world.S.explode.toFixed(2) }));
check('Leaving Stage 3 resets it to Step 1 hovering; Stage 4 fully open', !after.touched && after.step === 0 && after.explode === 1, JSON.stringify(after));
// layer-by-layer reverse: scrub the 3->4 travel backwards and read per-layer separation
const tops = await p.evaluate(() => window.__sf.tops);
const go = async (y) => { await p.evaluate((y) => window.__sf.snap.jump(y), y); await p.waitForTimeout(250); };
const sep = () => p.evaluate(() => { const s = window.__sf.world.slot; return s.parts.map((_, i) => +s.layerExplode(i).toFixed(2)); });
await go(tops[3]); const full = await sep();
let mid1 = []; // the slide is where the layers stop in turn: find a place in it
for (const back of REDUCED ? [0.3] : [0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3]) { await go(tops[3] - 900 * 0.75 * back); mid1 = await sep(); if (REDUCED || mid1[1] > mid1[4]) break; }
await go(tops[3] - 900 * 0.75 * 0.75); const closed = await sep();
console.log('  open-up separation per layer: at rest', full.join(' '), '| part way back', mid1.join(' '), '| 75% back', closed.join(' '));
const stack = mid1.slice(1, 5); // carbon, silica, beads, shell top
check(REDUCED ? 'Open-up (reduced motion): snaps between stacked and fully open' : 'Open-up: every part at its exploded place at rest; layers stop bottom first; closed early', full.every((v) => v === 1) && (REDUCED ? mid1.every((v) => v === mid1[0]) : stack.every((v, i) => !i || v <= stack[i - 1]) && stack[0] > stack[3]) && closed.every((v) => v === 0));
// a nav click made mid-travel (the page is 75% back toward How here) lands at rest with the stage's overlay showing
await p.click('.nav__link[data-jump="inside"]'); await p.waitForTimeout(1200);
const ov = await p.evaluate(() => ({ travel: document.documentElement.dataset.travel || '', insideSetHidden: document.querySelector('.overlay__set[data-for="inside"]')?.hidden ?? null }));
check('A nav click mid-travel lands at rest', ov.travel === '', JSON.stringify(ov));
// a layer picked in Inside is let go on leaving, in the product as well as the sheet (rack clones share its materials)
await p.click('.layer-btn[data-layer="2"]'); await p.waitForTimeout(500);
await p.click('.nav__link[data-jump="customize"]'); await p.waitForTimeout(1500);
const sel = await p.evaluate(() => { const s = window.__sf.world.slot; return { ui: window.__sf.state.layer, world: s.state.selected, minOpacity: +Math.min(...s.parts.map((L) => L.mats[0].m.opacity)).toFixed(2) }; });
check('Leaving Inside lets go of a picked layer (sheet and product)', sel.ui === -1 && sel.world === -1 && sel.minOpacity > 0.99, JSON.stringify(sel));
if (errs.length) { console.log('page errors:', errs); fails++; }
console.log(fails ? `FAILURES: ${fails}` : 'all step checks passed');
await b.close();
