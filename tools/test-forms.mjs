// Submits one clearly marked sample to each form on the deployed site, so you can confirm the leads arrive.
//   node tools/test-forms.mjs https://your-site.vercel.app [--email you@yourdomain.com]
// or: npm run test:forms -- https://your-site.vercel.app
const args = process.argv.slice(2);
const at = (k) => { const i = args.indexOf(k); return i > -1 ? args[i + 1] : null; };
const base = (args.find((a) => /^https?:\/\//.test(a)) || '').replace(/\/+$/, '');
if (!base) { console.error('Usage: node tools/test-forms.mjs https://your-site.vercel.app [--email you@yourdomain.com]'); process.exit(2); }
const email = at('--email') || 'pilot-test@example.com';
const stamp = new Date().toISOString();
const samples = [
  { name: 'Facility pilot', path: '/api/bulk', env: 'BULK_WEBHOOK_URL', body: { organization: `TEST ${stamp}`, type: 'Bowling center', pairs: '50 to 200', name: 'Test Lead', email, phone: '', message: 'Test submission from tools/test-forms.mjs. Safe to delete.' } },
  { name: 'Waitlist', path: '/api/waitlist', env: 'WAITLIST_WEBHOOK_URL', body: { email } },
];
const WHY = {
  not_connected: (env) => `${env} is not set (or not a valid URL) on this deployment. Set it, then redeploy.`,
  temporary: () => 'The webhook failed or took over 10 seconds. Check the service it points to.',
  rate_limited: () => 'Too many tries from this address. Wait a minute and run this again.',
  invalid: () => 'The form rejected the sample.',
};
let bad = 0;
for (const s of samples) {
  let line;
  try {
    const r = await fetch(base + s.path, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(s.body), signal: AbortSignal.timeout(15000) });
    const text = await r.text(); let b = {}; try { b = JSON.parse(text); } catch {}
    if (r.ok && b.ok) line = `OK    ${s.name}: ${r.status}. Now check that it arrived where ${s.env} points.`;
    else { bad++; line = `FAIL  ${s.name}: ${r.status} ${b.code || ''} ${(WHY[b.code] || (() => (text.startsWith('<') ? 'This did not come from the API: check the URL, and any Vercel deployment protection.' : text.slice(0, 200))))(s.env)}`; }
  } catch (err) { bad++; line = `FAIL  ${s.name}: ${err.name}: ${err.message}`; }
  console.log(line);
}
if (!bad) console.log(`\nLook for organization "TEST ${stamp}" and the email ${email}.`);
process.exitCode = bad ? 1 : 0; // not process.exit: it can crash on Windows with a fetch still closing
