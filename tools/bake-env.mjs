// Bakes the image-based light into assets/env/room.bin, so the page never has to make it (see #environment in src/world.js).
// It opens the built site in Chrome, lets three.js pre-filter a RoomEnvironment exactly as the page used to on every
// load, reads the result back and saves it gzipped: 4 bytes of width, 4 of height, then RGBA half floats.
//   serve the site (any static server), then:  node tools/bake-env.mjs [http://localhost:4520/]
// Run it again only if the light itself changes (ENV_SIZE or the RoomEnvironment call in src/world.js).
import { createRequire } from "node:module";
import fs from "node:fs";
import zlib from "node:zlib";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");
const url = process.argv[2] || "http://localhost:4520/";
const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--enable-gpu", "--ignore-gpu-blocklist"] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p.goto(url + (url.includes("?") ? "&" : "?") + "tier=high", { waitUntil: "load" });
await p.waitForFunction(() => window.__sf && window.__sf.world && document.documentElement.classList.contains("gl-live"), null, { timeout: 60000 });
const { w, h, b64 } = await p.evaluate(() => { const e = window.__sf.world.bakeEnvironment(); const u8 = new Uint8Array(e.px.buffer); let s = ""; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return { w: e.w, h: e.h, b64: btoa(s) }; });
await b.close();
const head = Buffer.alloc(8); head.writeUInt32LE(w, 0); head.writeUInt32LE(h, 4);
const out = new URL("../assets/env/room.bin", import.meta.url);
fs.mkdirSync(new URL("../assets/env/", import.meta.url), { recursive: true });
fs.writeFileSync(out, zlib.gzipSync(Buffer.concat([head, Buffer.from(b64, "base64")]), { level: 9 }));   // gzipped here: a host will not compress a .bin by itself
console.log(`baked ${w}x${h} -> assets/env/room.bin (${fs.statSync(out).size} bytes)`);
