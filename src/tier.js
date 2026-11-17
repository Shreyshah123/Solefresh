// Rendering tiers. A weak graphics chip cannot fill a full-screen, high-density, anti-aliased canvas at frame rate, and
// nothing about a device says so reliably up front (browsers hide the graphics chip's name, and core counts lie). So the
// page starts from a cautious guess (pickTier) and then lets the frame times it actually gets decide (the sampler in
// src/world.js calls back, and src/main.js steps down a tier). It only ever steps down during a visit.
//
//   high    the full picture: up to 1.5x pixel density inside a 4.2 megapixel budget, anti-aliased below 1.5x
//   mid     up to 1.25x inside 2.6 megapixels
//   low     1x inside 1.5 megapixels, no anti-aliasing, a rack of four instead of eight
//   poster  no WebGL at all: the still pictures in assets/posters/, which follow every control (see showPoster in main.js)
//
// `?tier=high|mid|low|poster` on the URL forces one, for testing.
export const TIERS = {
  high: { name: 'high', dprCap: 1.5, maxPx: 4.2e6, aa: true, rack: 8, loopIdle: 10, warm: ['bulk', 'how', 'inside'] },
  mid: { name: 'mid', dprCap: 1.25, maxPx: 2.6e6, aa: true, rack: 8, loopIdle: 8, warm: ['how'] },
  low: { name: 'low', dprCap: 1, maxPx: 1.5e6, aa: false, rack: 4, loopIdle: 4, warm: [] },
};
export const ORDER = ['high', 'mid', 'low', 'poster'];
const KEY = 'sf-tier';

/**
 * The tier to start on, from what the browser says without making a WebGL context (making one just to ask costs about
 * 300ms of the first second, for everyone). The graphics chip is read afterwards, from the page's own context: refineTier.
 */
export function pickTier() {
  const forced = new URLSearchParams(location.search).get('tier');
  if (ORDER.includes(forced)) return forced;
  try { const s = sessionStorage.getItem(KEY); if (ORDER.includes(s)) return s; } catch {}   // what this visit already found out
  if (!window.WebGL2RenderingContext && !window.WebGLRenderingContext) return 'poster';
  const nav = navigator, cores = nav.hardwareConcurrency || 8, mem = nav.deviceMemory || 8;
  if (nav.connection?.saveData || cores <= 2 || mem <= 2) return 'poster';
  if (cores <= 4 || mem <= 4) return 'low';
  return 'high';
}
/**
 * The same question again once the renderer exists, with the name of the graphics chip (where the browser gives it):
 * WebGL drawn by the processor goes straight to stills, and a chip built into the processor starts a tier or two down.
 * It never moves a tier up.
 */
export function refineTier(tier, gl) {
  if (new URLSearchParams(location.search).get('tier')) return tier;                              // forced for a test: left alone
  let info = '';
  try { const d = gl.getExtension('WEBGL_debug_renderer_info'); info = String((d && gl.getParameter(d.UNMASKED_RENDERER_WEBGL)) || gl.getParameter(gl.RENDERER) || ''); } catch {}
  if (/SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(info)) return 'poster';        // a few frames a second at best
  const integrated = /Intel|UHD|Iris|HD Graphics|Mali|Adreno|PowerVR|Radeon\(TM\) Graphics|Vega \d+ Graphics/i.test(info);
  if (!integrated) return tier;
  const px = innerWidth * innerHeight * Math.min(devicePixelRatio || 1, 1.5) ** 2;                  // what the high tier would draw here
  const want = px > 2.2e6 ? 'low' : 'mid';
  return ORDER.indexOf(want) > ORDER.indexOf(tier) ? want : tier;
}
/** The next tier down from `tier`, given the frame times that asked for it (ms). Null: stay. */
export function tierBelow(tier, { median, slowShare }) {
  if (tier === 'low') return median > 40 || slowShare > 0.5 ? 'poster' : null;   // the lightest 3D is still a slideshow: stills are better
  if (median > 45) return 'low';                                                  // far off the pace: skip a step
  return ORDER[ORDER.indexOf(tier) + 1] || null;
}
export function rememberTier(tier) { try { sessionStorage.setItem(KEY, tier); } catch {} }
