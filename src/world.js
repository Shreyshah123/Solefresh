// The world: one fixed WebGL layer holding the product slot, the shoe props,
// the venue floors and the rack. One camera, fixed for the whole page.
//
// Every stage has a resting state in STATES. The ONE scroll-linked motion on
// the page is the travel between two neighbouring states, shaped per
// transition in SHAPES. Scrolling up runs the same travel backwards. Nav
// jumps settle to a state on a clock. Everything else here (Stage 3 step
// animations, Stage 4 selection, Customize colour, size and drag) is a timed
// response to a click.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { ProductSlot, PARTS, POSES, TRAVEL_SIZE, VIEW_DOWN } from './product-slot.js';
import { buildShoe, shoeSamples, SHOE, DRAW } from './shoe.js';
import { drawFloor } from './venues.js';
import { FX } from './fx.js';
import { makeStage3, kf, ease, KEYS3, PRODUCT_KEYS, CORD } from './stage3.js';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, u) => a + (b - a) * u;
const easeInOut = (u) => (u < 0.5 ? 4 * u * u * u : 1 - Math.pow(-2 * u + 2, 3) / 2);

// Where the product sits inside the shoe (shoe at the origin), and where it
// hovers above the collar opening in Stage 3.
const SEAT = { x: 0.1, y: 0.15, z: 0, scale: (0.1098 * 1.9) / 0.3 / 1.3 }; // true scale: the 1.9-long prop is an adult shoe of about 300 mm, size M's shell is 109.8 mm
const HOVER = { x: 0.32, y: 0.72, z: 0 };
const UNIT = 0.55;            // the rack shrinks every unit (shoe + product) to this
const SHOE_HIDDEN_Y = -3.2;
const OPEN_A = 0.95;          // shoe opacity in Stage 3 (stage3.js sees through it while the product is inside)
const EXIT_U = 0.3;           // share of a travel away from Stage 3 in which the product leaves the shoe
const SWAP_MS = 250;          // the quick swap that sets up a skipped step (product shrinks out in 100 ms, regrows in 150 ms)
const FADE_MS = 150;          // effects of an interrupted step fade out, never pop
const LOOP_IDLE_S = 30;       // Step 3's loop: seconds with no input at all before it calms,
const LOOP_CALM_S = 8;        // how long it takes to calm (motes thin out, the glow steadies) before the frame loop rests,
const LOOP_WAKE_S = 0.8;      // and how long any input takes to bring it back to full life
const NARROW_UP = 0.25;       // phone band (about 290 px tall): share of any rise above the hover point that is kept, so jumps and pops stay inside it
// On a nav jump the shoes move only while unseen (SHOE_MOVE), fading out before and in after (SHOE_FADE).
const SHOE_MOVE = new Set(['shoeY', 'shoeZ', 'shoeTilt', 'pairY', 'pairZ', 'rack', 'unit']), SHOE_FADE = new Set(['shoeA', 'pair']);

// Stage poses used by both the resting states and the travels between them.
const WHAT = { yaw: 0.34, pitch: 0.2, px: 0, py: 0.3, pz: 0.5, scale: 1.5 };
/** A named upright pose from the slot, as state keys: pitch leans it back; roll stands the long axis up; face brings the vents to the viewer and turns it about that axis, so the long axis stays upright on screen. */
const rad = THREE.MathUtils.degToRad;
const upright = (p) => ({ yaw: 0, pitch: -rad(p.tilt + VIEW_DOWN), roll: -Math.PI / 2, face: Math.PI / 2 + rad(p.turn), scale: p.scale, cordS: p.cordSwing, cordL: p.cordLay });
const HERO = { ...upright(POSES.hero_upright), px: 0, py: 0.05, pz: 0 };
const INSIDE = { ...upright(POSES.inside_upright), px: 0, py: 0.05, pz: 0.4 };
const CUSTOM = { yaw: 0.45, pitch: 0.4, px: -0.06, py: 0.05, pz: 0.4, scale: 1.25 };
const WHY = { yaw: 0.35, pitch: 0.2, px: -1.1, py: 0.12, pz: 0.3, scale: 1.15 };

// Resting state per stage. Keys: product pose (yaw, pitch, px, py, pz, scale),
// explode, wire, shoe A (shoeY, shoeZ, shoeTilt, shoeA), shoe B (pair = opacity,
// pairY, pairZ), rack, unit, floor (venue floor), pres (the product at its true size and place beside the shoes:
// phones' pull toward centre is off; it is 1 before any shoe shows around it), fitK, fitX, fitY (the stage's fit to the
// space its text leaves at this window size: set by fitStage, see FIT_SPAN), ghost (the shell goes see-through so Stage 2's leader lines land on the real parts inside),
// cordS, cordL (the pull cord at rest: swing and lay about the heel window), roll, face (only the upright poses: see upright()),
// vk, vx, vy (phones: how the whole picture is zoomed and panned for this stage: set by frameStage, see there).
export const STATES = {
  explorer:  { ...HERO, explode: 0, wire: 0, shoeY: SHOE_HIDDEN_Y, shoeA: 0,      pair: 0, rack: 0, unit: 1,    floor: 1, shoeZ: 0, pairY: SHOE_HIDDEN_Y, pairZ: 0, shoeTilt: 0, pres: 0, fitK: 1, fitX: 0, fitY: 0, ghost: 0 },
  what:      { ...WHAT, explode: 0, wire: 0, shoeY: SHOE_HIDDEN_Y, shoeA: 0,      pair: 0, rack: 0, unit: 1,    floor: 0, shoeZ: 0, pairY: SHOE_HIDDEN_Y, pairZ: 0, shoeTilt: 0, pres: 0, fitK: 1, fitX: 0, fitY: 0, ghost: 1, cordS: CORD.relaxed, cordL: 0 },
  how:       { yaw: 0,    pitch: 0,     px: HOVER.x,       py: HOVER.y,       pz: 0,   scale: SEAT.scale,        explode: 0, wire: 0, shoeY: 0,             shoeA: OPEN_A, pair: 1, rack: 0, unit: 1,    floor: 0, shoeZ: 0, pairY: 0, pairZ: 0, shoeTilt: 0, pres: 1, fitK: 1, fitX: 0, fitY: 0, ghost: 0, cordS: CORD.hang, cordL: 0 },
  inside:    { ...INSIDE, explode: 1, wire: 0, shoeY: 2.4,           shoeA: 0,      pair: 0, rack: 0, unit: 1,    floor: 0, shoeZ: -0.7, pairY: 2.4, pairZ: -0.7, shoeTilt: 0.05, pres: 0, fitK: 1, fitX: 0, fitY: 0, ghost: 0 },
  customize: { ...CUSTOM, explode: 0, wire: 0, shoeY: SHOE_HIDDEN_Y, shoeA: 0,      pair: 0, rack: 0, unit: 1,    floor: 0, shoeZ: 0, pairY: SHOE_HIDDEN_Y, pairZ: 0, shoeTilt: 0, pres: 0, fitK: 1, fitX: 0, fitY: 0, ghost: 0, cordS: CORD.relaxed, cordL: 0 },
  bulk:      { yaw: 0,    pitch: 0,     px: SEAT.x * UNIT, py: SEAT.y * UNIT, pz: 0,   scale: SEAT.scale * UNIT, explode: 0, wire: 0, shoeY: 0,             shoeA: 0.62,   pair: 0, rack: 1, unit: UNIT, floor: 0, shoeZ: 0, pairY: 0, pairZ: 0, shoeTilt: 0, pres: 1, fitK: 1, fitX: 0, fitY: 0, ghost: 0, cordS: CORD.droop, cordL: CORD.flat },
  why:       { ...WHY, explode: 0, wire: 0, shoeY: SHOE_HIDDEN_Y, shoeA: 0,      pair: 0, rack: 0, unit: 1,    floor: 0, shoeZ: 0, pairY: SHOE_HIDDEN_Y, pairZ: 0, shoeTilt: 0, pres: 0, fitK: 1, fitX: 0, fitY: 0, ghost: 0, cordS: CORD.relaxed, cordL: 0 },
  story:     { ...WHY, yaw: 1.15, pitch: 0.12, explode: 0, wire: 1, shoeY: SHOE_HIDDEN_Y, shoeA: 0,      pair: 0, rack: 0, unit: 1,    floor: 0, shoeZ: 0, pairY: SHOE_HIDDEN_Y, pairZ: 0, shoeTilt: 0, pres: 0, fitK: 1, fitX: 0, fitY: 0, ghost: 0, cordS: CORD.relaxed, cordL: 0 },
  close:     { yaw: 0.3,  pitch: 0.42,  px: -0.04,         py: 0.2,           pz: 0,   scale: 0.95,              explode: 0, wire: 0, shoeY: SHOE_HIDDEN_Y, shoeA: 0,      pair: 0, rack: 0, unit: 1,    floor: 0, shoeZ: 0, pairY: SHOE_HIDDEN_Y, pairZ: 0, shoeTilt: 0, pres: 0, fitK: 1, fitX: 0, fitY: 0, ghost: 0, cordS: CORD.droop, cordL: CORD.flat },
};
for (const s of Object.values(STATES)) { s.roll ??= 0; s.face ??= 0; s.vk = 1; s.vx = 0; s.vy = 0; }
export const STAGE_ORDER = Object.keys(STATES);
const KEYS = Object.keys(STATES.explorer);
// When a stage's fit eases in or out during a travel: only while the product is clear of the shoes (it must not change
// size or place beside them). Travels not listed use the whole window.
const FIT_SPAN = { 'what>how': [0, 0.3], 'how>inside': [0.3, 0.7], 'inside>customize': [0.45, 1], 'customize>bulk': [0, 0.38], 'bulk>why': [0.5, 1] };

// Per-transition shaping: keyframes [[u, value, ease?], ...] for keys that
// should not be a plain lerp. A reversed scroll runs the same curves backwards.
const SHAPES = {
  'explorer>what': {   // TURN TO FACE: the venue floor is gone before the stage edge reaches the viewport
    floor: [[0, 1], [0.4, 0]],
    scale: [[0, HERO.scale], [0.7, WHAT.scale * TRAVEL_SIZE], [1, WHAT.scale]],   // travels small, settles to the stage's own size as it arrives
  },
  'what>how': {        // SHOES RISE: the pair rises from below the fold and eases into place (B, then A), the product comes to hover above the collar
    shoeY: [[0, SHOE_HIDDEN_Y], [0.3, -2.6], [0.87, 0, 'out']],   // leaving upward, shoe A holds until the product is on edge in the collar (u 0.87)
    pairY: [[0, SHOE_HIDDEN_Y], [0.34, -2.6], [0.9, 0, 'out']],
    shoeA: [[0.35, 0], [0.55, OPEN_A]],
    pair:  [[0.4, 0], [0.6, 1]],
    pres:  [[0.35, 0], [0.47, 1]],
    py:    [[0, WHAT.py], [0.45, 0.835], [1, HOVER.y]],    // the arc's top stays under world y 1.20, clear of the nav
    scale: [[0, WHAT.scale], [0.7, SEAT.scale]],
    px:    [[0, WHAT.px], [0.8, HOVER.x]],
    yaw:   [[0, WHAT.yaw], [0.6, 0]],
    pitch: [[0, WHAT.pitch], [0.6, 0]],
    pz:    [[0, WHAT.pz], [0.7, 0]],
    ghost: [[0, 1], [0.25, 0]],
  },
  'how>inside': {      // OPEN UP: the product leaves the shoe through the collar (stage-3 exit, u 0..0.3), the pair leaves with the page (back and up, back shoe first), the product stands upright, the layers open into a small-gap stack
    pairZ:   [[0.24, 0], [0.35, -0.7, 'io']],   // B leads: back, clear of the product's path, then up and out
    pairY:   [[0.26, 0], [0.58, 2.4, 'in']],
    pair:    [[0.42, 1], [0.56, 0]],
    shoeZ:   [[0.26, 0], [0.37, -0.7, 'io']],   // A only once the product is clear of its collar
    shoeY:   [[0.28, 0], [0.6, 2.4, 'in']],
    shoeTilt: [[0.3, 0], [0.5, 0.05]],           // its toe droops as it goes
    shoeA:   [[0.44, OPEN_A], [0.6, 0]],
    pres:    [[0.5, 1], [0.6, 0]],
    pitch:   [[0.3, 0], [0.7, INSIDE.pitch]],
    yaw:     [[0.3, 0], [0.7, INSIDE.yaw]],
    px:      [[0.3, HOVER.x], [0.7, INSIDE.px]],
    py:      [[0.3, HOVER.y], [0.7, INSIDE.py]],
    pz:      [[0.3, 0], [0.7, INSIDE.pz]],
    roll:    [[0.3, 0], [0.7, INSIDE.roll]],
    face:    [[0.3, 0], [0.7, INSIDE.face]],
    scale:   [[0.3, SEAT.scale], [0.45, SEAT.scale * TRAVEL_SIZE], [0.7, INSIDE.scale]],
    cordL:   [[0.3, 0], [0.7, INSIDE.cordL]],
    explode: [[0.68, 0], [1, 1]],
  },
  'inside>customize': { // CLOSE UP: layers stack back in order, then the product settles into the hero pose
    explode: [[0, 1], [0.55, 0]],
    pitch:   [[0.45, INSIDE.pitch], [1, CUSTOM.pitch]],
    yaw:     [[0.45, INSIDE.yaw], [1, CUSTOM.yaw]],
    px:      [[0.45, INSIDE.px], [1, CUSTOM.px]],
    py:      [[0.45, INSIDE.py], [1, CUSTOM.py]],
    pz:      [[0.45, INSIDE.pz], [1, CUSTOM.pz]],
    roll:    [[0.45, INSIDE.roll], [1, 0]],
    face:    [[0.45, INSIDE.face], [1, 0]],
    scale:   [[0.45, INSIDE.scale], [0.85, CUSTOM.scale * TRAVEL_SIZE], [1, CUSTOM.scale]],
  },
  'customize>bulk': {  // MULTIPLY: the product settles into its seat, a shoe forms round it, then one becomes a rack
    // the product is seated (true size, flat) before the shoe shows, so it never passes through the upper
    shoeY: [[0.05, SHOE_HIDDEN_Y], [0.35, 0]],   // unseen
    shoeA: [[0.42, 0], [0.62, 0.62]],
    pres:  [[0.08, 0], [0.38, 1]],
    py:    [[0, CUSTOM.py], [0.4, SEAT.y], [0.5, SEAT.y], [1, SEAT.y * UNIT]],
    px:    [[0, CUSTOM.px], [0.4, SEAT.x], [0.5, SEAT.x], [1, SEAT.x * UNIT]],
    pz:    [[0, CUSTOM.pz], [0.4, 0]],
    scale: [[0, CUSTOM.scale], [0.4, SEAT.scale], [0.5, SEAT.scale], [1, SEAT.scale * UNIT]],
    pitch: [[0, CUSTOM.pitch], [0.4, 0]],
    yaw:   [[0, CUSTOM.yaw], [0.4, 0]],
    cordS: [[0.05, CORD.relaxed], [0.38, CORD.droop]],
    cordL: [[0.05, 0], [0.38, CORD.flat]],
    rack:  [[0.5, 0], [1, 1]],
    unit:  [[0.5, 1], [1, UNIT]],
  },
  'bulk>why': {        // COLLAPSE: the rack folds back as the shoes fade, then the product slides left
    rack:  [[0, 1], [0.5, 0]],
    unit:  [[0, UNIT], [0.5, 1]],
    shoeA: [[0.15, 0.62], [0.45, 0]],          // gone before the product leaves its seat
    shoeY: [[0.5, 0], [0.9, SHOE_HIDDEN_Y]],   // unseen
    pres:  [[0.5, 1], [0.8, 0]],
    px:    [[0, SEAT.x * UNIT], [0.5, SEAT.x], [1, WHY.px]],
    py:    [[0, SEAT.y * UNIT], [0.5, SEAT.y], [1, WHY.py]],
    pz:    [[0.5, 0], [1, WHY.pz]],
    scale: [[0, SEAT.scale * UNIT], [0.5, SEAT.scale], [1, WHY.scale]],
    yaw:   [[0.5, 0], [1, WHY.yaw]],
    pitch: [[0.5, 0], [1, WHY.pitch]],
    cordS: [[0.5, CORD.droop], [0.8, CORD.relaxed]],
    cordL: [[0.5, CORD.flat], [0.8, 0]],
  },
};
// Phones: sections are as tall as their content, so a travel has far less scroll to play in than on a wide screen. This one
// does the most (out of the shoe, upright, open), so there it spreads its turn and its growth over more of the travel.
const INSIDE_PHONE = (() => { const o = {}; for (const k of ['pitch', 'yaw', 'px', 'py', 'pz', 'roll', 'face', 'cordL']) o[k] = [[0.3, SHAPES['how>inside'][k][0][1]], [0.88, INSIDE[k]]]; return o; })();
const PHONE_SHAPES = { 'how>inside': { ...INSIDE_PHONE, scale: [[0.3, SEAT.scale], [0.42, SEAT.scale * TRAVEL_SIZE], [0.88, INSIDE.scale]], explode: [[0.8, 0], [1, 1]] } };
export function evalState(from, to, u, out = {}, phone = false) {
  const A = STATES[from] || STATES.explorer, B = STATES[to] || A, key = `${from}>${to}`, shape = phone && PHONE_SHAPES[key] ? { ...SHAPES[key], ...PHONE_SHAPES[key] } : SHAPES[key] || {};
  const e = easeInOut(u);
  for (const k of KEYS) out[k] = shape[k] ? kf(shape[k], u) : lerp(A[k], B[k], e);
  const span = FIT_SPAN[`${from}>${to}`], fe = span ? ease.sm(clamp((u - span[0]) / (span[1] - span[0]))) : e;
  for (const k of ['fitK', 'fitX', 'fitY']) out[k] = lerp(A[k], B[k], fe);
  return out;
}

const VIEW = { pos: new THREE.Vector3(0, 1.45, 4.9), tgt: new THREE.Vector3(0, 0.18, 0) };
// Footbed tints (worn warm, fresh cool) and the light inside the shoe.
const INSOLE = { base: new THREE.Color(SHOE.insoleColor), warm: new THREE.Color(0xcaa983), cool: new THREE.Color(0xb9c6ec) };
const _bb = new THREE.Box3(), _X = new THREE.Vector3(1, 0, 0), _qf = new THREE.Quaternion(), _lo = new THREE.Vector3(), _ray = new THREE.Raycaster(), _ndc = new THREE.Vector2();
const _qa = new THREE.Quaternion(), _qb = new THREE.Quaternion(), _qg = new THREE.Quaternion(), _ea = new THREE.Euler(), _eb = new THREE.Euler(), _c = new THREE.Vector3(), _d = new THREE.Vector3(), _off = new THREE.Vector3(), _pp = new THREE.Vector3();

export class World {
  constructor(host, { reduced = () => false, narrow = () => false } = {}) {
    this.host = host; this.reduced = reduced; this.isNarrow = narrow;
    const r = this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    r.setClearColor(0x000000, 0); r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NeutralToneMapping; r.toneMappingExposure = 1.0; // Khronos PBR Neutral: made to keep a product's base colours true, which a colour picker needs
    r.domElement.className = 'world__gl'; r.domElement.setAttribute('aria-hidden', 'true');
    host.appendChild(r.domElement);

    const scene = this.scene = new THREE.Scene();
    this.#environment();
    r.domElement.addEventListener('webglcontextlost', (e) => e.preventDefault());
    r.domElement.addEventListener('webglcontextrestored', () => { this.#environment(); this.kick(); });
    scene.environmentIntensity = 0.85;
    scene.add(new THREE.HemisphereLight(0xffffff, 0xe4dfd5, 0.4));
    const key = new THREE.DirectionalLight(0xffffff, 1.35); key.position.set(2.5, 6, 4.5); scene.add(key);      // soft key, high and to the right
    const rim = new THREE.DirectionalLight(0xffffff, 2.4); rim.position.set(-3.5, 3, -5); scene.add(rim);       // rim from behind: the graphite shell's edge against the bone page
    // a soft light close to the product and moving with it: its fall-off gives the shell's long flat walls a gradient, which no distant light can
    this.kicker = new THREE.PointLight(0xffffff, 0, 3.2, 1.6); scene.add(this.kicker);
    this.glow = new THREE.PointLight(0xcfdcff, 0, 0.9, 1.6); scene.add(this.glow); // Stage 3's cool cast inside shoe A only (short reach)

    this.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);

    // venue floors (Stage 1), two layers for crossfades. Kept narrow so no marking reaches the viewport edge.
    const floorGeo = new THREE.PlaneGeometry(5.2, 5.2);
    const mkFloor = () => { const m = new THREE.Mesh(floorGeo, new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, opacity: 0 })); m.rotation.x = -Math.PI / 2; scene.add(m); return m; };
    this.floors = [mkFloor(), mkFloor()]; this.floorTween = null; this.textures = {}; this.venue = null;

    // contact shadow under the product
    const shadowTex = radialTex('rgba(30,27,22,0.62)', 'rgba(30,27,22,0.22)', 0.55);
    this.shadow = new THREE.Mesh(new THREE.PlaneGeometry(1.75, 0.95), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
    this.shadow.rotation.x = -Math.PI / 2; this.shadow.position.y = 0.003; scene.add(this.shadow);
    this.seatShadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.56), new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0 }));
    this.seatShadow.rotation.x = -Math.PI / 2; this.seatShadow.renderOrder = DRAW.inner + 0.5; this.seatShadow.visible = false; scene.add(this.seatShadow);

    this.slot = new ProductSlot({ size: 1.3, order: DRAW.product }); scene.add(this.slot); // drawn before the shoes' outer uppers (see DRAW)
    this.shoe = buildShoe(); this.shoe.position.y = SHOE_HIDDEN_Y; this.shoe.userData.setOpacity(0); scene.add(this.shoe);
    this.shoe2 = buildShoe(); this.shoe2.position.set(-0.72, SHOE_HIDDEN_Y, -0.95); this.shoe2.rotation.y = 0.1; this.shoe2.userData.setOpacity(0); scene.add(this.shoe2);
    // Stage 3's aura: a soft cobalt halo around the working product (on bone, light reads as colour, not brightness).
    // It follows the inner light at half strength and is veiled by the upper while the product is inside.
    this.halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: radialTex('rgba(35,70,255,0.55)', 'rgba(35,70,255,0.15)', 0.42), transparent: true, depthWrite: false, opacity: 0 }));
    this.halo.scale.set(1.15, 0.62, 1); this.halo.renderOrder = DRAW.inside; this.halo.visible = false; scene.add(this.halo);
    this.fx = new FX(scene);
    this.rack = new THREE.Group(); scene.add(this.rack); this.units = [];

    this.wider = {};      // phones: the frames for a popped part and a turned product (see frameStage)
    this.S = { ...STATES.explorer }; this.travel = { from: 'explorer', to: 'explorer', u: 0 };
    this.st3 = makeStage3();
    this.s3 = this.#freshS3(); this._P3 = { ...this.st3.REST, fxAlpha: 1 }; this._loopP = { ...this.st3.REST };
    this.emit = { A: 1, k: 1, add: (x, y, z, o) => { o.alpha *= this.emit.A; this.fx.add(x, this.#up(y), z, o); }, ring: (x, y, z, rad, o = {}) => { o.alpha = (o.alpha ?? 1) * this.emit.A; this.fx.ring(x, this.#up(y), z, rad, o); } };
    this.onStep = null;   // (stepIndex, progress 0..1, done) progress callback for the UI
    this.jump = null; this.frameCbs = [];
    this.visible = true; this.running = false; this.last = 0; this.clock = 0;
    // any input counts as the visitor being about (Step 3's loop calms after a long spell without, and wakes on the next)
    this.lastInput = 0; this.loopIdle = LOOP_IDLE_S; this.loopCalm = LOOP_CALM_S;
    const seen = () => { this.lastInput = performance.now(); if (this.s3.loop && !this.running) this.kick(); };
    for (const ev of ['pointermove', 'pointerdown', 'keydown', 'wheel', 'touchstart']) addEventListener(ev, seen, { passive: true, capture: true });
    new IntersectionObserver(([e]) => { this.visible = e.isIntersecting; this.kick(); }, { threshold: 0 }).observe(host);
    document.addEventListener('visibilitychange', () => this.kick());
    new ResizeObserver(() => this.resize()).observe(host);
    this.resize();
  }

  /** The GPU can drop the canvas (sleep, driver reset, a tab evicted on a phone). The image-based light does not survive that, so it is made again. */
  #environment() { const pm = new THREE.PMREMGenerator(this.renderer); this.scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose(); }

  async load() {
    await this.slot.load('M');
    this.#measure();
    this.#buildRack();
    await this.#precompile();
    this.onStep && this.onStep(-1, 0, true); // a step pressed while the model was on its way did not play
    this.applyState(); this.kick();
  }
  /** Stage 3 is built around the product's real measurements in the shoe, and where the travel up to Stage 2 has it at u 0.70 (the climb-out ends there). */
  #measure() {
    const S7 = evalState('what', 'how', 0.7, {}), q7 = new THREE.Quaternion().setFromEuler(new THREE.Euler(S7.pitch, S7.yaw, 0, 'YXZ'));
    const c7 = new THREE.Vector3(0, S7.scale * this.slot.height / 2, 0).applyQuaternion(q7).add(new THREE.Vector3(S7.px, S7.py, S7.pz));
    this.st3 = makeStage3(this.slot.height * SEAT.scale / 2, this.slot.semi.z * SEAT.scale, (r) => this.slot.halfAt(r) * SEAT.scale, this.slot.semi.x * SEAT.scale, { cx: c7.x, cy: c7.y });
    this.s3 = this.#freshS3();
    this._P3 = { ...this.st3.REST, fxAlpha: 1 }; this._loopP = { ...this.st3.REST };
  }
  /** Customize: show another size. It is a real swap, fetched the first time; colour and the rack follow. */
  async setModel(id) {
    await this.slot.useSize(id);
    const s = this.s3, inHow = this.travel.from === 'how' && this.travel.to === 'how', step = inHow && s.touched ? (s.tl?.step ?? (s.loop ? 2 : -1)) : -1;
    if (s.touched && step < 0) this.onStep && this.onStep(-1, 0, true);
    this.#measure(); this.#fillRack(); this.slot.prepareWires();
    if (step >= 0) this.playStep(step); // arrived during a step: Stage 3 is rebuilt round the new size, and the step carries on in it
    this.applyState(); this.kick();
  }

  // Compile every material once up front, so nothing stalls the first frame it appears in.
  async #precompile() {
    const S0 = { ...this.S };
    Object.assign(this.S, STATES.bulk, { wire: 0.5, explode: 0.5, pair: 1 }); this.applyState();
    this.slot.setWire(0.5); this.slot.apply();
    this.shoe2.userData.setOpacity(0.5);
    this.floors.forEach((f) => { f.visible = true; f.material.map = f.material.map || this.texture('bowling'); });
    this.fx.warm();
    this.halo.visible = true; this.halo.material.opacity = 0.2;
    try { if (this.renderer.compileAsync) await this.renderer.compileAsync(this.scene, this.camera); else this.renderer.compile(this.scene, this.camera); } catch {}
    // Compiling is not drawing: the driver finishes pipeline work on the first
    // draw of each state. Draw the heavy states once now, while the canvas is
    // still hidden behind the poster, so no transition pays for it later.
    for (const st of ['bulk', 'how', 'inside', 'story']) {
      Object.assign(this.S, STATES[st], st === 'how' ? { pair: 1 } : {}); this.applyState();
      if (st === 'how') { this.glow.intensity = 0.9; this.shoe.userData.setOpacity(0.5, 0.95); this.fx.warm(); this.halo.visible = true; this.halo.material.opacity = 0.15; }
      this.slot.update(0.016, false); this.renderer.render(this.scene, this.camera);
    }
    this.glow.intensity = 0; this.fx.clear();
    Object.assign(this.S, S0); this.slot.setWire(S0.wire); this.applyState();
  }

  // Rack clones share geometry and materials with the real shoe and product
  // (so the chosen colour carries over). Three shelves of three.
  #buildRack() {
    const spots = [], SX = 2.15, SY = 1.05;
    for (const dy of [1, 0, -1]) for (const dx of [-1, 0, 1]) if (dx || dy) spots.push([dx, dy]);
    const boardMat = new THREE.MeshStandardMaterial({ color: 0xd3cfc7, roughness: 0.9 });
    for (const dy of [1, 0, -1]) {
      const board = new THREE.Mesh(new THREE.BoxGeometry(SX * 3 + 0.3, 0.05, 1.3), boardMat);
      board.userData.base = new THREE.Vector3(0, dy * SY - 0.03, 0); board.userData.board = true; board.visible = false;
      this.rack.add(board); this.units.push(board);
    }
    for (const [dx, dy] of spots) {
      const unit = new THREE.Group();
      // the real shoe is hidden and parked below the floor until Stage 3: each clone starts visible, at the unit's origin
      const s = this.shoe.clone(); s.visible = true; s.position.set(0, 0, 0); s.rotation.set(0, 0, 0); s.scale.set(1, 1, 1);
      unit.add(s);
      const prod = new THREE.Group(); prod.position.set(SEAT.x, SEAT.y, 0); prod.scale.setScalar(SEAT.scale);
      unit.add(prod); unit.userData.prod = prod;
      unit.userData.base = new THREE.Vector3(dx * SX, dy * SY, 0);
      unit.visible = false; this.rack.add(unit); this.units.push(unit);
    }
    this.#fillRack();
  }
  /** The rack's products, in the current size. They share the real product's geometry and materials, so the shell colour carries over. */
  #fillRack() { for (const u of this.units) if (u.userData.prod) { u.userData.prod.clear(); u.userData.prod.add(this.slot.rackCopy(CORD.droop, CORD.flat)); } }

  resize() {
    const w = this.host.clientWidth || 1, h = this.host.clientHeight || 1;
    this.W = w; this.H = h;
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.narrow = this.isNarrow();
    this.fit = w / h < 1 ? Math.pow(1 / (w / h), 0.75) : (h < 420 ? 0.76 : 1); // short bands (phones) move in
    this.camera.updateProjectionMatrix();
    this.fxScale = (h * this.renderer.getPixelRatio()) / (2 * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)));
    this.fx.setScale(this.fxScale, this.renderer.getPixelRatio()); this.viewNow = '';
    this.applyState(); this.kick();
  }

  // -------------------------------------------------------------- stage 1
  texture(kind) {
    if (!this.textures[kind]) { const t = new THREE.CanvasTexture(drawFloor(kind)); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = this.renderer.capabilities.getMaxAnisotropy(); this.textures[kind] = t; }
    return this.textures[kind];
  }
  setVenue(kind, { animate = true } = {}) {
    if (kind === this.venue) return;
    const [cur, next] = this.floors;
    next.material.map = this.texture(kind); next.material.needsUpdate = true;
    this.floorTween = { start: performance.now(), ms: (!animate || this.reduced()) ? 0 : 420 };
    this.floors = [next, cur]; this.venue = kind;
    this.kick();
  }

  // ----------------------------------------------- the one scroll-linked move
  /** u: travel progress; uLeave: the same scroll position on time-linear progress, used while departing from Stage 3. */
  setTravel(from, to, u, uLeave = u) {
    const t = this.travel;
    if (t.from === from && t.to === to && Math.abs(t.u - u) < 1e-4) return;
    t.from = from; t.to = to; t.u = u; t.uLeave = this.reduced() ? u : uLeave;
    this.jump = null;
    this.#syncStage3();
    const uu = this.s3.frozen && this.s3.frozen.leaving ? uLeave : u;
    if (this.reduced()) {
      // Crossfade fallback: the product snaps to each resting pose; the layer dips between them.
      evalState(from, to, u < 0.5 ? 0 : 1, this.S, this.narrow);
      this.renderer.domElement.style.opacity = u > 0 && u < 1 ? String(1 - 0.9 * Math.sin(Math.PI * u)) : ''; // at rest the stylesheet decides (Bulk softens it)
    } else {
      evalState(from, to, uu, this.S, this.narrow);
      this.renderer.domElement.style.opacity = '';
    }
    this.applyState(); this.kick();
  }
  restState(stage) { return { ...STATES[stage] }; }
  /** Nav jump: settle to a stage's resting state on a clock, no travel. */
  jumpTo(stage, ms = 300) {
    if (!STATES[stage]) return;
    const s = this.s3, t = this.travel, nearHow = t.from === 'how' || t.to === 'how';
    if (stage === 'how') { if (s.frozen) { s.jumpExit = false; this.#unfreeze(); } }
    else if (nearHow && (s.touched || s.frozen)) {
      const e0 = s.frozen ? s.exitE : 0;                // a jump during a scroll-out carries on from where the exit is
      if (!s.frozen) this.#freeze(false);
      s.jumpExit = true; s.jumpE0 = e0; s.frozen.jump = true;
    }
    s.atRest = stage === 'how';                          // only a scroll that starts at rest in How is a departure
    this.travel = { from: stage, to: stage, u: 0 };
    const from = { ...this.S }, to = STATES[stage];
    // Shoes never slide through anything on a jump: visible ones fade out where they are, move while unseen, and
    // fade in at the end, once the product is (almost) in place.
    this.jump = { start: performance.now(), ms: this.reduced() ? 0 : ms, from, to, shoes: Math.max(from.shoeA, from.pair, to.shoeA, to.pair) > 0.01 && [...SHOE_MOVE].some((k) => Math.abs(from[k] - to[k]) > 1e-3) };
    this.renderer.domElement.style.opacity = '';
    this.kick();
  }

  /** The nav jump's state at progress u (0..1). */
  #jumpAt(u) {
    const j = this.jump, s3 = this.s3;
    // with shoes on either side, everything else moves only while they are unseen (after they fade out, before they fade in)
    const a = j.shoes && Math.max(j.from.shoeA, j.from.pair) > 0.01 ? 0.2 : 0, b = j.shoes && Math.max(j.to.shoeA, j.to.pair) > 0.01 ? 0.8 : 1;
    const e = easeInOut(clamp((u - a) / (b - a))), pa = Math.max(j.to.shoeA, j.to.pair) > 0.01 ? b - 0.15 : a;
    for (const k of KEYS) {
      if (k === 'pres') this.S[k] = lerp(j.from[k], j.to[k], easeInOut(clamp((u - pa) / 0.15))); // just after shoes have gone, or just before they show
      else if (j.shoes && SHOE_MOVE.has(k)) this.S[k] = lerp(j.from[k], j.to[k], easeInOut(clamp((u - 0.2) / 0.6)));
      else if (j.shoes && SHOE_FADE.has(k)) this.S[k] = u < 0.5 ? lerp(j.from[k], 0, easeInOut(clamp(u / 0.2))) : lerp(0, j.to[k], easeInOut(clamp((u - 0.8) / 0.2)));
      else if (k === 'scale' || k === 'fitK') this.S[k] = lerp(j.from[k], j.to[k], j.to[k] > j.from[k] ? e * e * e : 1 - (1 - e) ** 3); // grows late and shrinks early, so a pose still on its way never outgrows the band
      else if (k === 'py') this.S[k] = lerp(j.from[k], j.to[k], j.to[k] < j.from[k] ? 1 - (1 - e) ** 2 : e * e);                      // and it comes down first, goes up last, for the same reason
      else this.S[k] = lerp(j.from[k], j.to[k], e);
    }
    if (s3.jumpExit) { const e0 = s3.jumpE0 || 0; s3.exitE = e0 + (1 - e0) * clamp(u / 0.6); s3.exitRaw = e0 + (1 - e0) * (u / 0.6); }
  }

  // -------------------------------------------------------------- stage 3
  // The choreography lives in stage3.js. Here: playing a step (with a quick
  // swap first when the product is not where the step starts), the working
  // loop, and freezing the scene when a scroll leaves the stage so the
  // product's way out is a pure function of the scroll.
  #freshS3() { return { P: { ...this.st3.REST }, tl: null, tail: null, loop: null, still: null, fades: [], frozen: null, frozenAt: 0, exitE: 0, exitRaw: 0, jumpExit: false, touched: false, pending: -1, atRest: false }; }
  #resetS3() { this.s3 = this.#freshS3(); this.onStep && this.onStep(-1, 0, true); }
  /** How far the travel has taken things out of Stage 3 (0 at rest in it, 1 once out; raw keeps counting, for the ghost trail). */
  #exitE(u, raw = false) {
    const t = this.travel, down = t.from === 'how' && t.to !== 'how', up = t.to === 'how' && t.from !== 'how';
    if (!down && !up) return 0;
    if (this.reduced()) return (down ? u >= 0.5 : u < 0.5) ? 1 : 0;
    const e = down ? u / EXIT_U : (1 - u) / EXIT_U;
    return raw ? Math.max(0, e) : clamp(e);
  }
  #syncStage3() {
    const s = this.s3, t = this.travel, inHow = t.from === 'how' || t.to === 'how';
    const away = !inHow || (t.from === 'how' && t.to !== 'how' && t.u >= 1) || (t.to === 'how' && t.from !== 'how' && t.u <= 0);
    if (away) {
      if (s.touched) this.#resetS3();                    // back to Step 1, hovering (tells the UI)
      else if (s.frozen) { s.frozen = null; s.exitE = 0; } // nothing was played: just drop the snapshot, no UI work mid-scroll
      this.s3.atRest = false; return;
    }
    if (this.#exitE(t.u) > 0) {
      // A scroll that starts from rest in Stage 3 is a departure: it runs on time-linear progress (see main.js).
      if (!s.frozen) { this.#freeze(t.to === 'how'); s.frozen.leaving = s.atRest; }
      s.atRest = false;
      const uu = s.frozen.leaving ? t.uLeave ?? t.u : t.u;
      s.exitE = this.#exitE(uu); s.exitRaw = this.#exitE(uu, true);
    } else { s.atRest = true; if (s.frozen) this.#unfreeze(); }
  }
  /** up: the scroll is leaving toward Stage 2 (the climb-out then ends on that travel's own pose). */
  #freeze(up = false) {
    const s = this.s3, now = performance.now();
    if (s.tl && !s.tl.held && now - s.tl.start < s.tl.pre) { s.tl.start = now - s.tl.pre; Object.assign(s.P, s.tl.from); s.tl.t = 0; } // mid-swap: finish it (the product is tiny then)
    s.frozen = this.st3.freeze(s.P, s.tl, up); s.frozenAt = now; s.exitE = 0; s.exitRaw = 0;
  }
  #unfreeze() {
    const s = this.s3, d = performance.now() - s.frozenAt;
    if (s.tl) s.tl.start += d;
    if (s.loop) s.loop.start += d;
    if (s.tail) s.tail.start += d;
    s.frozen = null; s.exitE = 0; s.jumpExit = false;
    if (s.pending >= 0) { const i = s.pending; s.pending = -1; this.playStep(i); }
    this.kick();
  }
  /** Play step i (0..3) from the current state. A product that is not where the step starts is swapped there first, so it never crosses a wall. */
  playStep(i) {
    const s = this.s3, st = this.st3; s.touched = true;
    if (s.frozen) { s.pending = i; return; }
    const now = performance.now();
    // whatever was in flight (the step, its tail, the loop) freezes where it is and fades out instead of popping
    if (!this.reduced()) {
      if (s.tl && (s.tl.held || now - s.tl.start >= s.tl.pre)) { const T = s.tl, tt = T.t; s.fades.push({ start: now, draw: (em) => st.steps[T.step].fx(tt, T.from, em) }); }
      if (s.tail) { const T = s.tail, tt = (now - T.start) / T.ms; if (tt < T.until) s.fades.push({ start: now, draw: (em) => st.steps[T.step].fx(tt, T.from, em) }); }
      if (s.loop) { const sec = (now - s.loop.start) / 1000, Pc = { ...s.P }, amp = s.loop.amp; s.fades.push({ start: now, draw: (em) => st.loop(sec, Pc, em, amp) }); }
    }
    s.pending = -1; s.loop = null; s.tail = null; s.still = null;
    const blend = st.canBlend(i, s.P), from = blend ? { ...s.P } : st.startOf(i, s.P);
    for (const a of ['pitch', 'roll', 'spin']) from[a] = Math.atan2(Math.sin(from[a]), Math.cos(from[a]));
    if (this.reduced()) {
      // no motion: a straight cut to the step's end state, with a still picture of the step
      st.stillState(i, from, s.P); s.tl = null; s.still = { i, start: now };
      this.onStep && this.onStep(i, 1, true); this.applyState(); this.kick(); return;
    }
    s.tl = { step: i, start: performance.now(), pre: blend ? 0 : SWAP_MS, ms: st.steps[i].ms, t: 0, from, before: { ...s.P } };
    this.kick();
  }
  /** Phone band: heights above the hover point are compressed so jumps and sparkles stay inside the short band. */
  #up(y) { const h = this.st3.HOVER.cy; return this.narrow && y > h ? h + (y - h) * NARROW_UP : y; }
  /**
   * The quick swap (k 0..1 over SWAP_MS): the product shrinks about its own centre where it is (a convex shape shrinking
   * cannot touch a wall), jumps to the step's start while invisible and regrows there; overshoot only at HOVER. Shoe A's
   * upper crossfades; a footbed tint changes while the upper is still opaque (at the start going in, at the end going out).
   */
  #swap(tl, k) {
    const P = this.s3.P, A = tl.before, B = tl.from, cut = 0.4, H = this.st3.HOVER, aboveA = A.cy > 0.62, aboveB = B.cy > 0.62;
    for (const key of KEYS3) P[key] = lerp(A[key], B[key], ease.sm(k));
    P.aTint = aboveB ? (k < 1 ? A.aTint : B.aTint) : B.aTint;
    if (k < cut) {
      const u = k / cut; for (const key of PRODUCT_KEYS) P[key] = A[key];
      P.vis = A.vis * (1 - ease.in2(u)); if (aboveA) { P.spin = A.spin + 0.35 * u; P.cy = A.cy + 0.02 * u; }
    } else {
      const u = (k - cut) / (1 - cut); for (const key of PRODUCT_KEYS) P[key] = B[key];
      P.vis = aboveB && Math.abs(B.cy - H.cy) < 0.01 ? ease.out2(u) + 0.04 * Math.sin(Math.PI * u) : ease.out2(u);
    }
  }
  #drawFx(now) {
    const s = this.s3, st = this.st3, fx = this.fx;
    fx.begin();
    const A = this.S.pair * (s.frozen ? (this._P3.fxAlpha ?? 1) : 1);
    this.emit.k = this.narrow ? 0.7 : 1;  // fewer particles on phones
    if (A > 0.01) {
      this.emit.A = A;
      if (!this.reduced()) {
        if (s.tl && (s.tl.held || now - s.tl.start >= s.tl.pre)) st.steps[s.tl.step].fx(s.tl.t, s.tl.from, this.emit);
        if (s.tail) { const tt = ((s.frozen ? s.frozenAt : now) - s.tail.start) / s.tail.ms; if (tt < s.tail.until) st.steps[s.tail.step].fx(tt, s.tail.from, this.emit); else s.tail = null; }
        if (s.loop) { Object.assign(this._loopP, s.P); st.loop(((s.frozen ? s.frozenAt : now) - s.loop.start) / 1000, this._loopP, this.emit, s.loop.amp); }
      } else if (s.still) st.still(s.still.i, s.P, this.emit, s.still.i === 0 ? 1 - clamp((now - s.still.start - 800) / 250) : 1);
    }
    for (let i = s.fades.length - 1; i >= 0; i--) {         // interrupted effects fading out
      const a = 1 - (now - s.fades[i].start) / FADE_MS;
      if (a <= 0) { s.fades.splice(i, 1); continue; }
      this.emit.A = a * this.S.pair; s.fades[i].draw(this.emit);
    }
    if (s.frozen && !this.reduced()) { this.emit.A = 1; st.exitFx(s.frozen, s.exitRaw, this.emit); } // the ghost trail outlasts the shoes
    fx.end();
  }
  // -------------------------------------------------------------- stage 4
  selectLayer(i) { this.slot.selectLayer(i); this.kick(); }
  /** The layer under a point on the canvas (px), or -1. */
  pickLayer(x, y) {
    if (!this.slot.ready) return -1;
    _ray.setFromCamera(_ndc.set((x / this.W) * 2 - 1, -(y / this.H) * 2 + 1), this.camera);
    return this.slot.pick(_ray);
  }
  // ------------------------------------------------------------ customize
  setColors(slots, ms) { this.slot.setColors(slots, ms); this.kick(); }
  dragBy(dx, dy) { this.slot.dragBy(dx, dy); this.kick(); }
  releaseDrag() { this.slot.releaseDrag(); this.kick(); }

  // ------------------------------------------------------------ projection
  project(v, out = {}) {
    const p = _pp.copy(v).project(this.camera);
    out.x = (p.x * 0.5 + 0.5) * this.W; out.y = (-p.y * 0.5 + 0.5) * this.H; out.front = p.z < 1;
    return out;
  }
  /** Where a point on a named part is on the canvas, for the Stage 2 leader lines. */
  partDot(part, at) { return this.project(this.slot.partPoint(PARTS.indexOf(part), at)); }
  onFrame(cb) { this.frameCbs.push(cb); }

  // ---------------------------------------------------------------- frame
  applyState() {
    const S = this.S, slot = this.slot, s3 = this.s3, st = this.st3;
    const P = s3.frozen ? st.exit(s3.frozen, s3.exitE, this._P3) : s3.P;
    if (!s3.frozen) this._P3.fxAlpha = 1;
    const gate = s3.frozen ? st.gate(s3.frozen, s3.exitE) : 1;
    // With the shoes on stage (Stage 3, Bulk) the product keeps its true size and place relative to them:
    // the phone layout's pull toward centre fades out (pres, its own key, so this is done before a shoe shows round
    // the product and only undone once it has gone). Each stage's product fits the space its text leaves (fit keys).
    const pres = clamp(S.pres);
    const nx = this.narrow ? lerp(0.55, 1, pres) : 1, ns = this.narrow ? lerp(0.85, 1, pres) : 1;
    const sc = Math.max(0.001, S.scale * S.fitK * ns), h = slot.height || 0.26;
    // The travel's pose (bottom-centre position, yaw and pitch about it) gives a centre; the Stage 3 pose
    // offsets that centre from the hover point and turns and squashes the product about it.
    _qa.setFromEuler(_ea.set(S.pitch, S.yaw, S.roll, 'YXZ')).multiply(_qf.setFromAxisAngle(_X, S.face));
    _c.set(0, sc * h / 2, 0).applyQuaternion(_qa); _c.x += (S.px + S.fitX) * nx; _c.y += S.py + S.fitY; _c.z += S.pz;
    const H = st.HOVER;
    const cx = P.cx + gate * (_c.x - H.cx), cy = this.#up(P.cy + gate * (_c.y - H.cy)), cz = P.cz + gate * (_c.z - H.cz);
    let scu = sc;
    if (gate < 1) { _qg.identity().slerp(_qa, gate); _qa.copy(_qg); scu = lerp(SEAT.scale, sc, gate); } // still on its way out of the shoe
    _qb.setFromEuler(_eb.set(P.pitch, P.spin, P.roll, 'ZXY'));
    slot.quaternion.copy(_qa).multiply(_qb);
    const sv = scu * P.vis;
    slot.scale.set(Math.max(0.001, sv * P.sqx), Math.max(0.001, sv * P.sqy), Math.max(0.001, sv * P.sqz));
    _d.set(0, sv * P.sqy * h / 2, 0).applyQuaternion(slot.quaternion);
    slot.position.set(cx - _d.x, cy - _d.y, cz - _d.z);
    slot.setExplode(S.explode); slot.setWire(S.wire); slot.setGhost(S.ghost); slot.setCord(S.cordS + P.cs, S.cordL + P.cl);
    // shoes: settle hops and squashes about the sole, see-through while the product is inside, footbed tint
    const aw = 1 / Math.sqrt(P.aSq), bw = 1 / Math.sqrt(P.bSq);
    this.shoe.scale.set(S.unit * aw, S.unit * P.aSq, S.unit * aw); this.shoe.userData.setOpacity(S.shoeA * P.aRel, S.shoeA);
    tilt(this.shoe, P.aTilt + S.shoeTilt, S.unit * aw, 0, S.shoeY + P.aY, S.shoeZ, 0);
    this.shoe2.scale.set(bw, P.bSq, bw); this.shoe2.userData.setOpacity(S.shoeA * S.pair * 0.9 * P.bRel, S.shoeA * S.pair * 0.9);
    tilt(this.shoe2, P.bTilt, bw, -0.72, S.pairY + P.bY, -0.95 + S.pairZ, 0.1);
    tint(this.shoe, P.aTint); tint(this.shoe2, P.bTint);
    // the soft cool cast inside the shoe, the product's cobalt glow (an emissive mix of hl) and its aura
    const pr = S.pair;
    this.glow.position.set(cx, cy + 0.12, cz); this.glow.intensity = 2.6 * P.glow * pr;
    this.kicker.position.set(cx - 0.95 * sc, cy + 0.42 * sc, cz + 1.05 * sc); this.kicker.intensity = 3.4 * sc * sc * (1 - 0.9 * pres); // not beside the shoes: they need no help and would wash out
    slot.setHighlight((P.hl / 0.35) * pr);
    const ha = 0.5 * P.glow * pr * P.vis; this.halo.material.opacity = ha; this.halo.visible = ha > 0.004; this.halo.position.set(cx, cy, cz + 0.02);
    this.halo.renderOrder = cy < 0.62 ? DRAW.inside : DRAW.front;
    const r = easeInOut(clamp(S.rack));
    for (const u of this.units) {
      u.visible = r > 0.01; u.position.copy(u.userData.base).multiplyScalar(r * S.unit);
      if (u.userData.board) u.scale.set(Math.max(0.001, r * S.unit), S.unit, S.unit); else u.scale.setScalar(Math.max(0.001, r * S.unit));
    }
    this.heroWeight = S.floor;
    this.#view();
  }
  /** The stage's framing: a zoom and pan of the whole picture, so everything in it keeps its true proportions. */
  #view() {
    const S = this.S, c = this.camera, slot = this.slot;
    // a part out of the stack, or the product turned, eases the view out to the frame measured for it
    const out = Math.min(1, Math.max(...slot.parts.map((L) => L.pop.p), 0)), turned = Math.min(1, Math.abs(Math.sin(slot.drag.yaw)) * 1.8), f = out > 0 ? this.wider.inside : turned > 0 ? this.wider.customize : null, w = f ? (out > 0 ? easeInOut(out) : turned) : 0;
    const k = lerp(S.vk, f?.k ?? S.vk, w), x = lerp(S.vx, f?.x ?? S.vx, w), y = lerp(S.vy, f?.y ?? S.vy, w), key = `${k.toFixed(4)},${x.toFixed(2)},${y.toFixed(2)}`;
    if (key === this.viewNow) return; this.viewNow = key;
    c.zoom = k;
    if (Math.abs(x) > 0.01 || Math.abs(y) > 0.01) c.setViewOffset(this.W, this.H, -x, -y, this.W, this.H); else c.clearViewOffset();
    c.updateProjectionMatrix();
    this.fx.setScale(this.fxScale * k, this.renderer.getPixelRatio());
  }
  kick() { if (this.running || !this.visible || document.hidden) return; this.running = true; this.last = performance.now(); requestAnimationFrame((t) => this.frame(t)); }
  frame(now) {
    // a frame that throws must not leave the loop marked as running, or nothing would ever draw again
    try { this.#frame(now); } catch (err) { this.running = false; throw err; }
  }
  #frame(now) {
    if (!this.visible || document.hidden) { this.running = false; return; }
    const dt = Math.min(0.05, Math.max(0.0005, (now - this.last) / 1000)); this.last = now; this.clock += dt; // never 0: a 0 dt turns ratios into NaN
    let moving = false, dirty = false;
    const s3 = this.s3, st = this.st3;
    if (this.jump) {
      const j = this.jump, u = j.ms ? Math.min(1, (now - j.start) / j.ms) : 1;
      this.#jumpAt(u);
      if (u >= 1) { this.jump = null; if (s3.jumpExit) this.#resetS3(); }
      moving = true; dirty = true; // the final state must still be applied below
    }
    // Stage 3: the step timeline (with its quick swap first, if any) and the working loop
    const S3 = this.s3;
    if (this.reduced() && S3.tl && !S3.tl.held && !S3.frozen) { const i = S3.tl.step; st.stillState(i, S3.tl.from, S3.P); S3.tl = null; S3.tail = null; S3.loop = null; S3.still = { i, start: now }; this.onStep && this.onStep(i, 1, true); dirty = true; }
    if (S3.tail && !S3.frozen && (now - S3.tail.start) / S3.tail.ms >= S3.tail.until) S3.tail = null;
    if (S3.tl && !S3.frozen && !S3.tl.held) {
      const tl = S3.tl, el = Math.max(0, now - tl.start);
      if (tl.pre > 0 && el < tl.pre) { this.#swap(tl, el / tl.pre); tl.t = 0; }
      else { tl.t = Math.min(1, (el - tl.pre) / tl.ms); st.evalStep(tl.step, tl.t, tl.from, S3.P); }
      const prog = Math.min(1, el / (tl.pre + tl.ms));
      this.onStep && this.onStep(tl.step, prog, prog >= 1);
      if (prog >= 1) { S3.tl = null; S3.tail = { step: tl.step, from: tl.from, start: tl.start + tl.pre, ms: tl.ms, until: 1 + (st.steps[tl.step].tail || 0) }; if (st.steps[tl.step].id === 'work') S3.loop = { start: now, amp: 1 }; }
      moving = true; dirty = true;
    }
    if (S3.loop && !S3.frozen && !this.reduced()) {
      // Full life, every frame, while the visitor is about. After a long spell with no input at all it calms (the motes
      // thin out, the glow steadies) and the frame loop rests on a still of the product at work; any input wakes it.
      const L = S3.loop, sec = Math.max(0, now - L.start) / 1000, idle = (now - Math.max(this.lastInput, L.start)) / 1000;
      const want = 1 - clamp((idle - this.loopIdle) / this.loopCalm);
      L.amp = want < L.amp ? want : Math.min(want, L.amp + dt / LOOP_WAKE_S);
      st.loop(sec, S3.P, null, L.amp); dirty = true;
      if (L.amp > 0) moving = true;
    }
    if ((S3.tail && !S3.frozen) || S3.fades.length || (S3.still && S3.still.i === 0 && now - S3.still.start < 1100)) moving = true; // effects still finishing
    if (dirty) this.applyState();
    moving = this.slot.update(dt, this.reduced()) || moving;
    this.#view();
    if (this.slot.drag.held) this.applyState();
    this.#drawFx(now);
    // venue floors
    const [cur, prev] = this.floors; let wc = 1, wp = 0;
    if (this.floorTween) { const ft = this.floorTween, u = ft.ms ? Math.min(1, (now - ft.start) / ft.ms) : 1, e = easeInOut(u); wc = e; wp = 1 - e; if (u >= 1) this.floorTween = null; moving = true; }
    cur.material.opacity = wc * this.heroWeight; prev.material.opacity = wp * this.heroWeight;
    cur.visible = cur.material.opacity > 0.004; prev.visible = prev.material.opacity > 0.004;
    this.#aim();
    this.#shadows();

    this.renderer.render(this.scene, this.camera);
    for (const cb of this.frameCbs) cb(this);
    if (moving) requestAnimationFrame((t) => this.frame(t)); else this.running = false;
  }

  #aim() {
    const off = _off.copy(VIEW.pos).sub(VIEW.tgt).multiplyScalar(this.fit);
    this.camera.position.copy(VIEW.tgt).add(off); this.camera.lookAt(VIEW.tgt); this.camera.updateMatrixWorld();
    this.slot.viewer.copy(this.camera.position);
  }
  /**
   * Contact shadows: on the floor under the product, and on the footbed while it lies in the shoe. Standing upright the
   * product floats in front of the page, so its shadow goes where the floor meets the line of sight past its lowest point,
   * and is only as wide as the product now is.
   */
  #shadows() {
    const S = this.S, sh = this.shadow, slot = this.slot; if (!slot.ready) return;
    const lift = slot.position.y, k = slot.semi.x / 0.65, sc = S.scale * S.fitK, up = clamp(Math.abs(S.roll) / (Math.PI / 2));
    if (up > 0.01) {
      let y0 = 1e9; slot.corners((v) => { y0 = Math.min(y0, v.y); });
      const c = this.camera.position, t = c.y / Math.max(0.01, c.y - y0 + 0.02);
      _lo.set(slot.position.x, y0, slot.position.z);
      sh.position.x = lerp(slot.position.x, c.x + (_lo.x - c.x) * t, up); sh.position.z = lerp(slot.position.z, c.z + (_lo.z - c.z) * t, up);
    } else { sh.position.x = slot.position.x; sh.position.z = slot.position.z; }
    const flat = Math.max(0.3, sc * k) * (1 + lift * 0.5);
    sh.scale.setScalar(lerp(flat, Math.max(0.3, sc * k) * 0.34, up));
    sh.material.opacity = lerp(clamp(1 - lift * 1.6), 0.55, up) * (1 - S.shoeA) * (1 - S.wire * 0.8) * (0.5 + 0.5 * S.floor) * (1 - clamp(S.explode * 4));
    sh.visible = sh.material.opacity > 0.02;
    const ss = this.seatShadow, gap = slot.position.y - (0.15 * S.unit + S.shoeY), a = clamp(1 - Math.abs(gap) / 0.12) * clamp(S.shoeA / 0.5);
    ss.material.opacity = 0.9 * a; ss.visible = a > 0.02;
    if (ss.visible) { ss.position.set(slot.position.x, 0.15 * S.unit + S.shoeY + 0.006, slot.position.z); ss.scale.setScalar(slot.semi.x * 2.5 * slot.scale.x); }
  }
  /** The product's box on the canvas right now, in px. */
  #screenBox() {
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    this.slot.corners((v) => { const q = this.project(v); x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y); });
    return { x0, x1, y0, y1 };
  }
  /**
   * Keep a stage's product inside the box its text leaves (px on the canvas, at rest; null: no fit). It measures the
   * stage's resting pose, shrinks the product only if it must and shifts it into the box. With center it also centres it
   * there, and with grow it may enlarge it, up to that factor, to fill the box (phones size the upright poses to the band).
   * Pair with fitsChanged() once all the stages are set.
   */
  fitStage(stage, box, { center = false, grow = 1 } = {}) {
    const T = STATES[stage]; T.fitK = 1; T.fitX = 0; T.fitY = 0;
    if (!box || !this.slot.ready) return;
    const S = this.S, s3 = this.s3, deg = THREE.MathUtils.degToRad(this.camera.fov / 2), turn = this.slot.turn, rx = turn.rotation.x, ry = turn.rotation.y;
    this.s3 = this.#freshS3(); this.#aim(); turn.rotation.set(0, 0, 0);      // the pose itself, not however it is dragged right now
    for (let i = 0; i < 16; i++) {
      this.S = { ...T, wire: 0 }; this.applyState(); this.slot.apply();   // the sketch look plays no part in where it sits, and is not free to build
      const b = this.#screenBox(), room = Math.min((box.right - box.left) / (b.x1 - b.x0), (box.bottom - box.top) / (b.y1 - b.y0));
      if (room < 0.995 || (room > 1.005 && T.fitK < grow)) { T.fitK = Math.min(Math.max(grow, 1), T.fitK * room); continue; }
      const mid = (a, c) => (a + c) / 2;
      const sx = center ? mid(box.left, box.right) - mid(b.x0, b.x1) : b.x0 < box.left ? box.left - b.x0 : b.x1 > box.right ? box.right - b.x1 : 0;
      const sy = center ? mid(box.top, box.bottom) - mid(b.y0, b.y1) : b.y0 < box.top ? box.top - b.y0 : b.y1 > box.bottom ? box.bottom - b.y1 : 0;
      if (Math.abs(sx) < 0.5 && Math.abs(sy) < 0.5) break;
      const ppu = this.H / (2 * Math.tan(deg) * this.camera.position.distanceTo(this.slot.position));
      T.fitX += sx / ppu; T.fitY -= sy / ppu;
    }
    this.S = S; this.s3 = s3; turn.rotation.set(rx, ry, 0);
  }
  /**
   * Phones: frame a stage in the part of the canvas it has (px), from what it really puts on screen: the cord, the shoes and
   * every Stage 3 step as it plays. The whole picture is zoomed and panned so that just fits. A zoom cannot change anything's
   * size relative to anything else, so the product stays true to the shoes, and the values ease through the travels like any
   * other key, so no section's scale jumps. Inside and Customize also measure what a click or a drag can do (each part
   * popped out, the product turned all the way round): that is a second, wider frame the view eases to only while it happens,
   * so at rest the product fills its space. null: no framing, as on wide screens.
   */
  frameStage(stage, box) {
    const T = STATES[stage]; T.vk = 1; T.vx = 0; T.vy = 0; delete this.wider[stage];
    if (!box || !this.slot.ready) return;
    const S = this.S, s3 = this.s3, slot = this.slot, turn = slot.turn, rx = turn.rotation.x, ry = turn.rotation.y, st = this.st3;
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    const at = (v) => { const q = this.project(v); x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y); };
    const product = () => { this.applyState(); slot.apply(); slot.corners(at); };
    this.s3 = this.#freshS3(); this.S = { ...T, wire: 0 }; this.#aim(); turn.rotation.set(0, 0, 0);
    product();
    if (stage === 'how') {
      for (const o of [this.shoe, this.shoe2]) {
        _bb.setFromObject(o);
        for (let i = 0; i < 8; i++) at(_lo.set(i & 1 ? _bb.max.x : _bb.min.x, i & 2 ? _bb.max.y : _bb.min.y, i & 4 ? _bb.max.z : _bb.min.z));
      }
      for (let i = 0; i < st.steps.length; i++) { const from = st.startOf(i, st.REST); for (let t = 0; t <= 1.001; t += 0.1) { st.evalStep(i, t, from, this.s3.P); product(); } }
    }
    const frame = () => {
      const k = clamp(Math.min((box.right - box.left) / (x1 - x0), (box.bottom - box.top) / (y1 - y0)), 0.3, 5), cx = this.W / 2, cy = this.H / 2;
      return { k, x: (box.left + box.right) / 2 - (cx + k * ((x0 + x1) / 2 - cx)), y: (box.top + box.bottom) / 2 - (cy + k * ((y0 + y1) / 2 - cy)) };
    };
    const rest = frame(); T.vk = rest.k; T.vx = rest.x; T.vy = rest.y;
    if (stage === 'inside') for (const L of slot.parts) { for (const p of [0.5, 0.8, 1, 1.09]) { L.pop.p = p; slot.apply(); slot.corners(at); } L.pop.p = 0; slot.apply(); }
    if (stage === 'customize') for (let a = 0; a < 8; a++) { turn.rotation.y = (a / 8) * Math.PI * 2; slot.apply(); slot.corners(at); }
    if (stage === 'inside' || stage === 'customize') this.wider[stage] = frame();
    this.S = S; this.s3 = s3; turn.rotation.set(rx, ry, 0); this.viewNow = '';
  }
  /** The fits have changed: the current state follows, wherever the page is. */
  fitsChanged() {
    const t = this.travel, o = evalState(t.from, t.to, this.reduced() ? (t.u < 0.5 ? 0 : 1) : t.u, {}, this.narrow);
    if (!this.jump) for (const k of ['fitK', 'fitX', 'fitY', 'vk', 'vx', 'vy']) this.S[k] = o[k];
    this.applyState(); this.slot.apply(); this.kick();
  }

  /** Render one frame and return it, for no-WebGL posters. */
  capture() { this.renderer.render(this.scene, this.camera); return this.renderer.domElement.toDataURL('image/webp', 0.9); }

  // ------------------------------------------------------------------ lab
  /** Lab: hold step i at local time t (from its usual start state), effects included. */
  scrub(i, t, from = null) {
    const s = this.s3, st = this.st3;
    s.frozen = null; s.loop = null; s.touched = true;
    const f = from || st.startOf(i, st.REST);
    st.evalStep(i, t, f, s.P);
    s.tl = { step: i, start: performance.now(), pre: 0, ms: st.steps[i].ms, t, from: f, before: { ...s.P }, held: true };
    this.applyState(); this.kick();
  }
  /** Lab: hold a nav jump to `stage` at progress u (starting one if needed) and measure it. */
  jumpProbe(stage, u) {
    if (!this.jump || this.jump.stage !== stage) { this.jumpTo(stage, 1e9); this.jump.stage = stage; }
    this.#jumpAt(u); this.applyState(); return this.wallProbe();
  }
  /** Lab: put the world at rest in a stage, Stage 3 fresh. */
  labRest(stage) {
    this.jump = null; this.s3 = this.#freshS3(); this.s3.atRest = stage === 'how';
    Object.assign(this.S, STATES[stage]); this.travel = { from: stage, to: stage, u: 0 }; this.applyState(); this.kick();
  }
  /** Lab: deepest penetration of the shoes' surfaces into the shell right now (world units), plus its lowest and highest points. */
  wallProbe() {
    if (!this._samples) this._samples = shoeSamples();
    this.slot.apply(); this.scene.updateMatrixWorld(true);
    const slot = this.slot, E = slot.body(new THREE.Matrix4()), inv = E.clone().invert(), { semi, plan } = slot;
    const c = new THREE.Vector3().setFromMatrixPosition(E), v = new THREE.Vector3(), q = new THREE.Vector3();
    const ws = Math.hypot(E.elements[0], E.elements[1], E.elements[2]);
    // the shell in slot units: a slab whose plan outline is a tapered capsule (two circles along x and the lines joining them)
    const ax = -semi.x + plan.toeR, h = semi.x - plan.heelR - ax, r1 = plan.toeR, r2 = plan.heelR, bb = (r1 - r2) / h, aa = Math.sqrt(1 - bb * bb);
    const planDist = (x, z) => { const px = Math.abs(z), py = x - ax, k = -bb * px + aa * py; return k < 0 ? Math.hypot(px, py) - r1 : k > aa * h ? Math.hypot(px, py - h) - r2 : aa * px + bb * py - r1; };
    let worst = { depth: 0 };
    for (const [shoe, name] of [[this.shoe, 'A'], [this.shoe2, 'B']]) {
      const a = shoe.userData.mats[1].opacity; if (!shoe.visible || a < 0.02) continue;
      for (const [arr, part] of [[this._samples.upper, 'upper'], [this._samples.footbed, 'footbed']]) {
        for (let i = 0; i < arr.length; i += 3) {
          v.set(arr[i], arr[i + 1], arr[i + 2]).applyMatrix4(shoe.matrixWorld);
          q.copy(v).applyMatrix4(inv); const dy = semi.y - Math.abs(q.y); if (dy <= 0) continue;
          const dp = -planDist(q.x, q.z); if (dp <= 0) continue;
          const d = Math.min(dy, dp) * ws;
          if (d > worst.depth) worst = { depth: d, shoe: name, part, opacity: +a.toFixed(2), at: [v.x, v.y, v.z].map((x) => +x.toFixed(3)) };
        }
      }
    }
    let lowest = 9, topY = -9; const top = new THREE.Vector3();
    slot.corners((p) => { lowest = Math.min(lowest, p.y); if (p.y > topY) { topY = p.y; top.copy(p); } }, 'shell');
    worst.lowest = this.shoe.visible && this.shoe.userData.mats[1].opacity > 0.02 && Math.abs(this.S.shoeY) < 0.05 ? lowest : 9; // the floor only matters while the shoes stand on it
    const rect = this.renderer.domElement.getBoundingClientRect(), nav = document.querySelector('.nav'), pt = this.project(top);
    worst.topClear = rect.top + pt.y - Math.max(rect.top, nav ? nav.getBoundingClientRect().bottom : 0); // px between the product's top and the first hidden row (negative: cut off)
    worst.scale = this.slot.scale.y; worst.centre = [c.x, c.y, c.z]; worst.topY = topY;
    return worst;
  }
}

/** Place a shoe at (x, y, z) with yaw, tilted heel-up (a > 0, about the toe tip) or toe-up (a < 0, about the heel tip). */
function tilt(shoe, a, k, x, y, z, yaw) {
  const px = (a >= 0 ? -0.5 : 0.5) * SHOE.length * k, ox = px * (1 - Math.cos(a)), oy = -px * Math.sin(a);
  shoe.rotation.set(0, yaw, a);
  shoe.position.set(x + ox * Math.cos(yaw), y + oy, z - ox * Math.sin(yaw));
}
function tint(shoe, v) {
  const m = shoe.userData.mats[2];
  m.color.copy(INSOLE.base);
  if (v > 0) m.color.lerp(INSOLE.warm, Math.min(1, v)); else if (v < 0) m.color.lerp(INSOLE.cool, Math.min(1, -v));
}

function radialTex(inner, mid, midStop) {
  const c = document.createElement('canvas'); c.width = c.height = 256;
  const g = c.getContext('2d'), grd = g.createRadialGradient(128, 128, 8, 128, 128, 128);
  grd.addColorStop(0, inner); grd.addColorStop(midStop, mid); grd.addColorStop(1, 'rgba(0,0,0,0)');
  g.fillStyle = grd; g.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
