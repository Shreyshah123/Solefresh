// The upright poses: Stage 1's size, place and stillness; Inside's small-gap stack and its pop-out, measured on real pixels
// (one part drawn at a time) and with real clicks: every way in and out, no part through another, nothing clipped; the size
// dip through each transition.
// Saves rest and mid-transition frames to lab/pose/.   node lab/pose-test.mjs [--mobile] [--size S|M|L] [--w 1440 --h 900]
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const MOBILE = process.argv.includes('--mobile'), SIZE = arg('--size', 'M'), W = +arg('--w', MOBILE ? 390 : 1440), H = +arg('--h', MOBILE ? 844 : 900);
const OUT = 'lab/pose'; fs.mkdirSync(OUT, { recursive: true });
const tag = `${W}x${H}-${SIZE}`;
let bad = 0; const check = (ok, msg) => { console.log(`${ok ? 'ok  ' : 'FAIL'} ${msg}`); if (!ok) bad++; };

const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: MOBILE, hasTouch: MOBILE });
const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await p.waitForTimeout(900);
await p.evaluate(() => { window.__sf.snap.settle = () => {}; });
if (SIZE !== 'M') { await p.evaluate((s) => window.__sf.setSizeId(s), SIZE); await p.waitForFunction((s) => window.__sf.world.slot.sizeId === s, SIZE); await p.waitForTimeout(900); }

/** Each part's pixels on the canvas, in canvas px: its box, and how many pixels any two parts share. */
const measure = () => p.evaluate(() => {
  const w = window.__sf.world, r = w.renderer, gl = r.getContext(), s = w.slot, dpr = r.getPixelRatio();
  const W = gl.drawingBufferWidth, H = gl.drawingBufferHeight, seen = [], boxes = [];
  const hide = [w.shadow, w.seatShadow, ...w.floors], was = hide.map((o) => o.visible); hide.forEach((o) => { o.visible = false; });
  for (let i = 0; i < s.parts.length; i++) {
    s.parts.forEach((L, j) => { L.inner.visible = j === i; });
    r.render(w.scene, w.camera);
    const px = new Uint8Array(W * H * 4); gl.readPixels(0, 0, W, H, gl.RGBA, gl.UNSIGNED_BYTE, px);
    const m = new Uint8Array(W * H); let x0 = 1e9, x1 = -1, y0 = 1e9, y1 = -1, n = 0;
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (px[(y * W + x) * 4 + 3] > 16) { m[y * W + x] = 1; n++; if (x < x0) x0 = x; if (x > x1) x1 = x; const yy = H - 1 - y; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
    seen.push(m); boxes.push({ name: s.parts[i].name, x0: x0 / dpr, x1: x1 / dpr, y0: y0 / dpr, y1: y1 / dpr, n });
  }
  s.parts.forEach((L) => { L.inner.visible = true; }); hide.forEach((o, k) => { o.visible = was[k]; });
  const shared = [];
  for (let a = 0; a < seen.length; a++) for (let c = a + 1; c < seen.length; c++) { let n = 0; for (let i = 0; i < seen[a].length; i++) if (seen[a][i] && seen[c][i]) n++; if (n) shared.push(`${boxes[a].name}+${boxes[c].name}: ${n}`); }
  r.render(w.scene, w.camera);
  return { boxes, shared, W: w.W, H: w.H, top: w.host.getBoundingClientRect().top };
});
const rect = (s) => p.evaluate((q) => { const e = document.querySelector(q); if (!e) return null; const r = e.getBoundingClientRect(); return { l: r.left, r: r.right, t: r.top, b: r.bottom }; }, s);
const go = async (i) => { await p.evaluate((k) => window.__sf.snap.jump(window.__sf.tops[k]), i); await p.waitForTimeout(800); };

// ---------------------------------------------------------------- Stage 1
await go(0);
{
  const m = await measure(), parts = m.boxes.filter((x) => x.n), shell = parts.filter((x) => x.name.startsWith('shell'));
  const sh = Math.max(...shell.map((x) => x.y1)) - Math.min(...shell.map((x) => x.y0)), all = { x0: Math.min(...parts.map((x) => x.x0)), x1: Math.max(...parts.map((x) => x.x1)), y0: Math.min(...parts.map((x) => x.y0)), y1: Math.max(...parts.map((x) => x.y1)) };
  check(all.x0 > 1 && all.x1 < m.W - 2 && all.y0 > 1 && all.y1 < m.H - 2, `Stage 1 not clipped (${all.x0.toFixed(0)}..${all.x1.toFixed(0)} x ${all.y0.toFixed(0)}..${all.y1.toFixed(0)} in ${m.W}x${m.H})`);
  if (MOBILE) check(sh / m.H > 0.5, `Stage 1 fills the band: shell ${(100 * sh / m.H).toFixed(0)}% of its height, with cord ${(100 * (all.y1 - all.y0) / m.H).toFixed(0)}%`);
  else {
    const list = await rect('.who__list'), panel = await rect('.panel'), mid = (all.x0 + all.x1) / 2, want = (list.r + panel.l) / 2;
    check(SIZE !== 'M' || (sh / H >= 0.57 && sh / H <= 0.67) || W < 1200, `Stage 1 shell is ${(100 * sh / H).toFixed(1)}% of the window height, ${(100 * (all.y1 - all.y0) / H).toFixed(1)}% with the cord`);
    check(all.x0 > list.r && all.x1 < panel.l, `clear of the list and the panel (${list.r.toFixed(0)} | ${all.x0.toFixed(0)}..${all.x1.toFixed(0)} | ${panel.l.toFixed(0)})`);
    check(Math.abs(mid - want) < 14, `centred between them (${mid.toFixed(0)} against ${want.toFixed(0)})`);
  }
  await p.screenshot({ path: `${OUT}/stage1-${tag}.png` });
  // completely still: pointer moves and a venue change leave the pose exactly as it is
  const pose = () => p.evaluate(() => { const s = window.__sf.world.slot; s.updateWorldMatrix(true, true); return [...s.turn.matrixWorld.elements].map((v) => +v.toFixed(6)).join(); });
  const a = await pose();
  if (!MOBILE) { await p.mouse.move(300, 300); await p.mouse.move(1000, 700, { steps: 6 }); }
  await p.evaluate(() => window.__sf.select(window.__sf.C.segments.items[2].id)); await p.waitForTimeout(350);
  const c = await pose(); await p.waitForTimeout(500); const d = await pose();
  check(a === c && c === d, 'Stage 1 still: unmoved by the pointer or a venue change');
  await p.evaluate(() => window.__sf.select(window.__sf.C.segments.items[0].id)); await p.waitForTimeout(500);
}
// ---------------------------------------------------------------- Inside
await go(3);
{
  const layer = () => p.evaluate(() => window.__sf.state.layer), hint = 'Select a part to see what it does.';
  const panel = () => p.evaluate(() => { const v = (s) => { const e = document.querySelector(s); return e && !e.hidden && e.getClientRects().length ? e.textContent.trim() : ''; }; return { open: document.querySelector('[data-sheet]').classList.contains('is-open'), name: v('[data-sheet-name]'), prompt: v('[data-sheet-prompt]') || v('[data-inside-prompt]') }; });
  const state = () => p.evaluate(() => { const s = window.__sf.world.slot; return s.parts.map((L) => ({ name: L.name, pop: L.pop.p, opacity: +L.mat.opacity.toFixed(2) })); });
  const settled = async () => { await p.waitForTimeout(1000); return state(); };
  const out = (st) => st.filter((x) => x.pop > 0.5).map((x) => x.name);

  const m = await measure(), parts = m.boxes.filter((x) => x.n);
  check(parts.length === 6, `all six parts are on the canvas (${parts.length})`);
  const all = { x0: Math.min(...parts.map((x) => x.x0)), x1: Math.max(...parts.map((x) => x.x1)), y0: Math.min(...parts.map((x) => x.y0)), y1: Math.max(...parts.map((x) => x.y1)) };
  check(all.x0 > 1 && all.x1 < m.W - 2 && all.y0 > 1 && all.y1 < m.H - 2, `Inside not clipped (${all.x0.toFixed(0)}..${all.x1.toFixed(0)} x ${all.y0.toFixed(0)}..${all.y1.toFixed(0)} in ${m.W}x${m.H})`);
  if (!MOBILE) {
    const list = await rect('.inside__list'), sheet = await rect('.sheet'), head = await rect('.inside__head');
    check(all.x0 > list.r && all.x1 < sheet.l, `clear of the part list and the panel (${list.r.toFixed(0)} | ${all.x0.toFixed(0)}..${all.x1.toFixed(0)} | ${sheet.l.toFixed(0)})`);
    check(all.y0 > head.b || all.x0 > head.r, 'clear of the heading');
  }
  // the stack: real order, an even gap of 3 to 4 mm
  const gaps = await p.evaluate(() => {
    const s = window.__sf.world.slot, D = window.__sf.MODEL.sizes[s.sizeId].parts, y = (n) => s.parts.find((L) => L.name === n).group.position.y, mm = (v) => +(v * 1000).toFixed(2);
    const rim = D.shell_top.min[1];
    return [mm(D.carbon_sachet.min[1] + y('carbon_sachet') - rim), mm(D.silica_sachet.min[1] + y('silica_sachet') - (D.carbon_sachet.max[1] + y('carbon_sachet'))), mm(D.shell_top.min[1] + y('shell_top') - (D.silica_sachet.max[1] + y('silica_sachet')))];
  });
  check(gaps.every((g) => g >= 3 && g <= 4), `layers stacked with an even gap: ${gaps.join(', ')} mm`);
  check(out(await state()).length === 0, 'nothing is out by default');
  check((await panel()).prompt === hint, `the hint shows: "${(await panel()).prompt}"`);
  await p.screenshot({ path: `${OUT}/inside-rest-${tag}.png` });

  // the edges are there to click: which part a click at each point of the stack would reach
  const reach = await p.evaluate((b) => {
    const w = window.__sf.world, hits = {}, step = Math.max(3, Math.round((b.x1 - b.x0) / 70));
    for (let y = b.y0; y <= b.y1; y += step) for (let x = b.x0; x <= b.x1; x += step) { const i = w.pickLayer(x, y); if (i >= 0) (hits[i] ||= []).push([x, y]); }
    return Object.fromEntries(Object.entries(hits).map(([k, v]) => [k, { n: v.length, at: v[Math.floor(v.length / 2)] }]));
  }, all);
  m.boxes.forEach((q, i) => { if (q.name !== 'scent_beads') check(reach[i]?.n > 0, `${q.name} can be clicked on the model (${reach[i]?.n ?? 0} sample points)`); });
  console.log(`     scent_beads: ${reach[3]?.n ?? 0} sample points through the vents; the list always reaches it`);

  const tap = async (x, y) => { if (MOBILE) await p.touchscreen.tap(x, y); else await p.mouse.click(x, y); };
  const onPage = (i) => ({ x: reach[i].at[0], y: reach[i].at[1] + m.top });
  // the path out never touches a neighbour
  const hits = await p.evaluate(() => {
    const s = window.__sf.world.slot, bad = [], box = (L) => ({ lo: L.group.position.clone().add(L.centre).sub(L.half), hi: L.group.position.clone().add(L.centre).add(L.half) });
    const meet = (a, b) => ['x', 'y', 'z'].every((k) => a.lo[k] < b.hi[k] - 1e-4 && b.lo[k] < a.hi[k] - 1e-4), solid = s.parts.filter((L) => L.name !== 'pull_cord');
    for (const L of solid) {
      const still = solid.filter((o) => o !== L && meet(box(L), box(o)));
      for (let q = 0; q <= 1.12; q += 0.01) { L.pop.p = q; s.apply(); for (const o of solid) if (o !== L && !still.includes(o) && meet(box(L), box(o))) bad.push(`${L.name} into ${o.name} at ${q.toFixed(2)}`); }
      L.pop.p = 0; s.apply();
    }
    return bad;
  });
  check(!hits.length, `no part passes through another on its way out${hits.length ? `: ${hits.slice(0, 3).join('; ')}` : ''}`);

  // a click on the model pops it, the others dim, the panel opens
  for (const i of [0, 1, 2, 4, 5]) {
    const q = onPage(i); await tap(q.x, q.y);
    const st = await settled(), pn = await panel();
    check(out(st).join() === m.boxes[i].name && pn.open && pn.name === (await p.evaluate((k) => window.__sf.C.inside.layers[k].name, i)), `a click on ${m.boxes[i].name} pops it and opens its panel (${out(st)}, "${pn.name}")`);
    check(st.every((x, k) => (k === i ? x.opacity === 1 : x.opacity > 0.5 && x.opacity < 0.75)), `  the others dim slightly (${st.map((x) => x.opacity).join(' ')})`);
    const k = await measure(), b = k.boxes[i];
    check(b.x0 > 1 && b.x1 < k.W - 2 && b.y0 > 1 && b.y1 < k.H - 2, `  it stays on the canvas, not clipped (${b.x0.toFixed(0)}..${b.x1.toFixed(0)} x ${b.y0.toFixed(0)}..${b.y1.toFixed(0)})`);
    if (!MOBILE) { const sheet = await rect('.sheet'); check(b.x1 < sheet.l, '  and clear of the panel'); }
    await p.screenshot({ path: `${OUT}/inside-pop-${m.boxes[i].name}-${tag}.png` });
    await p.evaluate(() => window.__sf.selectLayer(-1)); await settled();
  }
  // through the list, and one replacing another
  const btn = (i) => `.layer-btn[data-layer="${i}"]`;
  await p.click(btn(3)); let st = await settled();
  check(out(st).join() === 'scent_beads', `the list pops the scent beads (${out(st)})`);
  { const k = await measure(), b = k.boxes[3]; check(b.x0 > 1 && b.x1 < k.W - 2 && b.y0 > 1 && b.y1 < k.H - 2, '  on the canvas, not clipped'); }
  await p.click(btn(1)); st = await settled();
  check(out(st).join() === 'carbon_sachet', `another part sends the first back and pops itself (${out(st)})`);
  const dur = await p.evaluate(async () => { const s = window.__sf.world.slot, L = s.parts[4], t0 = performance.now(); window.__sf.selectLayer(4); document.querySelector('.layer-btn[data-layer="4"]').setAttribute('aria-pressed', 'true'); let top = 0; await new Promise((z) => { const f = () => { top = Math.max(top, L.pop.p); if (L.pop.p === 1) z(); else requestAnimationFrame(f); }; requestAnimationFrame(f); }); return { ms: Math.round(performance.now() - t0), top: +top.toFixed(3) }; });
  check(dur.ms >= 280 && dur.ms <= 520 && dur.top > 1.02, `the pop takes about 300 to 400 ms, with a spring's overshoot (${dur.ms} ms including the beat for the outgoing part, peak ${dur.top})`);
  await p.evaluate(() => window.__sf.selectLayer(-1)); await settled();
  // every way back
  const ways = [
    ['clicking the popped part again', async () => { const i = 4; await p.click(btn(i)); await settled(); const k = await measure(), b = k.boxes[i]; await tap((b.x0 + b.x1) / 2 + (b.x1 - b.x0) * 0.1, k.top + b.y0 + (b.y1 - b.y0) * 0.14); }],
    ['clicking empty space', async () => { await p.click(btn(2)); await settled(); await tap(MOBILE ? 14 : W - 40, MOBILE ? (await rect('.world')).t + 40 : H - 40); }],
    ['closing the panel', async () => { await p.click(btn(5)); await settled(); if (MOBILE) await p.click('[data-sheet-close]'); else await p.evaluate(() => document.querySelector('[data-sheet-close]').click()); }],
    ['Escape', async () => { await p.click(btn(0)); await settled(); await p.keyboard.press('Escape'); }],
    ['the list button again', async () => { await p.click(btn(1)); await settled(); await p.click(btn(1)); }],
  ];
  for (const [label, act] of ways) { await act(); st = await settled(); const pn = await panel(); check(!out(st).length && st.every((x) => x.opacity >= 0.99) && !pn.open, `${label} puts it back and un-dims everything (${out(st)} ${st.map((x) => x.opacity).join(' ')} panel ${pn.open})`); }
  // keyboard: the same, with focus returning to the list
  await p.focus(btn(2)); await p.keyboard.press('Enter'); st = await settled();
  check(out(st).join() === 'silica_sachet', 'Enter on a list button pops its part');
  await p.keyboard.press('Escape'); st = await settled();
  const f = await p.evaluate(() => document.activeElement?.dataset?.layer ?? document.activeElement?.tagName);
  check(!out(st).length && f === '2', `Escape puts it back, and focus is on its list button (${f})`);
  const names = await p.evaluate(() => [...document.querySelectorAll('.layer-btn')].map((b) => b.textContent.trim()).join(', '));
  check(names === 'Shell bottom, Carbon sachet, Silica sachet, Scent beads, Shell top, Pull cord', `the list: ${names}`);
  check(!(await p.evaluate(() => document.querySelectorAll('.lm').length)), 'no floating markers left in the tab order');
  // a scroll away puts it back first
  await p.click(btn(2)); await settled();
  await p.evaluate((k) => window.__sf.snap.jump(window.__sf.tops[k + 1] - (window.__sf.tops[k + 1] - window.__sf.tops[k]) * 0.3), 3); await p.waitForTimeout(600);
  st = await state(); check(!out(st).length, 'scrolling away puts a popped part back');
  await go(3);
}
// -------------------------------------------------- the travels: size and mid frames
const shots = [['explorer', 'what', 1], ['how', 'inside', 3], ['inside', 'customize', 4]];
for (const [from, to, i] of shots) {
  const rows = await p.evaluate(async ({ from, to, i }) => {
    const { snap, tops } = window.__sf, w = window.__sf.world;
    const narrow = matchMedia('(max-width: 899px), (max-height: 520px)').matches;
    const span = narrow ? null : innerHeight * (`${from}>${to}` === 'how>inside' ? 0.75 : 0.5), y0 = narrow ? tops[i - 1] : tops[i] - span, y1 = tops[i];
    const out = [];
    for (let k = 0; k <= 20; k++) { snap.jump(y0 + ((y1 - y0) * k) / 20); await new Promise((z) => setTimeout(z, 40)); out.push({ u: +w.travel.u.toFixed(3), from: w.travel.from, to: w.travel.to, scale: w.S.scale, roll: w.S.roll }); }
    return out;
  }, { from, to, i });
  const here = rows.filter((r) => r.from === from && r.to === to && r.u > 0 && r.u < 1);
  const end = await p.evaluate((st) => ({ a: window.__sf.world.restState(st[0]).scale, b: window.__sf.world.restState(st[1]).scale }), [from, to]);
  if (here.length) {
    const other = from === 'explorer' || to === 'customize' ? end.b : end.a, least = from === 'how' ? Math.min(...here.map((r) => r.scale)) : here.find((r) => r.u >= 0.7)?.scale;
    console.log(`     ${from}>${to}: rests ${end.a.toFixed(3)} and ${end.b.toFixed(3)}; travels at ${least?.toFixed(3)} = ${(100 * least / other).toFixed(0)}% of the other stage's size`);
    check(Math.abs(least / other - 0.85) < 0.1, `${from}>${to} travels at about 85%`);
  }
  await p.evaluate(async ({ from, to, i }) => {
    const { snap, tops } = window.__sf, narrow = matchMedia('(max-width: 899px), (max-height: 520px)').matches;
    const span = narrow ? (tops[i] - tops[i - 1]) * 0.3 : innerHeight * (`${from}>${to}` === 'how>inside' ? 0.75 : 0.5) * 0.45;
    snap.jump(tops[i] - span); await new Promise((z) => setTimeout(z, 700));
  }, { from, to, i });
  const u = await p.evaluate(() => window.__sf.world.travel.u);
  await p.screenshot({ path: `${OUT}/mid-${from}-${to}-${tag}.png` });
  console.log(`     saved mid frame ${from}>${to} at u ${u.toFixed(2)}`);
}
check(!errs.length, `no page errors${errs.length ? `: ${errs[0]}` : ''}`);
await b.close();
console.log(bad ? `${bad} FAILED` : 'all pose checks passed');
process.exitCode = bad ? 1 : 0;
