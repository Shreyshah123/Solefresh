# SoleFresh landing page

Nine stages around one real 3D product (the Stride v3.2 insert). On wide screens the product stays pinned for the whole page, moves only during the transition between two stages (one short scroll-linked move each) and holds still inside a stage, where everything is click, hover or tap. From Stage 1 through the pilot stage the page comes to rest on a stage; past it (Why, Story, FAQ, Close, footer) the browser scrolls it, and the transitions there follow the scroll position. Under 900px, and on short landscape screens, the browser scrolls the page natively and the product is a band pinned under the nav through Customize.

## Run locally

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
- **Inside parts:** `inside.layers`, in the order of `PARTS` in `src/product-slot.js` (back to front, cord last): `id` is the node name, `name` and `role` the panel copy. `inside.prompt` is the hint shown while nothing is out.
- **Customize colours:** `customize.colors`, one `hex` each. A colour changes only the `shell_top` and `shell_bottom` materials.
- **Customize sizes:** `customize.sizes` (S, M, L). The dimensions shown come from `assets/product/parts.json` through `src/model-data.json`, rounded to whole mm. Those figures are the overall size including the cord loop, so `customize.sizeOutside` says so; the shell of size M alone is 110 x 47 x 22 mm.
- **Defaults:** `customize.defaults` (`color`, `size`).
- **Contact and privacy:** `brand.contactEmail` (`[YOUR EMAIL]` until set; a real address becomes a link) and the privacy page's copy in `privacy.sections`, which names Google Sheets as where leads go. `npm run site` afterwards (the address is also in the form messages, which are in the bundle).

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

- Snap covers Stage 1 through the pilot stage. `snap.end` is its last rest point; below it (`freeScroll()` in `src/main.js`) nothing is intercepted and nothing settles: wheel, trackpad, keys and touch are the browser's, including `End`, and Lenis stands aside through its `virtualScroll` option. A scroll coming back up simply meets the snap again at `snap.end`. Every position is recomputed when the page's height changes, by a `ResizeObserver` on `main`, so FAQ items and form messages need no special handling.
- `SNAP_MS` in `src/main.js` (default 600) is the settle duration; `?snap=450` on the URL overrides it for trying values.
- `GESTURE_GAP_MS` in `src/main.js` (default 100) is the gesture-end debounce: a pause in wheel events longer than this starts a new gesture. `?gap=` overrides it. A new trackpad swipe is also recognised while the previous flick's momentum is still streaming, by its delta rising again after decaying.
- Input is queued, never dropped: a same-direction step during a settle is remembered (at most one) and plays when the settle ends; an opposite step reverses to the stage the settle came from. Keys and touch swipes follow the same rule.
- Snapping stands aside while a form or the FAQ has focus and is on screen (`snapPaused()` in `src/main.js`): the wheel, keys and touch scroll freely and nothing settles the page. It returns once focus leaves or the form has scrolled off.
- Nav links land exactly on their anchor, put it in the URL and add a history entry. Back and Forward return to the exact position, a link with a hash lands on its anchor and a reload stays where it was.
- `TRAVEL` in `src/main.js` is the scroll distance of each transition (0.5 viewport; 3→4 is 0.75).
- Leaving Stage 3, the travel runs on time-linear progress: the same scroll position mapped through the inverse of `SNAP_EASE` inside the same travel window, so the product's way out of the shoe gets about 170 ms of the settle instead of a few frames. `SNAP_EASE_INV` must stay the inverse of `SNAP_EASE`. Arrivals and every other transition use plain progress.
- Resting states per stage and per-transition shaping are `STATES` and `SHAPES` in `src/world.js`.
- No shoe passes through the product. Customize to Bulk: the product settles into its seat, the shoe forms round it, then it becomes a rack; Bulk to Why: the rack folds back as the shoes fade, then the product slides away. The `pres` key (the product at its true place beside the shoes, with the phone layout's pull toward centre off) is set before a shoe shows round the product and let go only after it has gone.

## Phones (under 900px, and screens under 520px tall)

The browser scrolls the page: no snap, no Lenis. The `.world` band is `position: sticky` inside `.pin`, which wraps the stages that use the product (hero, What it does, How it works, Inside, Customize), so it scrolls away with the end of Customize and Bulk, the comparison, the Story, the FAQ and the close have the whole screen. Customize keeps the band because its swatches and sizes preview on the product. Below the band the world stops rendering and rests in Customize's state. Keep `NARROW` in `src/main.js` and the media query in `styles.css` in step.

## The product model

`src/product-slot.js` is the one reference to the model and owns every pose, state and animation. The model is six named parts, one mesh and one PBR material each (`shell_bottom`, `carbon_sachet`, `silica_sachet`, `scent_beads`, `shell_top`, `pull_cord`), in metres, Y up, with the heel end toward +X.

- **Files:** the source GLBs are in `assets/product/source/` (not deployed, and not in the repo, which is public: keep your own copy). `npm run models` compresses them into `assets/product/` with gltf-transform (meshopt) and writes `src/model-data.json`: every part's bounds and exploded position per size, read from the exploded GLBs. Those positions are baked into the exploded files' vertices, not their node transforms, so the page never needs to download an exploded file.
- **Loading:** only size M loads up front. S and L load when selected and are real swaps, not a scale, because their proportions differ. One scale (`k`) serves all three, so they read at their true relative sizes. Materials stay the same instances across sizes, so colour and selection carry over; the rack is refilled from the new size.
- **Scale in the shoe:** the 1.9-long prop stands for a 300 mm adult shoe, which gives `SEAT.scale`.
- **Upright poses:** Stage 1 and Inside stand the product up: `POSES` at the top of `src/product-slot.js` holds `hero_upright` and `inside_upright`, with every angle, size and spacing as an editable value, and `TRAVEL_SIZE` (0.85) is the size it travels at. The tilt is as the visitor sees it: the camera looks down 14.5°, so the world turns by the tilt plus that. Stage 1 does not react to the pointer or a venue change.
- **Inside stack:** the product opens into a stack, not a spread: each layer rises to one even `gap` (3.5 mm) above the layer behind it, in the real order, each stopping in turn so nothing passes through anything. The scent beads stay in their heel-end bay, level with the silica sachet they sit beside in the product, and show through the round vents.
- **Pop-out:** selecting a part (on the model, through the vents, or in the part list) sends it out on a spring (`pop` in `POSES`): it slides along its gap until it is clear of what is in front of it, comes toward the viewer and ends slightly to the side, turned a little to the camera, while the rest dim. The path is a function of one value, so going back retraces it and no part passes through another. Selecting another part, the part itself, empty space, the panel's Close, Escape or a scroll away puts it back. Picking uses the real meshes (`slot.pick`).
- **Shell colour:** the four hex values in `content.json` are sRGB; `Color.set` converts them to linear for the material, with roughness 0.55 and no metalness. The scene's lights are set for the bone page and the shoes and would double a colour's value, so the shell's shader takes a share of them plus an even light (`SHELL_LIT`, `SHELL_EVEN`) and undoes the tone mapper's dark toe. Its top face then shows on screen within a few levels of the hex; the side wall is darker, which is what gives it form.
- **The cord** hinges at the heel window (`setCord`): it lies flat on the floor and in the shoe, hangs when the product hovers, trails on the way in and goes taut on the way out. `cordS` and `cordL` in `STATES` are its resting pose per stage; Stage 3 adds to them.
- **Light:** a soft key, a rim from behind so the graphite edge separates from the bone page, the room environment for soft reflections, and contact shadows on the floor and the footbed. The materials are the file's.

## Forms

| Form | Function | Vercel env var | Payload |
|---|---|---|---|
| Facility pilot (Stage 6) | `api/bulk.js` | `BULK_WEBHOOK_URL` | organization, type, pairs (optional), name, email, phone, message, source, at |
| Waitlist (Stage 9) | `api/waitlist.js` | `WAITLIST_WEBHOOK_URL` | email, source, at |

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
- `snap-test.mjs` one stage per gesture on wide screens, Stage 1 through the pilot stage: mouse tick, trackpad flick, keys; `--mobile` confirms there is no snap. `free-scroll-test.mjs` from the pilot stage to the footer and back with mouse, trackpad, keys and (`--mobile`) touch: no event intercepted, no settle, FAQ items opened and closed mid-scroll, the 6>7 and 7>8 transitions on the scroll position, and the way back into the snap. `tap-test.mjs` the page scrolls natively on phones and a tap on a control acts without moving it. `input-test.mjs` replays timed mouse, trackpad (contact plus momentum) and key streams and checks nothing is dropped. `perf-queue.mjs` frame times while steps queue and reverse.
- `anchor-test.mjs` nav links land on their anchors and stay, hash and history, deep links, reload, snapping standing aside for forms and the FAQ; `--mobile` adds native scrolling and the band.
- `layout-test.mjs` many window sizes in sizes M and L: Stage 2's cards, lines and product, the product clear of each stage's text, the header, no sideways overflow, phone details, WebGL off.
- `model-test.mjs` what is downloaded and when, the parts and their PBR values, the opened layers, colour touching only the shell, size swaps, carry-forward to the rack, selection.
- `form-test.mjs` the forms in a browser with the API mocked per case (`--mobile`). `api-test.mjs` the handlers against a local mock webhook, including the 10 second timeout, the rate limit and a Google Sheet that answers 200 without saving. `sheet-script-test.mjs` the Google Sheet script against a stand-in for Google's services.
- `pose-test.mjs` the upright poses, on real pixels with one part drawn at a time and with real clicks: Stage 1's size, place and stillness; Inside's stack and gaps; every way a part pops out and goes back, nothing clipped, no part through another; the size through each transition; rest, popped and mid-transition frames in `lab/pose/` (`--mobile`, `--size`, `--w --h`).
- `verify-still.mjs` product still at rest, moving in transitions, reverse scroll matches forward, nav links land in the resting state.
- `steps-test.mjs` Stage 3 consistency across skips, interrupts, replays and scrolling away mid-step; toe first in, heel first out; the working loop rests when idle and wakes on input; the layered open-up reverses (`--reduced`).
- `wall-test.mjs` scrubs every step, every scroll-out (both directions, from rest and from the middle of steps), the nav jumps, the Bulk travels and the arrivals, and measures how far the visible shoes reach into the shell, on its real tapered outline, and how close its top comes to the nav (`--mobile`, `--size S|M|L`).
- `s3-frames.mjs` contact sheets of every step, the loop and both scroll-outs in `lab/s3/` (`--w 390 --h 844`); `bulk-frames.mjs` the same for the Customize to Bulk and Bulk to Why travels. `perf-steps.mjs` frame times while each step plays (`--mobile`).
- `seam.mjs` scans frames across every boundary for thin full-width lines, static or `--motion`, with `--browser edge`, `--dpr`, `--zoom`; `seam-matrix.sh` runs the whole matrix.
- `perf-all.mjs` down the page and back with an interaction per stage (a gesture per rest point, then the wheel past the pilot stage, on wide screens; a native scroll on phones); frame times per stage and per transition. `perf-hitch.mjs` repeats one transition. `perf-bisect.mjs` runs one transition in a fresh browser with each candidate element hidden, to find whose first paint costs a dropped frame (the answer usually goes in the `.warm` block in `tools/render.mjs`).
- `posters.mjs` re-renders the no-WebGL fallback images.
