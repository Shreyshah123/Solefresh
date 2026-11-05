// Every section at the sizes the phone layout must hold, reached through the real menu, so before and after can be compared
// at matching positions. Also one interaction per section where it matters.
//   node lab/mobile-shots.mjs <folder> [--sizes 390x844,320x568] [--url http://localhost:4520/]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const OUT = path.resolve(process.argv[2] || 'lab/mobile'), URL_ = arg('--url', 'http://localhost:4520/');
const SIZES = arg('--sizes', '320x568,375x667,390x844,430x932,768x1024,844x390,1440x900').split(',').map((s) => s.split('x').map(Number));
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const SECTIONS = ['explorer', 'what', 'how', 'inside', 'customize', 'bulk', 'why', 'story', 'faq', 'close'];
for (const [W, H] of SIZES) {
  const mobile = W < 900 || H <= 520, dir = path.join(OUT, `${W}x${H}`); fs.mkdirSync(dir, { recursive: true });
  const ctx = await b.newContext({ viewport: { width: W, height: H }, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: mobile ? 2 : 1 });
  const p = await ctx.newPage(), errs = []; p.on('pageerror', (e) => errs.push(String(e))); p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  await p.goto(URL_, { waitUntil: 'load' });
  await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await p.waitForTimeout(3000);
  const go = async (id) => {
    await p.evaluate((j) => {
      const menu = document.querySelector('.nav__menu'), wide = getComputedStyle(menu).display === 'none';
      if (!wide) menu.click();
      document.querySelector(`${wide ? '.nav' : '.menu'} [data-jump="${j}"]`).click();
    }, id);
    await p.waitForTimeout(900);
  };
  let n = 0; const shot = (name) => p.screenshot({ path: path.join(dir, `${String(n++).padStart(2, '0')}-${name}.png`) });
  for (const s of SECTIONS) {
    await go(s); await shot(s);
    if (s === 'how') { await p.evaluate(() => document.querySelector('#step-1').click()); await p.waitForTimeout(1300); await shot('how-step2-mid'); await p.waitForTimeout(1900); await shot('how-step2-done'); await p.evaluate(() => document.querySelector('#step-3').click()); await p.waitForTimeout(1200); await shot('how-step4-mid'); await p.waitForTimeout(1800); }
    if (s === 'inside') { await p.evaluate(() => document.querySelector('.inside__list .layer-btn[data-layer="4"]').click()); await p.waitForTimeout(800); await shot('inside-pop'); await p.evaluate(() => window.__sf.selectLayer(-1)); await p.waitForTimeout(600); }
  }
  await p.evaluate(() => scrollTo(0, document.documentElement.scrollHeight)); await p.waitForTimeout(700); await shot('footer');
  console.log(`${W}x${H}`, errs.length ? errs.slice(0, 3) : 'no page errors', await p.evaluate(() => ({ over: document.documentElement.scrollWidth - innerWidth })));
  await ctx.close();
}
await b.close();
