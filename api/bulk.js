// Vercel serverless function: POST /api/bulk  (the facility pilot form)
//
// Forwards the signup as JSON to BULK_WEBHOOK_URL (Vercel > Project > Settings >
// Environment Variables): the Google Sheet's web app URL (tools/google-sheet-webhook.gs).
// Any webhook that takes JSON would do. With no URL set it answers 503 with code not_connected and saves
// nothing, so the page can say so honestly. The route and variable keep the word
// "bulk" from before the offer became a pilot; only the visitor-facing copy changed.
import { BadBody, forward, rateLimited, readBody, replier, validEmail } from './_lib.js';

// Keep in step with bulk.form in content.json (lab/api-test.mjs checks they match)
export const TYPES = ['Bowling center', 'Skating rink', 'School or athletic department', 'Sports team or club', 'Other'];
export const PAIRS = ['Under 50', '50 to 200', '200 to 500', '500+'];
const DONE = 'Thanks. We’ll reach out to talk about your inventory and what a pilot could look like.';

export default async function handler(req, res) {
  const reply = replier(req, res, 'SoleFresh');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(405, { ok: false, code: 'method', error: 'Use POST.' }, 'Use the form on the site.'); }
  const wait = rateLimited(req, 'pilot');
  if (wait) { res.setHeader('Retry-After', String(wait)); return reply(429, { ok: false, code: 'rate_limited', error: 'Too many tries.' }, 'Too many tries in a row, so this wasn’t sent. Go back, wait a minute and try again.'); }
  let b;
  try { b = await readBody(req); } catch (err) {
    if (err instanceof BadBody) return reply(err.status, { ok: false, code: 'invalid', error: 'That couldn’t be read.' }, 'That couldn’t be read. Go back and try again.');
    throw err;
  }
  if (b.hp_check) return reply(200, { ok: true }, 'Thanks.'); // honeypot (named so that no browser autofills it)
  const clean = (v, n = 200) => String(v ?? '').trim().slice(0, n);
  const data = { organization: clean(b.organization), type: clean(b.type), pairs: clean(b.pairs), name: clean(b.name), email: clean(b.email, 254).toLowerCase(), phone: clean(b.phone, 40), message: clean(b.message, 2000) };
  const errors = {};
  const limit = (k, n) => { if (String(b[k] ?? '').trim().length > n) errors[k] = `Keep this under ${n} characters.`; }; // a long paste gets a message, never a silent cut
  if (!data.organization) errors.organization = 'Enter your organization.';
  if (!TYPES.includes(data.type)) errors.type = 'Choose an organization type.';
  if (data.pairs && !PAIRS.includes(data.pairs)) errors.pairs = 'Choose a range.'; // optional here and on the page
  if (!data.name) errors.name = 'Enter your name.';
  if (String(b.email ?? '').trim().length > 254 || !validEmail(data.email)) errors.email = 'Enter a valid email address.';
  limit('organization', 200); limit('name', 200); limit('phone', 40); limit('message', 2000);
  if (Object.keys(errors).length) return reply(400, { ok: false, code: 'invalid', errors }, 'Some fields need attention. Go back and try again.');
  const sent = await forward(process.env.BULK_WEBHOOK_URL, { ...data, source: 'solefresh-pilot', at: new Date().toISOString() }, 'pilot');
  if (sent === 'ok') return reply(200, { ok: true }, DONE);
  if (sent === 'not_connected') return reply(503, { ok: false, code: 'not_connected', error: 'Form not connected.' }, 'The pilot form isn’t connected yet, so this wasn’t sent.');
  return reply(sent === 'timeout' ? 504 : 502, { ok: false, code: 'temporary', error: 'Could not send right now.' }, 'Something went wrong on our side, so this wasn’t sent. Go back: what you typed should still be there. Please try again.');
}
