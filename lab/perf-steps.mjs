// Stage 3 frame times: each step played for real by clicking its button (in
// order, then skips and replays), the working loop, and a scroll-out.
//   node lab/perf-steps.mjs [--mobile]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const MOBILE = process.argv.includes('--mobile');
const W = MOBILE ? 390 : 1440, H = MOBILE ? 844 : 900;
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, isMobile: MOBILE, hasTouch: MOBILE });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(1500);
await p.evaluate(() => document.querySelector('.nav__link[data-jump="how"]').click()); await p.waitForTimeout(900);
await p.evaluate(() => { window.__ft = []; let last = performance.now(); const tick = (t) => { window.__ft.push(t - last); last = t; window.__raf = requestAnimationFrame(tick); }; window.__raf = requestAnimationFrame(tick); });
const run = async (label, fn) => {
  await p.evaluate(() => { window.__ft.length = 0; });
  await fn();
  const f = await p.evaluate(() => window.__ft.slice(1));
  const s = [...f].sort((a, c) => a - c), pct = (q) => s[Math.min(s.length - 1, Math.floor(q * s.length))];
  const over = f.filter((x) => x > 20).length;
  console.log(`  ${label.padEnd(40)} ${String(f.length).padStart(4)} frames  median ${pct(0.5).toFixed(1)}  p95 ${pct(0.95).toFixed(1)}  max ${s[s.length - 1].toFixed(1)} ms  >20ms: ${over}`);
  return over;
};
const click = (i) => p.evaluate((i) => document.querySelector(`#step-${i}`).click(), i);
let bad = 0;
console.log(`${W}x${H}`);
for (const [label, seq] of [['1 finish', [0]], ['2 place', [1]], ['3 work (+ loop 3s)', [2]], ['4 remove', [3]], ['skip to 4 from hover (swap first)', [3]], ['skip to 3 from hover (swap first)', [2]], ['1 from inside (swap first)', [0]], ['replay 1', [0]]]) {
  bad += await run(label, async () => { for (const i of seq) await click(i); await p.waitForTimeout(label.startsWith('3') ? 5600 : 2100); });
}
bad += await run(MOBILE ? 'scroll-out down and back (native)' : 'scroll-out down and back (snap)', async () => {
  await click(1); await p.waitForTimeout(2000);
  if (!MOBILE) { await p.keyboard.press('PageDown'); await p.waitForTimeout(1200); await p.keyboard.press('PageUp'); await p.waitForTimeout(1200); return; }
  const glide = (i) => p.evaluate((i) => new Promise((done) => { const y0 = scrollY, y1 = window.__sf.tops[i], t0 = performance.now(), step = (t) => { const u = Math.min(1, (t - t0) / 800); scrollTo(0, y0 + (y1 - y0) * (1 - (1 - u) ** 3)); if (u < 1) requestAnimationFrame(step); else done(); }; requestAnimationFrame(step); }), i);
  await glide(3); await p.waitForTimeout(300); await glide(2); await p.waitForTimeout(300);
});
console.log(bad ? `frames over 20 ms: ${bad}` : 'no frames over 20 ms');
await b.close();
