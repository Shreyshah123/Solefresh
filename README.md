# SoleFresh landing page

Ten stages around one real 3D product (the Stride v3.2 insert): who it is for, what it does, how it works, inside (the product stage), sizes and colours, the facility pilot, the comparison, story, FAQ, close. Every stage is a rest point, from the first to the footer: with a mouse or trackpad at any window size, and on touch tablets, one gesture moves one stage. Only phones keep the browser's own scrolling. On wide screens the product stays pinned for the whole page and moves only during the transition between two stages; inside a stage everything is click, hover or tap. Under 900px wide, and in windows under 561px tall, the sections stack and the product is a band pinned under the nav through Sizes and colours.

## Run locally

`npm run site` stops if an editorial marker (`[NEEDS DATA]`, `[YOUR ...]`, `TODO`) would reach the page: fix the copy and run it again.

```
npm install            # from the repository root (three, lenis, playwright-core)
cd site
npm run site           # renders index.html from content.json, bundles src/ into dist/
node <scroll-craft>/scripts/serve.mjs --root . --port 4520     # or any static server
```

The API routes (`api/`) need Vercel (`vercel dev` locally).

## Editing copy and options

All copy lives in `content.json`; layout in `tools/render.mjs` (HTML) and `styles.css`. After editing either, `npm run site`.

- **Stage 3 steps:** `how.steps` (title, caption). The four animations are tied to step order (1 finish wearing, 2 place, 3 work, 4 remove) and live in `src/stage3.js` (see below).
- **Stage 2 hotspots:** `what.hotspots`. Each names a real part (`part`, a node name) and where on it the leader line ends (`at`, a fraction of the part's half-size from its centre, per axis).
- **Inside (the product stage):** `inside.*`. `components` are the four chips, in order (Moisture, Odor, Scent, Pull cord): `part` is the node name, then `title`, `body`, `foot` for its card. `rest`, `loaded` and `refilled` are the cards before loading, after "Load all three" and after "Refill". `inside.optional` names the one fill that can be left out (`"odor"`, `"scent"` or `null`): that chip gets the word "optional" and its card an in/out switch. It is `null` until the owner decides, so nothing on the page says optional.
- **The comparison:** `why.*`. `alternatives` are the options a visitor can pick; each has a value per row in `rows` (a row an option has no value for shows `unmeasured`, for every option alike), the `parts` of the product to light, and its `takeaway`. It compares how each is handled, never how well it works.
- **Customize colours:** `customize.colors`, one `hex` each. A colour changes only the `shell_top` and `shell_bottom` materials.
- **Customize sizes:** `customize.sizes` (S, M, L). The dimensions shown come from `assets/product/parts.json` through `src/model-data.json`, rounded to whole mm. Those figures are the overall size including the cord loop, so `customize.sizeOutside` says so; the shell of size M alone is 110 x 47 x 22 mm.
- **Defaults:** `customize.defaults` (`color`, `size`).
- **Contact and privacy:** `brand.contactEmail` (empty: no address is shown anywhere, and the form messages and the privacy page use their `noEmail` wording; a real address becomes a link) and the privacy page's copy in `privacy.sections`, which names Google Sheets as where leads go. `npm run site` afterwards (the address is also in the form messages, which are in the bundle).

## Stage 3: How it works

`src/stage3.js` holds the choreography; `src/world.js` plays it. Every step is a pure function of its own time (and the state it started from), the working loop of its own clock, and the scroll-out of the scroll, so any moment can be scrubbed and checked.

- **1 Finish wearing:** the pair is stepped out of (toe up, heel lands, toe slaps; back shoe first), a few soft warm motes rise, shoe A's footbed is left warm. The product holds still.
- **2 Place inside:** it gathers, springs up and back and tips its toe end down over the opening, holds a beat, and dives in toe first with the cord streaming behind the heel. A thin cobalt line runs round the collar's lip from where it crosses and a few sparks flick up. The toe lands on the footbed and skids forward as the heel end comes down, it touches down with a soft ring on the footbed, the cord flops flat behind it, and a few stars spring out of the opening. Nothing about the shoe changes yet.
- **3 Let it work:** a soft glow, warm motes drawn in and turning cobalt, two slow ripples, the footbed cooling part-way, faint sparkles rising out of the collar. No end moment: the loop (glow on two sines that never line up, motes at irregular moments, the footbed cooling ever more slowly) runs at full frame rate while the visitor is about. After 30 s with no input at all it calms over 8 s to a still of the product glowing in the shoe and the page stops rendering; any pointer, key, wheel or touch input brings it back within 0.8 s (`LOOP_IDLE_S`, `LOOP_CALM_S`, `LOOP_WAKE_S` in `src/world.js`). Its bar never fills: a quiet sheen drifts along it on two periods that never line up.
- **4 Remove and reuse:** a pull, not the insertion backwards, and hands-free: the cord stands up off the footbed and goes taut, two small tugs lift the heel end, then the heel leads it up and out, fastest at the start, trailing fresh air. Clear of the rim it swings level like something let go of and the cord drops to hang. It settles on air where Step 2 begins; if the shoe was freshened (Step 3 ran, or a skip straight to Step 4 stood in for it), two twinkles on the closed shoe.
- **Rules that keep it out of the walls** (checked by `lab/wall-test.mjs`, for all three sizes): the insert threads the collar along one corridor (`thread()` in `src/stage3.js`), tilted, its long axis through the opening's widest part. On the footbed it tilts up about its toe, riding just off the surface (heights measured on the loaded model, `ProductSlot.halfAt`); past that it slides along its own axis and never turns while the rim is around it. Going in, coming out and the scroll-out all use that corridor, because there is only one way through; they differ in timing and character. No squash near the rim. Size L is 55 mm wide, so the prop's collar opening is a little wider than it was for the old oval.
- **Honesty:** shoe B never changes state (no before-and-after); nothing changes on landing; nothing counts, fills, finishes or flashes.
- **Skipping:** a step that needs the product somewhere else starts with a 250 ms swap (it shrinks out and regrows in place); otherwise it blends from wherever the product is. An interrupted step's effects fade out over 150 ms.
- **Scroll-out:** when a scroll leaves the stage, the scene freezes and the product leaves as a function of the scroll: an unfinished insertion rewinds, a removal under way finishes, a product inside leaves heel first along the corridor (with a short ghost trail); the pair then leaves with the page (back and up going down, down going up). Leaving from rest uses time-linear progress (see Snapping). Scrolling back restores the scene and the step carries on.
- **Nav jumps:** visible shoes fade out where they are, move while unseen and fade in at the end, once the product is in place; a jump during a scroll-out carries the exit on.
- **Draw order** (`DRAW` in `src/shoe.js`): shoe insides, product, effects inside a shoe, shoes' outer uppers, effects in front. Only the outer upper goes see-through, so it veils what is inside evenly.
- **Phones:** heights above the hover point keep a quarter of their rise (`NARROW_UP`) so jumps and sparkles stay inside the short band; 30% fewer particles, each with a minimum on-screen size.

## Stage 2 and fitting the product

The three cards are plain HTML, always open, and do not depend on WebGL. On wide screens the stage is three bands: heading, product, cards. The shell goes see-through (`ghost`) so the leader lines land on the real parts inside it (carbon sachet, silica sachet, scent beads); the lines drop from each part to its card. On phones the same three items are a plain list below the band, with no dots or lines.

Every stage with text beside the product has a fit: `fitStages()` in `src/main.js` measures the space the text leaves at this window size and in this model size, and `World.fitStage()` shrinks the product only if it must and shifts it into that space. `FIT_SPAN` in `src/world.js` sets when a fit eases in or out during a travel, always while the product is clear of the shoes.

## Paint warm-up

`index.html` carries a tiny, nearly invisible block with a translucent shadowed card, native form controls and a copy of the Customize swatch rings and size pills behind the hero (removed 2.5 s after load). Chrome's GPU rasterizer compiles its paint pipelines for those the first time they are painted (30 to 100 ms); painting them at load keeps that out of the transitions.

## Snapping and transitions

- **Who snaps:** `SNAPQ` in `src/main.js`: any fine pointer (mouse, trackpad) at any window size or shape, and touch tablets (768px wide or more, not a phone on its side). Phones keep native scrolling: a content-tall section would be hijacked by a step per swipe. Layout (`NARROW`, stacked or wide) and snapping are separate questions: a narrow desktop window is stacked and snaps.
- **Rest points** (`snap.measure`): every stage's top, and the end of the page (so the footer is always reachable). A stage taller than the view it has (a short window, the stacked layout) gets inner rest points less than a view apart, so everything in it can be reached. Two rest points closer than 40px are one.
- **One owner.** This engine is the only thing that snaps: there is no CSS scroll-snap on the page, and Lenis only plays the tween (`smoothWheel` off; its frame loop runs only while a settle or a drag is under way).
- **Settle time:** a whole stage takes `SNAP_MS` (600, `?snap=` overrides); a shorter hop takes less (`SNAP_MS * sqrt(distance / view)`, at least 240ms). Hops beside Stage 3 keep the full curve, because its way out of the shoe is paced on it (`SNAP_EASE_INV`).
- **Gestures:** `GESTURE_GAP_MS` (100, `?gap=`) is the gesture-end debounce. Its clock is each event's own time stamp, not the time the handler ran: on a stalled main thread a flick's events arrive late and bunched, and the handler's clock read that as two gestures. A slow small notch (a high-resolution wheel) that never reaches 30px still steps once the gesture ends. A finger swipe counts from the rest point the finger went down on.
- **Queued, never dropped:** a same-direction step during a settle is remembered (at most one) and plays when the settle ends; an opposite step reverses to where the settle came from.
- **Forms do not switch snapping off.** Keys typed into a field are the field's, a wheel over a long message scrolls the message, and Tab (or a form's error) moves focus and the page then rests where that control can be seen (`snap.reveal`).
- **Keys:** PageUp/Down, Space, the arrows, Home and End all step. Arrows on a tab list or the turn buttons belong to that control. From more than two stages away, Home and End jump, as the nav links do.
- **Resizing and rotating** stay with the stage the visitor was on, and the place within it.
- Nav links land exactly on their anchor, put it in the URL and add a history entry. Back and Forward return to the exact position, a link with a hash lands on its anchor and a reload stays where it was.
- `TRAVEL` in `src/main.js` is the scroll distance of each transition (0.5 viewport; 3>4 is 0.75). In the stacked layout a travel ends 40px before its stage's rest, so a few pixels of drift at rest (a focus scroll) is not a travel.
- Leaving Stage 3, the travel runs on time-linear progress: the same scroll position mapped through the inverse of `SNAP_EASE` inside the same travel window. `SNAP_EASE_INV` must stay the inverse of `SNAP_EASE`.
- Resting states per stage and per-transition shaping are `STATES` and `SHAPES` in `src/world.js`.
- Entrance fades exist only once `src/main.js` has run to its end (`.sf-ready`): without the script, or if it fails, every stage is simply visible. The first stage never fades.

## Rendering tiers (weaker computers)

`src/tier.js`. The 3D starts on a tier guessed from what the browser says (cores, memory, data saver), refined once the renderer exists from the name of the graphics chip (WebGL drawn in software goes to stills; a chip built into the processor starts lower). Then the frames decide: the render loop samples frame times while something animates, and sixty slow ones (median over 22ms, or a fifth over 33ms) step down a tier. It never steps back up during a visit (sessionStorage remembers).

| tier | pixel budget | density cap | anti-aliasing | rack |
|---|---|---|---|---|
| high | 4.2 MP | 1.5x | below 1.5x density | 8 |
| mid | 2.6 MP | 1.25x | below 1.5x density | 8 |
| low | 1.5 MP | 1x | off | 4 |
| poster | no WebGL | | | |

`?tier=high|mid|low|poster` forces one. On the poster tier (and with no WebGL at all) a still stands in for the product and follows every control: `showPoster()` in `src/main.js` picks the file and `lab/posters.mjs` renders all of them. Keep the two in step.

The environment light is baked once (`node tools/bake-env.mjs` writes `assets/env/room.bin`, gzipped half floats) instead of being pre-filtered on every load, which blocked the page for about 0.8s on Windows. Run it again only if the light changes.

## The stacked layout (under 900px wide, and windows under 561px tall)

Each section is as tall as its content. On phones the browser scrolls the page; tablets and narrow desktop windows snap (see above), with inner rest points where a section is taller than the view.

- **The band:** `.world` is `position: sticky` inside `.pin`, which wraps the stages that use the product, so it scrolls away with the end of Customize and the form, the comparison, the Story, the FAQ and the close have the whole screen. Each section gives it its own height (`--band-*` in `styles.css`), bounded for short and tall screens and held back by the width where a wide scene would only add empty space. The canvas keeps the tallest of them and `--band-now` shows as much as the section has, eased through each travel, so nothing resizes during a scroll.
- **Framing:** `frameStage()` in `src/world.js` measures what each section really puts on screen (the cord, the shoes, every Stage 3 step as it plays) and zooms and pans the whole picture to fit its band. A zoom cannot change anything's size relative to anything else, so the product stays true to the shoes. Inside and Customize also measure a popped part and a full turn: a second, wider frame the view eases to only while that happens, so at rest the product fills its space. `lab/mobile-test.mjs` checks all of it on rendered pixels.
- **Short landscape:** under 561px tall (and at least 600px wide) the product sits beside the sections, in a sticky column, instead of above them (`SIDE` in `src/main.js`). Each section is framed in the whole column.
- **Sections:** the hero puts the pilot button right after the intro and who it's for after that; the part details sit in the page, under the part list; the routine says its action once above a strip of days. The travel from How to Inside spreads over more of its scroll than on wide screens (`PHONE_SHAPES` in `src/world.js`), because a short section leaves it less room.

Keep `NARROW` and `SIDE` in `src/main.js` and the media queries in `styles.css` in step.

## The product model

`src/product-slot.js` is the one reference to the model and owns every pose, state and animation. The model is six named parts, one mesh and one PBR material each (`shell_bottom`, `carbon_sachet`, `silica_sachet`, `scent_beads`, `shell_top`, `pull_cord`), in metres, Y up, with the heel end toward +X.

- **Files:** the source GLBs are in `assets/product/source/` (not deployed, and not in the repo, which is public: keep your own copy). `npm run models` compresses them into `assets/product/` with gltf-transform (meshopt) and writes `src/model-data.json`: every part's bounds and exploded position per size, read from the exploded GLBs. Those positions are baked into the exploded files' vertices, not their node transforms, so the page never needs to download an exploded file.
- **Loading:** only size M loads up front. S and L load when selected and are real swaps, not a scale, because their proportions differ. One scale (`k`) serves all three, so they read at their true relative sizes. Materials stay the same instances across sizes, so colour and selection carry over; the rack is refilled from the new size.
- **Scale in the shoe:** the 1.9-long prop stands for a 300 mm adult shoe, which gives `SEAT.scale`.
- **Upright poses:** Stage 1 and Inside stand the product up: `POSES` at the top of `src/product-slot.js` holds `hero_upright` and `inside_upright`, with every angle, size and spacing as an editable value, and `TRAVEL_SIZE` (0.85) is the size it travels at. The tilt is as the visitor sees it: the camera looks down 14.5°, so the world turns by the tilt plus that. Stage 1 does not react to the pointer or a venue change.
- **Inside stack:** the product opens into a stack, not a spread: each layer rises to one even `gap` (3.5 mm) above the layer behind it, in the real order, each stopping in turn so nothing passes through anything.
- **Load the housing:** Inside arrives with the three fills out beside the housing (`ProductSlot.setOut`, each to its place in `POSES.inside_upright.fan`). "Load all three" puts them back one after another, then `World.setLoaded` closes the stack and turns the shell see-through. "Refill" opens it, slides one fill out, blinks it (`ProductSlot.blink`) and slides it back. A chip pops one part out on its spring (`pop` in `POSES`), the path a function of one value so going back retraces it. Picking uses the real meshes, after a box test (`slot.pick`); a see-through shell lets a press through to the fill behind it.
- **The comparison** lights the parts that answer the picked option (`ProductSlot.setFocus`); a lit part inside the closed housing turns the shell see-through.
- **Shell colour:** the four hex values in `content.json` are sRGB; `Color.set` converts them to linear for the material, with roughness 0.55 and no metalness. The scene's lights are set for the bone page and the shoes and would double a colour's value, so the shell's shader takes a share of them plus an even light (`SHELL_LIT`, `SHELL_EVEN`) and undoes the tone mapper's dark toe. Its top face then shows on screen within a few levels of the hex; the side wall is darker, which is what gives it form.
- **The cord** hinges at the heel window (`setCord`): it lies flat on the floor and in the shoe, hangs when the product hovers, trails on the way in and goes taut on the way out. `cordS` and `cordL` in `STATES` are its resting pose per stage; Stage 3 adds to them.
- **Light:** a soft key, a rim from behind so the graphite edge separates from the bone page, the room environment for soft reflections, and contact shadows on the floor and the footbed. The materials are the file's.

## Forms

| Form | Function | Vercel env var | Payload |
|---|---|---|---|
| Facility pilot (stage 6) | `api/bulk.js` | `BULK_WEBHOOK_URL` | organization, type, pairs (optional), name, email, phone, message, source, at |
| Waitlist (stage 10, the close) | `api/waitlist.js` | `WAITLIST_WEBHOOK_URL` | email, source, at |

Each function forwards JSON to its webhook: a Google Sheet, through the small script in `tools/google-sheet-webhook.gs`. The route and variable keep the word "bulk" from before the offer became a pilot.

**Setting up the Google Sheet, once:**

1. In a personal Google account (a school account may block step 3), open sheets.new and name the sheet `SoleFresh leads`.
2. Extensions > Apps Script. Delete what is there, paste all of `tools/google-sheet-webhook.gs`, and save.
3. Deploy > New deployment > the gear > Web app. Execute as **Me**, Who has access **Anyone**. Deploy, and allow access when Google asks.
4. Copy the Web app URL. In Vercel > Project > Settings > Environment Variables, set both `BULK_WEBHOOK_URL` and `WAITLIST_WEBHOOK_URL` to it, for Production (and Preview if used), then redeploy.
5. `npm run test:forms -- https://your-site.vercel.app --email you@yourdomain.com` sends a sample to each form. `Pilot` and `Waitlist` tabs appear in the sheet with one row each.

Anyone with the URL can add rows, so it belongs only in Vercel, never in the site or the repo. After editing the script, Deploy > Manage deployments > edit > New version keeps the same URL. An Apps Script answers 200 even when it fails, so `forward()` only counts a lead as saved when the script says `{"ok":true}`; anything else tells the visitor to try again and keeps what they typed.

- **Set them:** Vercel > the project > Settings > Environment Variables, for Production (and Preview if you test there), then redeploy: a variable only reaches new deployments.
- **Test them:** `npm run test:forms -- https://your-site.vercel.app --email you@yourdomain.com` submits one marked sample to each form and says what came back.
- **Failures:** with no usable URL set, a function answers 503 `not_connected` and saves nothing. A webhook error is 502 and a webhook that takes over 10 seconds is 504, both `temporary`. The page says which it was and keeps what the visitor typed; it also gives up after 10 seconds itself.
- **Rate limit:** 10 submissions a minute per IP per form (429). It is held in each function instance's memory, so it slows a person or simple script down but is not a wall; a shared store would be needed for that.

## Deploy (Vercel)

Deploy `site/` as the project root: framework preset Other, no build command (commit `dist/`, `index.html` and `privacy.html` after `npm run site`; the script is deliberately not called `build`, because Vercel would run that by itself and `tools/` is not uploaded), output directory `.`.

## Verification scripts (`lab/`)

- `shoot-all.mjs` screenshots every stage at rest, every transition mid-way and one interaction per stage (`--w 390 --h 844`, `--reduced`, `--no-webgl`).
- `frames.mjs` one screenshot of every stage at rest (`--w 390 --h 844`, `--only`, `--color`, `--size`).
- `snap-test.mjs` the snapping contract: every stage to the footer is a rest point and one gesture moves one rest point, for a mouse tick, a burst of ticks, a trackpad flick, PageDown/PageUp, Space, the arrows and (`--tablet`) a finger swipe; End, Home, a queued tick, a reversed tick, a nav link. `--w --h` for any window; `--mobile` confirms phones do not snap. `free-scroll-test.mjs` (name kept) the late stages: each fits its view with every control on screen, pilot to footer and back always at rest, a form error does not switch snapping off, a failed submission shows above the button, a long message scrolls itself, an FAQ answer, a 160ms stall during a flick, Tab into the form.
- `anchor-test.mjs` nav links land on their anchors and stay, hash and history, deep links, reload, snapping standing aside for forms and the FAQ; `--mobile` adds native scrolling and the band.
- `layout-test.mjs` many window sizes in sizes M and L: Stage 2's cards, lines and product, the product clear of each stage's text, the header, no sideways overflow, phone details, WebGL off.
- `model-test.mjs` what is downloaded and when, the parts and their PBR values, the opened layers, colour touching only the shell, size swaps, carry-forward to the rack, selection.
- `form-test.mjs` the forms in a browser with the API mocked per case (`--mobile`). `api-test.mjs` the handlers against a local mock webhook, including the 10 second timeout, the rate limit and a Google Sheet that answers 200 without saving. `sheet-script-test.mjs` the Google Sheet script against a stand-in for Google's services.
- `mobile-test.mjs` the phone layout at 320x568, 375x667, 390x844, 430x932, 768x1024 and 844x390, on rendered pixels: each section's picture at rest, through every Stage 3 step, with each part popped out, turned by a drag and along each travel stays in its space; headings clear of the sticky parts after a jump through the menu; no sideways overflow; tap sizes, 16px fields, the swatches, the routine (`--sizes`, `--model`). `mobile-shots.mjs` screenshots every section through the real menu, for before and after comparisons.
- `pose-test.mjs` the upright poses, on real pixels with one part drawn at a time and with real clicks: Stage 1's size, place and stillness; Inside's stack and gaps; every way a part pops out and goes back, nothing clipped, no part through another; the size through each transition; rest, popped and mid-transition frames in `lab/pose/` (`--mobile`, `--size`, `--w --h`).
- `verify-still.mjs` product still at rest, moving in transitions, reverse scroll matches forward, nav links land in the resting state.
- `steps-test.mjs` Stage 3 consistency across skips, interrupts, replays and scrolling away mid-step; toe first in, heel first out; the working loop rests when idle and wakes on input; the layered open-up reverses (`--reduced`).
- `wall-test.mjs` scrubs every step, every scroll-out (both directions, from rest and from the middle of steps), the nav jumps, the Bulk travels and the arrivals, and measures how far the visible shoes reach into the shell, on its real tapered outline, and how close its top comes to the nav (`--mobile`, `--size S|M|L`).
- `s3-frames.mjs` contact sheets of every step, the loop and both scroll-outs in `lab/s3/` (`--w 390 --h 844`); `bulk-frames.mjs` the same for the Customize to Bulk and Bulk to Why travels. `perf-steps.mjs` frame times while each step plays (`--mobile`).
- `seam.mjs` scans frames across every boundary for thin full-width lines, static or `--motion`, with `--browser edge`, `--dpr`, `--zoom`; `seam-matrix.sh` runs the whole matrix.
- `perf-all.mjs` down the page and back with an interaction per stage (a gesture per rest point, then the wheel past the pilot stage, on wide screens; a native scroll on phones); frame times per stage and per transition. `perf-hitch.mjs` repeats one transition. `perf-bisect.mjs` runs one transition in a fresh browser with each candidate element hidden, to find whose first paint costs a dropped frame (the answer usually goes in the `.warm` block in `tools/render.mjs`).
- `posters.mjs` renders the stills that stand in for the 3D, one for every state a control can put a stage in (38 files).
