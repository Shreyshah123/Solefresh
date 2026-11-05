// Stage 3 "How it works": the four step animations, the step-3 working loop
// and the scroll-out, in shoe space. Shoe A sits at the origin (toe toward -x,
// heel toward +x, footbed at y 0.15); shoe B stands behind it.
//
// Everything here is a pure function: a step's state at local time t (0..1)
// depends only on t and on the state the step started from, the loop only on
// its own clock, and the scroll-out only on the state frozen when the scroll
// began and the exit progress e. So any moment can be scrubbed, and the lab
// checks every moment against the shoe's walls (lab/wall-test.mjs).
//
// A product pose is its centre (cx, cy, cz), rotations about that centre
// (roll, + dips the toe end; pitch about its long axis; spin about its own
// vertical), squash factors (sqx, sqy, sqz; local length, thickness, width),
// vis (scale, for the quick swap that sets up a skipped step) and the pull
// cord (cs, cl: swing and lay added to the stage's resting cord). The world
// applies them to the product slot, so they carry over to every size.
//
// The insert (size M 110 x 47 x 22 mm, about 0.70 x 0.30 x 0.14 here) slips
// through the collar without turning on edge, but only tilted: it threads the
// opening along one corridor (thread()), its long axis running through the
// opening's widest part, the toe end leading down onto the footbed, then lying
// down as the toe skids forward. Going in and coming out use the same corridor
// because there is only one way through; they differ in everything else. The
// lab checks every moment against the walls, on the shell's real outline.
//
// Motion grammar: going in is gravity (aim, dive, skid, settle), toe first,
// the cord trailing behind the heel. Coming out is a pull: the cord stands up
// and goes taut, two tugs, then the heel leads it out and it swings level, as
// if drawn by the cord, with no hand in frame. Colour carries the story: soft
// tan is worn, cobalt only ever comes from SoleFresh. Nothing counts, fills,
// finishes, flashes or implies how fast: Step 3 has no end moment, and its
// loop keeps the change going, ever more slowly.
import { shoeProfile } from './shoe.js';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, u) => a + (b - a) * u;
const TAU = Math.PI * 2;

export const ease = {
  lin: (u) => u,
  sm: (u) => u * u * (3 - 2 * u),
  in: (u) => u * u * u,
  in2: (u) => u * u,
  out: (u) => 1 - (1 - u) ** 3,
  out2: (u) => 1 - (1 - u) ** 2,
  io: (u) => (u < 0.5 ? 4 * u * u * u : 1 - (-2 * u + 2) ** 3 / 2),
  sine: (u) => 0.5 - 0.5 * Math.cos(Math.PI * u),
};
/** Keyframes [[t, value, easeInto?], ...]; the ease names the curve into that key (default smoothstep). */
export function kf(keys, t) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    const k = keys[i];
    if (t <= k[0]) { const p = keys[i - 1], u = k[0] > p[0] ? (t - p[0]) / (k[0] - p[0]) : 1; return lerp(p[1], k[1], ease[k[2] || 'sm'](u)); }
  }
  return keys[keys.length - 1][1];
}
/**
 * Monotone cubic through keys [[t, value], ...] (Fritsch-Carlson), at rest at
 * both ends: a path that flows through its waypoints without stopping at them
 * and never overshoots them.
 */
export function spline(keys, t) {
  const n = keys.length;
  if (t <= keys[0][0]) return keys[0][1];
  if (t >= keys[n - 1][0]) return keys[n - 1][1];
  const d = [], m = new Array(n).fill(0);
  for (let i = 0; i < n - 1; i++) d.push((keys[i + 1][1] - keys[i][1]) / (keys[i + 1][0] - keys[i][0]));
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
    const a = m[i] / d[i], b = m[i + 1] / d[i], s = a * a + b * b;
    if (s > 9) { const k = 3 / Math.sqrt(s); m[i] = k * a * d[i]; m[i + 1] = k * b * d[i]; }
  }
  let i = 0; while (t > keys[i + 1][0]) i++;
  const [t0, v0] = keys[i], [t1, v1] = keys[i + 1], h = t1 - t0, u = (t - t0) / h, u2 = u * u, u3 = u2 * u;
  return (2 * u3 - 3 * u2 + 1) * v0 + (u3 - 2 * u2 + u) * h * m[i] + (-2 * u3 + 3 * u2) * v1 + (u3 - u2) * h * m[i + 1];
}
const seg = (t, a, b) => clamp((t - a) / (b - a));
const fract = (x) => x - Math.floor(x);
const hash = (k, s) => fract(Math.sin(k * 127.1 + s * 311.7 + 0.5) * 43758.5453);
const pick = (k, s, a, b) => lerp(a, b, hash(k, s));
function mix(a, b, t) {
  const ch = (c, s) => (c >> s) & 255, m = (s) => Math.round(ch(a, s) + (ch(b, s) - ch(a, s)) * clamp(t));
  return (m(16) << 16) | (m(8) << 8) | m(0);
}

// Display colours (sRGB). Cobalt is the only accent; light cobalt is the palest particle; tan only ever means worn.
export const COLORS = { cobalt: 0x2346ff, cobaltLight: 0x7f94ff, cobaltPale: 0xa9b7ff, tan: 0xd8b48c, tanLight: 0xead6bc };
export const KEYS3 = ['cx', 'cy', 'cz', 'pitch', 'roll', 'spin', 'sqx', 'sqy', 'sqz', 'vis', 'cs', 'cl', 'hl', 'aY', 'aSq', 'aTilt', 'aRel', 'aTint', 'bY', 'bSq', 'bTilt', 'bRel', 'bTint', 'glow'];
export const PRODUCT_KEYS = ['cx', 'cy', 'cz', 'pitch', 'roll', 'spin', 'sqx', 'sqy', 'sqz', 'vis', 'cs', 'cl'];
/** The pull cord's poses about the heel window, in radians: swing (+ droops) when it hangs, relaxes or lies down, and lay when flat. */
export const CORD = { hang: 1.25, relaxed: 0.5, droop: 0.34, flat: Math.PI / 2 };

const TILT = 0.72;         // the insert's tilt as it threads the collar, toe end down
const THROAT = [0.37, 0.6]; // the opening's widest part at rim height: the corridor's long axis runs through it
const FOOTBED = 0.15;
const UPPER = 0.95;        // shoe A's outer upper at rest; aRel is a share of it
const PLACED = 0.5 / UPPER, WORKING = 0.4 / UPPER; // see-through while the product is inside (placed, working)
// Shoe B's opening (B stands at (-0.72, 0, -0.95), yawed 0.1), for its breath.
const B_AT = (lx, lz) => [-0.72 + lx * Math.cos(0.1) + lz * Math.sin(0.1), -0.95 - lx * Math.sin(0.1) + lz * Math.cos(0.1)];

// Shoe A's collar: the lip (both edges) for the pulse that traces it, and the rim height along x, below which an
// effect is inside the shoe (veiled by the upper) and above which it is in front.
const P = shoeProfile;
const sOf = (x) => (x + P.L / 2) / P.L;
const mkV = () => ({ x: 0, y: 0, z: 0, set(x, y, z) { this.x = x; this.y = y; this.z = z; return this; } });
const surf = (s, th, out = mkV()) => { P.upperPt(s, th, out); return out; };
const _lv = mkV();
const LIP = (() => {
  const pts = [];
  for (let i = 0; i < 22; i++) {
    const s = 0.44 + (i / 21) * 0.51, o = P.opening(s), w = P.hw(s); if (!(o > 0 && o < w)) continue;
    for (const sg of [1, -1]) {
      const th0 = Math.acos(sg * o / w), a = surf(s, th0), b = surf(s, th0 - sg * 0.01), per = Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z) / 0.01;
      pts.push({ s, th0, sg, x: a.x, dth: 0.1 / Math.max(per, 1e-3) }); // dth: the turn that slides 0.10 along the upper, away from the opening
    }
  }
  return pts;
})();
const RIM = (() => { const t = []; for (let i = 0; i <= 120; i++) { const x = -0.2 + i * 0.01, s = clamp(sOf(x), 0.012, 0.988), o = P.opening(s), w = P.hw(s); t.push(o > 0 && o < w ? surf(s, Math.acos(o / w)).y : P.SOLE_H + P.H(s)); } return t; })();
const rimY = (x) => { const f = clamp((x + 0.2) / 0.01, 0, 120), i = Math.min(119, Math.floor(f)); return lerp(RIM[i], RIM[i + 1], f - i); };

/**
 * hh, hw, hx: the shell's half-thickness, half-width and half-length at the Stage 3 scale (0.07, 0.148, 0.348 for
 * size M); measuredHalf(r): its half-height when tilted by r, measured on the loaded model; upPose: the product
 * centre the travel up to Stage 2 has at u 0.70, where the climb-out going up hands over.
 */
export function makeStage3(hh = 0.0697, hw = 0.148, measuredHalf = null, hx = 0.348, upPose = { cx: 0.308, cy: 0.9 }) {
  const HOVER = { cx: 0.32, cy: 0.72 + hh, cz: 0, cs: 0, cl: 0 };
  const SEAT = { cx: 0.1, cy: FOOTBED + hh, cz: 0, cs: CORD.droop - CORD.hang, cl: CORD.flat };  // the cord lies on the footbed behind the heel end
  const REST = { ...HOVER, pitch: 0, roll: 0, spin: 0, sqx: 1, sqy: 1, sqz: 1, vis: 1, hl: 0, aY: 0, aSq: 1, aTilt: 0, aRel: 1, aTint: 0, bY: 0, bSq: 1, bTilt: 0, bRel: 1, bTint: 0, glow: 0 };
  const half = measuredHalf || ((r) => Math.abs(Math.sin(r)) * hx + Math.abs(Math.cos(r)) * hh);
  const lie = (r, gap = 0.008) => FOOTBED + gap + half(r);
  const vol = (o, sy) => { o.sqy = sy; o.sqx = o.sqz = 1 / Math.sqrt(sy); };   // volume-kept squash about the centre (only above the shoe)
  const hold = (t, f, o, until, target) => {                                      // ease product leftovers to a pose
    for (const k of ['cx', 'cy', 'cz', 'cs', 'cl']) o[k] = kf([[0, f[k]], [until, target[k]]], t);
    for (const k of ['pitch', 'roll', 'spin']) o[k] = kf([[0, f[k]], [until, 0]], t);
    for (const k of ['sqx', 'sqy', 'sqz', 'vis']) o[k] = kf([[0, f[k]], [until, 1]], t);
  };
  const rest = (t, f, o, keys, until = 0.07) => { for (const k of keys) o[k] = kf([[0, f[k]], [until, REST[k]]], t); };
  /** An effect particle that may cross the rim: inside the shoe it is veiled by the upper, above it in front; a short crossfade between. */
  function emit(fx, x, y, z, o) {
    const w = clamp((y - (rimY(x) - 0.03)) / 0.06), a = o.alpha;
    // over blending: back a(1-w)/(1-aw) under front aw composite to exactly a where nothing lies between them
    if (w < 1) { o.layer = 'back'; o.alpha = w > 0 ? a * (1 - w) / Math.max(1e-4, 1 - a * w) : a; fx.add(x, y, z, o); }
    if (w > 0) { o.layer = 'front'; o.alpha = a * w; fx.add(x, y, z, o); }
    o.alpha = a;
  }
  // The corridor through the collar, from lying in the shoe (w 0) to tilted just clear of the rim (w 1). Up to W_LIE it
  // rides the footbed, tilting up about its toe as the toe skids back; past that it slides along its own axis, which
  // runs through the opening's widest part, and it never has to turn while the rim is around it.
  const W_LIE = 0.45, CT = Math.cos(TILT), ST = Math.sin(TILT);
  const C1 = { cx: THROAT[0] + (lie(TILT) - THROAT[1]) * CT / ST, cy: lie(TILT) };
  const TOE_OUT = Math.min(0.68, 1.19 - 2 * hx * ST - hh * CT);  // the toe tip's height when clear of the rim, lower for a longer insert so its heel stays under the page's height limit
  const RISE = (TOE_OUT + hx * ST - C1.cy) / ST;
  const CLEAR = { cx: C1.cx + RISE * CT, cy: C1.cy + RISE * ST };
  const TOE0 = SEAT.cx - hx, TOE1 = C1.cx - hx * CT;
  function thread(w, o) {
    if (w < W_LIE) {
      const u = w / W_LIE, r = TILT * ease.sm(u), toe = lerp(TOE0, TOE1, ease.sm(u));
      o.roll = r; o.cx = toe + hx * Math.cos(r); o.cy = Math.max(lie(r), SEAT.cy);
    } else {
      const d = RISE * (w - W_LIE) / (1 - W_LIE);
      o.roll = TILT; o.cx = C1.cx + d * CT; o.cy = C1.cy + d * ST;
    }
    return o;
  }
  const n = (fx, count) => Math.max(1, Math.round(count * (fx.k || 1)));          // fewer particles on phones

  // ------------------------------------------------------------ 1 Finish wearing
  // The pair is set down after a session: each shoe comes up toe first, lands
  // heel first and the toe slaps down, back shoe then front ("ba-dum"). Each
  // collar breathes out a few soft tan motes, shoe A's around the hovering
  // product's tips. The product holds perfectly still. The frame ends clean.
  function poseFinish(t, f, o) {
    hold(t, f, o, 0.07, HOVER);
    o.bY = kf([[0, f.bY], [0.12, 0.1, 'out'], [0.23, 0, 'in2']], t);
    o.bTilt = kf([[0, f.bTilt], [0.12, -0.12, 'out'], [0.23, -0.09], [0.28, 0, 'in2']], t);            // toe up, about the heel
    o.bSq = kf([[0, f.bSq], [0.07, 1.025, 'out'], [0.2, 1], [0.28, 1], [0.31, 0.955, 'out'], [0.37, 1.015], [0.45, 1]], t);
    o.aY = kf([[0, f.aY], [0.1, 0], [0.22, 0.06, 'out'], [0.33, 0, 'in2']], t);
    o.aTilt = kf([[0, f.aTilt], [0.1, 0], [0.22, -0.07, 'out'], [0.33, -0.05], [0.38, 0, 'in2']], t);
    o.aSq = kf([[0, f.aSq], [0.1, 1], [0.17, 1.02, 'out'], [0.3, 1], [0.38, 1], [0.41, 0.96, 'out'], [0.47, 1.012], [0.55, 1]], t);
    o.aRel = kf([[0, f.aRel], [0.07, 1]], t); o.bRel = 1;
    o.aTint = kf([[0, f.aTint], [0.4, f.aTint], [0.9, 1]], t); o.bTint = 0; // worn, hidden under the upper; shoe B never changes state
    o.glow = kf([[0, f.glow], [0.07, 0]], t); o.hl = kf([[0, f.hl], [0.07, 0]], t);
  }
  function fxFinish(t, f, fx) {
    const ms = 1500;
    const mote = (k, born, life, x0, y0, z0, dx, dz, rise, s) => {
      const u = (t - born) / (life / ms); if (u <= 0 || u >= 1) return;
      const x = x0 + dx * u + 0.02 * Math.sin(u * TAU * 0.8 * life / 1000 + k), y = y0 + rise * ease.out2(u), z = z0 + dz * u;
      const o = { kind: 'dot', size: lerp(0.04, 0.055, u), color: mix(COLORS.tan, COLORS.tanLight, u), alpha: 0.5 * (u < 0.2 ? u / 0.2 : 1 - ease.in2(seg(u, 0.2, 1))), hard: 0.15 };
      if (s) emit(fx, x, y, z, o); else fx.add(x, y, z, o);
    };
    for (let k = 0; k < 5; k++) {   // shoe B breathes out first
      const [x, z] = B_AT(0.04 + k * 0.12 + pick(k, 1, -0.02, 0.02), pick(k, 2, -0.06, 0.06));
      mote(k, 0.29 + k * 0.02, pick(k, 3, 750, 900), x, 0.58, z, 0.04, 0, pick(k, 4, 0.28, 0.36), false);
    }
    for (let k = 0; k < 6; k++) {   // shoe A's go past the product's tips, away from it
      const heel = k < 3, x0 = heel ? pick(k, 5, 0.74, 0.84) : pick(k, 6, -0.13, -0.07);
      mote(k + 5, 0.39 + k * 0.016, pick(k, 7, 700, 800), x0, heel ? 0.67 : 0.54, pick(k, 8, -0.04, 0.04), heel ? 0.06 : -0.06, 0.05, pick(k, 9, 0.26, 0.34), true);
    }
  }

  // ------------------------------------------------------------- 2 Place inside
  // It gathers, springs up and back and tips its toe end down over the opening,
  // holds a beat like a diver on the edge, and dives in toe first with the cord
  // streaming behind the heel. A thin cobalt line runs round the collar's lip and
  // a few sparks flick up as it crosses; the near wall swallows it before the
  // shoe turns see-through. The toe lands on the footbed and skids forward as the
  // heel end comes down, it touches down, the cord flops out flat behind it, and
  // cobalt stars spring out of the opening: a greeting. Nothing about the shoe
  // changes yet.
  const T_GATHER = 0.1, T_AIM = 0.3, T_DIVE = 0.36, T_LAND = 0.56, T_FLAT = 0.8, T_DOWN = 0.9;
  const T_CROSS = T_DIVE + (T_LAND - T_DIVE) * Math.sqrt(clamp(1 - (0.62 + hx * ST - C1.cy) / ST / RISE)); // the moment the toe tip passes the rim
  function posePlace(t, f, o) {
    o.pitch = kf([[0, f.pitch], [T_GATHER, 0]], t); o.spin = kf([[0, f.spin], [T_GATHER, 0]], t); o.vis = 1; o.cz = kf([[0, f.cz], [T_GATHER, 0]], t);
    if (t < T_GATHER) { const u = ease.io(t / T_GATHER); o.cx = lerp(f.cx, HOVER.cx + 0.02, u); o.cy = lerp(f.cy, HOVER.cy - 0.03, u); o.roll = lerp(f.roll, -0.04, u); }  // gathers, clear of the collar at any size
    else if (t < T_AIM) { const u = seg(t, T_GATHER, T_AIM), e = ease.out(u); o.cx = lerp(HOVER.cx + 0.02, CLEAR.cx, e); o.cy = lerp(HOVER.cy - 0.03, CLEAR.cy, e); o.roll = lerp(-0.04, TILT, ease.io(u)); } // springs up and back, tipping over
    else if (t < T_DIVE) { o.cx = CLEAR.cx; o.cy = CLEAR.cy; o.roll = TILT; }                                                                                                      // aims
    else if (t < T_LAND) thread(1 - (1 - W_LIE) * ease.in2(seg(t, T_DIVE, T_LAND)), o);                                                                                             // dives, toe first
    else if (t < T_FLAT) thread(W_LIE * (1 - ease.out(seg(t, T_LAND, T_FLAT))), o);                                                                                                 // skids, heel end coming down
    else { o.cx = SEAT.cx; o.roll = 0; }
    // squash: gather and launch above the shoe (volume kept), a footbed-anchored touchdown
    const sy = kf([[0, f.sqy], [T_GATHER, 0.9, 'io'], [0.15, 1.06, 'out'], [0.22, 1], [T_FLAT, 1], [0.84, 0.95, 'out'], [T_DOWN, 1.02], [1, 1]], t);
    if (t < T_FLAT) vol(o, t < 0.24 ? sy : 1); else { o.sqy = sy; o.sqx = kf([[T_FLAT, 1], [0.84, 1.02, 'out'], [T_DOWN, 0.995], [1, 1]], t); o.sqz = 1; }
    o.aSq = kf([[0, f.aSq], [0.07, 1], [T_LAND, 1], [0.6, 0.99, 'out'], [T_FLAT, 1], [0.84, 0.985, 'out'], [T_DOWN, 1.004], [1, 1]], t);  // the shoe catches it, toe then heel
    if (t >= T_FLAT) o.cy = FOOTBED * o.aSq + hh * o.sqy;
    // the cord: hangs, lags the spring, hangs at the aim, then streams behind the heel; it flops flat as the insert lies down
    const hang = 0, along = -CORD.hang;
    o.cs = kf([[0, f.cs], [T_GATHER, hang + 0.1], [0.2, hang + 0.3], [T_AIM, hang - 0.15], [T_DIVE, hang - 0.3], [T_LAND, along + 0.1], [T_FLAT, SEAT.cs - 0.2], [T_DOWN, SEAT.cs + 0.1], [1, SEAT.cs]], t);
    o.cl = kf([[0, f.cl], [T_LAND, 0], [T_FLAT, CORD.flat * 0.8], [T_DOWN, CORD.flat * 1.06], [1, CORD.flat]], t);
    rest(t, f, o, ['aY', 'aTilt', 'bY', 'bSq', 'bTilt']);
    o.aRel = kf([[0, f.aRel], [0.07, 1], [0.5, 1], [0.62, PLACED]], t); o.bRel = 1; o.bTint = 0; // opaque until the wall has swallowed it
    o.aTint = 1;                                       // worn (hidden under the opaque upper): landing changes nothing, Step 3 does
    o.glow = kf([[0, f.glow], [0.07, 0], [0.86, 0], [0.98, 0.25, 'out']], t);   // a soft cool cast inside, never a flash
    o.hl = kf([[0, f.hl], [0.07, 0], [0.86, 0], [0.98, 0.1, 'out']], t);
  }
  // A thin cobalt line that runs round the collar's lip from where the product crosses it, out to the toe and heel
  // ends. The near edge slides a little way down the upper as it fades; the far edge shows only beyond the on-edge
  // product (which hides the rest of it), holds on the rim's crest and is veiled by the near wall, not cut by it.
  // ms: time since the crossing.
  function lipPulse(fx, ms) {
    if (ms <= 0 || ms >= 470) return;
    const thin = (fx.k || 1) < 1, x0 = THROAT[0];
    for (let i = 0; i < LIP.length; i++) {
      if (thin && i % 4 === 3) continue;          // about 32 on phones
      const L = LIP[i], far = L.sg < 0; if (far && Math.abs(L.x - x0) <= 0.35) continue;
      const u = (ms - 150 * Math.min(1, Math.abs(L.x - x0) / 0.5)) / 300; // the head reaches the ends after 150 ms
      if (u <= 0 || u >= 1) continue;
      // 2 mm off the upper on the side that faces the camera: outside on the near edge, on the lining on the far one
      const v = surf(L.s, far ? L.th0 : L.th0 - L.sg * L.dth * ease.out(u), _lv), ny = (v.y - 0.3), nz = v.z, nn = (Math.hypot(ny, nz) || 1) / (0.002 * L.sg);
      const a = u < 0.22 ? ease.sm(u / 0.22) : 1 - ease.in2((u - 0.22) / 0.78);
      fx.add(v.x, v.y + ny / nn, v.z + nz / nn, { kind: 'dot', size: 0.022, color: COLORS.cobalt, alpha: 0.6 * a, hard: 0.55, layer: far ? 'back' : 'front' });
    }
  }
  function rimSparks(fx, t0, t) {
    const ms = 1700;
    for (let k = 0; k < 6; k++) {
      const u = ((t - t0) * ms - pick(k, 70, 0, 40)) / 350; if (u <= 0 || u >= 1) continue;
      const L = LIP[Math.floor(hash(k, 71) * LIP.length)], r = surf(L.s, L.th0, _lv), d = ease.out(u), out = Math.sign(r.z) || 1;
      fx.add(r.x, r.y + pick(k, 72, 0.15, 0.25) * d, r.z + out * 0.1 * d, { kind: 'spark', size: lerp(0.06, 0.035, u), color: k % 2 ? COLORS.cobaltLight : COLORS.cobalt, alpha: Math.min(1, u / 0.15) * (1 - ease.in2(u)), rot: 0.5 * u + hash(k, 73) });
    }
  }
  function footRing(fx, u, A, rx0 = hx + 0.07, rx1 = hx + 0.37) {
    if (u <= 0 || u >= 1) return;
    fx.ring(SEAT.cx, FOOTBED + 0.006, 0, lerp(rx0, rx1, ease.out(u)), { rz: lerp(hw + 0.02, hw + 0.05, ease.out(u)), color: COLORS.cobalt, alpha: A * (1 - ease.out(u)), width: 0.045, layer: 'back' });
  }
  function fxPlace(t, f, fx) {
    const ms = 1700;
    lipPulse(fx, (t - T_CROSS) * ms);
    rimSparks(fx, T_CROSS, t);
    footRing(fx, (t - T_FLAT - 0.04) * ms / 450, 0.4, hx + 0.07, hx + 0.37);
    // the greeting: stars spring up out of the opening
    const N = n(fx, 12);
    for (let k = 0; k < N; k++) {
      const born = lerp(0.88, 0.94, k / Math.max(1, N - 1)), life = pick(k, 80, 600, 750), u = (t - born) * ms / life; if (u <= 0 || u >= 1) continue;
      const star = k % 3 !== 2, x0 = pick(k, 81, 0, 0.3), x1 = pick(k, 82, 0.08, 0.36), z = pick(k, 83, -0.06, 0.06);
      const x = lerp(x0, x1, ease.sm(seg(u, 0, 0.4))) + 0.025 * Math.sin(u * 6.5 + k), y = lerp(FOOTBED + 2 * hh + 0.03, pick(k, 84, 0.82, 0.98), ease.out2(u));
      emit(fx, x, y, clamp(z, -0.06, 0.06), { kind: star ? 'spark' : 'dot', size: star ? 0.08 * (0.6 + 0.4 * Math.sin(Math.PI * u)) : 0.03, color: star ? COLORS.cobalt : COLORS.cobaltLight, alpha: Math.min(1, u * 8) * (1 - ease.in2(seg(u, 0.55, 1))), hard: 0.5, rot: 0.5 * u });
    }
  }

  // ---------------------------------------------------------- 3 Let it work
  // The product never moves. Warm motes from the toe box and the heel are
  // drawn into it and turn cobalt as they arrive; two slow rings carry the
  // change across the footbed as it cools from worn toward fresh; light
  // cobalt motes drift up out of the collar, with two faint puffs for the
  // optional fragrance. The timed part stops with the footbed only part-way
  // changed, and the loop carries on. No end moment, no bar.
  function poseWork(t, f, o) {
    hold(t, f, o, 0.08, SEAT);
    o.aRel = kf([[0, f.aRel], [0.12, WORKING]], t);
    o.aTint = kf([[0, f.aTint], [0.1, 1], [0.22, 1], [1, -0.4, 'io']], t);  // (replaying: visibly worn again first)
    o.glow = kf([[0, f.glow], [0.15, 0.35, 'out']], t); o.hl = kf([[0, f.hl], [0.15, 0.2, 'out']], t);
    rest(t, f, o, ['aY', 'aSq', 'aTilt', 'bY', 'bSq', 'bTilt']); o.bTint = 0;
  }
  // A warm mote in the toe box or at the heel, drawn on a gentle arc to the product's nearest end, turning cobalt.
  function drawIn(fx, k, u, salt, A = 0.6, big = true) {
    if (u <= 0) return;
    const toe = hash(k, salt) < 0.5;
    const x0 = toe ? pick(k, salt + 1, -0.72, -0.36) : pick(k, salt + 1, 0.54, 0.78), y0 = toe ? pick(k, salt + 2, 0.17, 0.26) : pick(k, salt + 2, 0.18, 0.36);
    const z0 = pick(k, salt + 3, -1, 1) * (toe ? 0.15 : 0.16), to = toe ? [SEAT.cx - hx * 0.95, FOOTBED + 2 * hh + 0.01] : [SEAT.cx + hx * 0.95, FOOTBED + 2 * hh + 0.02];
    if (u < 1) {
      const p = ease.in2(u), q = (a, b, c) => (1 - p) * (1 - p) * a + 2 * (1 - p) * p * c + p * p * b;
      const x = q(x0, to[0], (x0 + to[0]) / 2), y = q(y0, to[1], Math.max(y0, to[1]) + 0.05), z = q(z0, 0.4 * z0, 0.7 * z0);
      const tail = seg(u, 0.6, 1);
      fx.add(x, y, z, { layer: 'back', kind: 'dot', size: (big ? pick(k, salt + 4, 0.055, 0.07) : 0.05) * (1 - 0.75 * tail), color: mix(COLORS.tan, COLORS.cobaltLight, tail), alpha: A * Math.min(1, u * 6), hard: 0.2 });
    } else {                                    // a cobalt pinpoint where it was taken in
      const v = (u - 1) * 7; if (v >= 1) return;
      fx.add(to[0], to[1], 0.4 * z0, { layer: 'back', kind: 'dot', size: 0.02, color: COLORS.cobalt, alpha: 0.8 * (1 - v), hard: 0.6 });
    }
  }
  // A light cobalt mote or a cobalt star lifting off the product and drifting up out of the collar.
  function release(fx, k, u, salt, A = 1, star = k % 3 === 0) {
    if (u <= 0 || u >= 1) return;
    const xs = pick(k, salt, 0, 0.32), xo = pick(k, salt + 1, 0.08, 0.36), zs = pick(k, salt + 2, -0.06, 0.06);
    const x = lerp(xs, xo, ease.sm(seg(u, 0, 0.35))) + 0.025 * Math.sin(u * 8.6 + k), y = lerp(FOOTBED + 2 * hh + 0.03, FOOTBED + 2 * hh + 0.03 + pick(k, salt + 3, 0.45, 0.6), ease.out2(u));
    const z = clamp(zs * (1 - 0.5 * u), -0.06, 0.06);
    emit(fx, x, y, z, { kind: star ? 'spark' : 'dot', size: star ? 0.07 * (0.6 + 0.4 * Math.sin(Math.PI * u)) : pick(k, salt + 4, 0.03, 0.035), color: star ? COLORS.cobalt : COLORS.cobaltLight, alpha: A * Math.min(1, u * 10) * (1 - ease.in2(seg(u, 0.6, 1))), hard: 0.5, rot: 0.26 * Math.sin(u * 9 + k) });
  }
  function fxWork(t, f, fx) {
    const ms = 2800;
    footRing(fx, (t - 0.22) * ms / 900, 0.3, hx + 0.05, hx + 0.39); footRing(fx, (t - 0.48) * ms / 900, 0.22, hx + 0.05, hx + 0.39);
    const D = n(fx, 18);
    for (let k = 0; k < D; k++) { const born = lerp(0.04, 0.3, k / Math.max(1, D - 1)); drawIn(fx, k, (t - born) * ms / pick(k, 20, 850, 950), 21); }
    const R = n(fx, 17);
    for (let k = 0; k < R; k++) { const born = lerp(0.3, 0.8, k / Math.max(1, R - 1)); release(fx, k, (t - born) * ms / pick(k, 30, 1200, 1500), 31, 1, k % 3 === 0 && k < 15); }
    for (const [b, x] of [[0.6, 0.18], [0.72, 0.32]]) {         // the optional fragrance: two faint puffs
      const u = (t - b) * ms / 900; if (u <= 0 || u >= 1) continue;
      fx.add(x, 0.6 + 0.25 * ease.out2(u), 0.02, { kind: 'dot', size: lerp(0.22, 0.5, u), color: COLORS.cobaltPale, alpha: 0.1 * Math.sin(Math.PI * u), hard: 0 });
    }
  }
  // The loop: no fixed period. The glow follows two slow sines that never line up; single motes leave or arrive at
  // irregular moments; the footbed keeps cooling, ever more slowly, and never arrives.
  // Slots 1.8 to 3.4 s apart, made as far ahead as the loop runs (it has no end); OUTS[i]: releases among the slots before i.
  const SLOTS = [0.5], OUTS = [0];
  const grow = () => { const k = SLOTS.length - 1; SLOTS.push(SLOTS[k] + 1.8 + 1.6 * hash(k, 90)); OUTS.push(OUTS[k] + (hash(k, 91) < 0.7 ? 1 : 0)); };
  /** amp: liveliness, 1 while the visitor is about, easing to 0 (a still glow, no motes) after a long spell with no input. */
  function loop(sec, P, fx, amp = 1) {
    const b = amp * 0.5 * (Math.sin(TAU * sec / 5.3) + Math.sin(TAU * sec / 8.9));
    P.glow = 0.35 + 0.05 * b; P.hl = 0.2 + 0.03 * b; P.aTint = -1 + 0.6 * Math.exp(-sec / 4.5);
    if (!fx || amp <= 0.004) return true;
    while (SLOTS[SLOTS.length - 1] < sec + 0.01) grow();
    let lo = 0, hi = SLOTS.length - 1;                // the first slot still alive (a mote lives 2.2 s at most)
    while (lo < hi) { const m = (lo + hi) >> 1; if (sec - SLOTS[m] > 2.2) lo = m + 1; else hi = m; }
    for (let i = lo; i < SLOTS.length; i++) {
      const d = sec - SLOTS[i]; if (d < -0.01) break;
      if (hash(i, 91) < 0.7) release(fx, i, d / 2.0, 92, 0.75 * amp, (OUTS[i] + 1) % 3 === 0);
      else drawIn(fx, i, d / 1.4, 93, 0.45 * amp, false);
    }
    return true;
  }

  // ---------------------------------------------------------- 4 Remove, reuse
  // A pull, not the insertion backwards, and no hand in frame. The cord stands
  // up off the footbed and goes taut. Two small tugs lift the heel end, then it
  // comes: the heel leads it up and out along the corridor, fastest at the start,
  // trailing fresh air; clear of the rim it swings level like something let go
  // of, and the cord drops to hang. It settles on air where Step 2 begins. If
  // the shoe was freshened, two cobalt twinkles on the closed shoe: ready for
  // the next wear.
  const R_TAUT = 0.1, R_TUG1 = 0.17, R_SLACK = 0.22, R_TUG2 = 0.31, R_PULL = 0.34, R_OUT = 0.6, R_LEVEL = 0.86;
  function poseRemove(t, f, o) {
    o.pitch = kf([[0, f.pitch], [0.08, 0]], t); o.spin = kf([[0, f.spin], [0.08, 0]], t); o.vis = 1; o.cz = kf([[0, f.cz], [0.08, 0]], t);
    o.aSq = kf([[0, f.aSq], [0.07, 1], [R_TUG2, 1], [R_PULL, 1.012, 'out'], [0.42, 0.992], [0.5, 1]], t);
    if (t < R_OUT) {
      const w = kf([[0, 0], [R_TAUT, 0], [R_TUG1, 0.09, 'out'], [R_SLACK, 0.05], [R_TUG2, 0.2, 'out'], [R_PULL, 0.17], [R_OUT, 1, 'out2']], t);
      thread(w, o);
      if (t < 0.08) { const u = ease.sm(t / 0.08); o.cx = lerp(f.cx, o.cx, u); o.cy = lerp(f.cy, o.cy, u); o.roll = lerp(f.roll, o.roll, u); }
    } else {
      const u = seg(t, R_OUT, R_LEVEL);
      o.cx = lerp(CLEAR.cx, HOVER.cx, ease.sm(u)); o.cy = spline([[R_OUT, CLEAR.cy], [0.7, CLEAR.cy + 0.03], [R_LEVEL, HOVER.cy - 0.012], [1, HOVER.cy]], t);
      o.roll = kf([[R_OUT, TILT], [0.76, -0.16, 'io'], [R_LEVEL, 0.06], [1, 0]], t);   // swings through level, like something let go of
    }
    if (t < R_LEVEL) { o.sqy = 1; o.sqx = 1; o.sqz = 1; } else vol(o, kf([[R_LEVEL, 1], [0.91, 0.96, 'out'], [0.96, 1.012], [1, 1]], t)); // lands on air
    // the cord: stands up and goes taut along the pull, leads the way out, then drops to hang
    const along = -CORD.hang, up = -CORD.hang - 1.2;
    o.cs = kf([[0, f.cs], [R_TAUT, up], [R_TUG2, up + 0.5], [R_PULL + 0.06, along], [R_OUT, along], [0.74, 0.35], [R_LEVEL, -0.12], [1, 0]], t);
    o.cl = kf([[0, f.cl], [R_TAUT * 0.8, 0]], t);
    rest(t, f, o, ['aY', 'aTilt', 'bY', 'bSq', 'bTilt']); o.bRel = 1; o.bTint = 0;
    o.aRel = kf([[0, f.aRel], [0.42, f.aRel], [0.58, 1]], t);
    o.glow = kf([[0, f.glow], [0.1, Math.min(f.glow, 0.25)], [R_TUG2, Math.min(f.glow, 0.2)], [0.56, 0]], t);
    o.hl = kf([[0, f.hl], [0.1, Math.min(f.hl, 0.1)], [0.6, 0]], t);
    o.aTint = f.aTint;                             // taking it out changes nothing about the shoe
  }
  const tmpP = { ...REST }, TWINKLES = [[0.84, -0.8, 0.31, 0.1], [0.89, 0.84, 0.64, 0.12]];
  function fxRemove(t, f, fx) {
    const ms = 1600, W = n(fx, 13);
    let rise = 0; if (t > R_PULL) { poseRemove(Math.min(t, R_OUT), f, tmpP); rise = Math.max(0, tmpP.cy - 0.37); } // how far up it has been drawn
    for (let k = 0; k < W; k++) {                 // a wake of fresh air streaming up out of the collar behind it
      const born = lerp(R_PULL + 0.02, R_PULL + 0.14, k / Math.max(1, W - 1)), life = pick(k, 60, 450, 650), u = (t - born) * ms / life; if (u <= 0 || u >= 1) continue;
      const star = k % 4 === 3, x0 = pick(k, 61, 0.25, 0.55), y0 = pick(k, 62, 0.56, 0.6), d = ease.out(u);
      const lift = pick(k, 63, 0.35, 0.75) * rise;
      fx.add(x0 + pick(k, 64, -0.12, 0.12) * d, y0 + lift * d, pick(k, 65, -0.09, 0.09), { kind: star ? 'spark' : 'dot', size: star ? 0.06 : 0.03, color: star ? COLORS.cobalt : COLORS.cobaltLight, alpha: 0.8 * (1 - u), hard: 0.5, rot: 0.4 * u });
    }
    if (f.aTint < 0) for (const [b, x, y, z] of TWINKLES) { // ready for the next wear
      const u = (t - b) * ms / 300; if (u <= 0 || u >= 1) continue;
      fx.add(x, y, z, { kind: 'spark', size: 0.09 * Math.sin(Math.PI * u), color: COLORS.cobalt, alpha: 1, rot: 0.44 * u });
    }
  }

  // tail: how far past the end (as a share of the step) its effects keep running
  const steps = [
    { id: 'finish', ms: 1500, needs: 'hover', ends: 'hover', pose: poseFinish, fx: fxFinish, tail: 0.06 },
    { id: 'place', ms: 1700, needs: 'hover', ends: 'inside', pose: posePlace, fx: fxPlace, tail: 0.45 },
    { id: 'work', ms: 2800, needs: 'inside', ends: 'inside', pose: poseWork, fx: fxWork, tail: 0.6 },
    { id: 'remove', ms: 1600, needs: 'inside', ends: 'hover', pose: poseRemove, fx: fxRemove, tail: 0.12 },
  ];

  /** The state a step starts from after a quick swap: the product at its needed place, dressed for that step. */
  function startOf(i, Pc) {
    const o = { ...Pc, pitch: 0, roll: 0, spin: 0, sqx: 1, sqy: 1, sqz: 1, vis: 1, aY: 0, bY: 0, aSq: 1, bSq: 1, aTilt: 0, bTilt: 0 };
    if (steps[i].needs === 'inside') Object.assign(o, SEAT, i === 3 ? { aRel: WORKING, glow: 0.25, hl: 0.1, aTint: Math.min(Pc.aTint, -0.4) } : { aRel: PLACED, glow: 0.25, hl: 0.1, aTint: 1 });
    else Object.assign(o, HOVER, { aRel: 1, glow: 0, hl: 0 }, i === 1 ? { aTint: 1 } : {});
    return o;
  }
  /** Whether step i can start from Pc directly (easing in), or needs the quick swap first. */
  function canBlend(i, Pc) {
    const c = steps[i].needs === 'inside' ? SEAT : HOVER, wrap = (a) => Math.abs(Math.atan2(Math.sin(a), Math.cos(a)));
    return Math.hypot(Pc.cx - c.cx, Pc.cy - c.cy, Pc.cz - c.cz) < 0.2 && wrap(Pc.pitch) < 0.3 && Math.abs(Pc.roll) < 0.3 && wrap(Pc.spin) < 0.3 && Pc.vis > 0.99 && (Pc.cy < 0.62) === (c.cy < 0.62);
  }
  /** Step i at local time t from start state f. */
  function evalStep(i, t, f, o) { Object.assign(o, f); steps[i].pose(clamp(t), f, o); return o; }

  // ------------------------------------------------------------- scroll-out
  // Frozen when a scroll leaves the stage from rest: { P, mode, t, from, up }.
  // From then on everything is a pure function of the exit progress e:
  //   hold:   the product stays at HOVER (leftover shoe offsets ease to rest);
  //   rewind: an insertion not yet flat inside runs back along its own path;
  //   finish: a removal already popping completes along its own path;
  //   climb:  anything lying inside takes the corridor out, heel first, with a
  //           ghost trail, and swings level above. Going down it settles at
  //           HOVER; going up it levels into the up-travel's own pose.
  function freeze(Pc, tl, up = false) {
    const F = { P: { ...Pc }, mode: 'hold', t: 0, from: null, up };
    if (tl && tl.step === 1 && tl.t > 0 && tl.t < T_FLAT) Object.assign(F, { mode: 'rewind', t: tl.t, from: tl.from });
    else if (tl && tl.step === 3 && tl.t >= R_PULL) Object.assign(F, { mode: 'finish', t: tl.t, from: tl.from });
    else if (Pc.cy < 0.62) F.mode = 'climb';
    return F;
  }
  const UP_POSE = upPose, tmpC = { roll: 0, cx: 0, cy: 0 };
  function climb(F, e, o) {
    const P0 = F.P, on = ease.sm(seg(e, 0, 0.1)), OUT = 0.62;
    for (const s of ['sqx', 'sqy', 'sqz', 'vis']) o[s] = lerp(P0[s], 1, ease.sm(seg(e, 0, 0.06)));
    o.spin = lerp(P0.spin, 0, ease.sm(seg(e, 0, 0.06))); o.pitch = lerp(P0.pitch, 0, ease.sm(seg(e, 0, 0.06))); o.cz = lerp(P0.cz, 0, on);
    if (e < OUT) {
      thread(ease.sm(seg(e, 0, OUT)), tmpC);
      o.cx = lerp(P0.cx, tmpC.cx, on); o.cy = lerp(P0.cy, tmpC.cy, on); o.roll = lerp(P0.roll, tmpC.roll, on);
    } else {
      const to = F.up ? UP_POSE : HOVER, u = ease.sm(seg(e, OUT, 1));
      o.cx = lerp(CLEAR.cx, to.cx, u); o.cy = lerp(CLEAR.cy, to.cy, u); o.roll = lerp(TILT, 0, ease.io(seg(e, OUT, 1)));
    }
    o.cs = kf([[0, P0.cs], [0.1, -CORD.hang - 0.8], [0.3, -CORD.hang], [OUT, -CORD.hang], [1, 0]], e);   // the cord leads it out
    o.cl = kf([[0, P0.cl], [0.08, 0]], e);
    return o;
  }
  const tmpE = { ...REST };
  /** The scene while leaving, as a function of exit progress e (0..1). */
  function exit(F, e, o) {
    const k = ease.sm(clamp(e));
    for (const key of KEYS3) o[key] = lerp(F.P[key], REST[key], k);
    o.aTint = F.P.aTint; o.bTint = F.P.bTint;                       // the insole leaves with the shoe as it is
    o.glow = lerp(F.P.glow, 0, ease.sm(seg(e, 0, 0.3))); o.hl = lerp(F.P.hl, 0, ease.sm(seg(e, 0, 0.4)));
    for (const s of ['aY', 'aSq', 'aTilt', 'bY', 'bSq', 'bTilt']) o[s] = lerp(F.P[s], REST[s], ease.sm(seg(e, 0, 0.3)));
    if (F.mode === 'rewind' || F.mode === 'finish') {
      const r = ease.sm(seg(e, 0, 0.75));
      if (F.mode === 'rewind') posePlace(F.t * (1 - r), F.from, tmpE); else poseRemove(F.t + (1 - F.t) * r, F.from, tmpE);
      PRODUCT_KEYS.forEach((x) => { o[x] = tmpE[x]; }); o.aRel = tmpE.aRel;
    } else if (F.mode === 'climb') { if (e < 1) climb(F, e, o); o.aRel = lerp(F.P.aRel, 1, ease.sm(seg(e, 0.5, 0.8))); } // at e 1 it is handed to the travel's own pose
    o.fxAlpha = 1 - ease.sm(seg(e, 0, 0.4));
    return o;
  }
  /** The scroll-out's own effect: a ghost trail where the product rose out of the collar. eRaw may run past 1 (into the next stage). */
  const TRAIL = { down: [0.3, 0.38, 0.46, 0.54, 0.62].map((ek, i) => [THROAT[0] + i * 0.09 * CT, THROAT[1] + i * 0.09 * ST, ek]).concat([[CLEAR.cx - 0.06, CLEAR.cy + 0.01, 0.74], [CLEAR.cx - 0.2, CLEAR.cy - 0.02, 0.86]]) };
  TRAIL.up = TRAIL.down;
  function exitFx(F, eRaw, fx) {
    if (!F || F.mode !== 'climb') return;
    const after = seg(eRaw, 1, 1.833);            // uL 0.30 -> 0.55 going down, 0.70 -> 0.45 going up
    for (const [x, y, ek] of F.up ? TRAIL.up : TRAIL.down) {
      const a = seg(eRaw, ek, ek + 0.04); if (a <= 0 || after >= 1) continue;
      fx.add(x, y + 0.08 * after, 0.02, { kind: 'dot', size: 0.03, color: COLORS.cobaltLight, alpha: 0.55 * a * (1 - after), hard: 0.45 });
    }
  }
  /**
   * How much of the travel's own product move applies while leaving: none until the product is out (climb: until e 1,
   * where its path ends exactly on the travel's pose), or blended in after a rewind or finish reaches HOVER.
   */
  const gate = (F, e) => (!F || F.mode === 'hold' ? 1 : F.jump ? ease.sm(seg(e, 0.6, 1)) : F.mode === 'climb' ? (e >= 1 ? 1 : 0) : ease.sm(seg(e, 0.75, 1)));

  /** Reduced motion: a still picture of each step's end (a = 1 normally; Step 1's motes fade out). */
  function still(i, Pc, fx, a = 1) {
    if (i === 0) for (const [x, y, z] of [[0.8, 0.78, 0.04], [0.86, 0.88, 0.05], [-0.12, 0.66, 0.03], [-0.42, 0.78, -0.98]]) fx.add(x, y, z, { kind: 'dot', size: 0.045, color: COLORS.tan, alpha: 0.45 * a, hard: 0.15 });
    if (i === 1) for (const [x, y] of [[0.14, 0.64], [0.3, 0.76], [0.22, 0.88]]) fx.add(x, y, 0.02, { kind: 'spark', size: 0.07, color: COLORS.cobalt, alpha: 0.95 });
    if (i === 2) { for (const [x, y] of [[0.1, 0.72], [0.34, 0.8], [0.18, 0.96]]) fx.add(x, y, 0.02, { kind: 'dot', size: 0.032, color: COLORS.cobaltLight, alpha: 0.9, hard: 0.5 }); for (const [x, y] of [[0.26, 0.66], [0.06, 0.86]]) fx.add(x, y, 0.02, { kind: 'spark', size: 0.065, color: COLORS.cobalt, alpha: 0.95 }); }
    if (i === 3 && Pc.aTint < 0) for (const [x, y, z] of [[-0.8, 0.31, 0.1], [0.84, 0.64, 0.12]]) fx.add(x, y, z, { kind: 'spark', size: 0.08, color: COLORS.cobalt, alpha: 1 });
  }
  /** Reduced motion end states (Step 3 shows the footbed further along, since there is no loop). */
  function stillState(i, f, o) { evalStep(i, 1, f, o); if (i === 2) o.aTint = -0.8; return o; }

  return { HOVER, SEAT, CLEAR, THROAT, TILT, T_CROSS, thread, REST, steps, startOf, canBlend, evalStep, loop, still, stillState, freeze, exit, exitFx, gate, upPose, hh };
}
