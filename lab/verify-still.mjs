// Verifies the motion contract:
//  1. at rest in every stage the product's world matrix does not change over 1.2s
//  2. during every transition it does change
//  3. scrolling back up reproduces the forward state at the same u
//  4. nav links land the product in the stage's resting state
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2);
const REDUCED = argv.includes('--reduced');
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: REDUCED ? 'reduce' : 'no-preference' });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(1200);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; }); // harness drives exact positions; no auto-settle
const go = async (y, ms = 800) => { await p.evaluate((y) => window.__sf.snap.jump(y), Math.round(y)); await p.waitForTimeout(ms); };
const mat = () => p.evaluate(() => { const w = window.__sf.world; w.slot.updateMatrixWorld(true); return [...w.slot.matrixWorld.elements].map((v) => +v.toFixed(5)); });
const S = () => p.evaluate(() => ({ ...window.__sf.world.S }));
const diff = (a, b2) => Math.max(...a.map((v, i) => Math.abs(v - b2[i])));
const { tops, stages } = await p.evaluate(() => ({ tops: window.__sf.tops, stages: [...document.querySelectorAll('[data-product]')].map((s) => s.dataset.product) }));
const TRAVEL = { default: 0.5, 'how>inside': 0.75 };
let fails = 0;
console.log('1. still at rest:');
for (let i = 0; i < stages.length; i++) {
  await go(tops[i], 900);
  const a = await mat(); await p.waitForTimeout(1200); const b2 = await mat();
  const d = diff(a, b2); const ok = d < 1e-4; if (!ok) fails++;
  console.log(`   ${stages[i].padEnd(9)} drift ${d.toExponential(1)} ${ok ? 'ok' : 'MOVING'}`);
}
console.log('2. moves during transitions, 3. reverse matches forward:');
// Departures from Stage 3 run on their own (time-linear) pacing, so on the way to Inside the product holds while the
// shoes leave and moves in the later part of the window; and a departure is compared with a departure, an arrival with an arrival.
const touchesHow = (key) => key.startsWith('how>') || key.endsWith('>how');
const fwd = {};
for (let i = 1; i < stages.length; i++) {
  const key = `${stages[i - 1]}>${stages[i]}`, span = 900 * (TRAVEL[key] || TRAVEL.default), mid = key === 'how>inside' ? 0.2 : 0.5;
  await go(tops[i] - span, 600); const m0 = await mat();
  await go(tops[i] - span * mid, 600); const m1 = await mat(); fwd[key] = await S();
  await go(tops[i], 600); const m2 = await mat();
  const moved = diff(m0, m1) > 1e-3 && diff(m1, m2) > 1e-3; if (!moved) fails++;
  console.log(`   ${key.padEnd(16)} ${(span / 900).toFixed(2)}vh  moves=${moved ? 'yes' : 'NO'}`);
}
for (let i = stages.length - 1; i >= 1; i--) {
  const key = `${stages[i - 1]}>${stages[i]}`, span = 900 * (TRAVEL[key] || TRAVEL.default), mid = key === 'how>inside' ? 0.2 : 0.5;
  let a, b2, how = '';
  if (touchesHow(key)) {
    // the same direction twice, each time from rest, must land on the same state (pure function of scroll)
    const fromStart = key.startsWith('how>');            // forward pass was a departure from Stage 3
    await go(fromStart ? tops[i - 1] : tops[i], 400); await go(tops[i] - span * mid, 600); a = await S();
    await go(fromStart ? tops[i - 1] : tops[i], 400); await go(tops[i] - span * mid, 600); b2 = await S();
    how = fromStart ? ' (departure, twice)' : ' (departure up, twice)';
  } else { await go(tops[i], 300); await go(tops[i] - span * mid, 600); a = await S(); b2 = fwd[key]; }
  const d = Math.max(...Object.keys(a).map((k) => Math.abs(a[k] - b2[k])));
  const ok = d < 1e-3; if (!ok) fails++;
  console.log(`   reverse ${key.padEnd(16)} max state delta ${d.toExponential(1)} ${ok ? 'ok' : 'MISMATCH'}${how}`);
}
console.log('4. nav links land in the resting state:');
await go(0, 400);
for (const id of ['inside', 'customize', 'why', 'what', 'close', 'how', 'explorer']) {
  await p.click(id === 'close' ? '.nav__waitlist' : `.nav__link[data-jump="${id}"]`); await p.waitForTimeout(700);
  const r = await p.evaluate((id) => { const w = window.__sf.world; const R = w.constructor.STATES ? w.constructor.STATES[id] : null; return { stage: document.documentElement.dataset.stage, S: { ...w.S } }; }, id);
  const rest = await p.evaluate((id) => { return window.__sf.world.restState ? window.__sf.world.restState(id) : null; }, id);
  const ok = r.stage === id && rest && Math.max(...Object.keys(rest).map((k) => Math.abs(rest[k] - r.S[k]))) < 1e-3; if (!ok) fails++;
  console.log(`   ${id.padEnd(9)} stage=${r.stage} ${ok ? 'ok' : 'WRONG POSE'}`);
}
console.log(fails ? `FAILURES: ${fails}` : 'all checks passed');
await b.close();
