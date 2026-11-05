// The phone layout, measured at the sizes it must hold. The 3D is checked on rendered pixels, not on code: each section's
// picture at rest, through every Stage 3 step, with each part popped out, turned by a drag and along each travel, must stay
// inside the space the section gives it. Also: no sideways overflow, headings clear of the sticky parts after a jump through
// the menu, tap sizes, 16px fields, the swatches and the routine strip, the hero's next step, and no console errors.
//   node lab/mobile-test.mjs [--sizes 390x844,320x568] [--model L]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const SIZES = arg('--sizes', '320x568,375x667,390x844,430x932,768x1024,844x390').split(',').map((s) => s.split('x').map(Number)), MODEL = arg('--model', 'M');
let fails = 0; const check = (ok, msg) => { if (!ok) { fails++; console.log(`  FAIL ${msg}`); } else if (process.argv.includes('--all')) console.log(`  ok   ${msg}`); };
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });

for (const [W, H] of SIZES) {
  const side = H <= 520 && W > H;
  const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: true, hasTouch: true });
  const p = await ctx.newPage(), errs = []; p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto('http://localhost:4520/', { waitUntil: 'load' });
  await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await p.waitForTimeout(2900);
  if (MODEL !== 'M') { await p.evaluate((s) => window.__sf.setSizeId(s), MODEL); await p.waitForFunction((s) => window.__sf.world.slot.sizeId === s, MODEL); await p.waitForTimeout(800); }
  console.log(`${W}x${H}${MODEL !== 'M' ? ` size ${MODEL}` : ''}`);

  await p.evaluate(() => {
    /** The box of what is drawn (no floor, no shadows), in px on the canvas, optionally for the product alone. */
    window.__box = (only = 'all') => {
      const w = window.__sf.world, r = w.renderer, gl = r.getContext(), dpr = r.getPixelRatio(), hide = [w.shadow, w.seatShadow, ...w.floors, w.halo, ...(only === 'product' ? [w.shoe, w.shoe2, w.rack] : [])], was = hide.map((o) => o.visible);
      hide.forEach((o) => { o.visible = false; }); r.render(w.scene, w.camera);
      const Wd = gl.drawingBufferWidth, Hd = gl.drawingBufferHeight, px = new Uint8Array(Wd * Hd * 4); gl.readPixels(0, 0, Wd, Hd, gl.RGBA, gl.UNSIGNED_BYTE, px);
      let x0 = 1e9, x1 = -1, y0 = 1e9, y1 = -1; for (let y = 0; y < Hd; y++) for (let x = 0; x < Wd; x++) if (px[(y * Wd + x) * 4 + 3] > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; const yy = Hd - 1 - y; if (yy < y0) y0 = yy; if (yy > y1) y1 = yy; }
      hide.forEach((o, k) => { o.visible = was[k]; }); r.render(w.scene, w.camera);
      return { x0: x0 / dpr, x1: x1 / dpr, y0: y0 / dpr, y1: y1 / dpr, W: w.W, H: w.H };
    };
    window.__bandNow = () => { const v = getComputedStyle(document.querySelector('[data-world]')).getPropertyValue('--band-now'); return parseFloat(v) || document.querySelector('[data-world]').clientHeight; };
  });
  const go = async (id) => { await p.evaluate((j) => { document.querySelector('.nav__menu').click(); document.querySelector(`.menu [data-jump="${j}"]`).click(); }, id); await p.waitForTimeout(800); };
  const within = (q, label, band, edge = 0) => { const m = { top: q.y0, bottom: band - q.y1, left: q.x0, right: q.W - 1 - q.x1 }, bad = Object.entries(m).filter(([, v]) => v < edge).map(([k, v]) => `${k} ${v.toFixed(0)}`); check(!bad.length, `${label}: inside its space (${bad.join(', ') || 'ok'}; box ${[q.x0, q.x1, q.y0, q.y1].map(Math.round)} in ${q.W}x${band})`); return m; };

  // --- every section through the menu: heading clear of what is sticky, no overflow
  for (const s of ['explorer', 'what', 'how', 'inside', 'customize', 'bulk', 'why', 'story', 'faq', 'close']) {
    await go(s);
    const r = await p.evaluate((st) => {
      const h = document.querySelector(st === 'faq' ? '#faq h3' : st === 'bulk' ? '#h-bulk' : st === 'explorer' ? '#h-hero' : `#h-${st}`).getBoundingClientRect(), nav = document.querySelector('.nav').getBoundingClientRect().bottom;
      const world = document.querySelector('[data-world]').getBoundingClientRect(), side = getComputedStyle(document.querySelector('.pin')).display === 'grid', pinned = world.bottom > nav + 2 && !side;
      const under = pinned ? nav + window.__bandNow() : nav;
      const wide = [...document.querySelectorAll('main *, .nav *, .footer *')].filter((e) => { if (e.closest('.who__list') || e.closest('.vh') || e.closest('.hp') || e.closest('.day__mark') || e.closest('.world') || e.closest('.warm')) return false; const q = e.getBoundingClientRect(); return q.width && q.right > innerWidth + 1; }).map((e) => e.className || e.tagName);
      return { top: h.top, bottom: h.bottom, under, H: innerHeight, over: document.documentElement.scrollWidth - innerWidth, wide: wide.slice(0, 3) };
    }, s);
    check(r.top >= r.under - 1 && r.bottom <= r.H, `${s}: heading on screen, clear of the sticky parts (top ${Math.round(r.top)}, sticky to ${Math.round(r.under)})`);
    check(r.over <= 0 && !r.wide.length, `${s}: no sideways overflow (${r.over}, ${r.wide.join(' ')})`);
  }

  // --- the 3D at rest and in its animated states
  const space = async () => (side ? (await p.evaluate(() => window.__sf.world.H)) : p.evaluate(() => window.__bandNow()));
  await go('explorer'); let band = await space(); let q = await p.evaluate(() => window.__box());
  let m = within(q, 'hero product', band); check(band === 0 || (q.y1 - q.y0) / band > 0.7, `hero: strong silhouette (${Math.round(100 * (q.y1 - q.y0) / band)}% of its space)`);
  await go('what'); band = await space(); q = await p.evaluate(() => window.__box()); within(q, 'benefits product', band); check((q.x1 - q.x0) / q.W > 0.6 || (q.y1 - q.y0) / band > 0.6, `benefits: not tiny (${Math.round(100 * (q.x1 - q.x0) / q.W)}% wide, ${Math.round(100 * (q.y1 - q.y0) / band)}% tall)`);
  await go('how'); band = await space();
  const steps = await p.evaluate(async () => {
    const w = window.__sf.world, out = []; const n = w.st3.steps.length;
    for (let i = 0; i < n; i++) for (let t = 0; t <= 1.001; t += 0.1) { w.scrub(i, t); w.applyState(); w.slot.apply(); const q = window.__box(); out.push({ i, t: +t.toFixed(1), ...q }); }
    w.st3 && w.playStep(0); return out;
  });
  const all = { x0: Math.min(...steps.map((s) => s.x0)), x1: Math.max(...steps.map((s) => s.x1)), y0: Math.min(...steps.map((s) => s.y0)), y1: Math.max(...steps.map((s) => s.y1)), W: steps[0].W };
  within(all, 'shoes and every step of Stage 3', band); check((all.x1 - all.x0) / all.W > 0.6 || (all.y1 - all.y0) / band > 0.7, `how: fills its space (${Math.round(100 * (all.x1 - all.x0) / all.W)}% wide, ${Math.round(100 * (all.y1 - all.y0) / band)}% tall)`);
  await p.waitForTimeout(3000);
  await go('inside'); band = await space(); q = await p.evaluate(() => window.__box()); within(q, 'the stack at rest', band); check((q.y1 - q.y0) / band > 0.6, `inside: fills its space (${Math.round(100 * (q.y1 - q.y0) / band)}% tall)`);
  for (let i = 0; i < 6; i++) {
    await p.evaluate((k) => document.querySelector(`.inside__list .layer-btn[data-layer="${k}"]`).click(), i); await p.waitForTimeout(800);
    const qs = await p.evaluate((k) => { const w = window.__sf.world, L = w.slot.parts[k], o = []; for (const v of [1, 1.09]) { L.pop.p = v; w.slot.apply(); o.push(window.__box()); } L.pop.p = 1; w.slot.apply(); return o; }, i);
    for (const x of qs) within(x, `part ${i} popped out`, band);
    await p.evaluate(() => window.__sf.selectLayer(-1)); await p.waitForTimeout(450);
  }
  await p.waitForTimeout(500);
  await go('customize'); band = await space(); q = await p.evaluate(() => window.__box()); within(q, 'customize product', band); check((q.x1 - q.x0) / q.W > 0.55 || (q.y1 - q.y0) / band > 0.6, `customize: substantial (${Math.round(100 * (q.x1 - q.x0) / q.W)}% wide, ${Math.round(100 * (q.y1 - q.y0) / band)}% tall)`);
  const turns = await p.evaluate(async () => { const w = window.__sf.world, s = w.slot, o = []; for (let a = 0; a < 8; a++) { s.drag.yaw = s.drag.tYaw = (a / 8) * Math.PI * 2; await new Promise((z) => { w.kick(); setTimeout(z, 70); }); o.push(window.__box()); } s.drag.yaw = s.drag.tYaw = 0; w.kick(); return o; });
  turns.forEach((x, a) => within(x, `customize turned ${a * 45} degrees`, band));
  await p.waitForTimeout(300);

  // --- along each travel: the product stays inside the space it has at that moment
  for (const [a, c] of [[0, 1], [1, 2], [2, 3], [3, 4]]) {
    const rows = await p.evaluate(async ([i, j]) => {
      const t = window.__sf.tops, out = [];
      for (let k = 1; k < 10; k++) { scrollTo(0, t[i] + ((t[j] - t[i]) * k) / 10); await new Promise((z) => setTimeout(z, 90)); const q = window.__box('product'); const S = window.__sf.world.S; out.push({ ...q, band: window.__bandNow(), size: S.scale * S.fitK * S.vk, u: +window.__sf.world.travel.u.toFixed(2), tr: `${window.__sf.world.travel.from}>${window.__sf.world.travel.to}` }); }
      return out;
    }, [a, c]);
    const worst = rows.map((r) => ({ top: r.y0, bottom: (side ? r.H : r.band) - r.y1, left: r.x0, right: r.W - 1 - r.x1, r })).reduce((w, x) => (Math.min(x.top, x.bottom, x.left, x.right) < Math.min(w.top, w.bottom, w.left, w.right) ? x : w));
    check(Math.min(worst.top, worst.left, worst.right) >= -1, `product stays on the canvas along ${worst.r.tr} (worst top ${worst.top.toFixed(0)}, left ${worst.left.toFixed(0)}, right ${worst.right.toFixed(0)} at u ${worst.r.u})`);
    // no jump: scrolled a few px at a time, the picture's scale only ever changes a little
    const jump = await p.evaluate(async ([i, j]) => {
      const t = window.__sf.tops, w = window.__sf.world, size = () => w.S.scale * w.S.fitK * w.S.vk; let prev = 0, most = 0;
      for (let y = t[i]; y <= t[j]; y += 6) { scrollTo(0, y); await new Promise((z) => requestAnimationFrame(() => requestAnimationFrame(z))); const s = size(); if (prev) most = Math.max(most, Math.abs(s / prev - 1)); prev = s; }
      return most;
    }, [a, c]);
    check(jump < 0.1, `no sudden change of size along stage ${a}>${c} (largest step per 6px of scroll ${(jump * 100).toFixed(1)}%)`);
  }

  // --- controls
  const c = await p.evaluate(() => {
    const px = (s) => [...document.querySelectorAll(s)].filter((e) => e.getClientRects().length && !e.closest('.warm') && !e.closest('.hp') && !e.closest('[hidden]')).map((e) => [s, Math.round(e.getBoundingClientRect().height), Math.round(e.getBoundingClientRect().width)]);
    const small = ['.nav__menu', '.nav__cta .btn', '.who__item', '.step', '.layer-btn', '.swatch', '.size', '.method', '.radio', '.field input', '.field select', '.form__row input', '.btn', '.faq__item summary', '.milestone__btn', '.sheet__close', '.footer__link', '.footer__contact a', '.menu__link'].flatMap(px).filter(([, h, w]) => h < 44 || w < 44);
    const fields = [...document.querySelectorAll('.field input:not([type=radio]), .field select, .field textarea, .form__row input')].filter((e) => e.getClientRects().length && !e.closest('.hp')).map((e) => parseFloat(getComputedStyle(e).fontSize));
    const sw = [...document.querySelectorAll('.customize .swatch')].map((e) => Math.round(e.getBoundingClientRect().top)), rows = [...new Set(sw)].length;
    const logo = document.querySelector('.nav__logo').getBoundingClientRect(), cta = document.querySelector('.nav__cta .btn').getBoundingClientRect(), menu = document.querySelector('.nav__menu').getBoundingClientRect();
    return { small, fields, rows, per: sw.filter((v) => v === sw[0]).length, gaps: [cta.left - logo.right, menu.left - cta.right] };
  });
  check(!c.small.length, `tap targets at least 44px: ${JSON.stringify(c.small.slice(0, 6))}`);
  check(c.fields.every((f) => f >= 16), `form text at least 16px (${[...new Set(c.fields)]})`);
  check(c.rows === 1 || (c.rows === 2 && c.per === 2), `swatches balanced (${c.rows} rows, ${c.per} in the first)`);
  check(c.gaps.every((g) => g >= 10), `header items comfortably apart (${c.gaps.map(Math.round)})`);
  await go('explorer');
  const hero = await p.evaluate(() => { const e = document.querySelector('.explorer__cta'), q = e.getBoundingClientRect(); return { bottom: q.bottom, H: innerHeight, shown: !!e.getClientRects().length }; });
  check(hero.shown && hero.bottom <= hero.H, `the pilot button is on the first screen (${Math.round(hero.bottom)} of ${hero.H})`);
  await go('why');
  const wk = await p.evaluate(() => { const a = document.querySelector('.week__action'), d = document.querySelector('.day__name'), mk = document.querySelector('.day__mark').getBoundingClientRect(); return { action: !!a.getClientRects().length, size: parseFloat(getComputedStyle(a).fontSize), day: parseFloat(getComputedStyle(d).fontSize), hiddenMark: mk.width <= 1 }; });
  check(wk.action && wk.size >= 16 && wk.day >= 12.5 && wk.hiddenMark, `routine: the action once at ${wk.size}px, days at ${wk.day}px`);
  check(!errs.length, `no console errors: ${errs[0] || ''}`);
  await ctx.close();
}
await b.close();
console.log(fails ? `FAILURES: ${fails}` : 'all phone checks passed');
process.exitCode = fails ? 1 : 0;
