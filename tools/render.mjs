// Renders index.html from content.json. Layout lives here; copy lives in the
// JSON. Run `npm run site` after editing either.
import fs from 'node:fs';
const C = JSON.parse(fs.readFileSync(new URL('../content.json', import.meta.url), 'utf8'));
const MODEL = JSON.parse(fs.readFileSync(new URL('../src/model-data.json', import.meta.url), 'utf8'));
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = esc;

const navLinks = (cls) => C.nav.links.map((l) => `<a class="${cls}" href="#${l.anchor || l.id}" data-jump="${l.id}">${esc(l.label)}</a>`).join('\n      ');
const seg = C.segments, cz = C.customize;
const outside = (id) => { const [l, w, h] = MODEL.sizes[id].outsideMm.map(Math.round); return cz.sizeOutside.replace('{l}', l).replace('{w}', w).replace('{h}', h); };
// [YOUR EMAIL] until brand.contactEmail is set; a real address becomes a link
const contact = C.brand.contactEmail.includes('@') ? `<a href="mailto:${attr(C.brand.contactEmail)}">${esc(C.brand.contactEmail)}</a>` : esc(C.brand.contactEmail);
const PILOT = C.nav.links.find((l) => l.id === 'bulk').anchor;
const startMethod = C.why.methods.find((m) => m.id === 'solefresh');

const html = `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(C.brand.name)}: reusable shoe care for shared and high-use footwear</title>
<meta name="description" content="${attr(C.brand.name)} is a reusable shoe-care product in development, designed to manage odor and moisture for bowling centers, skating rinks, schools, teams, and athletes. Join the facility pilot or the waitlist.">
<meta name="theme-color" content="#F1EFEA">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
<script>document.documentElement.classList.replace('no-js', 'js');</script>
</head>
<body id="top">
<a class="skip" href="#explorer" data-jump="explorer">Skip to content</a>

<!-- ================================================================ NAV == -->
<header class="nav">
  <!-- PLACEHOLDER:LOGO text wordmark until an official logo exists -->
  <a class="nav__logo" href="#explorer" data-jump="explorer" aria-label="${attr(C.brand.name)} home">Sole<span>Fresh</span></a>
  <nav class="nav__links" aria-label="Sections">
      ${navLinks('nav__link')}
  </nav>
  <div class="nav__cta">
    <a class="nav__waitlist" href="#close" data-jump="close">${esc(C.nav.waitlist)}</a>
    <a class="btn btn--accent" href="#${PILOT}" data-jump="bulk" data-bulk><span class="cta-long">${esc(C.nav.bulk)}</span><span class="cta-short">${esc(C.nav.bulkShort)}</span></a>
  </div>
  <button class="nav__menu" type="button" aria-expanded="false" aria-controls="menu"><span class="vh">Menu</span><span class="nav__burger" aria-hidden="true"></span></button>
</header>
<div class="menu" id="menu" hidden>
  <nav aria-label="Sections">
      ${navLinks('menu__link')}
  </nav>
  <div class="menu__cta">
    <a class="btn btn--accent" href="#${PILOT}" data-jump="bulk" data-bulk>${esc(C.nav.bulk)}</a>
    <a class="btn btn--ghost" href="#close" data-jump="close">${esc(C.nav.waitlist)}</a>
  </div>
</div>

<!-- Projected onto the product: the Stage 2 dots and leader lines (the cards themselves are plain HTML in
     the stage) and the Stage 4 layer markers. -->
<div class="overlay" data-overlay>
  <svg class="overlay__lines" data-lines aria-hidden="true">${C.what.hotspots.map((h) => `<line data-line="${h.id}" x1="0" y1="0" x2="0" y2="0"></line>`).join('')}</svg>
  <div class="overlay__set" data-for="what" aria-hidden="true" hidden>
    ${C.what.hotspots.map((h) => `<span class="mk" data-hs="${h.id}"><span class="mk__dot"></span></span>`).join('\n    ')}
  </div>
</div>

<!-- Paint warm-up: the GPU rasterizer compiles its pipelines for native form controls, a
     translucent shadowed card, the Customize swatch rings and size pills and the layer chips the
     first time they are painted. Painting them here, faint behind the hero, moves that one-time cost to page load
     instead of a transition. -->
<div class="warm" aria-hidden="true" inert><div class="warm__card"><select><option>a</option></select><textarea rows="1"></textarea><input type="text"><input type="radio"><button type="button">b</button><details open><summary>s</summary><p>p</p></details><span class="swatches"><span class="swatch" style="--sw1:#E9E7E1;--sw2:#2346FF"><span class="swatch__chip"><span class="swatch__dot"></span></span></span><span class="swatch" aria-pressed="true" style="--sw1:#2346FF;--sw2:#F1EFEA"><span class="swatch__chip"><span class="swatch__dot"></span></span></span></span><span class="sizes"><span class="size">a</span><span class="size" aria-pressed="true">b</span></span><span class="layer-btn">a</span><span class="layer-btn" aria-pressed="true">b</span></div></div>

<main>
<!-- .pin holds the stages that use the product. On wide screens the world is one fixed layer behind the whole
     page and makes exactly one scroll-linked move per transition. Under 900px it is a band pinned under the nav
     while these stages scroll beneath it, and it scrolls away with the end of .pin, before the Bulk form. -->
<div class="pin">
<div class="world" data-world aria-hidden="true">
  <picture class="world__poster" data-poster>
    <img src="assets/posters/bowling.webp" alt="" width="1600" height="1000" decoding="async" data-poster-img>
  </picture>
</div>

<!-- ================================================ STAGE 1: WHO IT'S FOR == -->
<section class="stage explorer stage--full" id="explorer" data-product="explorer" aria-labelledby="h-hero">
  <div class="explorer__left">
    <div class="explorer__intro stage__in">
      <h1 id="h-hero">${esc(C.brand.tagline).replace('Every Day', 'Every&nbsp;Day')}</h1>
      <p class="explorer__lede">${esc(C.brand.support)}</p>
    </div>
    <div class="who stage__in">
      <p class="who__label" id="who-label">${esc(seg.label)}</p>
      <div class="who__list" role="tablist" aria-labelledby="who-label" aria-orientation="vertical">
        ${seg.items.map((a, i) => `<button class="who__item" role="tab" type="button" id="tab-${a.id}" data-aud="${a.id}" aria-selected="${i === 0}" aria-controls="panel" tabindex="${i === 0 ? 0 : -1}">${esc(a.name)}</button>`).join('\n        ')}
      </div>
      <figure class="who__thumb" aria-hidden="true" data-thumb><img alt="" width="360" height="240" data-thumb-img></figure>
    </div>
  </div>
  <aside class="panel stage__in" id="panel" role="tabpanel" aria-labelledby="tab-${seg.items[0].id}" aria-live="polite">
    <figure class="panel__thumb" aria-hidden="true"><img alt="" width="360" height="240" data-panel-thumb></figure>
    <p class="panel__for" data-panel-for>For ${esc(seg.items[0].name.toLowerCase())}</p>
    <p class="panel__line" data-panel-line>${esc(seg.items[0].line)}</p>
    <div class="panel__org" data-panel-org>
      <p class="panel__note">${esc(seg.orgNote)}</p>
      <a class="btn btn--accent" href="#${PILOT}" data-jump="bulk" data-bulk>${esc(C.nav.bulk)}</a>
    </div>
    <div class="panel__ind" data-panel-ind hidden>
      <ul class="panel__fns">${seg.functions.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
      <a class="btn btn--accent" href="#close" data-jump="close">${esc(C.nav.waitlist)}</a>
    </div>
  </aside>
</section>

<!-- ================================================ STAGE 2: WHAT IT DOES == -->
<section class="stage what stage--full" id="what" data-product="what" aria-labelledby="h-what">
  <div class="what__head stage__in">
    <h2 id="h-what">${esc(C.what.heading)}</h2>
    <p class="what__lede">${esc(C.what.lede)}</p>
  </div>
  <!-- always open, plain HTML: nothing here depends on WebGL or a hover -->
  <div class="what__low">
    <ul class="hs-cards" role="list" data-hs-cards>
      ${C.what.hotspots.map((h) => `<li class="hs-card" data-hs-card="${h.id}"><h3 class="hs-card__label">${esc(h.label)}</h3><p class="hs-card__text">${esc(h.text)}</p></li>`).join('\n      ')}
    </ul>
    <p class="what__note"><b>${esc(C.what.note.lead)}</b> ${esc(C.what.note.text)}</p>
  </div>
</section>

<!-- ================================================ STAGE 3: HOW IT WORKS == -->
<section class="stage how stage--full" id="how" data-product="how" aria-labelledby="h-how">
  <div class="how__head stage__in"><h2 id="h-how">${esc(C.how.heading)}</h2></div>
  <div class="how__bar stage__in">
    <p class="how__caption" data-step-caption aria-live="polite">${esc(C.how.steps[0].caption)}</p>
    <div class="steps" role="tablist" aria-label="Steps">
      ${C.how.steps.map((s, i) => `<button type="button" class="step" role="tab" id="step-${i}" data-step="${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"><span class="step__n" aria-hidden="true">${i + 1}</span><span class="step__t">${esc(s.title)}</span><span class="step__bar" aria-hidden="true"><i></i></span></button>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- ======================================================= STAGE 4: INSIDE == -->
<section class="stage inside stage--full" id="inside" data-product="inside" aria-labelledby="h-inside">
  <div class="inside__head stage__in">
    <h2 id="h-inside">${esc(C.inside.heading)}</h2>
    <p class="inside__note">${esc(C.inside.note)}</p>
    <p class="inside__prompt" data-inside-prompt>${esc(C.inside.prompt)}</p>
  </div>
  <div class="inside__list stage__in" role="group" aria-label="Parts">
    ${C.inside.layers.map((l, i) => `<button type="button" class="layer-btn" data-layer="${i}" aria-pressed="false">${esc(l.name)}</button>`).join('\n    ')}
  </div>
  <aside class="sheet" data-sheet aria-live="polite">
    <div class="sheet__body">
      <p class="sheet__prompt" data-sheet-prompt>${esc(C.inside.prompt)}</p>
      <div class="sheet__detail" data-sheet-detail hidden>
        <p class="sheet__name" data-sheet-name></p>
        <p class="sheet__role" data-sheet-role></p>
      </div>
      <button type="button" class="sheet__close" data-sheet-close aria-label="Close">Close</button>
    </div>
  </aside>
</section>

<!-- ===================================================== STAGE 5: CUSTOMIZE == -->
<section class="stage customize stage--full" id="customize" data-product="customize" aria-labelledby="h-customize">
  <div class="customize__head stage__in">
    <h2 id="h-customize">${esc(cz.heading)}</h2>
    <p class="customize__lede">${esc(cz.lede)} <span class="fine-only">${esc(cz.dragHint.fine)}</span><span class="touch-only">${esc(cz.dragHint.touch)}</span></p>
  </div>
  <div class="customize__drag" data-drag aria-hidden="true"></div>
  <div class="customize__side customize__side--color stage__in">
    <p class="eyebrow" id="color-label">${esc(cz.colorLabel)}</p>
    <div class="swatches" role="group" aria-labelledby="color-label">
      ${cz.colors.map((sw) => `<button type="button" class="swatch" data-color="${sw.id}" aria-pressed="${sw.id === cz.defaults.color}" aria-label="${attr(sw.name)}" style="--sw1:${sw.hex}"><span class="swatch__chip" aria-hidden="true"></span></button>`).join('\n      ')}
    </div>
    <p class="customize__pick" data-color-name aria-live="polite">${esc(cz.colors.find((c) => c.id === cz.defaults.color)?.name || cz.colors[0].name)}</p>
  </div>
  <div class="customize__side customize__side--size stage__in">
    <p class="eyebrow" id="size-label">${esc(cz.sizeLabel)}</p>
    <div class="sizes" role="group" aria-labelledby="size-label">
      ${cz.sizes.map((sz) => `<button type="button" class="size" data-size="${sz.id}" aria-pressed="${sz.id === cz.defaults.size}">${esc(sz.label)}</button>`).join('\n      ')}
    </div>
    <p class="customize__pick" data-size-label aria-live="polite">${esc(outside(cz.defaults.size))}</p>
    <p class="customize__fit">${esc(cz.fit)}</p>
  </div>
  <p class="customize__note stage__in">${esc(cz.note)}</p>
</section>

</div><!-- /.pin -->

<!-- =============================================== STAGE 6: FACILITY PILOT == -->
<section class="stage bulk" id="${PILOT}" data-product="bulk" aria-labelledby="h-bulk">
  <div class="bulk__card stage__in">
    <div class="bulk__intro">
      <h2 id="h-bulk">${esc(C.bulk.heading)}</h2>
      <ul class="bulk__lines">${C.bulk.lines.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
    </div>
    <form class="form" method="post" action="/api/bulk" data-form="bulk" novalidate>
      <div class="hp" aria-hidden="true"><label>Leave empty <input type="text" name="hp_check" tabindex="-1" autocomplete="off"></label></div>
      <div class="field"><label for="b-org">Organization name</label><input id="b-org" name="organization" type="text" autocomplete="organization" required aria-describedby="err-b-org"><p class="field__err" id="err-b-org" data-err="organization"></p></div>
      <div class="field"><label for="b-type">Organization type</label><select id="b-type" name="type" required aria-describedby="err-b-type"><option value="">Choose one</option>${C.bulk.form.orgTypes.map((t) => `<option>${esc(t)}</option>`).join('')}</select><p class="field__err" id="err-b-type" data-err="type"></p></div>
      <fieldset class="field field--radios" aria-describedby="err-b-pairs"><legend>Approximate pairs of shoes managed <span class="opt">optional</span></legend><div class="radios">${C.bulk.form.pairs.map((p) => `<label class="radio"><input type="radio" name="pairs" value="${attr(p)}"><span>${esc(p)}</span></label>`).join('')}</div><p class="field__err" id="err-b-pairs" data-err="pairs"></p></fieldset>
      <div class="field"><label for="b-name">Your name</label><input id="b-name" name="name" type="text" autocomplete="name" required aria-describedby="err-b-name"><p class="field__err" id="err-b-name" data-err="name"></p></div>
      <div class="field field--half"><label for="b-email">Email</label><input id="b-email" name="email" type="email" autocomplete="email" inputmode="email" required aria-describedby="err-b-email"><p class="field__err" id="err-b-email" data-err="email"></p></div>
      <div class="field field--half"><label for="b-phone">Phone <span class="opt">optional</span></label><input id="b-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" aria-describedby="err-b-phone"><p class="field__err" id="err-b-phone" data-err="phone"></p></div>
      <div class="field"><label for="b-msg">Message <span class="opt">optional</span></label><textarea id="b-msg" name="message" rows="3" aria-describedby="err-b-msg"></textarea><p class="field__err" id="err-b-msg" data-err="message"></p></div>
      <div class="form__actions"><button class="btn btn--accent" type="submit">${esc(C.bulk.form.button)}</button><p class="form__status" role="status" aria-live="polite"></p></div>
      <p class="form__note">${esc(C.forms.note)}</p>
      <div class="form__done" data-done tabindex="-1" hidden><p>${esc(C.bulk.form.done)}</p></div>
    </form>
  </div>
</section>

<!-- =============================================== STAGE 7: WHY SOLEFRESH == -->
<section class="stage why" id="why" data-product="why" aria-labelledby="h-why">
  <div class="why__panel stage__in">
    <h2 id="h-why">${esc(C.why.heading)}</h2>
    <p class="why__lede">${esc(C.why.lede)}</p>
    <div class="methods" role="group" aria-label="Routine">
      ${C.why.methods.map((m) => `<button type="button" class="method" data-method="${m.id}" aria-pressed="${m.id === 'solefresh'}">${esc(m.label)}</button>`).join('\n      ')}
    </div>
    <p class="why__legend" data-legend aria-live="polite">${esc(startMethod.legend)}</p>
    <ol class="week" data-week aria-label="One week">
      ${C.why.days.map((d, i) => `<li class="day" style="--i:${i}"><span class="day__icon" data-day-icon aria-hidden="true"></span><span class="day__mark" data-day-mark>${esc(startMethod.mark)}</span><span class="day__name">${esc(d)}</span></li>`).join('\n      ')}
    </ol>
    <p class="why__fine">${esc(C.why.fine)}</p>
  </div>
</section>

<!-- =============================================== STAGE 8: STORY + FAQ == -->
<section class="stage story" id="story" data-product="story" aria-labelledby="h-story">
  <div class="story__panel stage__in">
    <h2 id="h-story">${esc(C.story.heading)}</h2>
    <p class="story__line">${esc(C.story.line)}</p>
    <ol class="timeline" aria-label="Development timeline">
      ${C.story.milestones.map((m) => `<li class="milestone${m.current ? ' is-current' : ''}"><button type="button" class="milestone__btn" data-ms="${m.id}" aria-pressed="${!!m.current}" ${m.current ? `aria-describedby="ms-current"` : ''}><span class="milestone__dot" aria-hidden="true"></span><span class="milestone__t">${esc(m.title)}</span>${m.current ? `<span class="milestone__now" id="ms-current">${esc(C.story.currentLabel)}</span>` : ''}</button></li>`).join('\n      ')}
    </ol>
    <p class="milestone__text" data-ms-text aria-live="polite">${esc(C.story.milestones.find((m) => m.current).text)}</p>
    <div class="faq" id="faq">
      <h3>${esc(C.story.faqHeading)}</h3>
      ${C.story.faq.map((f) => `<details class="faq__item" name="faq"><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n      ')}
    </div>
  </div>
</section>

<!-- ======================================================== STAGE 9: CLOSE == -->
<section class="stage close" id="close" data-product="close" aria-labelledby="h-close">
  <div class="close__wrap stage__in">
    <h2 id="h-close">${esc(C.close.heading)}</h2>
    <div class="paths">
      <div class="path">
        <p class="path__label">${esc(C.close.org.label)}</p>
        <p class="path__text">${esc(C.close.org.text)}</p>
        <a class="btn btn--accent" href="#${PILOT}" data-jump="bulk" data-bulk>${esc(C.close.org.button)}</a>
      </div>
      <div class="path">
        <p class="path__label">${esc(C.close.ind.label)}</p>
        <p class="path__text">${esc(C.close.ind.text)}</p>
        <form class="form form--inline" method="post" action="/api/waitlist" data-form="waitlist" novalidate>
          <div class="hp" aria-hidden="true"><label>Leave empty <input type="text" name="hp_check" tabindex="-1" autocomplete="off"></label></div>
          <label class="vh" for="w-email">Email</label>
          <div class="form__row"><input id="w-email" name="email" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" required aria-describedby="err-w-email"><button class="btn btn--accent" type="submit">${esc(C.close.ind.button)}</button></div>
          <p class="field__err" id="err-w-email" data-err="email"></p>
          <p class="form__status" role="status" aria-live="polite"></p>
          <p class="form__note">${esc(C.forms.note)}</p>
          <div class="form__done" data-done tabindex="-1" hidden><p>${esc(C.close.ind.done)}</p></div>
        </form>
      </div>
    </div>
  </div>
  <footer class="footer">
    <span class="footer__logo">Sole<span>Fresh</span></span>
    <span>${esc(C.brand.program)}</span>
    <span class="footer__contact" data-contact>${contact}</span>
    <a class="footer__link" href="privacy.html">${esc(C.footer.privacy)}</a>
    <span>&copy; <span data-year></span> ${esc(C.brand.copyright)}</span>
  </footer>
</section>
</main>

<script type="module" src="dist/main.js"></script>
</body>
</html>
`;
fs.writeFileSync(new URL('../index.html', import.meta.url), html);

// The privacy page: short, plain, and honest about what is still to fill in.
const P = C.privacy, withEmail = (s) => esc(s).replace('{email}', contact).replace('{googlePrivacy}', '<a href="https://policies.google.com/privacy">Google’s privacy policy</a>');
const privacy = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(P.title)} | ${esc(C.brand.name)}</title>
<meta name="description" content="How ${attr(C.brand.name)} handles what you send through the forms on this site.">
<meta name="theme-color" content="#F1EFEA">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body class="doc-page">
<header class="nav">
  <a class="nav__logo" href="./" aria-label="${attr(C.brand.name)} home">Sole<span>Fresh</span></a>
  <a class="doc__back" href="./">${esc(P.back)}</a>
</header>
<main class="doc">
  <h1>${esc(P.title)}</h1>
  <p class="doc__intro">${esc(P.intro)}</p>
  ${P.sections.map((s) => `<section>
    <h2>${esc(s.heading)}</h2>
    <p>${withEmail(s.text)}</p>
  </section>`).join('\n  ')}
</main>
</body>
</html>
`;
fs.writeFileSync(new URL('../privacy.html', import.meta.url), privacy);
console.log('rendered index.html, privacy.html');
