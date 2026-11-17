// Renders the stills that stand in for the 3D (no WebGL, WebGL drawn in software, or a device the sampler found too slow).
// They follow every control, so a visitor on stills never sees a label that disagrees with the picture:
//   <audience>.webp                      the hero, per audience
//   what, bulk, story, faq, close        one per stage
//   how-0 .. how-3                       each step, as it ends
//   inside-apart, inside-loaded, inside-<component>
//   customize-<color>-<size>
//   why-<alternative>
// showPoster() in src/main.js picks the file from the page's state: keep the two in step.
//   serve the built site on :4520, then:  node lab/posters.mjs
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--enable-gpu", "--ignore-gpu-blocklist"] });
const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
await p.goto((process.argv[2] || "http://localhost:4520/") + "?tier=high", { waitUntil: "load" });
await p.waitForFunction(() => document.documentElement.classList.contains("gl-live"), null, { timeout: 60000 });
await p.waitForTimeout(1500);
const C = await p.evaluate(() => window.__sf.C);
const wait = (ms) => p.waitForTimeout(ms);
const save = async (name, ms = 900) => { await wait(ms); const url = await p.evaluate(() => window.__sf.world.capture()); fs.writeFileSync(`assets/posters/${name}.webp`, Buffer.from(url.split(",")[1], "base64")); };
const go = async (stage) => { await p.evaluate((st) => { const s = window.__sf, i = [...document.querySelectorAll("[data-product]")].findIndex((x) => x.dataset.product === st); s.snap.jump(s.tops[i]); dispatchEvent(new Event("scroll")); }, stage); await wait(1300); };
for (const f of fs.readdirSync("assets/posters")) if (f.endsWith(".webp")) fs.unlinkSync(`assets/posters/${f}`);
await go("explorer");
for (const a of C.segments.items) { await p.evaluate((id) => window.__sf.select(id, { animate: false }), a.id); await save(a.id); }
await p.evaluate((id) => window.__sf.select(id, { animate: false }), C.segments.items[0].id);
for (const st of ["what", "bulk", "story", "faq", "close"]) { await go(st); await save(st, 300); }
await go("how");
for (let i = 0; i < C.how.steps.length; i++) { await p.evaluate((k) => window.__sf.setStep(k), i); await save(`how-${i}`, 4200); }
await go("inside"); await save("inside-apart", 900);
await p.evaluate(() => window.__sf.inside.loadAll()); await save("inside-loaded", 2400);
for (const c of C.inside.components) { await p.evaluate((id) => window.__sf.inside.inspect(id), c.id); await save(`inside-${c.id}`, 1500); }
await p.evaluate(() => window.__sf.inside.back());
await go("customize");
for (const sz of C.customize.sizes) { await p.evaluate((id) => window.__sf.setSizeId(id), sz.id); await wait(700); for (const c of C.customize.colors) { await p.evaluate((id) => window.__sf.setColor(id), c.id); await save(`customize-${c.id}-${sz.id}`, 600); } }
await p.evaluate(([c, s]) => { window.__sf.setColor(c); return window.__sf.setSizeId(s); }, [C.customize.defaults.color, C.customize.defaults.size]); await wait(800);
await go("why");
for (const m of C.why.alternatives) { await p.evaluate((id) => window.__sf.setAlt(id), m.id); await save(`why-${m.id}`, 900); }
const files = fs.readdirSync("assets/posters").filter((f) => f.endsWith(".webp"));
console.log(`${files.length} posters, ${Math.round(files.reduce((n, f) => n + fs.statSync(`assets/posters/${f}`).size, 0) / 1024)} KB:`, files.join(" "));
await b.close();
