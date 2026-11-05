// Frame times while steps queue and reverse: bursts of two-gesture input down the page and back.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
if (process.argv.includes('--mobile')) { console.log('phones scroll natively: nothing queues there (perf-all covers them)'); process.exit(0); }
const W = 1440, H = 900;
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: W, height: H }, isMobile: W < 900, hasTouch: W < 900 });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
const CSS = (process.argv.find((a) => a.startsWith('--css=')) || '').slice(6); if (CSS) await p.addStyleTag({ content: CSS });
await p.waitForTimeout(1500);
const n = await p.evaluate(() => window.__sf.snap.points.length);
await p.evaluate(() => { window.__ft = []; let last = performance.now(); const f = (t) => { window.__ft.push(t - last); if (t - last > 20) (window.__slow ||= []).push(`${(t - last).toFixed(1)}ms stage=${document.documentElement.dataset.stage} travel=${document.documentElement.dataset.travel} y=${Math.round(scrollY)} anim=${window.__sf.snap.animating} q=${window.__sf.snap.queued} target=${window.__sf.snap.target}`); last = t; if (window.__run) requestAnimationFrame(f); }; window.__run = true; requestAnimationFrame(f); });
const TRACE = process.argv.includes('--trace');
if (TRACE) await b.startTracing(p, { path: 'lab/trace-queue.json', screenshots: false, categories: ['devtools.timeline', 'disabled-by-default-devtools.timeline', 'disabled-by-default-devtools.timeline.frame', 'toplevel', 'gpu', 'cc', 'blink', 'v8'] });
const t0 = Date.now();
for (let i = 0; i < Math.floor((n - 1) / 2); i++) { await p.evaluate(() => { const s = window.__sf.snap; s.request(1); setTimeout(() => s.request(1), 200); }); await p.waitForTimeout(1500); }
for (let i = 0; i < 3; i++) { await p.evaluate(() => { const s = window.__sf.snap; s.request(-1); setTimeout(() => s.request(1), 250); }); await p.waitForTimeout(1100); }
await p.evaluate(() => window.__sf.snap.toIndex(0)); await p.waitForTimeout(900);
if (TRACE) await b.stopTracing();
const ft = await p.evaluate(() => { window.__run = false; return window.__ft; });
console.log('slow frames:', JSON.stringify(await p.evaluate(() => window.__slow || [])), ' first 3 intervals:', ft.slice(0, 3).map((v) => v.toFixed(1)).join(' '), ' index of worst:', ft.indexOf(Math.max(...ft)));
await b.close();
const a = ft.filter((v) => v > 0 && v < 1000).sort((x, y) => x - y), mean = a.reduce((s, v) => s + v, 0) / a.length;
console.log(`${W}x${H} queued double-steps and reversals, ${((Date.now() - t0) / 1000).toFixed(1)}s: ${a.length} frames, mean ${mean.toFixed(1)}ms (${(1000 / mean).toFixed(0)} fps), p95 ${a[Math.floor(a.length * 0.95)].toFixed(1)}ms, worst ${a[a.length - 1].toFixed(1)}ms, >20ms: ${a.filter((v) => v > 20).length}`);
