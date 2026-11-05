// Stage 3 effects: soft motes, four-point sparkles, streaks and flat rings.
// Two point clouds (one for what happens inside a shoe, drawn before the
// shoes' outer uppers so they veil it; one drawn after everything) and a small pool of flat rings. Nothing here
// moves on its own: every frame the caller lists the particles it wants,
// computed from deterministic functions of a step's time, so any moment of a
// step can be scrubbed and tested.
import * as THREE from 'three';
import { DRAW } from './shoe.js';

const VERT = /* glsl */`
attribute float aSize;
attribute vec4 aColor;
attribute vec4 aShape;   // x kind (0 dot, 1 sparkle, 2 ring, 3 streak), y rotation, z aspect, w hardness
uniform float uScale;
uniform vec2 uMin;      // smallest on-screen size in device px: dots, sparkles
varying vec4 vColor;
varying vec4 vShape;
void main() {
  vColor = aColor; vShape = aShape;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = clamp(aSize * uScale / -mv.z, aShape.x > 0.5 && aShape.x < 1.5 ? uMin.y : uMin.x, 192.0);
}`;
const FRAG = /* glsl */`
varying vec4 vColor;
varying vec4 vShape;
void main() {
  vec2 p = gl_PointCoord * 2.0 - 1.0;
  p.y = -p.y;
  float c = cos(vShape.y), s = sin(vShape.y);
  p = vec2(c * p.x + s * p.y, -s * p.x + c * p.y);
  float k = vShape.x, hard = vShape.w, a;
  if (k < 0.5) {                 // soft round mote
    float r = length(p);
    a = 1.0 - smoothstep(hard, 1.0, r);
  } else if (k < 1.5) {          // four-point sparkle with a small bright core
    vec2 q = abs(p);
    float d = sqrt(q.x) + sqrt(q.y);
    float aa = max(fwidth(d), 0.02) * 1.2;
    a = 1.0 - smoothstep(1.0 - aa, 1.0, d);
    a = max(a, 1.0 - smoothstep(0.0, 0.3, length(p)));
  } else if (k < 2.5) {          // thin ring
    float r = length(p), w = mix(0.08, 0.3, hard), aa = max(fwidth(r), 0.01) * 1.2;
    a = smoothstep(1.0 - w - aa, 1.0 - w, r) * (1.0 - smoothstep(1.0 - aa, 1.0, r));
  } else {                       // streak: a soft ellipse along x, aspect z
    float r = length(vec2(p.x, p.y * max(1.0, vShape.z)));
    a = 1.0 - smoothstep(hard, 1.0, r);
  }
  a *= vColor.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}`;

const RING_FRAG = /* glsl */`
uniform vec3 uColor;
uniform float uAlpha;
uniform float uWidth;
varying vec2 vUv;
void main() {
  float r = length(vUv * 2.0 - 1.0), aa = max(fwidth(r), 0.002) * 1.5;
  float a = smoothstep(1.0 - uWidth - aa, 1.0 - uWidth, r) * (1.0 - smoothstep(1.0 - aa, 1.0, r));
  a *= uAlpha;
  if (a < 0.004) discard;
  gl_FragColor = vec4(uColor, a);
}`;
const RING_VERT = /* glsl */`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;

/** Deterministic hash in [0, 1) for particle k and a salt. */
export const rnd = (k, salt = 0) => { const x = Math.sin(k * 127.1 + salt * 311.7 + 0.5) * 43758.5453; return x - Math.floor(x); };

const KIND = { dot: 0, spark: 1, ring: 2, streak: 3 };
const tmp = new THREE.Color();
/**
 * Display (sRGB) components of a colour. These shaders write straight to the sRGB canvas (no tone mapping, no
 * colour-space chunk), so they take display values: THREE.Color.set() would linearize the hex and darken mid-tones
 * (a light tan shows as dark brown).
 */
function srgb(color, out) {
  if (typeof color === 'number') { out[0] = ((color >> 16) & 255) / 255; out[1] = ((color >> 8) & 255) / 255; out[2] = (color & 255) / 255; return out; }
  tmp.set(color).convertLinearToSRGB(); out[0] = tmp.r; out[1] = tmp.g; out[2] = tmp.b; return out;
}
const rgb = [0, 0, 0];

class Cloud {
  constructor(n, order) {
    this.n = n; this.count = 0;
    const g = this.g = new THREE.BufferGeometry();
    const attr = (name, arr, size) => { const a = new THREE.BufferAttribute(arr, size); a.setUsage(THREE.DynamicDrawUsage); g.setAttribute(name, a); return a; };
    this.pos = attr('position', new Float32Array(n * 3), 3);
    this.size = attr('aSize', new Float32Array(n), 1);
    this.col = attr('aColor', new Float32Array(n * 4), 4);
    this.shape = attr('aShape', new Float32Array(n * 4), 4);
    g.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({ uniforms: { uScale: { value: 400 }, uMin: { value: new THREE.Vector2(2.5, 5) } }, vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false, depthTest: true });
    this.obj = new THREE.Points(g, this.mat); this.obj.frustumCulled = false; this.obj.renderOrder = order; this.obj.visible = false;
  }
  push(x, y, z, size, color, alpha, kind, rot, aspect, hard) {
    if (this.count >= this.n || alpha <= 0.004 || size <= 0) return;
    const i = this.count++;
    this.pos.array[i * 3] = x; this.pos.array[i * 3 + 1] = y; this.pos.array[i * 3 + 2] = z;
    this.size.array[i] = size;
    srgb(color, rgb);
    this.col.array[i * 4] = rgb[0]; this.col.array[i * 4 + 1] = rgb[1]; this.col.array[i * 4 + 2] = rgb[2]; this.col.array[i * 4 + 3] = Math.min(1, alpha);
    this.shape.array[i * 4] = kind; this.shape.array[i * 4 + 1] = rot; this.shape.array[i * 4 + 2] = aspect; this.shape.array[i * 4 + 3] = hard;
  }
  flush() {
    this.g.setDrawRange(0, this.count); this.obj.visible = this.count > 0;
    if (!this.count) return;
    for (const a of [this.pos, this.size, this.col, this.shape]) { a.clearUpdateRanges(); a.addUpdateRange(0, this.count * a.itemSize); a.needsUpdate = true; }
  }
}

export class FX {
  /** @param {THREE.Scene} scene */
  constructor(scene, { capacity = 160, rings = 4 } = {}) {
    // back: drawn before the shoes and the product (the shoe's shell veils it); front: drawn last.
    this.back = new Cloud(capacity, DRAW.inside); this.front = new Cloud(capacity, DRAW.front);
    scene.add(this.back.obj); scene.add(this.front.obj);
    const ringGeo = new THREE.PlaneGeometry(1, 1);
    this.rings = Array.from({ length: rings }, () => {
      const m = new THREE.ShaderMaterial({ uniforms: { uColor: { value: new THREE.Color() }, uAlpha: { value: 0 }, uWidth: { value: 0.1 } }, vertexShader: RING_VERT, fragmentShader: RING_FRAG, transparent: true, depthWrite: false, side: THREE.DoubleSide });
      const r = new THREE.Mesh(ringGeo, m); r.renderOrder = DRAW.front; r.visible = false; r.frustumCulled = false; scene.add(r); return r;
    });
    this.ringUsed = 0;
  }
  /** Pixels per world unit at view distance 1 (drawing-buffer height / (2 tan(fov / 2))), and the device pixel ratio. */
  setScale(px, dpr = 1) { for (const c of [this.back, this.front]) { c.mat.uniforms.uScale.value = px; c.mat.uniforms.uMin.value.set(2.5 * dpr, 5 * dpr); } }
  begin() { this.back.count = 0; this.front.count = 0; this.ringUsed = 0; }
  /**
   * One particle. o: { layer: 'back'|'front', kind: 'dot'|'spark'|'ring'|'streak', size (world units), color, alpha, rot, aspect, hard }
   */
  add(x, y, z, o) {
    const c = o.layer === 'back' ? this.back : this.front;
    c.push(x, y, z, o.size, o.color, o.alpha, KIND[o.kind || 'dot'], o.rot || 0, o.aspect || 1, o.hard ?? 0.35);
  }
  /** A flat ring centred at (x, y, z), lying in the horizontal plane unless tilt (radians about x) is given; rz makes it an ellipse (depth radius). */
  ring(x, y, z, radius, { color = 0x2346ff, alpha = 1, width = 0.08, tilt = -Math.PI / 2, rz = radius, layer = 'front' } = {}) {
    if (this.ringUsed >= this.rings.length || alpha <= 0.004 || radius <= 0) return;
    const r = this.rings[this.ringUsed++];
    r.position.set(x, y, z); r.rotation.set(tilt, 0, 0); r.scale.set(radius * 2, rz * 2, 1); r.renderOrder = layer === 'back' ? DRAW.inside : DRAW.front;
    srgb(color, rgb); r.material.uniforms.uColor.value.setRGB(rgb[0], rgb[1], rgb[2], THREE.LinearSRGBColorSpace); r.material.uniforms.uAlpha.value = Math.min(1, alpha); r.material.uniforms.uWidth.value = width;
    r.visible = true;
  }
  end() {
    this.back.flush(); this.front.flush();
    for (let i = this.ringUsed; i < this.rings.length; i++) this.rings[i].visible = false;
  }
  /** Everything visible once, for shader warm-up. */
  warm() {
    this.begin();
    for (const kind of ['dot', 'spark', 'ring', 'streak']) { this.add(0, 0.5, 0, { layer: 'back', kind, size: 0.05, color: 0x2346ff, alpha: 0.5 }); this.add(0, 0.5, 0, { layer: 'front', kind, size: 0.05, color: 0x2346ff, alpha: 0.5 }); }
    for (let i = 0; i < this.rings.length; i++) this.ring(0, 0.5, 0, 0.2, { alpha: 0.5 });
    this.end();
  }
  clear() { this.begin(); this.end(); }
}
