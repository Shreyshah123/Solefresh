// The real model: what is downloaded and when, the parts and their order, true scale between sizes, the open stack,
// colour touching only the shell, size swaps with a loading state, carry-forward to the rack.
//   node lab/model-test.mjs
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const P = JSON.parse(fs.readFileSync(new URL('../assets/product/parts.json', import.meta.url), 'utf8'));
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
const errs = [], glbs = [];
p.on('pageerror', (e) => errs.push(String(e)));
p.on('response', (r) => { if (r.url().endsWith('.glb')) { const name = r.url().split('/').pop(); glbs.push({ name, bytes: fs.statSync(new URL(`../assets/product/${name}`, import.meta.url)).size }); } });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await p.waitForTimeout(800);
let fails = 0; const check = (l, ok, x = '') => { if (!ok) fails++; console.log(`  ${l.padEnd(66)} ${ok ? 'ok' : 'FAIL'}${x ? '  ' + x : ''}`); };

console.log('a first visit');
check('only size M assembled is downloaded', glbs.length === 1 && glbs[0].name === 'solefresh_v3_2_M_assembled.glb', glbs.map((g) => `${g.name} ${(g.bytes / 1024).toFixed(0)} KB`).join(', '));

console.log('parts');
const m = await p.evaluate(() => { const s = window.__sf.world.slot; return { names: s.parts.map((L) => L.name), layers: window.__sf.C.inside.layers.map((l) => l.id), semi: s.semi.toArray(), k: s.k, mats: s.parts.map((L) => [L.mat.name, '#' + L.mat.color.getHexString(), +L.mat.roughness.toFixed(2), L.mat.metalness]) }; });
check('the six parts, in the order of the Inside layers', JSON.stringify(m.names) === JSON.stringify(['shell_bottom', 'carbon_sachet', 'silica_sachet', 'scent_beads', 'shell_top', 'pull_cord']) && JSON.stringify(m.names) === JSON.stringify(m.layers));
// the GLB stores colours as 8-bit linear values, so a dark channel can come back a step or two from the published hex
const near = (a, c) => [1, 3, 5].every((i) => Math.abs(parseInt(a.slice(i, i + 2), 16) - parseInt(c.slice(i, i + 2), 16)) <= 2);
for (const [name, c, rough] of m.mats) { const [hex, want] = P.parts[name]; check(`${name}: the file's colour and roughness`, near(c, hex) && Math.abs(rough - want) < 0.011, `${c} ${rough}`); }
const hs = await p.evaluate(() => window.__sf.C.what.hotspots.map((h) => `${h.label}:${h.part}`).join(' '));
check('hotspots anchor to their real parts', hs === 'Odor:carbon_sachet Moisture:silica_sachet Fragrance:scent_beads', hs);
const shoeMm = await p.evaluate(() => { const s = window.__sf.world.slot, u = 1.3 / 0.1098 * (0.1098 * 1.9 / 0.3 / 1.3); return { mPerUnit: 0.3 / 1.9 * 1000, len: s.semi.x * 2 * ((0.1098 * 1.9) / 0.3 / 1.3) }; });
check('in the shoe, size M is 110 mm against a 300 mm shoe', Math.abs(shoeMm.len * shoeMm.mPerUnit - 109.8) < 0.5, `${(shoeMm.len * shoeMm.mPerUnit).toFixed(1)} mm`);

console.log('explode');
const ex = await p.evaluate(() => { const s = window.__sf.world.slot, D = window.__sf.MODEL.sizes.M.parts; s.setExplode(1); s.apply(); const y = (n) => s.parts.find((L) => L.name === n).group.position.y, mm = (v) => +(v * 1000).toFixed(2); const out = { rest: s.parts.map((L) => [L.name, L.name === 'pull_cord' ? 0 : Math.abs(L.group.position.y - L.lift)]), gaps: [mm(D.carbon_sachet.min[1] + y('carbon_sachet') - D.shell_top.min[1]), mm(D.silica_sachet.min[1] + y('silica_sachet') - D.carbon_sachet.max[1] - y('carbon_sachet')), mm(D.shell_top.min[1] + y('shell_top') - D.silica_sachet.max[1] - y('silica_sachet'))] }; s.setExplode(0); s.apply(); return out; });
check('each part rises to its level in the open stack', ex.rest.every(([, d]) => d < 1e-6), ex.rest.map(([n, d]) => `${n} ${d.toExponential(0)}`).join(' '));
check('the stack has an even gap of 3 to 4 mm', ex.gaps.every((g) => g >= 3 && g <= 4), ex.gaps.join(' '));
const order = await p.evaluate(() => { const s = window.__sf.world.slot, bad = []; const idx = ['shell_bottom', 'carbon_sachet', 'silica_sachet', 'shell_top'].map((n) => s.parts.findIndex((L) => L.name === n)); for (let u = 0; u <= 1.0001; u += 0.01) { s.setExplode(u); s.apply(); const ys = idx.map((i) => s.parts[i].group.position.y); for (let i = 1; i < ys.length; i++) if (ys[i] < ys[i - 1] - 1e-9) bad.push(u.toFixed(2)); } s.setExplode(0); s.apply(); return bad; });
check('no layer ever passes the one in front of it', !order.length, order.slice(0, 5).join(' '));
check('and no second model is fetched', glbs.length === 1);

console.log('colour');
await p.evaluate(() => document.querySelector('.nav__link[data-jump="customize"]').click()); await p.waitForTimeout(700);
const cols = () => p.evaluate(() => Object.fromEntries(window.__sf.world.slot.parts.map((L) => [L.name, '#' + L.mat.color.getHexString()])));
const c0 = await cols();
await p.click('.swatch[data-color="sage"]'); await p.waitForTimeout(150); const mid = await cols(); await p.waitForTimeout(350); const c1 = await cols();
check('Sage reaches the shell', c1.shell_top === '#8e9f94' && c1.shell_bottom === '#8e9f94', c1.shell_top);
check('after blending through the 300 ms', mid.shell_top !== c0.shell_top && mid.shell_top !== c1.shell_top, `${c0.shell_top} ${mid.shell_top} ${c1.shell_top}`);
check('nothing but the shell changed', ['carbon_sachet', 'silica_sachet', 'scent_beads', 'pull_cord'].every((n) => c0[n] === c1[n]));

console.log('size');
check('S and L have not been fetched yet', glbs.length === 1);
const dims = await p.evaluate(() => window.__sf.C.customize.sizes.map((s) => s.id));
await p.route('**/solefresh_v3_2_L_assembled.glb', async (r) => { await new Promise((z) => setTimeout(z, 600)); r.continue(); });
await p.click('.size[data-size="L"]'); await p.waitForTimeout(120);
const loading = await p.textContent('[data-size-label]');
check('a short loading state shows', loading.includes('Loading size L'), loading);
await p.waitForFunction(() => window.__sf.world.slot.sizeId === 'L', null, { timeout: 8000 }); await p.waitForTimeout(200);
check('then the model swaps and only L was fetched', glbs.length === 2 && glbs[1].name === 'solefresh_v3_2_L_assembled.glb', glbs.map((g) => g.name).join(', '));
const rnd = (a) => a.map(Math.round).join(' × ');
check('dimensions from parts.json, whole mm', (await p.textContent('[data-size-label]')).startsWith(rnd(P.sizes.L.outside_mm)), await p.textContent('[data-size-label]'));
const ratio = await p.evaluate(() => { const s = window.__sf.world.slot; return s.semi.x / 0.65; });
check('L is truly larger, not rescaled M', Math.abs(ratio - 123.8 / 109.8) < 0.002, ratio.toFixed(3));
const after = await cols(); check('the colour carried over', after.shell_top === '#8e9f94' && after.shell_bottom === '#8e9f94');
for (const id of ['S', 'M']) { await p.click(`.size[data-size="${id}"]`); await p.waitForFunction((i) => window.__sf.world.slot.sizeId === i, id, { timeout: 8000 }); await p.waitForTimeout(150); check(`${id}: ${rnd(P.sizes[id].outside_mm)} mm`, (await p.textContent('[data-size-label]')).startsWith(rnd(P.sizes[id].outside_mm))); }
check('M came from the cache', glbs.filter((g) => g.name.includes('_M_')).length === 1);
await p.click('.size[data-size="L"]'); await p.waitForFunction(() => window.__sf.world.slot.sizeId === 'L');
const carried = await p.evaluate(() => { const w = window.__sf.world, u = w.units.find((x) => x.userData.prod), meshes = []; u.userData.prod.traverse((o) => { if (o.isMesh) meshes.push(o); }); const real = w.slot.parts.map((L) => L.mesh); return { same: meshes.map((c) => real.some((r) => r.geometry === c.geometry && r.material === c.material)), n: meshes.length, sm: w.st3.hh }; });
check('the rack carries the size and colour (same geometry and materials)', carried.n === 3 && carried.same.every(Boolean), `${carried.n} meshes`);
await p.evaluate(() => document.querySelector('.nav__link[data-jump="bulk"]').click()); await p.waitForTimeout(500);
await p.evaluate(() => document.querySelector('.nav__link[data-jump="close"], .nav__waitlist').click()); await p.waitForTimeout(500);
check('and they carry on into the later stages', (await p.evaluate(() => `${window.__sf.world.slot.sizeId} #${window.__sf.world.slot.parts[0].mat.color.getHexString()}`)) === 'L #8e9f94');
// a size that fails to load
await p.unroute('**/solefresh_v3_2_L_assembled.glb');
{
  const q = await ctx.newPage(); await q.route('**/solefresh_v3_2_S_assembled.glb', (r) => r.abort());
  await q.goto('http://localhost:4520/#customize', { waitUntil: 'load' }); await q.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await q.waitForTimeout(600);
  await q.click('.size[data-size="S"]'); await q.waitForTimeout(600);
  const r = await q.evaluate(() => ({ text: document.querySelector('[data-size-label]').textContent, on: document.querySelector('.size[data-size][aria-pressed="true"]').dataset.size, size: window.__sf.state.size }));
  check('a failed load says so and stays on the size it had', r.text.includes("Couldn't load") && r.on === 'M' && r.size === 'M', JSON.stringify(r));
  await q.close();
}
console.log('selection');
await p.evaluate(() => document.querySelector('.nav__link[data-jump="inside"]').click()); await p.waitForTimeout(800);
await p.click('.layer-btn[data-layer="3"]'); await p.waitForTimeout(600);
const sel = await p.evaluate(() => { const s = window.__sf.world.slot; return { glow: s.parts.map((L) => +L.mat.emissiveIntensity.toFixed(2)), op: s.parts.map((L) => +L.mat.opacity.toFixed(2)), panel: document.querySelector('[data-sheet-name]').textContent, role: document.querySelector('[data-sheet-role]').textContent, em: '#' + s.parts[3].mat.emissive.getHexString() }; });
check('a click pops out the real node and dims the rest slightly', sel.op[3] === 1 && sel.op.filter((o, i) => i !== 3).every((o) => o > 0.5 && o < 0.75), JSON.stringify(sel.op));
check('with its panel copy', sel.panel === 'Scent beads' && sel.role.includes('heel end'), sel.role);
if (errs.length) { console.log('page errors:', errs); fails++; }
console.log(`first visit GLB download: ${(glbs[0].bytes / 1024).toFixed(0)} KB`);
console.log(fails ? `FAILURES: ${fails}` : 'all model checks passed');
await b.close();
