// Layout at many window sizes. Wide: Stage 2's three cards never touch each other, the product or the heading, and the
// leader lines end on their parts without crossing. Everywhere: no sideways overflow, the header fits, the product is
// not cut off. Phones: the list sits below the band, swatches, layer dots named, sheet focus.
//   node lab/layout-test.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
let fails = 0; const check = (l, ok, x = '') => { if (!ok) fails++; if (!ok || process.argv.includes('--verbose')) console.log(`  ${l.padEnd(62)} ${ok ? 'ok' : 'FAIL'}${x ? '  ' + x : ''}`); };
const open = async (W, H, opts = {}) => {
  const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: W < 900 || H <= 520, hasTouch: W < 900 || H <= 520, ...opts });
  const p = await ctx.newPage(); p.errs = []; p.on('pageerror', (e) => p.errs.push(String(e)));
  await p.goto('http://localhost:4520/', { waitUntil: 'load' });
  await p.waitForFunction(() => document.documentElement.classList.contains('gl-live') || document.documentElement.classList.contains('gl-off'), null, { timeout: 30000 });
  await p.waitForTimeout(500); return { p, ctx };
};
const hit = (a, b2, m = 0) => a.left < b2.right + m && b2.left < a.right + m && a.top < b2.bottom + m && b2.top < a.bottom + m;

console.log('Stage 2 on wide windows');
const sizes = [[900, 600], [900, 700], [900, 1000], [960, 540], [1024, 600], [1024, 768], [1100, 800], [1240, 700], [1280, 640], [1280, 720], [1366, 650], [1440, 790], [1440, 900], [1536, 730], [1920, 950], [1920, 1080], [2560, 1300], [3440, 1300]];
for (const [W, H] of sizes) {
  const { p, ctx } = await open(W, H);
  for (const size of ['M', 'L']) {
    if (size === 'L') { await p.evaluate(() => window.__sf.setSizeId('L')); await p.waitForFunction(() => window.__sf.world.slot.sizeId === 'L'); await p.waitForTimeout(250); }
    await p.evaluate(() => { document.querySelector('.nav__link[data-jump="what"], .menu__link[data-jump="what"]').click(); }); await p.waitForTimeout(650);
    const r = await p.evaluate(() => {
      const w = window.__sf.world, rect = (el) => { const q = el.getBoundingClientRect(); return { left: q.left, top: q.top, right: q.right, bottom: q.bottom }; };
      const cards = [...document.querySelectorAll('.hs-card')].map(rect), head = rect(document.querySelector('.what__head')), note = rect(document.querySelector('.what__note'));
      let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9; w.slot.corners((v) => { const q = w.project(v); x0 = Math.min(x0, q.x); x1 = Math.max(x1, q.x); y0 = Math.min(y0, q.y); y1 = Math.max(y1, q.y); });
      const lines = [...document.querySelectorAll('[data-line]')].map((l) => ({ x1: +l.getAttribute('x1'), y1: +l.getAttribute('y1'), x2: +l.getAttribute('x2'), y2: +l.getAttribute('y2'), on: getComputedStyle(l).opacity }));
      const parts = window.__sf.C.what.hotspots.map((h) => { const q = w.partDot(h.part, h.at); return [q.x, q.y]; });
      return { cards, head, note, box: { left: x0, right: x1, top: y0, bottom: y1 }, lines, parts, fit: { k: w.S.fitK }, vis: [...document.querySelectorAll('.hs-card__text')].every((t) => getComputedStyle(t).visibility === 'visible' && +getComputedStyle(t).opacity === 1), overflow: document.documentElement.scrollWidth - innerWidth, H: innerHeight };
    });
    const tag = `${W}x${H} ${size}`;
    check(`${tag}: cards clear of each other`, !hit(r.cards[0], r.cards[1]) && !hit(r.cards[1], r.cards[2]) && !hit(r.cards[0], r.cards[2]));
    check(`${tag}: cards clear of the product`, r.cards.every((c) => !hit(c, r.box)), `product bottom ${Math.round(r.box.bottom)}, cards top ${Math.round(r.cards[0].top)}, fit ${r.fit.k.toFixed(2)}`);
    check(`${tag}: product clear of the heading`, r.box.top >= r.head.bottom - 1, `product top ${Math.round(r.box.top)}, heading bottom ${Math.round(r.head.bottom)}`);
    check(`${tag}: cards and note on screen`, r.cards.every((c) => c.bottom <= r.H) && r.note.bottom <= r.H, `note bottom ${Math.round(r.note.bottom)} of ${r.H}`);
    check(`${tag}: all text open`, r.vis);
    check(`${tag}: lines showing, ending on their parts and cards`, r.lines.every((l, i) => +l.on > 0.9 && Math.hypot(l.x1 - r.parts[i][0], l.y1 - r.parts[i][1]) < 2 && Math.abs(l.y2 - r.cards[i].top) < 2 && l.x2 >= r.cards[i].left && l.x2 <= r.cards[i].right));
    const cross = (a, c) => { const d = (p1, p2, p3) => (p2[0] - p1[0]) * (p3[1] - p1[1]) - (p2[1] - p1[1]) * (p3[0] - p1[0]), A = [a.x1, a.y1], B = [a.x2, a.y2], C2 = [c.x1, c.y1], D = [c.x2, c.y2]; return d(A, B, C2) * d(A, B, D) < 0 && d(C2, D, A) * d(C2, D, B) < 0; };
    check(`${tag}: lines do not cross`, !cross(r.lines[0], r.lines[1]) && !cross(r.lines[1], r.lines[2]) && !cross(r.lines[0], r.lines[2]));
    check(`${tag}: no sideways overflow`, r.overflow <= 0, String(r.overflow));
    // the stages with text beside the product
    const clearOf = { explorer: ['.explorer__intro', '.who', '.panel', '.explorer__view'], inside: ['.inside__head', '.inside__list', '.sheet'], customize: ['.customize__head', '.customize__side--color', '.customize__side--size', '.customize__note'], why: ['.why__panel'], story: ['.story__panel'], close: ['.close h2', '.paths'] };
    for (const [st, sel] of Object.entries(clearOf)) {
      await p.evaluate((st) => { document.querySelector(`[data-jump="${st}"]`).click(); }, st); await p.waitForTimeout(520);
      const q = await p.evaluate(([sel, st]) => {
        const w = window.__sf.world, rect = (el) => { const r = el.getBoundingClientRect(); return { left: r.left, top: r.top, right: r.right, bottom: r.bottom }; };
        let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9; w.slot.corners((v) => { const c = w.project(v); x0 = Math.min(x0, c.x); x1 = Math.max(x1, c.x); y0 = Math.min(y0, c.y); y1 = Math.max(y1, c.y); });
        const nav = document.querySelector('.nav').getBoundingClientRect().bottom;
        return { box: { left: x0, right: x1, top: y0, bottom: y1 }, nav, W: innerWidth, H: innerHeight, others: sel.map((s) => [s, rect(document.querySelector(s))]), chips: st === 'inside' ? [...document.querySelectorAll('.lm')].map((e) => [e.textContent, rect(e.querySelector('.lm__name'))]) : [], k: w.S.fitK };
      }, [sel, st]);
      const hits = q.others.filter(([, r]) => hit(r, q.box)).map(([s]) => s);
      check(`${tag} ${st}: product clear of its text`, !hits.length, `${hits.join(' ')} fit ${q.k.toFixed(2)} box ${Object.values(q.box).map(Math.round)}`);
      check(`${tag} ${st}: product on screen`, q.box.top >= q.nav - 1 && q.box.left >= -1 && q.box.right <= q.W + 1 && q.box.bottom <= q.H + 1, Object.values(q.box).map(Math.round).join(' '));
      if (st === 'inside') {
        const bad = []; q.chips.forEach(([n, c], i) => { for (const [s, r] of q.others) if (hit(c, r)) bad.push(`${n}/${s}`); q.chips.forEach(([m, d], j) => { if (j > i && hit(c, d)) bad.push(`${n}/${m}`); }); if (c.right > q.W) bad.push(`${n} off screen`); });
        check(`${tag} inside: marker labels clear of the text and each other`, !bad.length, bad.join(' '));
      }
    }
  }
  if (p.errs.length) { check(`${W}x${H}: page errors`, false, p.errs.join(' ')); }
  await ctx.close();
}

console.log('Every stage: no sideways overflow, header fits');
for (const [W, H] of [[320, 568], [320, 700], [360, 740], [390, 844], [414, 896], [480, 800], [600, 900], [768, 1024], [844, 390], [667, 375], [740, 360], [932, 430], [899, 700], [900, 700], [1024, 768], [1241, 800], [1280, 800], [1440, 900]]) {
  const { p, ctx } = await open(W, H);
  const hdr = await p.evaluate(() => { const v = (s) => { const e = document.querySelector(s); if (!e) return null; const r = e.getBoundingClientRect(); return r.width ? { l: r.left, r: r.right } : null; }; return { logo: v('.nav__logo'), links: v('.nav__links'), cta: v('.nav__cta'), menu: v('.nav__menu'), W: innerWidth }; });
  const order = [hdr.logo, hdr.links, hdr.cta, hdr.menu].filter(Boolean);
  check(`${W}x${H}: header in a row, inside the window`, order.every((a, i) => a.r <= hdr.W && (i === 0 || order[i - 1].r <= a.l + 1)), JSON.stringify(hdr));
  const stages = await p.evaluate(() => [...document.querySelectorAll('[data-product]')].map((s) => s.dataset.product));
  for (let i = 0; i < stages.length; i++) {
    await p.evaluate((i) => window.__sf.snap.jump(window.__sf.tops[i]), i); await p.waitForTimeout(90);
    const r = await p.evaluate((st) => {
      const over = []; const W = document.documentElement.clientWidth;
      for (const e of document.querySelectorAll(`[data-product="${st}"] *`)) { const q = e.getBoundingClientRect(); if (!q.width || getComputedStyle(e).visibility === 'hidden' || e.closest('.who__list, .hp, .vh, svg')) continue; if (q.right > W + 1 || q.left < -1) over.push(e.className || e.tagName); }
      return { over: [...new Set(over)].slice(0, 5), doc: document.documentElement.scrollWidth - innerWidth };
    }, stages[i]);
    check(`${W}x${H} ${stages[i]}: nothing past the sides`, r.doc <= 0 && !r.over.length, JSON.stringify(r));
  }
  if (p.errs.length) check(`${W}x${H}: page errors`, false, p.errs.join(' '));
  await ctx.close();
}

console.log('Phones');
{
  const { p, ctx } = await open(320, 640);
  const r = await p.evaluate(() => { const g = getComputedStyle(document.querySelector('.customize .swatches')).gridTemplateColumns.split(' ').length; return { cols: g, short: getComputedStyle(document.querySelector('.cta-short')).display, long: getComputedStyle(document.querySelector('.cta-long')).display }; });
  check('320: swatches in a 3-column grid', r.cols === 3, JSON.stringify(r));
  check('320: the header CTA shortens', r.short !== 'none' && r.long === 'none');
  await ctx.close();
}
{
  const { p, ctx } = await open(390, 844);
  const what = await p.evaluate(() => { document.querySelector('.menu__link[data-jump="what"]').click(); return true; }); await p.waitForTimeout(500);
  const r = await p.evaluate(() => { const band = document.querySelector('[data-world]').getBoundingClientRect(), list = document.querySelector('.hs-cards').getBoundingClientRect(); return { below: list.top >= band.bottom, text: [...document.querySelectorAll('.hs-card')].map((c) => c.textContent.length > 30), dots: getComputedStyle(document.querySelector('.overlay__set[data-for="what"]')).display, stacked: [...document.querySelectorAll('.hs-card')].every((c, i, a) => !i || c.getBoundingClientRect().top >= a[i - 1].getBoundingClientRect().bottom - 1) }; });
  check('390: the three items are a plain list below the band', r.below && r.stacked && r.text.every(Boolean) && r.dots === 'none', JSON.stringify(r));
  await p.evaluate(() => document.querySelector('.menu__link[data-jump="inside"]').click()); await p.waitForTimeout(600);
  const names = await p.evaluate(() => [...document.querySelectorAll('.layer-btn')].map((b) => b.textContent.trim()));
  check('390: every part in the list is a named button', JSON.stringify(names) === JSON.stringify(await p.evaluate(() => window.__sf.C.inside.layers.map((l) => l.name))), names.join(', '));
  const chip = '.layer-btn[data-layer="2"]';
  await p.tap(chip); await p.waitForTimeout(350);
  check('390: the sheet opens with focus inside it', await p.evaluate(() => document.querySelector('[data-sheet]').classList.contains('is-open') && document.activeElement === document.querySelector('[data-sheet-close]')));
  await p.tap('[data-sheet-close]'); await p.waitForTimeout(350);
  check('390: closing it returns focus to the layer that opened it', await p.evaluate(() => document.activeElement === document.querySelector('.layer-btn[data-layer="2"]')));
  check('390: a closed sheet is out of the tab order', await p.evaluate(() => getComputedStyle(document.querySelector('[data-sheet]')).visibility === 'hidden'));
  await p.focus(chip); await p.keyboard.press('Enter'); await p.waitForTimeout(300); await p.keyboard.press('Escape'); await p.waitForTimeout(300);
  check('390: Escape returns focus too', await p.evaluate(() => document.activeElement === document.querySelector('.layer-btn[data-layer="2"]')));
  await ctx.close();
}
console.log('No WebGL');
{
  const b2 = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--disable-webgl', '--disable-3d-apis'] });
  for (const [W, H] of [[1440, 900], [390, 844]]) {
    const p = await b2.newPage({ viewport: { width: W, height: H } });
    await p.goto('http://localhost:4520/', { waitUntil: 'load' }); await p.waitForSelector('html.gl-off', { timeout: 10000 }); await p.waitForTimeout(300);
    await p.evaluate(() => window.__sf.snap.jump(window.__sf.tops[1])); await p.waitForTimeout(500);
    const r = await p.evaluate(() => [...document.querySelectorAll('.hs-card')].map((c) => { const s = getComputedStyle(c), q = c.getBoundingClientRect(); return { t: c.textContent.length, o: +s.opacity, v: s.visibility, w: q.width, h: q.height }; }));
    check(`${W}: all three items are there with WebGL off`, r.length === 3 && r.every((c) => c.t > 30 && c.o === 1 && c.v === 'visible' && c.w > 100 && c.h > 40), JSON.stringify(r));
    await p.close();
  }
  await b2.close();
}
console.log(fails ? `FAILURES: ${fails}` : 'all layout checks passed');
await b.close();
