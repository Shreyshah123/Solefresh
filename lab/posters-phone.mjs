// The phone stills for How: its four steps with the shoes a shade darker, as a phone's 3D draws them (World.setShoeTone),
// so a white shoe still reads on the bone page in a phone's small picture. picName() in src/main.js asks for how-<n>-dark.
// serve the built site on :4520, then: node lab/posters-phone.mjs
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");
const TONE = 0.45;   // keep in step with setShoeTone in src/main.js (a linear-light factor: about 70% as bright to the eye)
const b = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--enable-gpu", "--ignore-gpu-blocklist"] });
const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
await p.goto((process.argv[2] || "http://localhost:4520/") + "?tier=high", { waitUntil: "load" });
await p.waitForFunction(() => document.documentElement.classList.contains("gl-live"), null, { timeout: 60000 });
await p.waitForTimeout(1500);
await p.evaluate(() => { const s = window.__sf, i = [...document.querySelectorAll("[data-product]")].findIndex((x) => x.dataset.product === "how"); s.snap.jump(s.tops[i]); dispatchEvent(new Event("scroll")); });
await p.waitForTimeout(1300);
await p.evaluate((k) => window.__sf.world.setShoeTone(k), TONE);
const steps = await p.evaluate(() => window.__sf.C.how.steps.length);
for (let i = 0; i < steps; i++) {
  await p.evaluate((k) => window.__sf.setStep(k), i); await p.waitForTimeout(4200);
  const url = await p.evaluate(() => window.__sf.world.capture());
  fs.writeFileSync(`assets/posters/how-${i}-dark.webp`, Buffer.from(url.split(",")[1], "base64"));
}
console.log(`${steps} phone stills for How: assets/posters/how-*-dark.webp`);
await b.close();
