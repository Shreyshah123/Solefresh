// Performance check: records a Chrome trace while scrolling and hovering,
// counts presented frames from the trace, and measures rAF frame times in-page.
//   node lab/perf.mjs [--w 1440 --h 900] [--gpu]   (--gpu: no SwiftShader flag; uses the machine's GPU if headless Chrome can)
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const argv = process.argv.slice(2);
const arg = (n, d) => { const i = argv.indexOf(n); return i > -1 ? argv[i + 1] : d; };
const W = +arg('--w', 1440), H = +arg('--h', 900), GPU = argv.includes('--gpu');
const mobile = W < 900;
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: GPU ? ['--enable-gpu', '--ignore-gpu-blocklist'] : ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: W, height: H }, isMobile: mobile, hasTouch: mobile });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForSelector('html.sf-ready');
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live') || document.documentElement.classList.contains('gl-off'), null, { timeout: 30000 });
await p.waitForTimeout(1200);
const gpu = await p.evaluate(() => { const c = document.createElement('canvas'); const g = c.getContext('webgl2') || c.getContext('webgl'); const d = g && g.getExtension('WEBGL_debug_renderer_info'); return d ? g.getParameter(d.UNMASKED_RENDERER_WEBGL) : 'n/a'; });
console.log(`viewport ${W}x${H}  renderer: ${gpu}`);

// In-page frame timer: rAF intervals + long tasks, started before the gestures.
await p.evaluate(() => {
  window.__ft = []; window.__long = [];
  let last = performance.now();
  const f = (t) => { window.__ft.push(t - last); last = t; if (window.__run) requestAnimationFrame(f); };
  window.__run = true; requestAnimationFrame(f);
  try { new PerformanceObserver((l) => l.getEntries().forEach((e) => window.__long.push(e.duration))).observe({ type: 'longtask', buffered: false }); } catch {}
});

const tracePath = `lab/trace-${W}x${H}${GPU ? '-gpu' : ''}.json`;
await b.startTracing(p, { path: tracePath, screenshots: false, categories: ['disabled-by-default-devtools.timeline.frame', 'devtools.timeline', 'disabled-by-default-devtools.timeline'] });
const t0 = Date.now();
// 1) hover across the audience list (desktop) / tap through (mobile)
if (!mobile) { for (const id of ['bowling', 'rinks', 'schools', 'teams', 'people', 'teams']) { await p.hover(`#tab-${id}`); await p.waitForTimeout(220); } }
else { for (const id of ['rinks', 'schools']) { await p.tap(`#tab-${id}`); await p.waitForTimeout(500); } }
// 2) click a venue (swap animation) and the view toggle
await p.click('#tab-schools'); await p.waitForTimeout(700);
// 3) scroll down through the hero and the stand-in section and back, in wheel ticks
await p.mouse.move(W / 2, H / 2);
for (let i = 0; i < 24; i++) { await p.mouse.wheel(0, 100); await p.waitForTimeout(40); }
await p.waitForTimeout(300);
for (let i = 0; i < 24; i++) { await p.mouse.wheel(0, -100); await p.waitForTimeout(40); }
await p.waitForTimeout(400);
const secs = (Date.now() - t0) / 1000;
await b.stopTracing();
const r = await p.evaluate(() => { window.__run = false; return { ft: window.__ft, long: window.__long }; });
await b.close();

// Trace: count presented frames.
const trace = JSON.parse(fs.readFileSync(tracePath, 'utf8'));
const ev = trace.traceEvents || trace;
const draws = ev.filter((e) => e.name === 'DrawFrame' || e.name === 'Commit' || e.name === 'PipelineReporter' && e.args?.chrome_frame_reporter?.state === 'STATE_PRESENTED_ALL');
const drops = ev.filter((e) => e.name === 'PipelineReporter' && /DROPPED/.test(e.args?.chrome_frame_reporter?.state || ''));
const presented = ev.filter((e) => e.name === 'PipelineReporter' && e.args?.chrome_frame_reporter?.state === 'STATE_PRESENTED_ALL');
const ft = r.ft.filter((x) => x > 0 && x < 1000);
const sorted = [...ft].sort((a, b2) => a - b2);
const pct = (q) => sorted[Math.min(sorted.length - 1, Math.floor(q * sorted.length))];
const mean = ft.reduce((a, x) => a + x, 0) / ft.length;
console.log(`window: ${secs.toFixed(1)}s of hover, swap, view toggle and 48 wheel ticks`);
console.log(`rAF frames: ${ft.length}  mean ${mean.toFixed(1)}ms (${(1000 / mean).toFixed(0)} fps)  p50 ${pct(0.5).toFixed(1)}ms  p95 ${pct(0.95).toFixed(1)}ms  worst ${sorted[sorted.length - 1].toFixed(1)}ms  frames >20ms: ${ft.filter((x) => x > 20).length}`);
console.log(`long tasks (>50ms main thread): ${r.long.length}${r.long.length ? '  ' + r.long.map((x) => x.toFixed(0) + 'ms').join(' ') : ''}`);
console.log(`trace: presented frames ${presented.length}, dropped ${drops.length}, DrawFrame/Commit events ${draws.length}  -> ${tracePath}`);
