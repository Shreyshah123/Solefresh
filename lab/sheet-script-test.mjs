// tools/google-sheet-webhook.gs against a stand-in for Google's services (nothing leaves this machine): each form goes to its
// own tab with headings, in the right columns; a visitor's text cannot become a formula; bad input says so; the fields it
// expects are the ones the API sends.   node lab/sheet-script-test.mjs
import fs from 'node:fs';
import vm from 'node:vm';

let fails = 0; const check = (l, ok, x = '') => { if (!ok) fails++; console.log(`  ${l.padEnd(66)} ${ok ? 'ok' : 'FAIL'}${x ? '  ' + x : ''}`); };
const tabs = {}, locks = { held: 0, waits: 0 };
const sheet = (name) => ({ name, rows: [], frozen: 0, getLastRow() { return this.rows.length; }, appendRow(r) { this.rows.push(r); }, setFrozenRows(n) { this.frozen = n; } });
const env = {
  JSON, String, RegExp,
  SpreadsheetApp: { getActiveSpreadsheet: () => ({ getSheetByName: (n) => tabs[n] || null, insertSheet: (n) => (tabs[n] = sheet(n)) }) },
  LockService: { getScriptLock: () => ({ waitLock() { locks.waits++; locks.held++; }, releaseLock() { locks.held = 0; } }) },
  ContentService: { MimeType: { JSON: 'json' }, createTextOutput: (t) => ({ text: t, setMimeType(m) { this.mime = m; return this; } }) },
};
vm.createContext(env);
vm.runInContext(fs.readFileSync(new URL('../tools/google-sheet-webhook.gs', import.meta.url), 'utf8'), env);
const post = (o) => JSON.parse(env.doPost({ postData: { contents: typeof o === 'string' ? o : JSON.stringify(o) } }).text);

const at = '2026-11-05T12:00:00.000Z';
const pilot = { organization: 'Lanes Inc', type: 'Bowling center', pairs: '50 to 200', name: 'Ada', email: 'ada@example.com', phone: '+1 555 0100', message: '=IMPORTXML("http://x","//a")', source: 'solefresh-pilot', at };
let r = post(pilot);
check('a pilot lead is saved and confirmed', r.ok === true);
check('in a Pilot tab, under headings, with the heading row frozen', tabs.Pilot?.rows[0].join() === 'at,organization,type,pairs,name,email,phone,message' && tabs.Pilot.frozen === 1);
const row = tabs.Pilot.rows[1];
check('every field in its column', row[0] === at && row[1] === 'Lanes Inc' && row[2] === 'Bowling center' && row[3] === '50 to 200' && row[4] === 'Ada' && row[5] === 'ada@example.com', row.slice(0, 6).join(' | '));
check('a formula in the message stays text', row[7].startsWith("'="), row[7]);
check('so does a phone number starting with +', row[6] === "'+1 555 0100", row[6]);
post({ ...pilot, organization: 'Rink Co', phone: '', message: '' });
check('the next lead is the next row, no second heading', tabs.Pilot.rows.length === 3 && tabs.Pilot.rows[2][1] === 'Rink Co');
r = post({ email: 'w@example.com', source: 'solefresh-waitlist', at });
check('a waitlist lead goes to its own tab', r.ok === true && tabs.Waitlist?.rows[1].join() === `${at},w@example.com`);
check('nothing else is left holding the lock', locks.held === 0 && locks.waits === 3);

r = post({ email: 'x@example.com', source: 'someone-else', at });
check('an unknown source is refused', r.ok === false && !tabs['someone-else']);
r = post('not json');
check('a bad body says it failed, and does not throw', r.ok === false);
check('the page check answers', JSON.parse(env.doGet().text).ok === true);

// the fields it expects are the ones the API sends
const src = fs.readFileSync(new URL('../api/bulk.js', import.meta.url), 'utf8'), wl = fs.readFileSync(new URL('../api/waitlist.js', import.meta.url), 'utf8');
check('the sources match api/bulk.js and api/waitlist.js', src.includes("source: 'solefresh-pilot'") && wl.includes("source: 'solefresh-waitlist'"));
for (const f of ['organization', 'type', 'pairs', 'name', 'email', 'phone', 'message']) if (!new RegExp(`\\b${f}:`).test(src)) check(`api/bulk.js sends ${f}`, false);
console.log(fails ? `FAILURES: ${fails}` : 'all sheet script checks passed');
process.exitCode = fails ? 1 : 0;
