#!/bin/bash
# Seam matrix: Chrome and Edge, Windows scaling 100/125/150%, zoom 90/100/110%, static and during settles.
cd "$(dirname "$0")/.."
rm -f lab/seam-*.log
run() { node lab/seam.mjs "$@" 2>&1 | grep -vE "X4122|shader|saved" > "lab/seam-$(echo "$*" | tr -d ' -' ).log"; }
run --browser chrome --dpr 1    --zoom 1   & run --browser chrome --dpr 1.25 --zoom 1   & run --browser chrome --dpr 1.5 --zoom 1 &
run --browser chrome --dpr 1    --zoom 0.9 & run --browser chrome --dpr 1    --zoom 1.1 &
run --browser edge   --dpr 1    --zoom 1   & run --browser edge   --dpr 1.5  --zoom 1 &
wait
run --browser chrome --dpr 1    --zoom 1   --motion & run --browser chrome --dpr 1.25 --zoom 1   --motion & run --browser chrome --dpr 1.5 --zoom 1 --motion &
run --browser chrome --dpr 1    --zoom 0.9 --motion & run --browser chrome --dpr 1    --zoom 1.1 --motion &
run --browser edge   --dpr 1    --zoom 1   --motion & run --browser edge   --dpr 1.5  --zoom 1 --motion &
wait
cat lab/seam-*.log > lab/seam-matrix.log


echo MATRIX-DONE
