// The forms in a real browser, with the API mocked per case: errors tied to their fields, pairs optional, each kind of
// failure saying the right thing, what was typed surviving every failure, the 10 second timeout, the trust line.
//   node lab/form-test.mjs [--mobile]
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const MOBILE = process.argv.includes('--mobile');
const b = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true, args: ['--enable-gpu', '--ignore-gpu-blocklist'] });
const ctx = await b.newContext({ viewport: MOBILE ? { width: 390, height: 844 } : { width: 1440, height: 900 }, isMobile: MOBILE, hasTouch: MOBILE });
const p = await ctx.newPage();
const errs = []; p.on('pageerror', (e) => errs.push(String(e)));
await p.goto('http://localhost:4520/', { waitUntil: 'load' });
await p.waitForFunction(() => document.documentElement.classList.contains('gl-live'), null, { timeout: 30000 }); await p.waitForTimeout(500);
const C = await p.evaluate(() => window.__sf.C);
let fails = 0; const check = (l, ok, x = '') => { if (!ok) fails++; console.log(`  ${l.padEnd(66)} ${ok ? 'ok' : 'FAIL'}${x ? '  ' + x : ''}`); };
let answer = null, calls = 0;
await p.route('**/api/*', async (r) => {
  calls++; const a = answer;
  if (a === 'abort') return r.abort('connectionfailed');
  if (a === 'hang') { await new Promise((z) => setTimeout(z, 11500)); return r.abort().catch(() => {}); }
  return r.fulfill({ status: a.status, contentType: 'application/json', body: JSON.stringify(a.body) });
});
await p.evaluate(() => document.querySelector('.nav__link[data-jump="bulk"], .menu__link[data-jump="bulk"]').click()); await p.waitForTimeout(700);
const F = '[data-form="bulk"]', status = () => p.textContent(`${F} .form__status`);
const typed = () => p.evaluate(() => ['b-org', 'b-name', 'b-email', 'b-phone', 'b-msg'].map((id) => document.getElementById(id).value).join('|'));

console.log('errors');
await p.evaluate(() => { document.getElementById('b-type').value = ''; });
await p.click(`${F} button[type=submit]`); await p.waitForTimeout(200);
check('the empty form makes no request', calls === 0);
check('focus goes to the first invalid field', (await p.evaluate(() => document.activeElement.id)) === 'b-org');
for (const [id, name] of [['b-org', 'organization'], ['b-type', 'type'], ['b-name', 'name'], ['b-email', 'email']]) {
  const r = await p.evaluate(([id]) => { const el = document.getElementById(id), d = document.getElementById(el.getAttribute('aria-describedby')); return { inv: el.getAttribute('aria-invalid'), text: d?.textContent || '' }; }, [id]);
  check(`${name}: invalid, and described by its error`, r.inv === 'true' && r.text.length > 3, r.text);
}
const allTied = await p.evaluate(() => [...document.querySelectorAll('form [data-err]')].every((e) => e.id && document.querySelector(`[aria-describedby~="${e.id}"]`)));
check('every error element in both forms belongs to a field', allTied);
await p.fill('#b-org', 'Lanes Inc'); await p.fill('#b-name', 'Ada'); await p.fill('#b-email', 'nope'); await p.selectOption('#b-type', 'Skating rink');
await p.click(`${F} button[type=submit]`); await p.waitForTimeout(200);
check('a select that is fixed clears; focus goes to the email', (await p.evaluate(() => document.activeElement.id)) === 'b-email' && !(await p.getAttribute('#b-type', 'aria-invalid')));
await p.fill('#b-email', 'ada@example.com'); await p.fill('#b-phone', '555 0100'); await p.fill('#b-msg', 'About 200 pairs of rentals.');
const want = await typed();
check('the pairs field says optional', (await p.textContent(`${F} legend`)).includes('optional'));

console.log('failures keep what was typed');
const fail = async (label, a, text, wait = 300) => {
  answer = a; calls = 0; await p.click(`${F} button[type=submit]`); await p.waitForTimeout(wait);
  const s = await status();
  check(label, calls === 1 && s.includes(text) && (await typed()) === want && !(await p.evaluate((f) => document.querySelector(f).classList.contains('is-done'), F)), s);
};
await fail('pairs left empty is sent; not connected', { status: 503, body: { ok: false, code: 'not_connected' } }, "isn't connected yet");
check('it offers the contact address', (await status()).includes(C.brand.contactEmail));
await fail('temporary failure says try again', { status: 502, body: { ok: false, code: 'temporary' } }, 'try again');
check('and is not the not-connected message', !(await status()).includes('connected'));
await fail('a webhook timeout is a temporary failure', { status: 504, body: { ok: false, code: 'temporary' } }, 'try again');
await fail('no API behind the page counts as not connected', { status: 404, body: {} }, "isn't connected yet");
await fail('a platform error page is a temporary failure', { status: 500, body: {} }, 'try again');
await fail('rate limited says to wait', { status: 429, body: { ok: false, code: 'rate_limited' } }, 'wait a minute');
await fail('no connection says so', 'abort', "Couldn't reach the server");
answer = { status: 400, body: { ok: false, code: 'invalid', errors: { email: 'Enter a valid email address.' } } }; await p.click(`${F} button[type=submit]`); await p.waitForTimeout(300);
check('a server-side field error lands on the field', (await p.textContent('#err-b-email')).length > 3 && (await p.evaluate(() => document.activeElement.id)) === 'b-email' && (await typed()) === want);
await p.fill('#b-email', 'ada@example.com');
answer = 'hang'; calls = 0; const t0 = Date.now(); await p.click(`${F} button[type=submit]`); await p.waitForFunction((f) => document.querySelector(f + ' .form__status').classList.contains('is-err'), F, { timeout: 14000 }); const ms = Date.now() - t0;
check('the submit gives up after 10 s', ms > 9500 && ms < 11000 && (await status()).includes('took too long') && (await typed()) === want, `${ms} ms: ${await status()}`);

console.log('success');
answer = { status: 200, body: { ok: true } }; await p.click(`${F} button[type=submit]`); await p.waitForTimeout(400);
check('the thank-you shows, with focus on it', await p.evaluate((f) => { const d = document.querySelector(f + ' [data-done]'); return !d.hidden && document.activeElement === d && d.getBoundingClientRect().top < innerHeight && d.getBoundingClientRect().bottom > 0; }, F));
check('the copy matches the offer', (await p.textContent(`${F} [data-done]`)).includes('reach out'));

console.log('waitlist and trust');
const W = '[data-form="waitlist"]';
await p.evaluate(() => document.querySelector('.nav__waitlist, .menu__cta [data-jump="close"]').click()); await p.waitForTimeout(700);
await p.fill('#w-email', 'nope'); await p.click(`${W} button[type=submit]`); await p.waitForTimeout(200);
check('waitlist error tied to its field', (await p.getAttribute('#w-email', 'aria-invalid')) === 'true' && (await p.textContent('#err-w-email')).length > 3);
await p.fill('#w-email', 'a@b.co'); answer = { status: 503, body: { ok: false, code: 'not_connected' } }; await p.click(`${W} button[type=submit]`); await p.waitForTimeout(300);
check('waitlist not connected keeps the email', (await p.textContent(`${W} .form__status`)).includes("isn't connected yet") && (await p.inputValue('#w-email')) === 'a@b.co');
const note = "We'll only use this to contact you about SoleFresh.";
check('the line is under both forms', await p.evaluate((n) => [...document.querySelectorAll('form')].every((f) => f.querySelector('.form__note')?.textContent === n) && document.querySelectorAll('form').length === 2, note));
check('the footer shows the contact address as a link, and links to the privacy page', await p.evaluate(() => { const c = document.querySelector('[data-contact] a'), e = window.__sf.C.brand.contactEmail; return c?.textContent === e && c.getAttribute('href') === `mailto:${e}` && !!document.querySelector('.footer a[href="privacy.html"]'); }));
await p.goto('http://localhost:4520/privacy.html', { waitUntil: 'load' });
check('the privacy page names Google Sheets, links its policy and gives the contact address, with no placeholder left', await p.evaluate(() => { const d = document.querySelector('.doc'), t = d.textContent; return t.includes('Google Sheets') && !!d.querySelector('a[href="https://policies.google.com/privacy"]') && !!d.querySelector('a[href^="mailto:"]') && !/\[YOUR EMAIL|\[RECEIVING/.test(t); }));
if (errs.length) { console.log('page errors:', errs); fails++; }
console.log(fails ? `FAILURES: ${fails}` : 'all form checks passed');
await b.close();
