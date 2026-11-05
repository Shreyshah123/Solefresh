// Lists the longest events in a Chrome trace, to see what a slow frame was doing.
import fs from 'node:fs';
const f = process.argv[2] || 'lab/trace-all-1440x900.json';
const ev = (JSON.parse(fs.readFileSync(f, 'utf8')).traceEvents || []).filter((e) => e.dur && e.ph === 'X');
ev.sort((a, b) => b.dur - a.dur);
const skip = new Set(['RunTask', 'ThreadControllerImpl::RunTask', 'MessageLoop::RunTask', 'TaskQueueManager::ProcessTaskFromWorkQueue', 'ThreadPool_RunTask', 'SequenceManager PostTask', 'Scheduler::DoWork', 'ProxyMain::BeginMainFrame::commit']);
let n = 0;
for (const e of ev) {
  if (skip.has(e.name)) continue;
  const a = e.args || {}, d = a.data || {};
  const extra = d.url ? ' ' + String(d.url).slice(-50) : d.functionName ? ` ${d.functionName}:${d.lineNumber}` : d.type ? ' ' + d.type : '';
  console.log(`${(e.dur / 1000).toFixed(1).padStart(7)}ms  ${e.name}${extra}  [tid ${e.tid}]`);
  if (++n >= 18) break;
}
