// Finds the longest gaps between animation frames on the renderer main thread and lists
// every event (any thread) of 4ms or more that overlaps each gap.
import fs from 'node:fs';
const f = process.argv[2] || 'lab/trace-hitch.json';
const all = JSON.parse(fs.readFileSync(f, 'utf8')).traceEvents || [];
const names = {}; for (const e of all) if (e.ph === 'M' && e.name === 'thread_name') names[`${e.pid}:${e.tid}`] = e.args.name;
const ev = all.filter((e) => e.ph === 'X' && e.dur);
const raf = ev.filter((e) => e.name === 'FireAnimationFrame').sort((a, b) => a.ts - b.ts);
const gaps = [];
for (let i = 1; i < raf.length; i++) gaps.push({ gap: (raf[i].ts - (raf[i - 1].ts + raf[i - 1].dur)) / 1000, from: raf[i - 1].ts + raf[i - 1].dur, to: raf[i].ts });
gaps.sort((a, b) => b.gap - a.gap);
for (const g of gaps.slice(0, 2)) {
  console.log(`gap ${g.gap.toFixed(1)}ms between animation frames`);
  const main = ev.filter((e) => e.ts < g.to && e.ts + e.dur > g.from && (names[`${e.pid}:${e.tid}`] || '').includes('CrRendererMain') && e.dur >= 1500).sort((a, b) => b.dur - a.dur).slice(0, 12);
  for (const e of main) { const d = (e.args || {}).data || {}; console.log(`   main ${(e.dur / 1000).toFixed(1).padStart(6)}ms  ${e.name}${d.functionName ? ' ' + d.functionName + ':' + d.lineNumber + ':' + d.columnNumber : ''}${d.url ? ' ' + String(d.url).split('/').pop() : ''}`); }
  const inside = ev.filter((e) => e.dur >= 4000 && e.ts < g.to && e.ts + e.dur > g.from && e.name !== 'FireAnimationFrame').sort((a, b) => b.dur - a.dur).slice(0, 14);
  const rt = ev.filter((e) => e.name === 'RasterTask' && e.ts < g.to && e.ts + e.dur > g.from); if (rt.length) console.log('   raster tasks in gap:', rt.length, 'layers', [...new Set(rt.map((e) => e.args?.tileData?.layerId))].join(','), 'tile', JSON.stringify(rt[0].args?.tileData?.tileResolution), rt.map((e) => (e.dur / 1000).toFixed(1)).slice(0, 8).join(' '));
  for (const e of inside) { const a = e.args || {}, d = a.data || {}; console.log(`   ${(e.dur / 1000).toFixed(1).padStart(6)}ms  ${e.name}  [${names[`${e.pid}:${e.tid}`] || e.tid}]${d.functionName ? ' ' + d.functionName : ''}${a.name ? ' ' + a.name : ''}`); }
}
