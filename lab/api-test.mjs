// The form handlers against a local mock webhook (nothing leaves this machine): forwarding, not connected versus
// temporary failure, the 10 second timeout, the rate limit, bad bodies, and that the handlers' lists match content.json.
//   node lab/api-test.mjs
import http from 'node:http';
import fs from 'node:fs';
import bulk, { TYPES, PAIRS } from '../api/bulk.js';
import waitlist from '../api/waitlist.js';

const C = JSON.parse(fs.readFileSync(new URL('../content.json', import.meta.url), 'utf8'));
let fails = 0; const check = (l, ok, x = '') => { if (!ok) fails++; console.log(`  ${l.padEnd(66)} ${ok ? 'ok' : 'FAIL'}${x ? '  ' + x : ''}`); };
const listen = (fn) => new Promise((res) => { const s = http.createServer(fn).listen(0, '127.0.0.1', () => res(s)); });

// the mock webhook: its behaviour is set per test
const got = []; let mode = 'ok';
const hook = await listen((req, res) => {
  let d = ''; req.on('data', (c) => { d += c; });
  req.on('end', () => {
    got.push({ body: JSON.parse(d || '{}'), type: req.headers['content-type'] });
    if (mode === 'hang') return; // never answers
    // a Google Apps Script web app: a redirect to the answer, which is 200 whatever happened
    if (req.url.endsWith('/exec')) { res.statusCode = 302; res.setHeader('Location', '/echo'); return res.end(); }
    if (req.url === '/echo') { got.pop(); res.setHeader('Content-Type', mode === 'sheet-signin' ? 'text/html' : 'application/json'); return res.end(mode === 'sheet-ok' ? '{"ok":true}' : mode === 'sheet-error' ? '{"ok":false,"error":"x"}' : '<html>Sign in</html>'); }
    res.statusCode = mode === 'fail' ? 500 : 200; res.end('{}');
  });
});
const HOOK = `http://127.0.0.1:${hook.address().port}/lead`;
const api = await listen((req, res) => (req.url.startsWith('/bulk') ? bulk : waitlist)(req, res));
const BASE = `http://127.0.0.1:${api.address().port}`;
let ip = 0;
const post = (path, body, { json = true, type, ipAs, method = 'POST' } = {}) => fetch(BASE + path, { method, headers: { 'x-forwarded-for': ipAs || `10.0.0.${++ip}`, 'Content-Type': type || 'application/json', Accept: json ? 'application/json' : 'text/html' }, body: method === 'POST' ? (typeof body === 'string' ? body : JSON.stringify(body)) : undefined });
const good = { organization: 'Lanes Inc', type: 'Bowling center', name: 'Ada', email: 'Ada@Example.com ' };

console.log('lists');
check('organization types match content.json', JSON.stringify(TYPES) === JSON.stringify(C.bulk.form.orgTypes));
check('pairs ranges match content.json', JSON.stringify(PAIRS) === JSON.stringify(C.bulk.form.pairs));

console.log('a Google Sheet as the webhook');
process.env.BULK_WEBHOOK_URL = `http://127.0.0.1:${hook.address().port}/macros/s/abc/exec`;
mode = 'sheet-ok'; let sr = await post('/bulk', good), sb = await sr.json();
check('the sheet confirms the row: the visitor is told it worked', sr.status === 200 && sb.ok === true, `${sr.status}`);
mode = 'sheet-error'; sr = await post('/bulk', good); sb = await sr.json();
check('the script failed but answered 200: a temporary failure', sr.status === 502 && sb.code === 'temporary', `${sr.status} ${sb.code}`);
mode = 'sheet-signin'; sr = await post('/bulk', good); sb = await sr.json();
check('deployed so that it wants a sign-in: a temporary failure, not a lost lead', sr.status === 502 && sb.code === 'temporary', `${sr.status} ${sb.code}`);
mode = 'ok'; got.length = 0;

console.log('not connected');
delete process.env.BULK_WEBHOOK_URL; delete process.env.WAITLIST_WEBHOOK_URL;
let r = await post('/bulk', good), b = await r.json();
check('no webhook set: 503 not_connected, nothing sent', r.status === 503 && b.code === 'not_connected' && got.length === 0, `${r.status} ${b.code}`);
r = await post('/waitlist', { email: 'a@b.co' }); b = await r.json();
check('waitlist the same', r.status === 503 && b.code === 'not_connected');
process.env.BULK_WEBHOOK_URL = 'not a url'; r = await post('/bulk', good); b = await r.json();
check('a malformed URL counts as not connected', r.status === 503 && b.code === 'not_connected');

process.env.BULK_WEBHOOK_URL = HOOK; process.env.WAITLIST_WEBHOOK_URL = HOOK;
console.log('forwarding');
r = await post('/bulk', { ...good, pairs: '50 to 200', phone: '555', message: 'Hi' }); b = await r.json();
const lead = got.at(-1)?.body;
check('a good signup is forwarded as JSON', r.status === 200 && b.ok === true && got.at(-1)?.type === 'application/json', JSON.stringify(lead));
check('fields cleaned, source and time added', lead?.email === 'ada@example.com' && lead?.organization === 'Lanes Inc' && lead?.pairs === '50 to 200' && lead?.source === 'solefresh-pilot' && !Number.isNaN(Date.parse(lead?.at)));
r = await post('/bulk', good);
check('pairs can be left out', r.status === 200 && got.at(-1)?.body.pairs === '');
r = await post('/bulk', { ...good, pairs: 'lots' }); b = await r.json();
check('a pairs value that is not on the list is refused', r.status === 400 && !!b.errors?.pairs);
r = await post('/bulk', { ...good, email: 'nope', organization: '' }); b = await r.json();
check('bad fields: 400 with an error per field', r.status === 400 && b.code === 'invalid' && !!b.errors?.email && !!b.errors?.organization);
r = await post('/waitlist', { email: 'A@B.co' }); b = await r.json();
check('waitlist forwards the email', r.status === 200 && got.at(-1)?.body.email === 'a@b.co' && got.at(-1)?.body.source === 'solefresh-waitlist');
r = await post('/waitlist', { email: 'nope' }); b = await r.json();
check('waitlist: a bad email names the field', r.status === 400 && !!b.errors?.email);
const before = got.length; r = await post('/bulk', { ...good, hp_check: 'spam' }); b = await r.json();
check('the honeypot answers ok and forwards nothing', r.status === 200 && b.ok && got.length === before);
r = await post('/bulk', new URLSearchParams(good).toString(), { json: false, type: 'application/x-www-form-urlencoded' });
check('a form post without JavaScript works and gets a page back', r.status === 200 && (r.headers.get('content-type') || '').includes('text/html') && (await r.text()).includes('reach out'));

console.log('temporary failure');
mode = 'fail'; r = await post('/bulk', good); b = await r.json();
check('the webhook errors: 502 temporary', r.status === 502 && b.code === 'temporary', `${r.status} ${b.code}`);
r = await post('/waitlist', { email: 'a@b.co' }); b = await r.json();
check('waitlist the same', r.status === 502 && b.code === 'temporary');
mode = 'hang'; let t0 = Date.now(); r = await post('/bulk', good); b = await r.json(); let ms = Date.now() - t0;
check('the webhook hangs: 504 temporary after about 10 s', r.status === 504 && b.code === 'temporary' && ms > 9500 && ms < 11500, `${ms} ms`);
mode = 'ok';

console.log('bad requests');
r = await post('/bulk', '{not json'); b = await r.json();
check('invalid JSON: 400', r.status === 400);
r = await post('/bulk', JSON.stringify({ message: 'x'.repeat(30000) })).catch(() => null);
check('an oversized body gets a 413', r?.status === 413, String(r?.status));
r = await post('/bulk', null, { method: 'GET' });
check('GET: 405 with Allow', r.status === 405 && r.headers.get('allow') === 'POST');
// Vercel hands the body already parsed, or throws from its getter on bad JSON
{
  const call = (req) => new Promise((resolve) => { const res = { statusCode: 0, headers: {}, setHeader(k, v) { this.headers[k] = v; }, end(x) { resolve({ status: this.statusCode, body: x }); } }; bulk(req, res); });
  let out = await call({ method: 'POST', headers: { accept: 'application/json', 'x-forwarded-for': '10.1.0.1' }, body: { ...good } });
  check('a body Vercel already parsed', out.status === 200);
  out = await call({ method: 'POST', headers: { accept: 'application/json', 'x-forwarded-for': '10.1.0.2' }, get body() { throw new Error('Invalid JSON'); } });
  check('Vercel\'s body getter throwing is a 400, not a crash', out.status === 400);
}

console.log('rate limit');
const statuses = []; for (let i = 0; i < 12; i++) statuses.push((await post('/waitlist', { email: 'a@b.co' }, { ipAs: '10.9.9.9' })).status);
check('the same IP is stopped after 10 in a minute', statuses.slice(0, 10).every((s) => s === 200) && statuses[10] === 429 && statuses[11] === 429, statuses.join(' '));
r = await post('/waitlist', { email: 'a@b.co' }, { ipAs: '10.9.9.9' }); b = await r.json();
check('429 says rate_limited and when to retry', b.code === 'rate_limited' && +r.headers.get('retry-after') > 0, `retry-after ${r.headers.get('retry-after')}`);
r = await post('/bulk', good, { ipAs: '10.9.9.9' });
check('each form counts separately', r.status === 200);
r = await post('/waitlist', { email: 'a@b.co' }, { ipAs: '10.9.9.10' });
check('another IP is unaffected', r.status === 200);

console.log(fails ? `FAILURES: ${fails}` : 'all API checks passed');
hook.closeAllConnections?.(); hook.close(); api.closeAllConnections?.(); api.close();
process.exit(fails ? 1 : 0);
