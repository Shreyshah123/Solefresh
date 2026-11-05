// SoleFresh landing page.
// Section-first. On wide screens, from Stage 1 through the pilot stage, the page
// comes to rest on a stage: wheel, trackpad, keys and touch each move one stage per
// gesture, and the settle is a timed Lenis scroll of SNAP_MS. Past the pilot stage
// (Why, Story, FAQ, Close, footer) scrolling is the browser's own, and so it is
// everywhere under 900px and on short landscape screens. The ONE
// scroll-linked motion is the product's travel between neighbouring stage
// states, computed over a short window before each stage. Everything else plays
// on a clock or on click/hover/tap and finishes.
import C from '../content.json';
import MODEL from './model-data.json';
import { drawThumb } from './venues.js';
import Lenis from 'lenis';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)');
const FINE = matchMedia('(hover: hover) and (pointer: fine)');
const NARROW = matchMedia('(max-width: 899px), (max-height: 520px)'); // keep in step with styles.css: the phone layout
const SIDE = matchMedia('(max-height: 520px) and (orientation: landscape)'); // and within it, short landscape: the product beside the text, not above it
const html = document.documentElement;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

export const state = { audience: C.segments.items[0].id, stage: 'explorer', step: 0, layer: -1, color: C.customize.defaults.color, size: C.customize.defaults.size, method: 'solefresh', milestone: 'refining' };
let world = null, worldReady = false;
const worldEl = $('[data-world]'), navEl = $('.nav');

// ------------------------------------------------------------------- nav --
const menuBtn = $('.nav__menu'), menu = $('#menu');
function setMenu(open) { menu.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open)); }
menuBtn.addEventListener('click', () => setMenu(menu.hidden));
matchMedia('(min-width: 1241px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); }); // the burger is gone up there: keep in step with styles.css
addEventListener('keydown', (e) => { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });
$('[data-year]').textContent = String(new Date().getFullYear());
function navH() { return navEl.getBoundingClientRect().height; }
/** The scroll position that rests on an element: its top under the nav and, on phones, under the band while the band is pinned. */
function restY(el) { return Math.round(pageTop(el) - navH() - (bands[el.closest('[data-product]')?.dataset.product] || 0) - (NARROW.matches && !el.dataset.product ? 12 : 0)); } // an anchor inside a section gets a little air under the nav
// Phones: how much of the screen the product gets in each section. The heights are in styles.css (--band-*), read here in px.
// The canvas keeps one size, the tallest; .world shows as much of it as the section has, so nothing resizes while scrolling.
const bands = {}, bandProbe = document.createElement('i'); bandProbe.style.cssText = 'position:absolute;width:0;visibility:hidden;pointer-events:none';
function measureBands() {
  if (!bandProbe.isConnected) document.body.append(bandProbe);
  for (const s of stages) { const st = s.dataset.product; bandProbe.style.height = `var(--band-${st}, 0px)`; bands[st] = NARROW.matches && !SIDE.matches && s.closest('.pin') ? bandProbe.offsetHeight : 0; }
}
let bandNow = -1;
function setBand(px) { const v = Math.round(px * 2) / 2; if (v !== bandNow) { bandNow = v; worldEl.style.setProperty('--band-now', v ? `${v}px` : ''); } }
/** An element's top in the page, from layout, not the box on screen: an arrival fade moves that. */
function pageTop(el) { let y = 0; for (let e = el; e; e = e.offsetParent) y += e.offsetTop; return y; }

// Section links jump: instant scroll, straight onto the anchor, the product
// settling into the stage's resting state on a clock. No travel plays through
// the stages in between. Each jump is a history entry with the anchor in the URL;
// Back returns to exactly where the visitor was.
let suppressUntil = 0;
function land(y, stage) {
  snap.jump(y);
  suppressUntil = performance.now() + 400; lastKey = ''; // the next scroll must reach the world, even if it computes the same travel as before the jump
  if (world) world.jumpTo(bandStage(stage));
  setBand(bands[bandStage(stage)] || 0);
  // it lands at rest: a travel it cut short is over (its own scroll events are suppressed, so onScroll will not say so)
  const cut = !!html.dataset.travel; if (cut) html.dataset.travel = '';
  setStage(stage);
  if (cut) updateOverlayVisibility();
}
function goTo(target, { push = true } = {}) {
  if (push) {
    history.replaceState({ y: Math.round(snap.animating ? snap.points[snap.target] : scrollY) }, ''); // Back returns to a rest point, not the middle of a settle
    if (location.hash !== `#${target.id}` || Math.abs(scrollY - restY(target)) > 2) history.pushState(null, '', `#${target.id}`);
  }
  land(restY(target), target.closest('[data-product]')?.dataset.product || stages[0].dataset.product);
}
document.addEventListener('click', (e) => {
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button) return;   // new tab or window: the browser's job
  const a = e.target.closest('[data-jump]'); if (!a) return;
  const target = document.getElementById(a.getAttribute('href').slice(1)); if (!target) return;
  e.preventDefault(); setMenu(false);
  if (a.hasAttribute('data-bulk')) try { const seg = C.segments.items.find((x) => x.id === state.audience); sessionStorage.setItem('sf-org-type', seg?.orgType || ''); } catch {}
  goTo(target);
  const h = target.querySelector('h1, h2, h3'); if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
  if (state.stage === 'bulk') preselectOrgType();
});
const hashTarget = () => { try { const id = decodeURIComponent(location.hash.slice(1)); return id ? document.getElementById(id) : null; } catch { return null; } }; // not valid percent-encoding: no such anchor
// Back and Forward, and a hash typed into the URL
addEventListener('popstate', (e) => {
  const y = e.state?.y, target = hashTarget();
  if (Number.isFinite(y)) { snap.jump(y); suppressUntil = 0; lastKey = ''; onScroll(true); }
  else if (target) goTo(target, { push: false });
  else if (!location.hash) land(0, stages[0].dataset.product);
});
// a hash changed on the open page: the browser's own scroll comes after popstate, and lands without the arrival fade in mind
addEventListener('hashchange', () => { const target = hashTarget(); if (target && !Number.isFinite(history.state?.y)) goTo(target, { push: false }); });
// Arriving: a link with an anchor lands on it; a reload stays where it was. Fonts and the 3D can shift the layout,
// so this runs again as they arrive, until the visitor has moved.
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
let visitorMoved = false;
for (const ev of ['wheel', 'touchstart', 'pointerdown', 'keydown']) addEventListener(ev, () => { visitorMoved = true; }, { once: true, passive: true, capture: true }); // capture: the snap's wheel handler stops the event
const arrivedAt = Number.isFinite(history.state?.y) ? history.state.y : null;   // a reload or a return from history; read once, because the page soon writes its own position here
function landFirst() {
  if (visitorMoved) return;
  const target = hashTarget(), to = arrivedAt ?? (target ? restY(target) : null);
  if (to != null) { snap.jump(to); suppressUntil = 0; onScroll(true); }
}
{ // remember the position as the page comes to rest (written during page close it does not reliably survive a reload)
  let timer = 0;
  addEventListener('scroll', () => { clearTimeout(timer); timer = setTimeout(() => { try { history.replaceState({ y: Math.round(scrollY) }, ''); } catch {} }, 300); }, { passive: true }); // Safari caps how often this may run
}

// Current stage in the nav, and stage content arriving with one short fade.
const stages = $$('[data-product]');
const links = $$('[data-jump]').filter((a) => a.classList.contains('nav__link') || a.classList.contains('menu__link'));
const stageIO = new IntersectionObserver((entries) => { for (const e of entries) e.target.classList.toggle('is-in', e.isIntersecting); }, { threshold: 0.18 });
stages.forEach((s) => stageIO.observe(s));
const faqEl = $('#faq');
function markCurrent(stage) {
  const id = stage === 'story' && faqEl && faqEl.getBoundingClientRect().top < innerHeight * 0.25 ? 'faq' : stage; // the FAQ only once it has reached the top of the view
  links.forEach((a) => a.setAttribute('aria-current', a.dataset.jump === id ? 'true' : 'false'));
}

// --------------------------------------------- the one scroll-linked move --
// Stage i+1's state is reached over TRAVEL viewports before its top aligns
// under the nav. Before that window the product holds stage i's state; after
// it, stage i+1's. Scrolling up runs the same travel backwards.
const TRAVEL = { default: 0.5, 'how>inside': 0.75 };
const tops = [];
const LAST_BAND = stages.map((s) => !!s.closest('.pin')).lastIndexOf(true);   // on phones the band, and with it the world, ends with this stage
/** On phones everything below the band is out of the world's sight: it rests in the band's last stage. */
const bandStage = (stage) => (NARROW.matches && stages.findIndex((s) => s.dataset.product === stage) > LAST_BAND ? stages[LAST_BAND].dataset.product : stage);
function measureStages() {
  measureBands();
  tops.length = 0;
  for (const s of stages) tops.push(restY(s)); // integers: the browser rests on whole pixels
  snap.measure();
  onScroll(true);
  fitStages();
}
let lastKey = '';
function onScroll(force = false) {
  if (performance.now() < suppressUntil && !force) return;
  const y = scrollY, narrow = NARROW.matches;
  let from = stages[0].dataset.product, to = from, u = 0, at = 0, span = 1;
  for (let i = 1; i < stages.length; i++) {
    const a = stages[i - 1].dataset.product, b = stages[i].dataset.product;
    // phones scroll freely: the travel fits inside the stage and the space under the band, so every stage has a rest zone
    const sp = narrow ? Math.min(Math.max(innerHeight - navH() - (bands[b] || 0), (tops[i] - tops[i - 1]) * 0.7) * 0.8, (tops[i] - tops[i - 1]) * 0.8) : innerHeight * (TRAVEL[`${a}>${b}`] || TRAVEL.default), start = tops[i] - sp;
    if (y < start) break;
    from = a; to = b; at = i; span = sp; u = sp - (y - start) < 1 ? 1 : Math.min(1, (y - start) / sp); // within a pixel of the end counts as arrived
  }
  // Leaving Stage 3, the settle's ease-out would spend the first part of the travel (where the product climbs out of
  // the shoe) in a few frames. The world can instead run that departure on time-linear progress: the same scroll
  // position mapped through the inverse of SNAP_EASE, inside the same travel window. Still a function of scroll only.
  let uLeave = u;
  if (!narrow && (from === 'how' || to === 'how') && at > 0 && u > 0 && u < 1) {
    const D = Math.max(1, tops[at] - tops[at - 1]);
    if (from === 'how') { const ta = SNAP_EASE_INV(clamp(1 - span / D, 0, 1)); uLeave = clamp((SNAP_EASE_INV(clamp((y - tops[at - 1]) / D, 0, 1)) - ta) / Math.max(1e-6, 1 - ta), 0, 1); }
    else { const tb = SNAP_EASE_INV(clamp(span / D, 0, 1)); uLeave = clamp(1 - SNAP_EASE_INV(clamp((tops[at] - y) / D, 0, 1)) / Math.max(1e-6, tb), 0, 1); }
  }
  const stage = u >= 1 ? to : (u > 0.5 ? to : from);
  // phones: the band has scrolled away by the time Bulk arrives, so the world stays in its last stage below that
  const below = narrow && at > LAST_BAND, wf = below ? stages[LAST_BAND - 1].dataset.product : from, wt = below ? stages[LAST_BAND].dataset.product : to, wu = below ? 1 : u;
  if (narrow) { const k = RM.matches ? (wu < 0.5 ? 0 : 1) : wu * wu * (3 - 2 * wu); setBand((bands[wf] || 0) + ((bands[wt] || 0) - (bands[wf] || 0)) * k); }
  const key = `${wf}>${wt}@${wu.toFixed(3)}`;
  if (key !== lastKey) { lastKey = key; if (world) world.setTravel(wf, wt, wu, below ? wu : uLeave); }
  const tv = u > 0 && u < 1 ? `${from}>${to}` : '';
  if (tv !== html.dataset.travel) { html.dataset.travel = tv; updateOverlayVisibility(); if (tv && state.layer >= 0) selectLayer(-1); } // a scroll away puts a popped part back first
  setStage(stage);
  const rest = onStage2Rest(); if (rest !== stage2Rest) { stage2Rest = rest; updateOverlayVisibility(); }
}
function setStage(stage) {
  markCurrent(stage);
  if (stage === state.stage) return;
  const prev = state.stage; state.stage = stage; html.dataset.stage = stage;
  if (stage === 'how') $('[data-step-caption]')?.setAttribute('aria-live', 'polite');
  if (world) {
    if (stage === 'inside') world.selectLayer(state.layer);
    if (prev === 'customize') world.releaseDrag();
  }
  if (prev === 'inside' && state.layer >= 0) selectLayer(-1); // the layer sheet belongs to its stage
  showPoster();
  updateOverlayVisibility();
}
/** Without a live product the poster stands in for it, stage by stage. */
function showPoster() { if (worldReady) return; const img = $('[data-poster-img]'), st = state.stage, want = st === 'explorer' ? `assets/posters/${state.audience}.webp` : `assets/posters/${st}.webp`; if (img && !img.src.endsWith(want)) img.src = want; }
addEventListener('scroll', () => onScroll(), { passive: true });
// A resize moves every stage: the page goes with the place it was resting on, unless the visitor is working in a form or the FAQ.
addEventListener('resize', () => {
  const on = snapOn() && !snapPaused() && !snap.animating, k = tops.findIndex((t) => Math.abs(t - scrollY) <= 2), free = scrollY > snap.end + 1;
  measureStages();
  if (!on || (free && k < 0)) return;     // scrolling freely, the visitor is wherever they scrolled to
  snap.jump(free ? tops[k] : k >= 0 ? snap.points[snap.nearest(tops[k])] : snap.points[snap.nearest()]);
  suppressUntil = 0; lastKey = ''; onScroll(true); updateOverlayVisibility();
});
// Anything that changes the page's height (a form error, a sent form, an answer opening) moves the stages below it.
{ let q = 0; new ResizeObserver(() => { if (!q) q = requestAnimationFrame(() => { q = 0; measureStages(); }); }).observe($('main')); }
addEventListener('load', () => { measureStages(); landFirst(); });
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measureStages(); fitStages(true); landFirst(); });

// ------------------------------------------------------------------ snap --
// Stage 1 through the pilot stage rest on a stage. One stage per gesture; the settle
// is a timed scroll (SNAP_MS, ease-out) driven by Lenis, so trackpad momentum cannot
// fight it. Tall stages get extra rest points one viewport apart. The last of these is
// snap.end: below it the page is the browser's own, with no snap, no settle and nothing
// intercepted, and a scroll that comes back up simply meets the snap again there.
const QS = new URLSearchParams(location.search);
const snapOn = () => !NARROW.matches;
const LAST_SNAP = stages.findIndex((s) => s.dataset.product === 'bulk');
/** Is a scroll from y in this direction (1 down, -1 up) the browser's to do? */
const freeScroll = (y, dir) => y > snap.end + 1 || (dir > 0 && y >= snap.end - 1);
/** Snapping stands aside while the visitor is working in a form or the FAQ, for as long as it is on screen. */
function snapPaused() {
  const zone = document.activeElement?.closest?.('form, .faq'); if (!zone) return false;
  const r = zone.getBoundingClientRect(); return r.bottom > navH() && r.top < innerHeight;
}
const SNAP_MS = clamp(+QS.get('snap') || 600, 200, 1500);               // settle duration
// Gesture-end debounce: a pause in wheel events longer than this ends a
// gesture, so the next event starts a new one. Just long enough that the
// notches of one quick wheel spin (and the event spacing inside one trackpad
// flick) stay one gesture. `?gap=` overrides it for testing.
const GESTURE_GAP_MS = clamp(+QS.get('gap') || 100, 40, 400);
const SNAP_EASE = (t) => 1 - Math.pow(1 - t, 3);
const SNAP_EASE_INV = (s) => 1 - Math.cbrt(1 - s); // keep in step with SNAP_EASE (used to pace the departure from Stage 3)
let lenis = null;
// Steps are queued, not dropped: a same-direction request during a settle is
// remembered (at most one) and starts when the settle ends; an opposite
// request reverses to the stage the settle came from.
const snap = {
  points: [], end: Infinity, target: -1, from: -1, dir: 0, queued: 0, run: 0, fallback: 0, animating: false, quiet: 0, tabbed: null,
  measure() {
    const pts = [], maxY = Math.max(0, document.documentElement.scrollHeight - innerHeight), view = innerHeight - navH();
    for (let i = 0; i <= LAST_SNAP; i++) {
      const top = Math.min(tops[i], maxY), end = Math.min(tops[i + 1], maxY + view);
      pts.push(top);
      const extra = end - top - view;                        // part of a tall stage that does not fit under the nav
      if (extra > (stages[i].classList.contains('stage--full') ? 30 : 16)) { const n = Math.ceil(extra / view); for (let k = 1; k <= n; k++) pts.push(top + (extra * k) / n); } // a full stage's bottom padding can stay cut off
    }
    this.points = [...new Set(pts.map((p) => Math.round(clamp(p, 0, maxY))))].sort((a, b) => a - b);
    this.end = this.points[this.points.length - 1];
  },
  nearest(y = scrollY) { let best = 0; for (let i = 1; i < this.points.length; i++) if (Math.abs(this.points[i] - y) < Math.abs(this.points[best] - y)) best = i; return best; },
  /** One step request from any input (wheel gesture, key, swipe). */
  request(dir) {
    if (!this.animating) { const i = this.nearest(), off = this.points[i] - scrollY; this.queued = 0; this.to(clamp(Math.abs(off) > 2 && Math.sign(off) === dir ? i : i + dir, 0, this.points.length - 1)); return; } // off a rest point (after a form): the next one in that direction, never past it
    if (dir === this.dir) { if (!this.queued) this.queued = dir; return; }   // at most ONE queued step
    this.queued = 0; this.to(this.from);                                      // opposite: reverse to where we came from
  },
  go(dir) { this.request(dir); },
  toIndex(i) { this.queued = 0; this.to(clamp(i, 0, this.points.length - 1)); },
  to(i) {
    const y = this.points[i]; if (y == null) return;
    suppressUntil = 0;
    const from = this.animating ? this.target : this.nearest();
    if (!this.animating && Math.abs(y - scrollY) < 1) { this.target = i; this.queued = 0; return; } // already there (page ends)
    this.from = from; this.target = i; this.dir = Math.sign(i - from) || this.dir; this.animating = true;
    const id = ++this.run;
    const done = () => {
      if (id !== this.run) return;                    // superseded by a reversal or a jump
      clearTimeout(this.fallback); this.animating = false;
      const q = this.queued; this.queued = 0;
      if (q) this.request(q);                         // the remembered step starts now
      else this.showFocus();
    };
    clearTimeout(this.fallback); this.fallback = setTimeout(done, SNAP_MS + 400); // never stay stuck if a callback is lost
    if (lenis && !RM.matches) lenis.scrollTo(y, { duration: SNAP_MS / 1000, easing: SNAP_EASE, lock: true, force: true, onComplete: done });
    else { scrollTo({ top: y, behavior: 'auto' }); requestAnimationFrame(done); }
  },
  /** A Tab pressed during a settle loses its scroll: when the page stops, go where the focused control can be seen. */
  showFocus() {
    const a = this.tabbed; this.tabbed = null; if (!a || a !== document.activeElement) return;
    const r = a.getBoundingClientRect(); if (!r.width || (r.bottom > navH() && r.top < innerHeight)) return;
    const want = scrollY + r.top - navH(); if (want > this.end) { a.scrollIntoView({ block: 'center' }); return; }
    let i = 0; this.points.forEach((p, k) => { if (p <= want) i = k; });
    if (Math.abs(this.points[i] - scrollY) > 2) this.to(i);
  },
  settle() { if (this.animating || performance.now() < this.quiet || scrollY > this.end + 1) return; const i = this.nearest(); if (Math.abs(this.points[i] - scrollY) > 2) this.to(i); },
  jump(y) { this.run++; clearTimeout(this.fallback); this.animating = false; this.queued = 0; this.target = -1; this.quiet = performance.now() + 500; if (lenis) lenis.scrollTo(y, { immediate: true, force: true }); if (Math.abs(scrollY - y) > 1) scrollTo({ top: y, behavior: 'auto' }); }, // Lenis skips a target it already holds, even if the browser has since moved the page
};
// wheel and trackpad: one step request per gesture. A gesture starts when
//  - no wheel event arrived for GESTURE_GAP_MS, or
//  - the direction changed, or
//  - after the gesture fired and its delta had decayed to half its peak or
//    less, the (two-event averaged) delta rises again to 2.5x its low: a new
//    swipe starting inside the previous swipe's leftover momentum.
// Momentum alone only decays, and a mouse spin has flat deltas, so neither
// produces a false rise.
{
  const g = { t: -1e9, dir: 0, acc: 0, fired: false, prev: 0, peak: 0, peakT: 0, low: Infinity };
  const begin = (now, dir) => Object.assign(g, { dir, acc: 0, fired: false, prev: 0, peak: 0, peakT: now, low: Infinity });
  addEventListener('wheel', (e) => {
    if (!snapOn() || e.ctrlKey || e.target.closest('.menu') || snapPaused()) return;
    const now = performance.now(), dy = e.deltaY * (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? innerHeight : 1);
    if (dy && !snap.animating && freeScroll(scrollY, Math.sign(dy))) return;   // past the snap: the browser scrolls, and nothing here touches the event
    e.preventDefault(); e.stopImmediatePropagation();
    if (!dy) return;
    const dir = Math.sign(dy), mag = Math.abs(dy);
    let fresh = now - g.t > GESTURE_GAP_MS || dir !== g.dir;
    const level = g.prev ? (mag + g.prev) / 2 : mag;
    if (!fresh && g.fired && now - g.peakT > 60 && g.low <= g.peak * 0.5 && level >= g.low * 2.5 && level - g.low >= 10) fresh = true;
    if (fresh) begin(now, dir);
    const lv = g.prev ? (mag + g.prev) / 2 : mag;
    g.t = now; g.prev = mag; g.acc += mag;
    if (lv > g.peak) { g.peak = lv; g.peakT = now; g.low = lv; } else if (lv < g.low) g.low = lv;
    if (!g.fired && g.acc >= 30) { g.fired = true; snap.request(dir); }
  }, { capture: true, passive: false });
}
// keyboard: every press is a step request (queued like wheel steps); holding a key repeats nothing
addEventListener('keydown', (e) => {
  if (!snapOn() || e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
  if (e.target.closest('input, textarea, select, [contenteditable="true"]') || snapPaused()) return;
  const k = e.key; let dir = 0;
  if (k === ' ' && e.target.closest('button, a[href], summary, [role="tab"], [role="button"]')) return; // Space presses a focused control
  if (k === 'PageDown' || k === 'ArrowDown' || (k === ' ' && !e.shiftKey)) dir = 1;
  else if (k === 'PageUp' || k === 'ArrowUp' || (k === ' ' && e.shiftKey)) dir = -1;
  else if (k === 'Home') { e.preventDefault(); snap.toIndex(0); return; }
  if (!dir || freeScroll(scrollY, dir)) return;   // End and everything past the snap are the browser's
  e.preventDefault(); if (!e.repeat) snap.request(dir);
});
// touch: a swipe (the finger moved) moves one stage in its direction; a tap is just a tap
{
  let y0 = 0, y1 = 0, t0 = 0, tracking = false;
  addEventListener('touchstart', (e) => { if (e.touches.length !== 1) { tracking = false; return; } tracking = true; y0 = y1 = e.touches[0].clientY; t0 = performance.now(); }, { passive: true });
  addEventListener('touchmove', (e) => { if (tracking && e.touches.length === 1) y1 = e.touches[0].clientY; }, { passive: true });
  addEventListener('touchend', (e) => {
    if (!tracking) return; tracking = false;
    if (!snapOn() || snapPaused() || e.target.closest('.who__list, textarea, select, input')) return;   // horizontal lists and fields scroll themselves
    const dy = y0 - y1, fast = performance.now() - t0 < 320;
    if (freeScroll(scrollY, Math.sign(dy) || 1)) return;
    if (Math.abs(dy) > (fast ? 24 : 60)) snap.request(dy > 0 ? 1 : -1); else if (Math.abs(dy) > 4) snap.settle();
  }, { passive: true });
}
// any other scroll source (scrollbar drag, find-in-page): settle when it stops
{
  let timer = 0;
  addEventListener('scroll', () => { if (!snapOn() || snap.animating) return; clearTimeout(timer); timer = setTimeout(() => { if (snapOn() && !snapPaused()) snap.settle(); }, 180); }, { passive: true });
}
{ let tab = 0; addEventListener('keydown', (e) => { if (e.key === 'Tab') tab = performance.now(); }, true); addEventListener('focusin', (e) => { if (snap.animating && performance.now() - tab < 200) snap.tabbed = e.target; }); }
// leaving a form hands the page back to the snap
addEventListener('focusout', () => setTimeout(() => { if (snapOn() && !snapPaused() && !snap.animating && !document.activeElement?.closest?.('form, .faq')) snap.settle(); }, 0));
// Lenis drives the settle on wide screens only; phones keep the browser's own scrolling
let lenisRaf = 0;
function setLenis(on) {
  if (on === !!lenis) return;
  if (on) {
    lenis = new Lenis({ smoothWheel: false, syncTouch: true, syncTouchLerp: 0.1, touchInertiaExponent: 1.3, anchors: false, autoRaf: false, virtualScroll: ({ deltaY }) => !freeScroll(scrollY, Math.sign(deltaY) || 1) }); // past the snap, a drag is the browser's too
    const raf = (t) => { if (!lenis) return; lenis.raf(t); lenisRaf = requestAnimationFrame(raf); };
    lenisRaf = requestAnimationFrame(raf);
  } else { cancelAnimationFrame(lenisRaf); lenis.destroy(); lenis = null; }
}
setLenis(snapOn() && !RM.matches);
NARROW.addEventListener('change', () => { snap.jump(scrollY); setLenis(snapOn() && !RM.matches); bandNow = -1; setOrientation(); measureStages(); });
SIDE.addEventListener('change', () => { bandNow = -1; measureStages(); });

// ---------------------------------------------------------- stage 1 --
const thumbs = Object.fromEntries(C.segments.items.map((a) => [a.id, a.photo || drawThumb(a.venue)]));
const tabs = $$('.who__item'), panel = $('#panel'), thumb = $('[data-thumb]'), thumbImg = $('[data-thumb-img]');
function setOrientation() { $('.who__list').setAttribute('aria-orientation', NARROW.matches ? 'horizontal' : 'vertical'); }
setOrientation();
function select(id, { focus = false, animate = true } = {}) {
  const a = C.segments.items.find((x) => x.id === id); if (!a) return;
  const changed = id !== state.audience; state.audience = id;
  tabs.forEach((t) => { const on = t.dataset.aud === id; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; if (on && focus) t.focus(); });
  panel.setAttribute('aria-labelledby', `tab-${id}`);
  if (NARROW.matches && changed) { const t = tabs.find((x) => x.dataset.aud === id), l = t.parentElement; l.scrollTo({ left: t.offsetLeft - (l.clientWidth - t.offsetWidth) / 2, behavior: RM.matches ? 'auto' : 'smooth' }); } // the picked audience comes fully into view
  const apply = () => {
    $('[data-panel-for]').textContent = `For ${a.name.toLowerCase()}`; $('[data-panel-line]').textContent = a.line;
    $('[data-panel-org]').hidden = !a.org; $('[data-panel-ind]').hidden = a.org; $('[data-panel-thumb]').src = thumbs[id];
    panel.classList.remove('is-swapping');
  };
  if (changed && animate && !RM.matches) { panel.classList.add('is-swapping'); setTimeout(apply, 120); } else apply();
  if (world) world.setVenue(a.venue, { animate: changed && animate });
  showPoster();
}
tabs.forEach((t, i) => {
  t.addEventListener('click', () => select(t.dataset.aud));
  t.addEventListener('keydown', (e) => {
    const k = e.key; let j = -1;
    if (k === 'ArrowDown' || k === 'ArrowRight') j = (i + 1) % tabs.length; else if (k === 'ArrowUp' || k === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
    else if (k === 'Home') j = 0; else if (k === 'End') j = tabs.length - 1;
    if (j < 0) return; e.preventDefault(); select(tabs[j].dataset.aud, { focus: true });
  });
  const show = () => { if (!FINE.matches && !t.matches(':focus-visible')) return; thumbImg.src = thumbs[t.dataset.aud]; thumb.style.setProperty('--y', `${t.offsetTop - t.parentElement.offsetTop + t.offsetHeight / 2 - 60}px`); thumb.classList.add('is-on'); };
  const hide = () => thumb.classList.remove('is-on');
  t.addEventListener('pointerenter', show); t.addEventListener('pointerleave', hide); t.addEventListener('focus', show); t.addEventListener('blur', hide);
});

// ---------------------------------------------------------- overlay --
// Projected from the product each rendered frame, at rest: Stage 2's dots and leader lines.
const overlay = $('[data-overlay]'), sets = $$('.overlay__set');
const whatEl = $('#what'), hsDots = C.what.hotspots.map((h) => $(`.mk[data-hs="${h.id}"]`)), hsLines = C.what.hotspots.map((h) => $(`[data-line="${h.id}"]`)), hsCards = C.what.hotspots.map((h) => $(`[data-hs-card="${h.id}"]`));
let stage2Rest = false;
/** Stage 2's leader lines end on cards that scroll with the page, so they only show with the page at rest on the stage. */
function onStage2Rest() { return state.stage === 'what' && !NARROW.matches && Math.abs(whatEl.getBoundingClientRect().top - navH()) < 2; }
function updateOverlayVisibility() {
  const t = html.dataset.travel || '';
  for (const s of sets) { const f = s.dataset.for; s.hidden = !(worldReady && state.stage === f && !t && (f !== 'what' || onStage2Rest())); }
  if (world) world.kick();
}
function placeMarkers(w) {
  if (!worldReady) return;
  const showWhat = !html.dataset.travel && onStage2Rest();
  C.what.hotspots.forEach((h, i) => {
    const line = hsLines[i]; line.style.opacity = showWhat ? '1' : '0'; if (!showWhat) { hsDots[i].style.opacity = '0'; return; }
    const p = w.partDot(h.part, h.at), card = hsCards[i].getBoundingClientRect();
    hsDots[i].style.transform = `translate3d(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px, 0)`; hsDots[i].style.opacity = '1';
    // from the dot on the part straight down to the top edge of its card
    line.setAttribute('x1', p.x); line.setAttribute('y1', p.y); line.setAttribute('x2', clamp(p.x, card.left + 16, card.right - 16)); line.setAttribute('y2', card.top);
  });
}
/**
 * On wide screens each stage's product keeps to the space its text leaves, at any window size and in any size of the
 * model. Each box is in px at the stage's rest position: layout positions (not the screen boxes an arrival fade moves)
 * less the stage's rest scroll. The two upright stages are centred in theirs, and on phones they are sized to the band.
 */
let fitKey = '';
function fitStages(force = false) {
  if (!worldReady) return;
  // on phones the address bar coming and going changes innerHeight but none of the bands: nothing to redo mid-scroll
  const key = `${innerWidth}x${NARROW.matches ? Object.values(bands).join() : innerHeight}/${world.slot.sizeId}/${NARROW.matches}/${SIDE.matches}`;
  if (key === fitKey && !force) return; fitKey = key;
  if (world.W !== worldEl.clientWidth || world.H !== worldEl.clientHeight) world.resize(); // the window's resize event comes before the canvas's own
  const fitted = ['what', 'customize', 'why', 'story', 'close'], centred = { center: true }, all = stages.map((s) => s.dataset.product);
  if (NARROW.matches) {
    all.forEach((st) => { world.fitStage(st, null); world.frameStage(st, null); });
    // each section in its own space: its band, or beside the text the whole canvas. The band's foot has a soft fade, so the picture stays above it.
    for (const s of stages) { if (!s.closest('.pin')) continue; const st = s.dataset.product, h = SIDE.matches ? world.H : bands[st]; world.frameStage(st, { left: 14, right: world.W - 14, top: 8, bottom: h - (SIDE.matches ? 8 : 18) }); }
    world.fitsChanged(); return;
  }
  all.forEach((st) => world.frameStage(st, null));
  const maxY = Math.max(0, html.scrollHeight - innerHeight), rest = (st) => Math.min(tops[stages.findIndex((s) => s.dataset.product === st)], maxY);
  const top = (el, st) => pageTop(el) - rest(st), bottom = (el, st) => top(el, st) + el.offsetHeight, nh = navH();
  const left = (el) => el.getBoundingClientRect().left, right = (el) => el.getBoundingClientRect().right, g = $('.what__low').offsetLeft;
  world.fitStage('explorer', { left: right($('.explorer__left')) + 16, right: left($('.panel')) - 16, top: nh + 8, bottom: innerHeight - 10 }, centred);
  world.fitStage('what', { left: g, right: innerWidth - g, top: bottom($('.what__head'), 'what') + 10, bottom: top($('.what__low'), 'what') - 18 });
  world.fitStage('inside', { left: right($('.inside__list')) + 16, right: left($('.sheet')) - 16, top: bottom($('.inside__head'), 'inside') + 8, bottom: innerHeight - 14 }, centred);
  world.fitStage('customize', { left: right($('.customize__side--color')) + 16, right: left($('.customize__side--size')) - 16, top: bottom($('.customize__head'), 'customize') + 8, bottom: top($('.customize__note'), 'customize') - 8 });
  world.fitStage('why', { left: 8, right: left($('.why__panel')) - 16, top: nh + 8, bottom: innerHeight - 8 });
  world.fitStage('story', { left: 8, right: left($('.story__panel')) - 16, top: nh + 8, bottom: innerHeight - 8 });
  world.fitStage('close', { left: g, right: innerWidth - g, top: bottom($('.close h2'), 'close') + 8, bottom: top($('.paths'), 'close') - 8 });
  world.fitsChanged();
}

// ---------------------------------------------------------- stage 3 --
// Each step is a timed animation on the world; the button shows its progress.
const steps = $$('.step');
function setStep(i, { focus = false, play = true } = {}) {
  state.step = i;
  steps.forEach((b, k) => { b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; if (k === i && focus) b.focus(); });
  $('[data-step-caption]').textContent = C.how.steps[i].caption;
  if (play && world && state.stage === 'how') world.playStep(i);
}
function onStepProgress(i, p, done) {
  if (i < 0) { // the stage was left: back to Step 1 (only touching the DOM where something changed, as this runs mid-scroll)
    steps.forEach((b) => { if (b.classList.contains('is-playing') || b.classList.contains('is-working')) b.classList.remove('is-playing', 'is-working'); const v = b.style.getPropertyValue('--p'); if (v && v !== '0') b.style.setProperty('--p', '0'); });
    if (state.step !== 0) { const cap = $('[data-step-caption]'); cap.setAttribute('aria-live', 'off'); setStep(0, { play: false }); } // silently: the visitor is elsewhere now
    return;
  }
  steps.forEach((b, k) => { if (k !== i) { b.classList.remove('is-playing', 'is-working'); b.style.setProperty('--p', '0'); } });
  const b = steps[i];
  // "Let it work" has no end point and nothing may suggest how long it takes: its bar never fills; a quiet sheen drifts
  // along it on two periods that never line up, for as long as the step is selected
  if (C.how.steps[i].id === 'work') { b.classList.remove('is-playing'); b.classList.add('is-working'); return; }
  b.style.setProperty('--p', p.toFixed(3)); b.classList.toggle('is-playing', !done);
}
steps.forEach((b, i) => {
  b.addEventListener('click', () => setStep(i));
  b.addEventListener('keydown', (e) => {
    let j = -1;
    if (e.key === 'ArrowRight') j = (i + 1) % steps.length; else if (e.key === 'ArrowLeft') j = (i - 1 + steps.length) % steps.length;
    else if (e.key === 'Home') j = 0; else if (e.key === 'End') j = steps.length - 1;
    if (j < 0) return; e.preventDefault(); setStep(j, { focus: true });
  });
});

// ---------------------------------------------------------- stage 4 --
const sheet = $('[data-sheet]'), sheetClose = $('[data-sheet-close]');
let sheetOpener = null;                // the layer button that opened the sheet: closing it returns focus there
function selectLayer(i) {
  const held = sheet.contains(document.activeElement);
  state.layer = i;
  $$('[data-layer]').forEach((b) => b.setAttribute('aria-pressed', String(+b.dataset.layer === i)));
  const L = C.inside.layers[i];
  sheet.classList.toggle('is-open', !!L);
  $('[data-sheet-prompt]').hidden = !!L; $('[data-sheet-detail]').hidden = !L; $('[data-inside-prompt]').style.visibility = L ? 'hidden' : ''; // it keeps its line, so the part list does not jump
  if (L) { $('[data-sheet-name]').textContent = L.name; $('[data-sheet-role]').textContent = L.role; }
  if (world && (state.stage === 'inside' || i < 0)) world.selectLayer(i); // a deselect always reaches the product (leaving Inside calls it after the stage has changed)
  if (!L && held) sheetOpener?.focus({ preventScroll: true });
}
$$('[data-layer]').forEach((b) => b.addEventListener('click', () => {
  const i = +b.dataset.layer, open = i !== state.layer;
  if (open) sheetOpener = b;
  selectLayer(open ? i : -1);
}));
sheetClose.addEventListener('click', () => selectLayer(-1));
// The parts themselves are the targets: a click on one pops it out as its list button does; on the part that is out, or on
// empty space, it goes back. The list stays the keyboard's way in, and where focus returns.
const layerAt = (e) => { if (!worldReady || state.stage !== 'inside' || html.dataset.travel) return -1; const r = worldEl.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top; return x < 0 || y < 0 || x > r.width || y > (bandNow > 0 ? bandNow : r.height) ? -1 : world.pickLayer(x, y); };
document.addEventListener('click', (e) => {
  if (state.stage !== 'inside' || e.target.closest('a, button, input, select, textarea, label, summary, .sheet, .nav, .menu')) return;
  const i = layerAt(e), open = i >= 0 && i !== state.layer;
  if (i < 0 && state.layer < 0) return;
  if (open) sheetOpener = $(`.layer-btn[data-layer="${i}"]`);
  selectLayer(open ? i : -1);
});
if (FINE.matches) { let q = 0, last = null; addEventListener('pointermove', (e) => { last = e; if (state.stage !== 'inside' && !html.classList.contains('over-layer')) return; q ||= requestAnimationFrame(() => { q = 0; html.classList.toggle('over-layer', !last.target.closest?.('a, button, .sheet, .nav') && layerAt(last) >= 0); }); }, { passive: true }); }
addEventListener('keydown', (e) => { if (e.key === 'Escape' && state.stage === 'inside' && state.layer >= 0) selectLayer(-1); });

// -------------------------------------------------------- customize --
// A colour changes only the shell (shell_top, shell_bottom). A size is a real
// model: S and L are fetched the first time they are asked for. Both carry on
// into the later stages and the rack, because they live on the slot.
const cz = C.customize;
function setColor(id) {
  const sw = cz.colors.find((c) => c.id === id); if (!sw) return;
  state.color = id;
  $$('.swatch[data-color]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.color === id)));
  $('[data-color-name]').textContent = sw.name;
  if (world) world.setColors({ shell: sw.hex }, 300);
}
const sizeButtons = $$('.size[data-size]'), sizeLabel = $('[data-size-label]');
const outside = (id) => { const [l, w, h] = MODEL.sizes[id].outsideMm.map(Math.round); return cz.sizeOutside.replace('{l}', l).replace('{w}', w).replace('{h}', h); };
async function setSizeId(id) {
  const sz = cz.sizes.find((s) => s.id === id); if (!sz) return;
  state.size = id;
  sizeButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.size === id)));
  if (!worldReady || world.slot.sizeId === id) { sizeLabel.textContent = outside(id); sizeLabel.classList.remove('is-loading'); return; }
  sizeLabel.textContent = cz.sizeLoading.replace('{size}', sz.label); sizeLabel.classList.add('is-loading');
  try {
    await world.setModel(id);
    if (state.size !== id) { if (world.slot.sizeId !== state.size) await setSizeId(state.size); return; } // a later pick won
    sizeLabel.textContent = outside(id); sizeLabel.classList.remove('is-loading'); fitStages();
  } catch (err) {
    console.warn('size load failed', err);
    if (state.size !== id) return;
    const back = world.slot.sizeId; state.size = back; sizeButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.size === back)));
    sizeLabel.textContent = cz.sizeError.replace('{size}', sz.label); sizeLabel.classList.remove('is-loading');
  }
}
$$('.swatch[data-color]').forEach((b) => b.addEventListener('click', () => setColor(b.dataset.color)));
sizeButtons.forEach((b) => b.addEventListener('click', () => setSizeId(b.dataset.size)));
{
  const area = $('[data-drag]'); let down = null;
  const grab = (e) => { if (state.stage !== 'customize' || !world) return; down = { x: e.clientX, y: e.clientY, id: e.pointerId, axis: null }; area.classList.add('is-dragging'); };
  area.addEventListener('pointerdown', grab);
  worldEl.addEventListener('pointerdown', (e) => { if (NARROW.matches) grab(e); });   // on phones the band itself is the handle
  addEventListener('pointermove', (e) => {
    if (!down || e.pointerId !== down.id) return;
    const dx = e.clientX - down.x, dy = e.clientY - down.y;
    if (!down.axis && Math.hypot(dx, dy) > 6) down.axis = e.pointerType === 'touch' && Math.abs(dy) > Math.abs(dx) ? 'scroll' : 'turn';
    if (down.axis !== 'turn') return;
    world.dragBy(dx, e.pointerType === 'touch' ? 0 : dy); down.x = e.clientX; down.y = e.clientY;
  });
  const end = () => { if (!down) return; down = null; area.classList.remove('is-dragging'); world && world.releaseDrag(); };
  addEventListener('pointerup', end); addEventListener('pointercancel', end);
  // the keyboard's way to turn it: left and right arrows, easing back on release like a drag
  area.addEventListener('keydown', (e) => { if (!world || (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight')) return; e.preventDefault(); world.dragBy(e.key === 'ArrowLeft' ? -36 : 36, 0); });
  area.addEventListener('keyup', (e) => { if (world && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) world.releaseDrag(); });
  area.addEventListener('blur', () => world && world.releaseDrag());
}

// ---------------------------------------------------------- forms --
// What the visitor typed is never cleared on a failure, and each kind of failure says what happened.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const validEmail = (v) => { const e = (v || '').trim(); return e.length <= 254 && EMAIL.test(e); };
const tooLong = (v, n) => (v || '').trim().length > n;   // the same limits as api/bulk.js: a long paste gets a message, never a silent cut
const SUBMIT_TIMEOUT_MS = 10000;
const withEmail = (s) => s.replace('{email}', C.brand.contactEmail);
function wireForm(form, { validate, offline }) {
  const status = $('.form__status', form), btn = $('button[type=submit]', form), done = $('[data-done]', form);
  const controls = (name) => { const f = form.elements[name]; return !f ? [] : f instanceof RadioNodeList ? [...f] : [f]; };
  const setErr = (name, msg) => { const p = $(`[data-err="${name}"]`, form); if (p) p.textContent = msg || ''; controls(name).forEach((c) => (msg ? c.setAttribute('aria-invalid', 'true') : c.removeAttribute('aria-invalid'))); };
  const showErrors = (errors) => { $$('[data-err]', form).forEach((p) => setErr(p.dataset.err, errors[p.dataset.err])); Object.keys(errors).flatMap(controls)[0]?.focus(); };
  const fail = (msg) => { status.textContent = msg; status.classList.add('is-err'); };
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); if (form.dataset.busy) return;
    status.textContent = ''; status.className = 'form__status';
    const data = Object.fromEntries(new FormData(form).entries());
    const errors = validate(data); showErrors(errors);
    if (Object.keys(errors).length) return;
    form.dataset.busy = '1'; btn.setAttribute('aria-disabled', 'true'); status.textContent = C.forms.sending;
    const stop = new AbortController(), timer = setTimeout(() => stop.abort(), SUBMIT_TIMEOUT_MS);
    try {
      const res = await fetch(form.action, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data), signal: stop.signal });
      const body = await res.json().catch(() => ({}));
      if (res.ok && body.ok) { status.textContent = ''; form.classList.add('is-done'); done.hidden = false; done.focus(); measureStages(); }
      else if (res.status === 400) { status.textContent = C.forms.invalid; status.classList.add('is-err'); if (body.errors) showErrors(body.errors); }
      else if (res.status === 429) fail(C.forms.rateLimited);
      else if (body.code === 'not_connected' || res.status === 404 || res.status === 405) fail(withEmail(offline));  // no webhook set, or no API behind this page
      else fail(C.forms.temporary);
    } catch (err) { fail(err.name === 'AbortError' ? C.forms.timeout : C.forms.network); }
    finally { clearTimeout(timer); delete form.dataset.busy; btn.removeAttribute('aria-disabled'); }
  });
  form.addEventListener('input', (e) => { if (e.target.name) setErr(e.target.name, ''); });
}
wireForm($('[data-form="bulk"]'), {
  // the pairs range is optional, here and in api/bulk.js
  validate: (d) => { const er = {}; if (!d.organization?.trim()) er.organization = 'Enter your organization.'; if (!d.type) er.type = 'Choose an organization type.'; if (!d.name?.trim()) er.name = 'Enter your name.'; if (!validEmail(d.email)) er.email = 'Enter a valid email address.'; for (const [k, n] of [['organization', 200], ['name', 200], ['phone', 40], ['message', 2000]]) if (tooLong(d[k], n)) er[k] = `Keep this under ${n} characters.`; return er; },
  offline: C.bulk.form.offline,
});
wireForm($('[data-form="waitlist"]'), { validate: (d) => (validEmail(d.email) ? {} : { email: 'Enter a valid email address.' }), offline: C.close.ind.offline });
function preselectOrgType() {
  let t = ''; try { t = sessionStorage.getItem('sf-org-type') || ''; } catch {}
  if (!t) { const seg = C.segments.items.find((x) => x.id === state.audience); t = seg?.orgType || ''; }
  const sel = $('#b-type'); if (t && sel && !sel.value) sel.value = t;
}
new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) preselectOrgType(); }, { threshold: 0.3 }).observe($('[data-product="bulk"]'));

// ---------------------------------------------------------- why --
// What each routine involves day to day. The same mark every day: no coverage, and no schedule that implies a lifespan.
const ICON = {
  spray: `<svg viewBox="0 0 32 32"><path d="M11 12h8v14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z"/><path d="M13 12V8h4v4M15 5v3"/><circle cx="24" cy="9" r="1.1"/><circle cx="27" cy="12" r="1.1"/><circle cx="25" cy="15" r="1.1"/></svg>`,
  sachet: `<svg viewBox="0 0 32 32"><path d="M9 7h14l1 20H8z"/><path d="M12 7l2-3h4l2 3"/><path d="M12 16h8"/></svg>`,
  pack: `<svg viewBox="0 0 32 32"><rect x="7" y="8" width="18" height="16" rx="3"/><path d="M16 12c-2 2.5-3 4-3 5.5a3 3 0 0 0 6 0c0-1.5-1-3-3-5.5z"/></svg>`,
  sole: `<svg viewBox="0 0 32 32"><rect x="4" y="11" width="24" height="10" rx="5"/><path d="M4 16h24"/></svg>`,
};
const dayEls = $$('.day'), legendEl = $('[data-legend]');
function setMethod(id) {
  const m = C.why.methods.find((x) => x.id === id); if (!m) return;
  state.method = id;
  $$('.method').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.method === id)));
  legendEl.textContent = m.legend;
  $('[data-week-mark]').textContent = m.mark; $('[data-week-icon]').innerHTML = ICON[m.icon];
  dayEls.forEach((d, i) => {
    $('[data-day-icon]', d).innerHTML = ICON[m.icon]; $('[data-day-mark]', d).textContent = m.mark;
    d.style.setProperty('--i', i);
    d.classList.remove('is-anim'); void d.offsetWidth; d.classList.add('is-anim');
  });
}
$$('.method').forEach((b) => b.addEventListener('click', () => setMethod(b.dataset.method)));
setMethod('solefresh');

// ---------------------------------------------------------- story --
$$('[data-ms]').forEach((b) => b.addEventListener('click', () => {
  state.milestone = b.dataset.ms;
  $$('[data-ms]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
  $('[data-ms-text]').textContent = C.story.milestones.find((m) => m.id === b.dataset.ms).text;
}));
const faqItems = $$('.faq__item');
faqItems.forEach((d) => d.addEventListener('toggle', () => { if (d.open) faqItems.forEach((o) => { if (o !== d) o.open = false; }); measureStages(); })); // an open answer moves everything below it

// ---------------------------------------------------------- 3D --
function canWebGL() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } }
html.dataset.stage = state.stage;
addEventListener('load', () => setTimeout(() => $('.warm')?.remove(), 2500)); // paint warm-up has done its job
select(state.audience, { animate: false });
measureStages(); landFirst(); setStep(0, { play: false }); selectLayer(-1); setColor(state.color); setSizeId(state.size);
if (canWebGL()) {
  import('./world.js').then(async ({ World }) => {
    world = new World(worldEl, { reduced: () => RM.matches, narrow: () => NARROW.matches });
    world.setVenue(C.segments.items.find((a) => a.id === state.audience).venue, { animate: false });
    world.onFrame(placeMarkers);
    world.onStep = onStepProgress;
    await world.load();
    worldReady = true;
    world.setColors({ shell: cz.colors.find((c) => c.id === state.color).hex }, 0);
    if (state.size !== world.slot.sizeId) setSizeId(state.size);   // picked while the 3D was still loading
    fitStages(true); landFirst();
    lastKey = ''; onScroll(true); updateOverlayVisibility();
    html.classList.add('gl-live');
    { const a = $('[data-drag]'); a.tabIndex = 0; a.removeAttribute('aria-hidden'); a.setAttribute('role', 'group'); a.setAttribute('aria-label', cz.dragHint.keys); } // a keyboard stop only where there is a product to turn
    window.__sf.world = world;
  }).catch((err) => {
    console.warn('3D unavailable, poster fallback in use.', err);
    html.classList.add('gl-off'); if (world) world.frameCbs.length = 0; $('canvas', worldEl)?.remove(); world = null; worldReady = false; showPoster(); updateOverlayVisibility();
  });
} else html.classList.add('gl-off');

// Verification hooks. Inert unless called.
window.__sf = { state, select, setStep, selectLayer, setColor, setSizeId, setMethod, measureStages, snap, snapPaused, SNAP_MS, GESTURE_GAP_MS, get tops() { return [...tops]; }, get lenis() { return lenis; }, C, MODEL };
html.classList.add('sf-ready');
