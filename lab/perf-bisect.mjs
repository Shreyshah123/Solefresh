// Which element's first paint costs a dropped frame? Runs one transition in a fresh browser with each candidate hidden.
//   node lab/perf-bisect.mjs --from 2 [--mobile] [--hide ".a" ".b" ...]   (--from: stage index; the run goes to the next stage)
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const a = process.argv.slice(2), MOBILE = a.includes('--mobile'), from = +a[a.indexOf('--from') + 1] || 1;
const hides = a.includes('--hide') ? a.slice(a.indexOf('--hide') + 1) : [];
const run = async (css) => {
  const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
  const ctx = await b.newContext({ viewport: MOBILE ? { width: 390, height: 844 } : { width: 1440, height: 900 }, isMobile: MOBILE, hasTouch: MOBILE });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4520/', { waitUntil: 'load' });
  if (css) await p.addStyleTag({ content: css });
  await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await p.waitForTimeout(3200);
  await p.evaluate((i) => window.__sf.snap.jump(window.__sf.tops[i]), from); await p.waitForTimeout(900);
  const r = await p.evaluate(async (i) => {
    const ft = []; let last = performance.now(), go = true; const tick = (t) => { ft.push(t - last); last = t; if (go) requestAnimationFrame(tick); }; requestAnimationFrame(tick);
    await new Promise((z) => setTimeout(z, 120));
    const y0 = scrollY, y1 = window.__sf.tops[i + 1], t0 = performance.now();
    if (window.__sf.lenis) window.__sf.snap.go(1);
    else await new Promise((done) => { const step = (t) => { const u = Math.min(1, (t - t0) / 700); scrollTo(0, y0 + (y1 - y0) * (1 - (1 - u) ** 3)); if (u < 1) requestAnimationFrame(step); else done(); }; requestAnimationFrame(step); });
    await new Promise((z) => setTimeout(z, 900)); go = false;
    return ft.slice(1).filter((v) => v > 20).map((v) => +v.toFixed(0));
  }, from);
  await b.close(); return r;
};
for (const h of ['', ...hides]) { const out = []; for (let k = 0; k < 2; k++) out.push((await run(h ? `${h} { visibility: hidden !important; }` : '')).join(',') || '-'); console.log(`${(h || '(nothing hidden)').padEnd(38)} slow frames: ${out.join('  |  ')}`); }
