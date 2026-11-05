// A plain, neutral shoe: lofted upper with a collar opening, extruded sole.
// Not a product and not a brand's shoe; a stage prop the product sits in.
import * as THREE from 'three';

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (e0, e1, x) => { const u = clamp((x - e0) / (e1 - e0)); return u * u * (3 - 2 * u); };

export const SHOE = { length: 1.9, soleH: 0.14, upperColor: 0xdedcd6, liningColor: 0xb9b4ab, soleColor: 0xcbc8c1, insoleColor: 0xbfbcb4 };
/**
 * Draw order of the see-through things (all materials here are transparent): the shoes' insides, then the
 * product, then what happens inside a shoe (effects, glow), then the shoes' outer uppers, then effects in front.
 */
export const DRAW = { inner: 1, product: 2, inside: 2.5, outer: 3, front: 4 };

// The shoe's shape as functions of s (0 toe .. 1 heel) and th (0 .. PI around the upper),
// shared by the mesh and by the lab's wall check.
const L = SHOE.length, X0 = -L * 0.5, SOLE_H = SHOE.soleH, S = L / 7.45; // profile authored at length 7.45
const sx = (s) => X0 + s * L;
const hw = (s) => {
  const toe = s < 0.17 ? Math.sqrt(Math.max(0, 1 - ((0.17 - s) / 0.17) ** 2)) : 1;
  const heel = s > 0.83 ? Math.sqrt(Math.max(0, 1 - ((s - 0.83) / 0.17) ** 2)) : 1;
  const base = 1.18 - 0.2 * Math.exp(-(((s - 0.58) / 0.13) ** 2)) - 0.1 * smooth(0.6, 0.86, s);
  return base * Math.max(0.0001, Math.min(toe, heel)) * S;
};
const H = (s) => {
  const toeRound = Math.sqrt(clamp(s / 0.07, 0.04, 1));
  return (0.58 + 1.05 * smooth(0.02, 0.48, s) + 0.62 * smooth(0.5, 0.82, s) - 0.18 * smooth(0.9, 1.0, s)) * toeRound * S;
};
const opening = (s) => (s > 0.42 && s < 0.97 ? 0.76 * Math.pow(Math.sin((Math.PI * (s - 0.42)) / 0.55), 0.6) * S : 0);
const upperPt = (s, th, out) => out.set(sx(s), SOLE_H + H(s) * Math.pow(Math.sin(th), 0.72), hw(s) * 0.97 * Math.cos(th) * (1 + 0.07 * Math.sin(th)));
/** True where (s, th) falls inside the collar opening (no shell there). */
const inOpening = (s, th) => { const o = opening(s), w = hw(s) || 1e-6; return o > 0 && Math.abs(w * Math.cos(th)) < o && Math.sin(th) > 0.5; };
export const shoeProfile = { sx, hw, H, opening, upperPt, inOpening, SOLE_H, L };

/**
 * Points on the shoe's surfaces, in shoe space, for collision checks:
 * the upper shell (minus the opening, plus its rim) and the footbed.
 */
export function shoeSamples(nI = 150, nJ = 90) {
  const pts = [], v = new THREE.Vector3();
  for (let i = 0; i <= nI; i++) {
    const s = 0.012 + (i / nI) * 0.976;
    for (let j = 0; j <= nJ; j++) {
      const th = (j / nJ) * Math.PI;
      if (inOpening(s, th)) continue;
      upperPt(s, th, v); pts.push(v.x, v.y, v.z);
    }
    const o = opening(s), w = hw(s) || 1e-6;
    if (o > 0 && o < w) for (const sgn of [1, -1]) { upperPt(s, Math.acos(sgn * Math.min(1, o / w)), v); pts.push(v.x, v.y, v.z); } // the rim
  }
  const upper = new Float32Array(pts); pts.length = 0;
  for (let i = 0; i <= 80; i++) {          // footbed: the insole's top face
    const s = i / 80, w = hw(s) * 1.04 * 0.82;
    for (let j = 0; j <= 16; j++) pts.push(sx(s) * 0.9, SOLE_H + 0.01, -w + (2 * w * j) / 16);
  }
  return { upper, footbed: new Float32Array(pts) };
}

export function buildShoe() {
  const group = new THREE.Group(); group.name = 'shoe';
  // sole
  const shape = new THREE.Shape(); const n = 90;
  for (let i = 0; i <= n; i++) { const s = i / n; i ? shape.lineTo(sx(s), hw(s) * 1.04) : shape.moveTo(sx(s), hw(s) * 1.04); }
  for (let i = n; i >= 0; i--) { const s = i / n; shape.lineTo(sx(s), -hw(s) * 1.04); }
  const soleG = new THREE.ExtrudeGeometry(shape, { depth: SOLE_H - 0.03, bevelEnabled: true, bevelThickness: 0.015, bevelSize: 0.015, bevelSegments: 2, curveSegments: 8 });
  soleG.rotateX(Math.PI / 2); soleG.translate(0, SOLE_H - 0.015, 0);
  const soleMat = new THREE.MeshStandardMaterial({ color: SHOE.soleColor, roughness: 0.85, transparent: true });
  const sole = new THREE.Mesh(soleG, soleMat); sole.renderOrder = DRAW.inner; group.add(sole);
  // upper
  const NI = 64, NJ = 36, pos = [], idx = [], side = [], v = new THREE.Vector3();
  for (let i = 0; i <= NI; i++) {
    const s = 0.012 + (i / NI) * 0.976, o = opening(s), w = hw(s) || 1e-6;
    for (let j = 0; j <= NJ; j++) {
      let th = (j / NJ) * Math.PI, edge = 0;
      // inside the collar opening, pull the vertex onto the opening's edge so the rim is a smooth curve
      if (o > 0 && Math.abs(w * Math.cos(th)) < o && Math.sin(th) > 0.5) { edge = Math.cos(th) >= 0 ? 1 : -1; th = Math.acos(edge * Math.min(1, o / w)); }
      upperPt(s, th, v); pos.push(v.x, v.y, v.z); side.push(edge);
    }
  }
  const id = (i, j) => i * (NJ + 1) + j;
  for (let i = 0; i < NI; i++) for (let j = 0; j < NJ; j++) {
    // no faces bridging one edge of the opening to the other: it is a hole, not a lid
    const q = [side[id(i, j)], side[id(i + 1, j)], side[id(i, j + 1)], side[id(i + 1, j + 1)]];
    if (q.includes(1) && q.includes(-1)) continue;
    idx.push(id(i, j), id(i + 1, j), id(i, j + 1), id(i + 1, j), id(i + 1, j + 1), id(i, j + 1));
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  // outer face, and a slightly darker lining on the inside so the opening reads as a hole
  const upperMat = new THREE.MeshStandardMaterial({ color: SHOE.upperColor, roughness: 0.82, transparent: true, side: THREE.FrontSide });
  const liningMat = new THREE.MeshStandardMaterial({ color: SHOE.liningColor, roughness: 0.9, transparent: true, side: THREE.BackSide });
  const outer = new THREE.Mesh(g, upperMat), lining = new THREE.Mesh(g, liningMat);
  outer.renderOrder = DRAW.outer; lining.renderOrder = DRAW.inner;
  group.add(outer, lining);
  // insole (so the product has something to sit on through the opening)
  const inG = new THREE.ShapeGeometry(shape, 8); inG.rotateX(-Math.PI / 2); inG.scale(0.9, 1, 0.82); inG.translate(0, SOLE_H + 0.01, 0);
  const inMat = new THREE.MeshStandardMaterial({ color: SHOE.insoleColor, roughness: 0.95, transparent: true });
  const insole = new THREE.Mesh(inG, inMat); insole.renderOrder = DRAW.inner; group.add(insole);
  group.userData.mats = [soleMat, upperMat, inMat, liningMat];
  /**
   * a: the outer upper; inner: sole, insole and lining (default a). Only the outer upper goes see-through, and it is
   * drawn after the product and the effects inside it, so it veils them evenly as it fades; it always writes depth.
   */
  group.userData.setOpacity = (a, inner = a) => {
    upperMat.opacity = a; upperMat.depthWrite = a > 0.02;
    for (const m of [soleMat, inMat, liningMat]) { m.opacity = inner; m.depthWrite = inner > 0.6; }
    group.visible = Math.max(a, inner) > 0.01;
  };
  // where the product sits, in shoe space
  group.userData.seat = new THREE.Vector3(0.12, SOLE_H + 0.02, 0);
  return group;
}
