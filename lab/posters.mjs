// Renders the no-WebGL posters: one per venue for the hero, one per stage pose.
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 });
await p.waitForTimeout(1500);
const save = async (name) => { await p.waitForTimeout(900); const url = await p.evaluate(() => window.__sf.world.capture()); fs.writeFileSync(`assets/posters/${name}.webp`, Buffer.from(url.split(',')[1], 'base64')); };
for (const a of ['bowling', 'rinks', 'schools', 'teams', 'people']) { await p.evaluate((id) => window.__sf.select(id, { animate: false }), a); await save(a); }
await p.evaluate(() => window.__sf.select('bowling', { animate: false }));
for (const st of ['what', 'how', 'inside', 'customize', 'bulk', 'why', 'story', 'close']) { await p.evaluate((st) => { const w = window.__sf.world; w.setTravel(st, st, 0); w.selectLayer(-1); }, st); await save(st); }
console.log('posters:', fs.readdirSync('assets/posters').join(' '));
await b.close();
