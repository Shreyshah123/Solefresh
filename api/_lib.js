// Shared by the form handlers. (Vercel does not route files that start with an underscore.)

export const FORWARD_TIMEOUT_MS = 10000;      // how long a webhook gets before the visitor is told to try again
const WINDOW_MS = 60000, MAX_PER_WINDOW = 10; // per IP, per form
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const validEmail = (e) => e.length <= 254 && EMAIL.test(e);

// Basic rate limit: one fixed window per IP and form, held in this instance's memory. It slows a person or a simple
// script down; it is not a wall (a fresh serverless instance starts empty, and instances do not share counts).
const hits = new Map();
let nextSweep = 0;
export function clientIp(req) {
  const h = req.headers, fwd = String(h['x-vercel-forwarded-for'] || h['x-forwarded-for'] || '').split(',')[0].trim();
  return fwd || String(h['x-real-ip'] || '') || req.socket?.remoteAddress || 'unknown';
}
/** Counts this request. Returns the seconds to wait if the IP is over its limit, or 0. */
export function rateLimited(req, form, now = Date.now()) {
  if (now >= nextSweep) { nextSweep = now + WINDOW_MS; for (const [k, v] of hits) if (now >= v.until) hits.delete(k); } // forget finished windows, so an IP is only held briefly
  const key = `${form}:${clientIp(req)}`, e = hits.get(key);
  if (!e || now >= e.until) { hits.set(key, { n: 1, until: now + WINDOW_MS }); return 0; }
  e.n += 1;
  return e.n > MAX_PER_WINDOW ? Math.ceil((e.until - now) / 1000) : 0;
}

export class BadBody extends Error { constructor(status) { super('bad body'); this.status = status; } }
/** The request body as an object. Throws BadBody: 413 if it is too long, 400 if it is not valid JSON. */
export async function readBody(req, limit = 20000) {
  let parsed;
  try { parsed = req.body; } catch { throw new BadBody(400); }   // Vercel's body getter throws on invalid JSON
  if (parsed && typeof parsed === 'object' && !Buffer.isBuffer(parsed)) { if (JSON.stringify(parsed).length > limit) throw new BadBody(413); return parsed; }
  const raw = typeof parsed === 'string' ? parsed : Buffer.isBuffer(parsed) ? parsed.toString('utf8') : await new Promise((resolve, reject) => {
    let d = '', over = false;
    req.on('data', (c) => { if (over) return; d += c; if (d.length > limit) { over = true; d = ''; reject(new BadBody(413)); } }); // keep draining, so the answer gets through
    req.on('end', () => resolve(d)); req.on('error', reject);
  });
  if (raw.length > limit) throw new BadBody(413);
  if (String(req.headers['content-type'] || '').includes('application/json')) {
    let v; try { v = JSON.parse(raw || '{}'); } catch { throw new BadBody(400); }
    return v && typeof v === 'object' ? v : {};
  }
  return Object.fromEntries(new URLSearchParams(raw));
}

const page = (title, msg, back) => `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#F1EFEA;color:#15171C;font:16px/1.6 system-ui,sans-serif;padding:24px"><main style="max-width:32rem"><p style="font-size:1.25rem">${msg}</p>${back}</main></body>`;
/** Answers in JSON for the page's own submit, or as a small page for a browser posting the form without JavaScript. */
export function replier(req, res, title) {
  const wantsJson = String(req.headers.accept || '').includes('application/json');
  return (status, body, msg) => {
    res.statusCode = status; res.setHeader('Cache-Control', 'no-store');
    // a failed send keeps what was typed only on the way back through the browser, so the page must not offer a fresh load instead
    if (!wantsJson) { res.setHeader('Content-Type', 'text/html; charset=utf-8'); return res.end(page(title, msg, status < 400 ? '<p><a href="/" style="color:#2346FF">Back to SoleFresh</a></p>' : '<p>Use your browser’s Back button to return to the form.</p>')); }
    res.setHeader('Content-Type', 'application/json'); return res.end(JSON.stringify(body));
  };
}

/**
 * Forwards JSON to the webhook. Resolves to 'ok', 'not_connected' (no usable URL set: nothing was sent and trying again
 * will not help), 'timeout' or 'failed' (a temporary failure: trying again might).
 */
export async function forward(url, payload, label) {
  let target; try { target = new URL(String(url || '')); } catch { return 'not_connected'; }
  if (!/^https?:$/.test(target.protocol)) return 'not_connected';
  try {
    const r = await fetch(target, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload), signal: AbortSignal.timeout(FORWARD_TIMEOUT_MS) });
    if (!r.ok) throw new Error(`webhook answered ${r.status}`);
    // a Google Apps Script web app answers 200 even when it failed or wants a sign-in, so only its own word counts
    if (/\/macros\/.*\/exec$/.test(target.pathname) && (await r.json().catch(() => null))?.ok !== true) throw new Error('the sheet did not confirm the row');
    return 'ok';
  } catch (err) {
    console.error(`${label} forward failed:`, err.name, err.message);   // never what the visitor typed
    return err.name === 'TimeoutError' || err.name === 'AbortError' ? 'timeout' : 'failed';
  }
}
