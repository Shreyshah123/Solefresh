// =============================================================================
// PRODUCT SLOT: the one place the product lives on this site.
//
// The model is the Stride v3.2 insert: six named parts, one mesh and one PBR
// material each (shell_bottom, carbon_sachet, silica_sachet, scent_beads,
// shell_top, pull_cord), in metres, Y up, heel end toward +X. Compressed GLBs
// are in assets/product/ (built by tools/compress-models.mjs, which also writes
// src/model-data.json: each part's bounds and exploded position per size).
// Size M loads up front; S and L only when asked for, and they are real swaps,
// not a scale, because their proportions differ. One scale (metres to slot
// units) serves all three, so S and L read as truly smaller and larger than M.
//
// Every pose, state and animation the product ever has is defined here on the
// slot and applied to whatever model is loaded, so it all carries over:
//   - stage poses and the scroll-linked travel between them (set by the world)
//   - named poses (POSES below): hero_upright and inside_upright, every angle, size and spacing editable there
//   - explode: the layers open into a stack with a small even gap between them
//   - pop-out (Inside): the selected part leaves the stack toward the viewer, the others dim
//   - highlight glow (Stage 3)
//   - sketch look (Stage 7)
//   - shell colour (Customize): shell_top and shell_bottom materials only
//   - the pull cord, which hinges at the heel window so it can trail, go taut,
//     hang and lie flat
//   - drag-to-turn with ease-back (Customize)
// Stages never touch meshes directly.
// =============================================================================
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import MODEL from './model-data.json';

/**
 * The named upright poses. Edit the values here: the world builds Stage 1 and Inside from them. Angles are in degrees.
 * Upright means the long axis stands vertical, toe end up, heel end and pull cord at the bottom, vented top facing the viewer.
 *   tilt   leans the top back, as the visitor sees it (the camera looks down on the page, so the world turns by this plus VIEW_DOWN)
 *   turn   turns it about its own long axis, so the vented face looks left and one side shows
 *   scale  size, in the same units as every other stage's scale
 *   cordSwing, cordLay  how the pull cord hangs (radians, see setCord)
 * inside_upright also sets how the product opens and how a selected part pops out, in mm of the real product:
 *   gap        the even space between layers when the stack is open
 *   pop.ms     how long the pop takes (spring)
 *   pop.side   how far to the side a popped part ends up, to the right as the visitor sees it
 *   pop.clear  how far in front of the stack it ends up
 *   pop.face   how much of the way it turns to face the camera (0 to 1)
 *   pop.cordUp how far the pull cord also rises, from below the stack to beside it
 */
export const POSES = {
  hero_upright:   { tilt: 12, turn: 20, scale: 1.25, cordSwing: 0.42, cordLay: Math.PI / 2 },
  inside_upright: { tilt: 12, turn: 20, scale: 0.89, cordSwing: 0.42, cordLay: Math.PI / 2, gap: 3.5, pop: { ms: 380, side: 26, clear: 8, face: 0.6, cordUp: 34 } },
};
/** Moving to or from an upright pose, the product travels at this share of the other stage's size and settles to it as the transition ends. */
export const TRAVEL_SIZE = 0.85;
/** Degrees the camera looks down on the page: what a tilt adds to, so the lean the visitor sees is the lean asked for. */
export const VIEW_DOWN = 14.5;

/** The parts, bottom to top with the cord last: the order of the Inside layers in content.json. */
export const PARTS = ['shell_bottom', 'carbon_sachet', 'silica_sachet', 'scent_beads', 'shell_top', 'pull_cord'];
const SHELL = new Set(['shell_bottom', 'shell_top']);
const HIDDEN_WHEN_CLOSED = new Set(['carbon_sachet', 'silica_sachet', 'scent_beads']);
const ACCENT = new THREE.Color(0x2346ff);
const INK = new THREE.Color(0x15171c);
const PEEL = 0.006;       // metres: how softly each layer comes to its stop as the stack opens
const DIM = 0.38;         // how far the parts that stay in the stack fade while one is out
const SHELL_ROUGHNESS = 0.55; // the shell's finish in every colour, no metalness
// The scene's lights are set for the bone page and the shoes, and would put about twice a colour's value on the shell's
// top face. So the shell takes a share of them and an even light of its own: its face then shows on screen as the
// swatch's hex, and the falling share is what still gives it form. Its base colour, roughness and metalness are untouched.
// The tone mapper also pulls dark colours down (its toe would turn graphite near black), so the shell adds back what it takes.
const SHELL_LIT = 0.28, SHELL_EVEN = 0.37;
const GHOST = 0.72;       // how far the shell fades when it goes see-through
const CORD_FIRST = 0.012; // metres of the rise over which the cord slides clear of the heel window, before it lifts
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
/** A spring's step response over 0..1: it overshoots by about 9% and settles. springBack has no overshoot, so a returning part lands without going through the stack. */
const spring = (t) => (t >= 1 ? 1 : 1 - Math.exp(-5 * t) * (Math.cos(6.5 * t) + 0.77 * Math.sin(6.5 * t)));
const springBack = (t) => (t >= 1 ? 1 : 1 - Math.exp(-7 * t) * (1 + 7 * t));
const easeInOut = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);
const smooth = (u) => { const x = clamp(u); return x * x * (3 - 2 * x); };
const approach = (cur, target, dt, speed = 8) => cur + (target - cur) * (1 - Math.pow(0.001, (dt * speed) / 8));
/** The common rise p, stopped softly at o: never above p or o, so a higher layer is never behind a lower one. */
const peel = (p, o) => (o <= 0 ? 0 : p <= o - PEEL ? p : p >= o + PEEL ? o : o - ((o + PEEL - p) ** 2) / (4 * PEEL));

export class ProductSlot extends THREE.Group {
  /** @param {{ size?: number, order?: number }} opts  size: size M's shell length at scale 1, in world units; order: draw order of the meshes */
  constructor({ size = 1.3, order = 0 } = {}) {
    super();
    this.name = 'ProductSlot';
    this.size = size; this.order = order;
    this.turn = new THREE.Group();   // slot-owned rotation: drag
    this.holder = new THREE.Group(); // the model, in metres under one scale
    this.add(this.turn); this.turn.add(this.holder);
    this.parts = [];                 // [{ name, group, pivot, inner, mesh, marker, mats, centre, half, lift, out, clear, pop }]
    this.wires = [];                 // sketch overlays
    this.slotMats = [];              // [{ m, slot, from, to }] for colour blends
    this.height = 0; this.ready = false; this.sizeId = null;
    this.scenes = {};                // size id -> Promise of the loaded scene
    this.edgeGeo = {};               // size:part -> sketch edges
    this.state = { explode: 0, wire: 0, ghost: 0, highlight: 0, selected: -1 };
    this.cur = { highlight: 0, sel: PARTS.map(() => 0) };
    this.cord = { swing: 0, lay: 0 };
    this.viewer = new THREE.Vector3(0, 0, 10); // the camera, set by the world: a popped part turns toward it
    this.popDown = 0;                          // metres, set by the world for the phone band
    this.drag = { yaw: 0, pitch: 0, tYaw: 0, tPitch: 0, held: false };
    this.colorT = 1; this.colorMs = 300;
    const ref = MODEL.sizes.M.parts.shell_bottom;
    this.k = size / (ref.max[0] - ref.min[0]); // slot units per metre, for every size
  }

  #scene(id) {
    if (!this.scenes[id]) {
      this.scenes[id] = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).loadAsync(MODEL.sizes[id].url).then((g) => g.scene);
      this.scenes[id].catch(() => { delete this.scenes[id]; }); // a failed load can be tried again
    }
    return this.scenes[id];
  }
  async load(id = 'M') { this.#mount(id, await this.#scene(id)); this.ready = true; this.apply(); return this; }
  /** Swap in another size (fetching it the first time). Colour, selection and pose carry over: only the meshes change. */
  async useSize(id) { const scene = await this.#scene(id); if (id !== this.sizeId) { this.#mount(id, scene); this.apply(); } return this; }

  #mount(id, scene) {
    const D = MODEL.sizes[id].parts, k = this.k, sb = D.shell_bottom, st = D.shell_top;
    const x0 = sb.min[0], x1 = sb.max[0], w = sb.max[2] - sb.min[2], h = st.max[1] - sb.min[1];
    this.sizeId = id; this.height = h * k;
    this.semi = new THREE.Vector3(((x1 - x0) * k) / 2, (h * k) / 2, (w * k) / 2); // the shell's half-extents, slot units
    // the shell's plan outline is a tapered capsule: narrower toward the toe than the heel (from the source mesh)
    this.plan = { heelR: this.semi.z, toeR: this.semi.z * 0.79 };
    this.holder.scale.setScalar(k);
    this.holder.position.set((-(x0 + x1) / 2) * k, 0, 0); // shell centred on the slot's origin, resting on y = 0
    scene.updateMatrixWorld(true);
    this.wires.forEach((wl) => wl.parent?.remove(wl)); this.wires = []; // their geometry stays cached per size
    PARTS.forEach((name, i) => {
      let src = scene.getObjectByName(name); if (src && !src.isMesh) src.traverse((o) => { if (o.isMesh) src = o; });
      if (!src?.isMesh) throw new Error(`model has no part ${name}`);
      const L = this.parts[i] || (this.parts[i] = this.#part(name, src));
      const d = D[name], mesh = new THREE.Mesh(src.geometry, L.mat);
      src.matrixWorld.decompose(mesh.position, mesh.quaternion, mesh.scale); mesh.renderOrder = this.order + (HIDDEN_WHEN_CLOSED.has(name) ? -0.2 : 0); // insides first, so a see-through shell veils them
      if (L.mesh) L.inner.remove(L.mesh);
      L.inner.add(mesh); L.mesh = mesh;
      L.centre.set((d.min[0] + d.max[0]) / 2, (d.min[1] + d.max[1]) / 2, (d.min[2] + d.max[2]) / 2);
      L.half.set((d.max[0] - d.min[0]) / 2, (d.max[1] - d.min[1]) / 2, (d.max[2] - d.min[2]) / 2);
      L.marker.position.copy(L.centre);
      if (name === 'pull_cord') { // the ring hinges where it passes through the heel window
        L.pivot.position.set(d.min[0] + 0.001, L.centre.y, 0); L.inner.position.copy(L.pivot.position).negate();
      }
    });
    this.#stack(D);
    this.#measureTilt();
  }
  #part(name, src) {
    const group = new THREE.Group(), pivot = new THREE.Group(), inner = new THREE.Group(), marker = new THREE.Object3D();
    group.name = `part_${name}`; pivot.rotation.order = 'ZXY';
    group.add(pivot); pivot.add(inner); inner.add(marker); this.holder.add(group);
    const mat = src.material.clone(); mat.transparent = true; mat.name = name;   // the file's PBR values, one instance per part, shared by all sizes
    const mats = [{ m: mat, base: mat.emissive.clone(), baseI: mat.emissiveIntensity ?? 1 }];
    if (SHELL.has(name)) this.slotMats.push({ m: mat, slot: 'shell', from: mat.color.clone(), to: mat.color.clone() });
    if (SHELL.has(name)) {
      mat.roughness = SHELL_ROUGHNESS; mat.metalness = 0;
      mat.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;', `vec3 outgoingLight = (totalDiffuse + totalSpecular) * ${SHELL_LIT.toFixed(3)} + diffuseColor.rgb * ${SHELL_EVEN.toFixed(3)} + totalEmissiveRadiance;
        float toe = min(outgoingLight.r, min(outgoingLight.g, outgoingLight.b)); outgoingLight += toe < 0.04 ? 0.4 * sqrt(max(toe, 0.0)) - toe : 0.04;`); };
    }
    return { name, group, pivot, inner, marker, mat, mats, mesh: null, centre: new THREE.Vector3(), half: new THREE.Vector3(), lift: 0, out: 0, clear: 0, pop: { p: 0, from: 0, to: 0, start: 0 } };
  }
  /**
   * The open stack at inside_upright, from the parts' own bounds: each layer rises to sit one gap above the layer behind it,
   * in the real order. The scent beads stay in their bay at the heel end, level with the silica sachet that they sit beside
   * in the product. The cord comes clear of the heel window and hangs at the middle of the stack.
   * L.out is how far a part comes forward to clear the front of the stack; L.clear how far it must first slide in its own
   * plane to clear what is in front of it. The gaps are what let it slide without touching its neighbours.
   */
  #stack(D) {
    const F = POSES.inside_upright, mm = 0.001, gap = F.gap * mm, by = (n) => this.parts[PARTS.indexOf(n)];
    const low = (n) => D[n].min[1], high = (n) => D[n].max[1];
    const back = by('shell_bottom'), ca = by('carbon_sachet'), si = by('silica_sachet'), be = by('scent_beads'), top = by('shell_top'), co = by('pull_cord');
    back.lift = 0;
    ca.lift = low('shell_top') + gap - low('carbon_sachet');          // shell_top starts where the two halves meet: the bottom half's rim
    si.lift = high('carbon_sachet') + ca.lift + gap - low('silica_sachet');
    be.lift = high('silica_sachet') + si.lift - high('scent_beads');
    top.lift = high('silica_sachet') + si.lift + gap - low('shell_top');
    co.lift = top.lift / 2;
    this.rise = top.lift + CORD_FIRST + PEEL;
    const front = high('shell_top') + top.lift;
    for (const L of this.parts) {
      L.out = front - (low(L.name) + L.lift) + F.pop.clear * mm;
      L.clear = L === top || L === co ? 0 : L.half.z + top.half.z + 0.002;
    }
  }
  /** Half the shell's height when tilted about its width by r, measured on its vertices, so Stage 3 can ride just off the footbed. */
  #measureTilt() {
    const pts = [], v = new THREE.Vector3(), cx = -this.holder.position.x, cy = this.height / 2;
    for (const L of this.parts) {
      if (!SHELL.has(L.name)) continue;
      L.mesh.updateMatrix(); const pa = L.mesh.geometry.attributes.position, step = Math.max(1, Math.floor(pa.count / 1500));
      for (let i = 0; i < pa.count; i += step) { v.fromBufferAttribute(pa, i).applyMatrix4(L.mesh.matrix).multiplyScalar(this.k); pts.push(v.x - cx, v.y - cy); }
    }
    this.halfTable = Array.from({ length: 33 }, (_, i) => {
      const r = (i / 32) * Math.PI / 2, c = Math.cos(r), s = Math.sin(r); let m = 0;
      for (let j = 0; j < pts.length; j += 2) m = Math.max(m, Math.abs(pts[j] * s + pts[j + 1] * c), Math.abs(-pts[j] * s + pts[j + 1] * c));
      return m;
    });
  }
  /** One part's sketch overlay (feature edges of what shows from outside). The edge search is not free, so its result is kept per size. */
  #wire(L) {
    if (L.wire?.parent === L.inner && L.wireFor === this.sizeId) return;
    const key = `${this.sizeId}:${L.name}`, geo = this.edgeGeo[key] || (this.edgeGeo[key] = new THREE.EdgesGeometry(L.mesh.geometry, 32));
    if (!L.wire) { L.wire = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0 })); L.wire.renderOrder = this.order; } else L.wire.geometry = geo;
    L.wire.position.copy(L.mesh.position); L.wire.quaternion.copy(L.mesh.quaternion); L.wire.scale.copy(L.mesh.scale);
    L.inner.add(L.wire); L.wireFor = this.sizeId; if (!this.wires.includes(L.wire)) this.wires.push(L.wire);
  }
  #buildWires() { for (const L of this.parts) if (!HIDDEN_WHEN_CLOSED.has(L.name)) this.#wire(L); }
  /** Build the sketch overlays a part at a time while nothing else is happening, so Stage 7 pays nothing on arrival and no frame carries it all. */
  prepareWires() {
    const todo = this.parts.filter((L) => !HIDDEN_WHEN_CLOSED.has(L.name)), id = this.sizeId;
    const later = (fn) => (window.requestIdleCallback ? requestIdleCallback(fn, { timeout: 3000 }) : setTimeout(fn, 400));
    const next = () => { const L = todo.shift(); if (!L || id !== this.sizeId) return; this.#wire(L); later(next); };
    later(next);
  }

  // --------------------------------------------------------- state setters
  /** Explode 0..1: every part travels from assembled to exploded. Set by the world's travel. */
  setExplode(u) { this.state.explode = u; }
  /** Wire 0..1: solid fades to a sketch. Set by the world's travel. */
  setWire(u) { this.state.wire = u; if (u > 0) this.#buildWires(); }
  /** Ghost 0..1: the shell goes see-through, so the real parts inside show (Stage 2). Set by the world's travel. */
  setGhost(u) { this.state.ghost = u; }
  /** Soft accent glow on the product, 0..1. */
  setHighlight(v) { this.state.highlight = v; }
  /** Inside: pop a part out by its index in PARTS, or -1 to put it back. Whatever was out returns as the new one leaves. */
  selectLayer(i) {
    if (i === this.state.selected) return;
    const was = this.state.selected, now = performance.now(); this.state.selected = i;
    this.parts.forEach((L, k) => { const to = k === i ? 1 : 0; if (L.pop.to !== to) Object.assign(L.pop, { from: L.pop.p, to, start: now + (to && was >= 0 ? 90 : 0) }); }); // the new one waits a beat for the old one to get out of its way
  }
  /** The pull cord about the heel window: swing + droops it, - lifts it; lay turns the ring from upright to flat. Radians. */
  setCord(swing, lay) { this.cord.swing = swing; this.cord.lay = lay; }
  /** Customize: drag deltas in px turn the product; release eases it back to the pose. */
  dragBy(dx, dy) { const d = this.drag; d.held = true; d.tYaw += dx * 0.008; d.tPitch = clamp(d.tPitch + dy * 0.004, -0.5, 0.5); }
  releaseDrag() { const d = this.drag; d.held = false; d.tYaw = 0; d.tPitch = 0; }
  /**
   * Customize: colour slots, blended over `ms`. `slots` is { slotName: '#hex' }; only shell_top and shell_bottom have a slot.
   * The hex values are sRGB: Color.set converts them to linear, which is what a glTF base colour holds.
   */
  setColors(slots, ms = 300) {
    for (const e of this.slotMats) { const v = slots[e.slot]; if (!v) continue; e.from.copy(e.m.color); e.to.set(v); }
    if (ms <= 0) { for (const e of this.slotMats) e.m.color.copy(e.to); this.colorT = 1; return; }
    this.colorMs = ms; this.colorT = 0;
  }

  /** A point on part i in world space: at is a fraction of its half-size from its centre (per axis, -1..1). Follows the part as it moves. */
  partPoint(i, at = [0, 0, 0], out = new THREE.Vector3()) {
    const L = this.parts[i]; if (!L) return out;
    L.marker.position.set(L.centre.x + at[0] * L.half.x, L.centre.y + at[1] * L.half.y, L.centre.z + at[2] * L.half.z);
    L.marker.updateWorldMatrix(true, false);
    return out.setFromMatrixPosition(L.marker.matrixWorld);
  }
  /** World-space centre of part i (after explode). */
  layerCentre(i, out = new THREE.Vector3()) { return this.partPoint(i, [0, 0, 0], out); }
  /** Half the shell's height when tilted about its width by r (slot units, measured on the model). */
  halfAt(r) {
    const T = this.halfTable; if (!T) return this.height / 2;
    let a = Math.abs(Math.atan2(Math.sin(r), Math.cos(r))); if (a > Math.PI / 2) a = Math.PI - a;
    const f = (a / (Math.PI / 2)) * (T.length - 1), i = Math.min(T.length - 2, Math.floor(f));
    return T[i] + (T[i + 1] - T[i]) * (f - i);
  }
  /** World matrix of the shell's centre, in slot units (for the lab's wall check against semi and plan). */
  body(out = new THREE.Matrix4()) {
    this.updateWorldMatrix(true, true);
    return out.copy(this.turn.matrixWorld).multiply(new THREE.Matrix4().makeTranslation(0, this.height / 2, 0));
  }
  /** World-space corners of every part's bounds, as they are now, for measuring the product on screen. */
  corners(visit, only = null) {
    this.updateWorldMatrix(true, true);
    const v = new THREE.Vector3();
    for (const L of this.parts) {
      if (only === 'shell' && !SHELL.has(L.name)) continue;
      L.inner.updateWorldMatrix(true, false);
      for (let i = 0; i < 8; i++) { v.set(L.centre.x + (i & 1 ? 1 : -1) * L.half.x, L.centre.y + (i & 2 ? 1 : -1) * L.half.y, L.centre.z + (i & 4 ? 1 : -1) * L.half.z).applyMatrix4(L.inner.matrixWorld); visit(v); }
    }
  }
  /** A stand-in for the rack: same geometry and materials (so colour carries over), closed, cord lying flat, no hidden insides. */
  rackCopy(swing, lay) {
    const h = this.holder.clone(true);
    h.children.slice().forEach((g) => {
      const name = g.name.replace('part_', '');
      if (HIDDEN_WHEN_CLOSED.has(name)) { h.remove(g); return; }
      g.position.set(0, 0, 0); g.quaternion.identity();
      if (name === 'pull_cord') g.children[0].rotation.set(lay, 0, -swing, 'ZXY'); else g.children[0].rotation.set(0, 0, 0);
    });
    h.traverse((o) => { o.visible = !o.isLineSegments; });
    return h;
  }
  /** How far part i has travelled toward its place in the open stack, 0..1. */
  layerExplode(i, u = this.state.explode) { const L = this.parts[i]; if (!L) return 0; return L.lift ? peel(easeInOut(clamp(u)) * this.rise, L.lift) / L.lift : clamp(u); }
  /** The part a ray meets first, on the real meshes, so a click goes through a vent to what is behind it. Returns its index, or -1. */
  pick(raycaster) {
    let best = -1, near = Infinity;
    this.updateWorldMatrix(true, true);
    this.parts.forEach((L, i) => { const hit = L.mat.opacity > 0.01 && raycaster.intersectObject(L.mesh, false)[0]; if (hit && hit.distance < near) { near = hit.distance; best = i; } });
    return best;
  }
  /**
   * The stack opens as one: everything above the shell bottom rises together and each layer stops in turn, back to front,
   * so the gaps open from the back and no part passes through another. The cord slides clear of the heel window first.
   */
  #partOffset(L, u, out) {
    const p = easeInOut(clamp(u)) * this.rise;
    if (L.name === 'pull_cord') return out.set(CORD_FIRST * smooth(p / CORD_FIRST), peel(Math.max(0, p - CORD_FIRST), L.lift), 0);
    return out.set(0, peel(p, L.lift), 0);
  }
  /**
   * A popped part's way out, as a function of p (0 in the stack, 1 out, a little past 1 on the spring's overshoot), so going
   * back runs the same path. It first slides sideways in its own plane, along the gap, until it is clear of whatever is in
   * front of it; then it comes toward the viewer; then it drifts back to end only slightly to the side, turning to the camera.
   * A part with nothing in front of it comes straight out. Never through a neighbour.
   */
  #popAt(L, p, out) {
    const P = POSES.inside_upright.pop, side = P.side * 0.001, over = Math.max(0, p - 1), first = L.clear || side;
    _qi.copy(this.quaternion).invert();
    _view.copy(this.viewer).sub(this.position).applyQuaternion(_qi).normalize();                 // toward the camera, in the model's axes
    const fwd = (L.out / Math.max(0.3, _view.y)) * (smooth((p - 0.3) / 0.45) + over * 0.6);
    const sideways = (1 - (1 - clamp(p / 0.42)) ** 3) * first + (side - first) * smooth((p - 0.75) / 0.25) + side * over * 0.6;
    out.addScaledVector(_view, fwd); out.z -= sideways;
    if (L.name === 'pull_cord') out.x -= POSES.inside_upright.pop.cordUp * 0.001 * smooth(p);   // it hangs below the stack: it comes up beside it, into view
    else out.x += this.popDown * smooth(p);                                                     // the phone band is short: coming closer must not take its top out of the band
    _qf.setFromUnitVectors(_up, _view);
    _qp.identity().slerp(_qf, P.face * smooth((p - 0.5) / 0.5));
    L.group.quaternion.copy(_qp);
    out.add(_v2.copy(L.centre).sub(_v3.copy(L.centre).applyQuaternion(_qp)));                     // it turns about its own centre
  }

  // -------------------------------------------------------------------- tick
  /** @returns {boolean} whether anything is still settling (for render-on-demand) */
  update(dt, reduced = false) {
    let moving = false;
    const d = this.drag, fd = d.held ? 1 - Math.pow(0.001, dt * 3) : 1 - Math.pow(0.001, dt * 0.9);
    d.yaw += (d.tYaw - d.yaw) * (reduced ? 1 : fd); d.pitch += (d.tPitch - d.pitch) * (reduced ? 1 : fd);
    if (Math.abs(d.tYaw - d.yaw) > 1e-4 || Math.abs(d.tPitch - d.pitch) > 1e-4) moving = true;
    this.turn.rotation.y = d.yaw; this.turn.rotation.x = d.pitch;
    // colour blend
    if (this.colorT < 1) { this.colorT = reduced ? 1 : Math.min(1, this.colorT + (Math.max(dt, 0.001) * 1000) / Math.max(1, this.colorMs)); const e = easeInOut(this.colorT); for (const s of this.slotMats) s.m.color.copy(s.from).lerp(s.to, e); moving = true; }
    // the popped part's spring, one clock per part
    const ms = POSES.inside_upright.pop.ms, now = performance.now();
    for (const L of this.parts) {
      const q = L.pop; if (q.p === q.to) continue;
      const t = reduced ? 1 : clamp((now - q.start) / ms);
      q.p = t >= 1 ? q.to : q.to ? q.from + (1 - q.from) * spring(t) : q.from * (1 - springBack(t));
      moving = true;
    }
    // interaction states
    const c = this.cur, s = this.state;
    if (!Number.isFinite(s.highlight)) s.highlight = 0; if (!Number.isFinite(c.highlight)) c.highlight = s.highlight; // never let a NaN stick
    const nh = reduced ? s.highlight : approach(c.highlight, s.highlight, dt, 6);
    if (Math.abs(nh - c.highlight) > 1e-4) moving = true; c.highlight = nh;
    for (let i = 0; i < this.parts.length; i++) {
      const t = s.selected < 0 ? 0 : (i === s.selected ? 1 : -1);
      const n = reduced ? t : approach(c.sel[i], t, dt, 7);
      if (Math.abs(n - c.sel[i]) > 1e-4) moving = true; c.sel[i] = n;
    }
    this.apply();
    return moving;
  }

  apply() {
    if (!this.ready) return;
    const s = this.state, c = this.cur;
    for (let i = 0; i < this.parts.length; i++) {
      const L = this.parts[i], sel = c.sel[i]; // 1 selected, -1 dimmed, 0 neutral
      this.#partOffset(L, s.explode, L.group.position);
      if (L.pop.p > 0) this.#popAt(L, L.pop.p, L.group.position); else L.group.quaternion.identity();
      if (L.name === 'pull_cord') L.pivot.rotation.set(this.cord.lay, 0, -this.cord.swing, 'ZXY');
      const dim = Math.max(0, -sel), glow = c.highlight * 0.35;       // a popped part keeps its own colour: leaving the stack is what marks it
      for (const { m, base, baseI } of L.mats) {
        m.emissive.copy(base).lerp(ACCENT, Math.min(1, glow)); m.emissiveIntensity = baseI * (1 - glow) + glow;
        m.opacity = (1 - dim * DIM) * (1 - s.wire * 0.72) * (SHELL.has(L.name) ? 1 - s.ghost * GHOST : 1);
        m.depthWrite = m.opacity > 0.5;
        m.visible = m.opacity > 0.01;
      }
      L.mesh.visible = L.mat.opacity > 0.01;
      // while parts are dimmed they draw front to back, each writing depth, so a dimmed part fades toward the page rather than turning see-through
      L.mesh.renderOrder = c.sel.some((v) => v < -1e-3) ? this.order + (sel > 0 ? 0.3 : -0.1 - L.lift * 2) : this.order + (HIDDEN_WHEN_CLOSED.has(L.name) ? -0.2 : 0);
    }
    for (const w of this.wires) { w.material.opacity = s.wire * 0.5; w.visible = s.wire > 0.01; }
  }
}
const _v = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3(), _view = new THREE.Vector3(), _up = new THREE.Vector3(0, 1, 0), _qi = new THREE.Quaternion(), _qf = new THREE.Quaternion(), _qp = new THREE.Quaternion();
