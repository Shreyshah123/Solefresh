// Vercel serverless function: POST /api/waitlist  (the individual waitlist)
//
// Forwards { email } to WAITLIST_WEBHOOK_URL (Vercel environment variable): the Google
// Sheet's web app URL (tools/google-sheet-webhook.gs). Any webhook that takes JSON would
// do. With no URL set it answers 503 with
// code not_connected and saves nothing.
import { BadBody, forward, rateLimited, readBody, replier, validEmail } from './_lib.js';

export default async function handler(req, res) {
  const reply = replier(req, res, 'SoleFresh waitlist');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(405, { ok: false, code: 'method', error: 'Use POST.' }, 'Use the form on the site.'); }
  const wait = rateLimited(req, 'waitlist');
  if (wait) { res.setHeader('Retry-After', String(wait)); return reply(429, { ok: false, code: 'rate_limited', error: 'Too many tries.' }, 'Too many tries in a row, so this wasn’t saved. Go back, wait a minute and try again.'); }
  let b;
  try { b = await readBody(req, 10000); } catch (err) {
    if (err instanceof BadBody) return reply(err.status, { ok: false, code: 'invalid', error: 'That couldn’t be read.' }, 'That couldn’t be read. Go back and try again.');
    throw err;
  }
  if (b.hp_check) return reply(200, { ok: true }, 'Thanks.'); // honeypot (named so that no browser autofills it)
  const email = String(b.email ?? '').trim().toLowerCase();
  if (!validEmail(email)) return reply(400, { ok: false, code: 'invalid', errors: { email: 'Enter a valid email address.' } }, 'That email didn’t look right. Go back and try again.');
  const sent = await forward(process.env.WAITLIST_WEBHOOK_URL, { email, source: 'solefresh-waitlist', at: new Date().toISOString() }, 'waitlist');
  if (sent === 'ok') return reply(200, { ok: true }, 'You’re on the list. We’ll email you when early access opens.');
  if (sent === 'not_connected') return reply(503, { ok: false, code: 'not_connected', error: 'Waitlist not connected.' }, 'The waitlist isn’t connected yet, so this wasn’t saved.');
  return reply(sent === 'timeout' ? 504 : 502, { ok: false, code: 'temporary', error: 'Could not save right now.' }, 'Something went wrong on our side, so this wasn’t saved. Go back and please try again.');
}
