// Repeats one transition and reports the worst frame, optionally with injected CSS.
//   node lab/perf-hitch.mjs --from customize --css ".stage__in{will-change:opacity,transform}" [--w 390 --h 844]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900), FROM = arg('--from', 'customize'), CSS = arg('--css', ''), mobile = W < 900;
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, isMobile: mobile, hasTouch: mobile });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
if (CSS) await p.addStyleTag({ content: CSS });
await p.waitForTimeout(1200);
await p.evaluate((from) => { const i = [...document.querySelectorAll('[data-product]')].findIndex((s) => s.dataset.product === from); window.__sf.snap.jump(window.__sf.tops[i]); }, FROM); await p.waitForTimeout(900);
const SNAP = await p.evaluate(() => window.__sf.SNAP_MS);
await p.evaluate(() => { window.__ft = []; let last = performance.now(); const f = (t) => { window.__ft.push(t - last); last = t; if (window.__run) requestAnimationFrame(f); }; window.__run = true; requestAnimationFrame(f); });
const TRACE = argv.includes('--trace');
if (TRACE) await b.startTracing(p, { path: 'lab/trace-hitch.json', screenshots: false, categories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'disabled-by-default-devtools.timeline.frame', 'toplevel', 'gpu', 'cc', 'viz', 'blink', 'v8'] });
for (let i = 0; i < 6; i++) { await p.evaluate(() => window.__sf.snap.go(1)); await p.waitForTimeout(SNAP + 350); await p.evaluate(() => window.__sf.snap.go(-1)); await p.waitForTimeout(SNAP + 350); }
if (TRACE) await b.stopTracing();
const ft = await p.evaluate(() => { window.__run = false; return window.__ft; });
await b.close();
const a = ft.filter((v) => v > 0 && v < 1000).sort((x, y) => x - y);
console.log(`${FROM} x6 down/up ${CSS ? '[' + CSS + ']' : '[baseline]'}: frames ${a.length}, worst ${a[a.length - 1].toFixed(1)}ms, >20ms: ${a.filter((v) => v > 20).length}, >33ms: ${a.filter((v) => v > 33).length}`);
