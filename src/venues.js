// Venue floor markings, one drawer per audience. The same drawing feeds the 3D
// floor in the explorer and the hover thumbnail, so the two always match.
//
// PHOTO SLOTS: the hover thumbnails are drawn markings, not photographs, until
// real venue photos exist. To use photos, set `photo` on an audience in
// audiences.js (e.g. 'assets/photos/bowling.webp'); the thumbnail uses it and
// the 3D floor keeps the markings.

const INK = '21,23,28';      // #15171C
const COBALT = '35,70,255';  // #2346FF

function line(c, pts, w, col) { c.lineWidth = w; c.strokeStyle = col; c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y))); c.stroke(); }

export const VENUES = {
  bowling(c, S) {
    // Lane boards, approach dots, target arrows, foul line. Lanes run away from the camera.
    const lanes = 3, lw = S * 0.2, gap = S * 0.06, x0 = S / 2 - (lanes * lw + (lanes - 1) * gap) / 2;
    for (let L = 0; L < lanes; L++) {
      const x = x0 + L * (lw + gap);
      c.fillStyle = `rgba(${INK},0.035)`; c.fillRect(x, 0, lw, S);
      for (let b = 1; b < 20; b++) line(c, [[x + (lw * b) / 20, 0], [x + (lw * b) / 20, S]], 1, `rgba(${INK},0.10)`);
      line(c, [[x, 0], [x, S]], 2, `rgba(${INK},0.35)`); line(c, [[x + lw, 0], [x + lw, S]], 2, `rgba(${INK},0.35)`);
      for (let a = 0; a < 7; a++) {
        const ax = x + lw * (0.2 + a * 0.1), ay = S * (0.32 + Math.abs(a - 3) * 0.025);
        c.fillStyle = `rgba(${COBALT},${a === 3 ? 0.9 : 0.6})`; c.beginPath(); c.moveTo(ax, ay - 14); c.lineTo(ax - 7, ay + 8); c.lineTo(ax + 7, ay + 8); c.closePath(); c.fill();
      }
      for (let d = 0; d < 5; d++) { c.fillStyle = `rgba(${INK},0.4)`; c.beginPath(); c.arc(x + lw * (0.3 + d * 0.1), S * 0.72, 3, 0, 7); c.fill(); }
    }
    line(c, [[x0 - 10, S * 0.6], [S - x0 + 10, S * 0.6]], 4, `rgba(${COBALT},0.75)`);
  },
  rink(c, S) {
    // Rounded rink boards, centre circle, centre line, faceoff spots.
    const m = S * 0.12, w = S - 2 * m, h = S - 2 * m, r = S * 0.18;
    c.lineWidth = 4; c.strokeStyle = `rgba(${INK},0.4)`; c.beginPath(); c.roundRect(m, m, w, h, r); c.stroke();
    line(c, [[m, S / 2], [S - m, S / 2]], 5, `rgba(${COBALT},0.7)`);
    line(c, [[m, S * 0.33], [S - m, S * 0.33]], 3, `rgba(${INK},0.25)`); line(c, [[m, S * 0.67], [S - m, S * 0.67]], 3, `rgba(${INK},0.25)`);
    c.lineWidth = 3; c.strokeStyle = `rgba(${COBALT},0.7)`; c.beginPath(); c.arc(S / 2, S / 2, S * 0.11, 0, 7); c.stroke();
    for (const [fx, fy] of [[0.32, 0.22], [0.68, 0.22], [0.32, 0.78], [0.68, 0.78]]) {
      c.strokeStyle = `rgba(${INK},0.3)`; c.lineWidth = 2; c.beginPath(); c.arc(S * fx, S * fy, S * 0.07, 0, 7); c.stroke();
      c.fillStyle = `rgba(${COBALT},0.75)`; c.beginPath(); c.arc(S * fx, S * fy, 6, 0, 7); c.fill();
    }
  },
  school(c, S) {
    // Court: boundary, half-court line, centre circle, key and arc at both ends.
    const m = S * 0.1;
    c.lineWidth = 4; c.strokeStyle = `rgba(${INK},0.4)`; c.strokeRect(m, m, S - 2 * m, S - 2 * m);
    line(c, [[m, S / 2], [S - m, S / 2]], 3, `rgba(${INK},0.35)`);
    c.strokeStyle = `rgba(${COBALT},0.7)`; c.lineWidth = 3; c.beginPath(); c.arc(S / 2, S / 2, S * 0.09, 0, 7); c.stroke();
    for (const end of [0, 1]) {
      const y = end ? S - m : m, dir = end ? -1 : 1, kw = S * 0.16, kh = S * 0.2;
      c.fillStyle = `rgba(${COBALT},0.07)`; c.fillRect(S / 2 - kw / 2, end ? y - kh : y, kw, kh);
      c.strokeStyle = `rgba(${INK},0.35)`; c.lineWidth = 3; c.strokeRect(S / 2 - kw / 2, end ? y - kh : y, kw, kh);
      c.beginPath(); c.arc(S / 2, y + dir * kh, kw / 2, end ? Math.PI : 0, end ? 2 * Math.PI : Math.PI); c.stroke();
      c.strokeStyle = `rgba(${COBALT},0.55)`; c.beginPath(); c.arc(S / 2, y, S * 0.3, end ? Math.PI : 0, end ? 2 * Math.PI : Math.PI); c.stroke();
    }
  },
  team(c, S) {
    // Field: sidelines, yard lines every tenth, hash marks, a centre mark.
    const m = S * 0.08;
    line(c, [[m, 0], [m, S]], 4, `rgba(${INK},0.4)`); line(c, [[S - m, 0], [S - m, S]], 4, `rgba(${INK},0.4)`);
    for (let k = 0; k <= 10; k++) {
      const y = (S * k) / 10;
      line(c, [[m, y], [S - m, y]], k === 5 ? 5 : 2.5, k === 5 ? `rgba(${COBALT},0.75)` : `rgba(${INK},0.28)`);
      for (let hsh = 1; hsh < 5; hsh++) { const yy = y + (S / 10) * (hsh / 5); for (const hx of [0.36, 0.64]) line(c, [[S * hx - 8, yy], [S * hx + 8, yy]], 2, `rgba(${INK},0.22)`); }
    }
    c.fillStyle = `rgba(${COBALT},0.8)`; c.beginPath(); c.arc(S / 2, S / 2, 7, 0, 7); c.fill();
  },
  track(c, S) {
    // Running track: six lanes curving round a bend, one lane line in accent.
    const cx = S / 2, cy = S * 0.62;
    for (let L = 0; L <= 6; L++) {
      const r = S * 0.2 + L * S * 0.045;
      c.lineWidth = L === 0 || L === 6 ? 3.5 : 2; c.strokeStyle = L === 3 ? `rgba(${COBALT},0.7)` : `rgba(${INK},0.3)`;
      c.beginPath(); c.moveTo(cx - r, 0); c.lineTo(cx - r, cy); c.arc(cx, cy, r, Math.PI, 0, true); c.lineTo(cx + r, 0); c.stroke();
    }
  },
};

/** Floor texture: markings on transparent ground, faded at the edges. */
export function drawFloor(kind, S = 1024) {
  const cv = document.createElement('canvas'); cv.width = cv.height = S;
  const c = cv.getContext('2d');
  VENUES[kind](c, S);
  c.globalCompositeOperation = 'destination-in';
  const g = c.createRadialGradient(S / 2, S / 2, S * 0.14, S / 2, S / 2, S * 0.44);
  g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  c.fillStyle = g; c.fillRect(0, 0, S, S);
  return cv;
}

/** Thumbnail: the same markings on a bone card, viewed from above. */
export function drawThumb(kind, W = 360, H = 240) {
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const c = cv.getContext('2d');
  c.fillStyle = '#E8E5DE'; c.fillRect(0, 0, W, H);
  const S = Math.max(W, H) * 1.1;
  c.save(); c.translate((W - S) / 2, (H - S) / 2); VENUES[kind](c, S); c.restore();
  return cv.toDataURL('image/png');
}
