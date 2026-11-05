// Builds the web models from the source GLBs in assets/product/source/:
//   - compresses each one with gltf-transform (meshopt: quantized, EXT_meshopt_compression) into assets/product/
//   - reads every part's exploded position out of the exploded GLBs and writes src/model-data.json, so the page
//     animates the one assembled model it has loaded and never downloads an exploded file
// The node names, one mesh and one material per part, are what the page keys on: nothing here merges or renames them.
//   node tools/compress-models.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = path.join(ROOT, 'assets/product/source'), OUT = path.join(ROOT, 'assets/product');
const CLI = '@gltf-transform/cli@4.5.1';
const SIZES = ['S', 'M', 'L'], KINDS = ['assembled', 'exploded'];
const file = (s, k) => `solefresh_v3_2_${s}_${k}.glb`;

/** The JSON chunk of a GLB. */
function gltf(p) { const b = fs.readFileSync(p), n = b.readUInt32LE(12); return JSON.parse(b.subarray(20, 20 + n).toString('utf8')); }
/** { nodeName: { min, max } } in the file's own vertex units (accessor bounds of the node's mesh). */
function bounds(g) {
  const out = {};
  for (const n of g.nodes) {
    if (n.mesh == null) continue;
    let min = [Infinity, Infinity, Infinity], max = [-Infinity, -Infinity, -Infinity];
    for (const pr of g.meshes[n.mesh].primitives) { const a = g.accessors[pr.attributes.POSITION]; for (let i = 0; i < 3; i++) { min[i] = Math.min(min[i], a.min[i]); max[i] = Math.max(max[i], a.max[i]); } }
    out[n.name] = { min, max, matrix: n.matrix };
  }
  return out;
}
/** A vertex-space vector through the node's matrix (columns), without translation: file units to metres, Y up. */
const toWorld = (m, v) => [m[0] * v[0] + m[4] * v[1] + m[8] * v[2], m[1] * v[0] + m[5] * v[1] + m[9] * v[2], m[2] * v[0] + m[6] * v[1] + m[10] * v[2]];
const r = (v, n = 6) => +v.toFixed(n);

const data = { unit: 'metres, Y up, heel end toward +X', sizes: {} };
const sizes = [];
for (const s of SIZES) {
  const a = bounds(gltf(path.join(SRC, file(s, 'assembled')))), e = bounds(gltf(path.join(SRC, file(s, 'exploded'))));
  const parts = {};
  for (const name of Object.keys(a)) {
    if (!e[name]) throw new Error(`${file(s, 'exploded')} has no node ${name}`);
    const m = a[name].matrix, d = [0, 1, 2].map((i) => e[name].min[i] - a[name].min[i]);
    const size = [0, 1, 2].map((i) => e[name].max[i] - e[name].min[i] - (a[name].max[i] - a[name].min[i]));
    if (size.some((v) => Math.abs(v) > 1e-3)) throw new Error(`${name} changes size between assembled and exploded (${s})`);
    const lo = toWorld(m, a[name].min), hi = toWorld(m, a[name].max);
    parts[name] = { explode: toWorld(m, d).map((v) => r(v)), min: [0, 1, 2].map((i) => r(Math.min(lo[i], hi[i]))), max: [0, 1, 2].map((i) => r(Math.max(lo[i], hi[i]))) };
  }
  data.sizes[s] = { url: `assets/product/${file(s, 'assembled')}`, parts };
}
// the published outside dimensions (they include the cord loop; see the shell's own bounds in parts above)
const P = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets/product/parts.json'), 'utf8'));
for (const s of SIZES) data.sizes[s].outsideMm = P.sizes[s].outside_mm;
fs.writeFileSync(path.join(ROOT, 'src/model-data.json'), JSON.stringify(data, null, 1) + '\n');

let before = 0, after = 0;
for (const s of SIZES) for (const k of KINDS) {
  const name = file(s, k), src = path.join(SRC, name), dst = path.join(OUT, name);
  execSync(`npx --yes ${CLI} meshopt "${src}" "${dst}" --level high`, { stdio: 'pipe' });
  const b = fs.statSync(src).size, c = fs.statSync(dst).size; before += b; after += c;
  sizes.push({ file: name, before: b, after: c });
  const g = gltf(dst);
  const names = g.nodes.filter((n) => n.mesh != null).map((n) => n.name).sort().join(), want = Object.keys(data.sizes[s].parts).sort().join();
  if (names !== want || g.materials.length !== 6) throw new Error(`${name}: parts changed in compression (${names}; ${g.materials.length} materials)`);
}
const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
for (const x of sizes) console.log(`${x.file.padEnd(36)} ${kb(x.before).padStart(9)} -> ${kb(x.after).padStart(8)}  (${((1 - x.after / x.before) * 100).toFixed(0)}% smaller)`);
console.log(`${'total'.padEnd(36)} ${kb(before).padStart(9)} -> ${kb(after).padStart(8)}`);
console.log('wrote src/model-data.json');
