// Stage 3 wall check. Scrubs every step, every scroll-out (down to Inside and
// up to What it does, from rest and from the middle of steps) and the
// arrivals, and measures how far the visible shoes' surfaces reach into the
// product's shell (a slab with the shell's real tapered outline). Also checks
// the product never dips below the floor.
//   node lab/wall-test.mjs [--mobile] [--size S|M|L]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const VERBOSE = process.argv.includes('--verbose');
const MOBILE = process.argv.includes('--mobile');
const SIZE = process.argv.includes('--size') ? process.argv[process.argv.indexOf('--size') + 1] : 'M';
const TOL = 0.003;   // world units (the shoe is 1.9 long): about half a millimetre at shoe scale, under a pixel on screen
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage(MOBILE ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } : { viewport: { width: 1440, height: 900 } });
console.log(MOBILE ? '390x844 (phone band)' : '1440x900', 'size', SIZE);
const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(800);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; });
if (SIZE !== 'M') { await p.evaluate((s) => window.__sf.setSizeId(s), SIZE); await p.waitForFunction((s) => window.__sf.world.slot.sizeId === s, SIZE); await p.waitForTimeout(300); }
await p.evaluate(() => document.querySelector('.nav__link[data-jump="how"]').click()); await p.waitForTimeout(700);

let fails = 0;
const CLEAR = MOBILE ? 4 : 8; // px the product's top must stay below the nav's edge (or the phone band's top)
const TOP_Y = 1.205; // the product's top in world y: the design limit (about 1.20) that keeps it under the heading and nav
const JUMP = 0.06;   // largest move of the product's centre between neighbouring samples (steps: 0.0025 t; travels: 0.002 or 0.01 u) before it counts as a pop
const report = (label, r) => {
  const bad = r.depth > TOL || r.lowest < -0.001 || r.jump > JUMP || r.clear < CLEAR || (r.topY > TOP_Y && !label.startsWith('jump explorer')); // standing upright in Stage 1 it is meant to reach higher: the px clearance is what counts there
  if (bad) fails++;
  console.log(`  ${label.padEnd(54)} deepest ${(r.depth * 1000).toFixed(1).padStart(5)} mm-units${r.depth > 0 ? ` (shoe ${r.shoe} ${r.part}, opacity ${r.opacity}, at ${r.at}, ${r.where})` : ''}  lowest ${r.lowest.toFixed(3)}  max step ${r.jump.toFixed(3)}${r.jump > JUMP ? ` at ${r.jumpAt}` : ''}  top clear ${Math.round(r.clear)}px${r.clear < CLEAR ? ` at ${r.clearAt}` : ''}  top y ${r.topY.toFixed(3)}${r.topY > TOP_Y ? ` at ${r.topAt}` : ''} ${bad ? 'FAIL' : 'ok'}`);
};
// In-page sweep helpers.
await p.evaluate(() => {
  const w = window.__sf.world;
  const worse = (acc, r, where) => {
    if (r.depth > acc.depth || (!acc.where && r.depth === acc.depth)) Object.assign(acc, r, { where });
    acc.lowest = Math.min(acc.lowest ?? 9, r.lowest);
    if (acc.prev) { const d = Math.hypot(r.centre[0] - acc.prev[0], r.centre[1] - acc.prev[1], r.centre[2] - acc.prev[2]); if (d > (acc.jump || 0)) { acc.jump = d; acc.jumpAt = where; } }
    acc.prev = r.centre; acc.jump = acc.jump || 0;
    if (r.scale > 0.01 && (acc.clear === undefined || r.topClear < acc.clear)) { acc.clear = r.topClear; acc.clearAt = where; }
    if (r.scale > 0.01 && (acc.topY === undefined || r.topY > acc.topY)) { acc.topY = r.topY; acc.topAt = where; }
    return acc;
  };
  window.__wall = {
    step(i, n = 400) { const acc = { depth: 0 }; for (let k = 0; k <= n; k++) { const t = k / n; w.scrub(i, t); worse(acc, w.wallProbe(), `t ${t.toFixed(3)}`); } return acc; },
    // freeze at (step i, t) or at rest, then sweep a travel; finally return to rest
    exit(setup, dir) {
      w.setTravel('how', 'how', 0);
      if (setup) w.scrub(setup[0], setup[1]); else { w.scrub(0, 1); }
      const acc = { depth: 0 };
      // 0.002 apart: the climb-out packs a lot of motion into the first 0.3 of the travel, and a pop must stand out from fast motion
      if (dir === 'down') { for (let k = 0; k <= 350; k++) { const u = k / 500; w.setTravel('how', 'inside', u); worse(acc, w.wallProbe(), `u ${u.toFixed(3)}`); } w.setTravel('how', 'inside', 0); }
      else { for (let k = 0; k <= 300; k++) { const u = 1 - k / 500; w.setTravel('what', 'how', u); worse(acc, w.wallProbe(), `u ${u.toFixed(3)}`); } w.setTravel('what', 'how', 1); }
      return acc;
    },
    // a nav jump from a stage at rest (optionally after a Stage 3 step) to another, sampled along the jump's clock
    jump(from, to, setup) {
      w.labRest(from); if (setup) { w.scrub(setup[0], setup[1]); w.s3.tl.held = true; }
      const acc = { depth: 0 };
      for (let k = 0; k <= 500; k++) { const u = k / 500; worse(acc, w.jumpProbe(to, u), `jump u ${u.toFixed(3)}`); }
      w.labRest(from);
      return acc;
    },
    // a scroll travel between two stages, from rest
    travel(from, to) {
      w.labRest(from);
      const acc = { depth: 0 };
      for (let i = 0; i <= 500; i++) { const u = i / 500; w.setTravel(from, to, u); worse(acc, w.wallProbe(), `u ${u.toFixed(3)}`); }
      w.labRest(from);
      return acc;
    },
    arrive(kind) {
      const acc = { depth: 0 };
      if (kind === 'from-what') { w.setTravel('what', 'how', 0); for (let k = 0; k <= 100; k++) { const u = k / 100; w.setTravel('what', 'how', u); worse(acc, w.wallProbe(), `u ${u.toFixed(2)}`); } }
      else { w.setTravel('how', 'inside', 1); for (let k = 100; k >= 0; k--) { const u = k / 100; w.setTravel('how', 'inside', u); worse(acc, w.wallProbe(), `u ${u.toFixed(2)}`); } }
      return acc;
    },
  };
});
const names = ['1 finish', '2 place', '3 work', '4 remove'];
console.log('steps (400 samples each, from their usual start):');
for (let i = 0; i < 4; i++) report(`step ${names[i]}`, await p.evaluate((i) => window.__wall.step(i), i));
console.log('scroll-out, down to Inside and up to What it does:');
const setups = [
  ['at rest, hovering', null],
  ['after step 2 (inside)', [1, 1]],
  ['after step 3 (inside, glowing)', [2, 1]],
  ...[0.2, 0.45, 0.6, 0.7, 0.8, 0.9].map((t) => [`mid step 2, t ${t}`, [1, t]]),
  ...[0.1, 0.3, 0.4, 0.5, 0.6, 0.8].map((t) => [`mid step 4, t ${t}`, [3, t]]),
  ...[0.2, 0.5].map((t) => [`mid step 1, t ${t}`, [0, t]]),
];
for (const [label, s] of setups) for (const dir of ['down', 'up']) report(`${label}, ${dir}`, await p.evaluate(([s, d]) => window.__wall.exit(s, d), [s, dir]));
console.log('nav jumps (the shoes fade out, move unseen, fade in):');
for (const [from, to, setup, label] of [
  ['how', 'inside'], ['how', 'what'], ['how', 'customize'], ['how', 'bulk'],
  ['how', 'inside', [1, 1], 'after step 2'], ['how', 'what', [1, 1], 'after step 2'], ['how', 'bulk', [2, 0.5], 'mid step 3'], ['how', 'inside', [1, 0.6], 'mid step 2'],
  ['inside', 'how'], ['what', 'how'], ['bulk', 'how'], ['customize', 'bulk'], ['bulk', 'why'], ['why', 'bulk'], ['explorer', 'how'],
]) report(`jump ${from} -> ${to}${label ? ` (${label})` : ''}`, await p.evaluate(([f, t, s]) => window.__wall.jump(f, t, s), [from, to, setup || null]));
console.log('Bulk travels (the shoe shows only round a seated product):');
for (const [from, to] of [['customize', 'bulk'], ['bulk', 'why']]) report(`${from} -> ${to}`, await p.evaluate(([f, t]) => window.__wall.travel(f, t), [from, to]));
await p.evaluate(() => window.__sf.world.labRest('how'));
console.log('arrivals:');
report('from What it does', await p.evaluate(() => window.__wall.arrive('from-what')));
report('back up from Inside', await p.evaluate(() => window.__wall.arrive('from-inside')));
if (errs.length) { console.log('page errors:', errs); fails++; }
console.log(fails ? `FAILURES: ${fails}` : 'no wall crossings');
await b.close();
