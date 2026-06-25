# Market Street AI Static Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the current Claude Design export as clean editable static files while preserving the existing visual direction.

**Architecture:** The bundled export remains untouched as the visual reference. The new editable site uses plain HTML, CSS, and JavaScript with no framework or build step. Assets stay in their current folder for this pass.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, local browser verification.

## Global Constraints

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Preserve the dark grid background, orange accent, civic-industrial dashboard feel, typography direction, section layout, and overall density.
- Keep placeholder content mostly intact for this pass.
- No framework migration.
- No backend or form processing.
- No CMS.
- No final content strategy rewrite.
- No real business-directory data integration.
- No domain, hosting, or deployment decisions.
- This folder is not currently a Git repository, so commit steps are skipped unless Git is initialized later.

---

## File Structure

- Create `index.html`: semantic static page structure matching the current design.
- Create `styles.css`: all layout, color, responsive, and component styling.
- Create `script.js`: hero carousel behavior and dot controls.
- Modify `.ai/STATE.md`: record the post-implementation state.
- Create `.ai/sessions/YYYY-MM-DD_HH-MM_codex_static_rebuild.md`: concise handoff.

---

### Task 1: Static Page Structure

**Files:**
- Create: `index.html`
- Reference only: `Market Street AI - standalone (1).html`

**Interfaces:**
- Produces: HTML elements consumed by `styles.css` and `script.js`.
- Produces: hero carousel elements with `data-slide-index` buttons and text nodes `#hero-line-1`, `#hero-line-2`, `#hero-line-3`, `#hero-blurb`.

- [ ] **Step 1: Create semantic HTML**

Create `index.html` with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Market Street AI</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="page-shell">
    <header class="site-header">
      <a class="brand" href="#" aria-label="Market Street AI home">
        <span class="brand-mark">M</span>
        <span>Market Street AI</span>
      </a>
      <nav class="main-nav" aria-label="Primary navigation">
        <a href="#hub">Idea Exchange</a>
        <a href="#playbooks">Playbooks</a>
        <a href="#ask">Ask AI</a>
        <a href="#directory">Directory</a>
        <a href="#events">Events</a>
      </nav>
      <div class="account-links">
        <a href="#">Log In</a>
        <a class="button button-small" href="#">Register</a>
      </div>
    </header>

    <section class="hero-grid" id="hub">
      <article class="hero-panel">
        <p class="kicker">Ventura, Oxnard, Camarillo & Ojai</p>
        <div class="hero-copy" aria-live="polite">
          <h1>
            <span id="hero-line-1">Connect.</span>
            <span id="hero-line-2">Share.</span>
            <span id="hero-line-3">Grow Together.</span>
          </h1>
          <p id="hero-blurb">Market Street AI is the innovation hub for the Ventura corridor, where industrial neighbors, business owners, and creatives swap ideas, tools, and business intelligence that moves the whole corridor forward.</p>
        </div>
        <div class="hero-dots" aria-label="Hero slides">
          <button class="is-active" data-slide-index="0" aria-label="Show Connect slide"></button>
          <button data-slide-index="1" aria-label="Show Learn slide"></button>
          <button data-slide-index="2" aria-label="Show Intelligence slide"></button>
          <button data-slide-index="3" aria-label="Show Expertise slide"></button>
        </div>
      </article>

      <aside class="news-panel">
        <div class="panel-heading">
          <h2>Ventura News</h2>
          <span>Live</span>
        </div>
        <a class="news-item" href="#"><span>Downtown</span><strong>Main Street merchants launch shared AI booking pilot</strong><small>Ventura County Star • 2h ago</small></a>
        <a class="news-item" href="#"><span>Harbor</span><strong>Ventura Harbor shops cut wait times with AI scheduling</strong><small>VC Reporter • 6h ago</small></a>
        <a class="news-item" href="#"><span>Education</span><strong>Ventura College adds free AI literacy workshops this fall</strong><small>Campus Wire • 1d ago</small></a>
        <a class="news-item" href="#"><span>Retail</span><strong>Local boutiques test AI product photography downtown</strong><small>Ventura Biz • 1d ago</small></a>
        <a class="news-item" href="#"><span>Events</span><strong>Chamber hosts 'AI for Small Business' night at the pier</strong><small>Events • 2d ago</small></a>
      </aside>
    </section>

    <section class="quick-actions" id="playbooks" aria-label="Market Street AI actions">
      <div><strong>Connect with local businesses</strong></div>
      <div><strong>Ask questions and get answers</strong></div>
      <div><strong>Download AI workflows and playbooks</strong></div>
      <div><strong>Learn practical AI knowledge</strong></div>
      <div><strong>Grow your business together</strong></div>
      <a class="button" href="#">Join the Local AI Hub</a>
      <a class="button button-outline" href="#">Browse Playbooks</a>
    </section>

    <main class="content-grid">
      <section class="panel directory-panel" id="directory">
        <div class="panel-heading">
          <h2>Active Businesses on Market Street AI</h2>
          <a href="#">View all businesses</a>
        </div>
        <div class="business-grid">
          <a class="business-card" href="#"><span class="business-logo">CC</span><h3>Coastal<br>Coffee Co.</h3><p>Coffee Shop</p><em>Active Member</em><p>Shared 5 ideas</p></a>
          <a class="business-card" href="#"><span class="business-logo">VC</span><h3>Ventura<br>Cycle Works</h3><p>Bike Shop</p><em>Active Member</em><p>Shared 8 ideas</p></a>
          <a class="business-card" href="#"><span class="business-logo">HL</span><h3>Harbor Light<br>Studio</h3><p>Creative Studio</p><em>Active Member</em><p>Shared 3 ideas</p></a>
          <a class="business-card" href="#"><span class="business-logo">MT</span><h3>Main Street<br>Tacos</h3><p>Restaurant</p><em>Active Member</em><p>Shared 3 ideas</p></a>
          <a class="business-card" href="#"><span class="business-logo">GC</span><h3>Gold Coast<br>Realty</h3><p>Real Estate</p><em>Active Member</em><p>Shared 7 ideas</p></a>
        </div>
      </section>

      <section class="panel topics-panel">
        <div class="panel-heading">
          <h2>Trending Topics</h2>
          <a href="#">View all topics</a>
        </div>
        <div class="topic-list">
          <a href="#"><span>↗</span><strong>Automating customer follow-ups</strong><small>12</small></a>
          <a href="#"><span>↗</span><strong>AI for social media content</strong><small>18</small></a>
          <a href="#"><span>↗</span><strong>Saving time with AI scheduling</strong><small>9</small></a>
          <a href="#"><span>↗</span><strong>Using AI for better product photos</strong><small>14</small></a>
          <a href="#"><span>↗</span><strong>Chatbots for local businesses</strong><small>11</small></a>
        </div>
      </section>

      <section class="panel ask-panel" id="ask">
        <div class="panel-heading">
          <h2>Ask The Community</h2>
          <a href="#">View all</a>
        </div>
        <div class="question-list">
          <a href="#"><span>?</span><strong>What's the best AI tool for scheduling appointments?</strong><small>Asked by Ventura Wellness • 3h ago</small><b>6</b></a>
          <a href="#"><span>?</span><strong>How do you use AI for bookkeeping or invoices?</strong><small>Asked by Surfside Plumbing • 5h ago</small><b>4</b></a>
          <a href="#"><span>?</span><strong>Any recommendations for AI tools for small retail shops?</strong><small>Asked by Baja Boutique • 1d ago</small><b>8</b></a>
          <button class="button button-outline" type="button">Ask a Question</button>
        </div>
      </section>
    </main>

    <footer class="site-footer" id="events">
      <span>Local Knowledge. Shared Intelligence. Stronger Together.</span>
      <span class="star">✦</span>
      <span>Ventura · Oxnard · Camarillo · Ojai</span>
    </footer>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify HTML file exists**

Run: `test -f index.html && echo "index exists"`

Expected: `index exists`

---

### Task 2: Visual Styling

**Files:**
- Create: `styles.css`
- Consumes: classes and IDs from `index.html`.

**Interfaces:**
- Provides responsive layout for the static page.
- Defines `.is-active` for hero dot state.

- [ ] **Step 1: Create CSS matching the prototype**

Create `styles.css` with the visual system:

```css
:root {
  --bg: #050809;
  --panel: rgba(7, 13, 15, 0.8);
  --panel-strong: rgba(8, 15, 17, 0.9);
  --accent: #e0772d;
  --accent-dark: #c65d22;
  --text: #e9c8a0;
  --muted: #b9875d;
  --dim: #8d6043;
  --line: rgba(198, 93, 34, 0.32);
  --line-soft: rgba(198, 93, 34, 0.18);
  --shadow: 0 18px 56px rgba(0, 0, 0, 0.42);
}

* { box-sizing: border-box; }

html { min-height: 100%; background: var(--bg); }

body {
  min-height: 100vh;
  margin: 0;
  color: var(--text);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    linear-gradient(rgba(224, 119, 45, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(224, 119, 45, 0.045) 1px, transparent 1px),
    radial-gradient(circle at 50% 0%, rgba(224, 119, 45, 0.16), transparent 34%),
    #050809;
  background-size: 42px 42px, 42px 42px, auto, auto;
}

a { color: inherit; text-decoration: none; }
button { font: inherit; }

.page-shell {
  width: min(1880px, calc(100% - 44px));
  margin: 0 auto;
  padding: 22px 0 0;
}

.site-header,
.hero-panel,
.news-panel,
.panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 5px;
  box-shadow: var(--shadow), inset 0 0 0 1px rgba(233, 200, 160, 0.025);
  backdrop-filter: blur(5px);
}

.site-header {
  min-height: 74px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 24px;
  padding: 0 22px;
}

.brand,
.main-nav,
.account-links,
.panel-heading,
.site-footer,
.button,
.business-card h3,
.business-card em,
.kicker {
  font-family: Oswald, Inter, sans-serif;
  text-transform: uppercase;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
  font-size: 23px;
  letter-spacing: 0.12em;
}

.brand-mark,
.business-logo {
  display: grid;
  place-items: center;
  border: 1px solid var(--accent-dark);
  color: var(--accent);
}

.brand-mark {
  width: 42px;
  height: 42px;
  font-weight: 700;
  font-size: 26px;
}

.main-nav {
  display: flex;
  justify-content: center;
  gap: 26px;
  color: var(--muted);
  font-size: 14px;
  letter-spacing: 0.12em;
}

.main-nav a:hover,
.account-links a:hover,
.panel-heading a:hover { color: var(--accent); }

.account-links {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--muted);
  font-size: 14px;
  letter-spacing: 0.12em;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border: 1px solid var(--accent-dark);
  background: var(--accent);
  color: #090b0b;
  cursor: pointer;
  letter-spacing: 0.15em;
  font-size: 20px;
  border-radius: 3px;
}

.button-small {
  min-height: 38px;
  padding: 0 16px;
  font-size: 14px;
}

.button-outline {
  background: transparent;
  color: var(--accent);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 14px;
  margin-top: 14px;
}

.hero-panel {
  position: relative;
  min-height: 480px;
  padding: 52px 58px;
  overflow: hidden;
}

.hero-panel::after {
  content: "";
  position: absolute;
  inset: 18px;
  border: 1px solid rgba(224, 119, 45, 0.12);
  pointer-events: none;
}

.kicker {
  margin: 0 0 34px;
  color: var(--dim);
  letter-spacing: 0.28em;
  font-size: 15px;
}

.hero-copy {
  max-width: 980px;
  transition: opacity 0.35s ease;
}

.hero-copy.is-fading { opacity: 0; }

.hero-copy h1 {
  margin: 0;
  font-family: Oswald, Inter, sans-serif;
  font-size: clamp(72px, 8vw, 148px);
  line-height: 0.88;
  text-transform: uppercase;
  letter-spacing: 0;
}

.hero-copy h1 span {
  display: block;
}

.hero-copy p {
  width: min(760px, 100%);
  margin: 32px 0 0;
  color: rgba(233, 200, 160, 0.84);
  font-size: 20px;
  line-height: 1.55;
}

.hero-dots {
  position: absolute;
  left: 58px;
  bottom: 34px;
  display: flex;
  gap: 12px;
  z-index: 2;
}

.hero-dots button {
  width: 12px;
  height: 12px;
  padding: 0;
  border: 1px solid var(--accent-dark);
  border-radius: 50%;
  background: rgba(233, 200, 160, 0.18);
  cursor: pointer;
}

.hero-dots button.is-active { background: var(--accent); }

.news-panel {
  padding: 0 22px 12px;
}

.panel-heading {
  min-height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  border-bottom: 1px solid var(--line-soft);
}

.panel-heading h2 {
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.15em;
}

.panel-heading a,
.panel-heading span {
  color: var(--accent);
  font-size: 13px;
  letter-spacing: 0.13em;
}

.news-item {
  display: block;
  padding: 15px 0;
  border-bottom: 1px solid var(--line-soft);
}

.news-item:last-child { border-bottom: 0; }

.news-item span {
  display: block;
  margin-bottom: 6px;
  color: var(--accent);
  font-family: Oswald, sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.news-item strong {
  display: block;
  color: rgba(233, 200, 160, 0.95);
  font-size: 15px;
  line-height: 1.35;
}

.news-item small,
.question-list small {
  display: block;
  margin-top: 7px;
  color: var(--dim);
  font-family: Oswald, sans-serif;
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr)) auto auto;
  gap: 10px;
  align-items: stretch;
  margin: 14px 0;
}

.quick-actions div,
.quick-actions .button {
  background: rgba(8, 15, 17, 0.72);
  border: 1px solid rgba(198, 93, 34, 0.28);
  border-radius: 4px;
}

.quick-actions div {
  min-height: 76px;
  display: flex;
  align-items: center;
  padding: 14px;
  color: rgba(233, 200, 160, 0.94);
  font-size: 14px;
  line-height: 1.35;
}

.content-grid {
  display: grid;
  grid-template-columns: 1.45fr 0.7fr 0.85fr;
  gap: 14px;
  padding-bottom: 18px;
}

.panel {
  min-width: 0;
}

.panel > .panel-heading {
  padding: 0 22px;
}

.business-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
  padding: 18px 22px 26px;
}

.business-card {
  min-height: 230px;
  display: block;
  padding: 16px 13px;
  text-align: center;
  background: rgba(8, 15, 17, 0.72);
  border: 1px solid rgba(198, 93, 34, 0.28);
  border-radius: 4px;
}

.business-logo {
  width: 84px;
  height: 84px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: rgba(224, 119, 45, 0.08);
  font-family: Oswald, sans-serif;
  font-size: 25px;
  letter-spacing: 0.08em;
}

.business-card h3 {
  margin: 0;
  font-size: 23px;
  line-height: 1.1;
  letter-spacing: 0.12em;
}

.business-card p {
  margin: 8px 0;
  color: var(--muted);
  font-size: 14px;
}

.business-card em {
  display: inline-block;
  margin: 8px 0;
  padding: 7px 10px;
  border: 1px solid var(--accent-dark);
  border-radius: 3px;
  color: var(--accent);
  font-style: normal;
  font-size: 13px;
  letter-spacing: 0.1em;
}

.topic-list,
.question-list {
  padding: 16px 22px 20px;
}

.topic-list a,
.question-list a {
  display: grid;
  align-items: start;
  gap: 14px;
  padding: 13px 0;
  border-bottom: 1px solid rgba(198, 93, 34, 0.16);
  color: rgba(233, 200, 160, 0.94);
}

.topic-list a {
  grid-template-columns: 26px 1fr 38px;
}

.topic-list span,
.question-list span {
  color: var(--accent);
  font-size: 22px;
  line-height: 1;
}

.topic-list strong,
.question-list strong {
  font-size: 16px;
  line-height: 1.35;
  font-weight: 500;
}

.topic-list small,
.question-list b {
  color: var(--text);
  font-size: 13px;
  text-align: right;
}

.question-list a {
  grid-template-columns: 28px 1fr 36px;
}

.question-list small {
  grid-column: 2;
  margin-top: -5px;
}

.question-list b {
  grid-column: 3;
  grid-row: 1 / span 2;
  font-weight: 400;
}

.question-list .button {
  width: 100%;
  margin-top: 12px;
}

.site-footer {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 24px;
  align-items: center;
  padding: 0 22px 24px;
  color: var(--dim);
  font-size: 17px;
  letter-spacing: 0.28em;
}

.site-footer span:last-child { text-align: right; }
.site-footer .star { color: var(--accent); font-size: 26px; }

@media (max-width: 1320px) {
  .site-header,
  .hero-grid,
  .content-grid,
  .quick-actions {
    grid-template-columns: 1fr;
  }

  .main-nav,
  .account-links {
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .business-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .quick-actions {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .page-shell {
    width: min(100% - 24px, 1880px);
    padding-top: 12px;
  }

  .site-header {
    padding: 16px;
    gap: 16px;
  }

  .brand {
    font-size: 19px;
  }

  .main-nav {
    gap: 12px 16px;
    font-size: 12px;
  }

  .hero-panel {
    min-height: 520px;
    padding: 34px 24px 84px;
  }

  .hero-copy h1 {
    font-size: clamp(52px, 17vw, 82px);
  }

  .hero-copy p {
    font-size: 17px;
  }

  .hero-dots {
    left: 24px;
  }

  .quick-actions,
  .business-grid {
    grid-template-columns: 1fr;
  }

  .site-footer {
    grid-template-columns: 1fr;
    gap: 10px;
    text-align: left;
    font-size: 13px;
  }

  .site-footer span:last-child {
    text-align: left;
  }
}
```

- [ ] **Step 2: Verify CSS file exists**

Run: `test -f styles.css && echo "styles exists"`

Expected: `styles exists`

---

### Task 3: Hero Carousel Behavior

**Files:**
- Create: `script.js`
- Consumes: DOM IDs and `data-slide-index` buttons from `index.html`.

**Interfaces:**
- Defines slide data in `slides`.
- Updates `#hero-line-1`, `#hero-line-2`, `#hero-line-3`, `#hero-blurb`.
- Toggles `.is-active` on hero dot buttons.

- [ ] **Step 1: Create carousel JavaScript**

Create `script.js`:

```javascript
const slides = [
  {
    lines: ["Connect.", "Share.", "Grow Together."],
    blurb: "Market Street AI is the innovation hub for the Ventura corridor, where industrial neighbors, business owners, and creatives swap ideas, tools, and business intelligence that moves the whole corridor forward."
  },
  {
    lines: ["Meet.", "Learn.", "Grow Smarter."],
    blurb: "Practical playbooks and step-by-step workflows, built for real skill levels. Automate the busywork, cut the errors, and turn local know-how into shared business intelligence."
  },
  {
    lines: ["Business.", "Intelligence.", "People First."],
    blurb: "Smarter tools, but people first. Market Street puts business intelligence in human hands: local-first, secure, and built around how owners actually work."
  },
  {
    lines: ["Amplify.", "Your.", "Expertise."],
    blurb: "AI does not replace what you know. It builds on it. Market Street helps you extend the skills and expertise you already have, so your experience and time go further."
  }
];

const heroCopy = document.querySelector(".hero-copy");
const line1 = document.getElementById("hero-line-1");
const line2 = document.getElementById("hero-line-2");
const line3 = document.getElementById("hero-line-3");
const blurb = document.getElementById("hero-blurb");
const dots = Array.from(document.querySelectorAll("[data-slide-index]"));

let currentSlide = 0;
let intervalId = null;

function setSlide(index) {
  currentSlide = index;
  const slide = slides[currentSlide];
  heroCopy.classList.add("is-fading");

  window.setTimeout(() => {
    line1.textContent = slide.lines[0];
    line2.textContent = slide.lines[1];
    line3.textContent = slide.lines[2];
    blurb.textContent = slide.blurb;
    dots.forEach((dot) => {
      dot.classList.toggle("is-active", Number(dot.dataset.slideIndex) === currentSlide);
    });
    heroCopy.classList.remove("is-fading");
  }, 280);
}

function startCarousel() {
  window.clearInterval(intervalId);
  intervalId = window.setInterval(() => {
    setSlide((currentSlide + 1) % slides.length);
  }, 8500);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    setSlide(Number(dot.dataset.slideIndex));
    startCarousel();
  });
});

startCarousel();
```

- [ ] **Step 2: Verify JS syntax**

Run: `node --check script.js`

Expected: `script.js` passes syntax check with no output.

---

### Task 4: Local Visual Verification

**Files:**
- Read: `index.html`
- Read: `styles.css`
- Read: `script.js`

**Interfaces:**
- Confirms the static site works as a local browser page.

- [ ] **Step 1: Start local server**

Run: `python3 -m http.server 4173`

Expected: server starts at `http://localhost:4173/`.

- [ ] **Step 2: Open the rebuilt page**

Open: `http://localhost:4173/index.html`

Expected: page renders with the dark grid dashboard design, orange accents, header, hero, news, directory, topics, ask panel, and footer.

- [ ] **Step 3: Check mobile layout**

Use a narrow viewport around 390px wide.

Expected: content stacks cleanly, no major text overlap, and navigation wraps instead of overflowing.

---

### Task 5: Project Memory Update

**Files:**
- Modify: `.ai/STATE.md`
- Create: `.ai/sessions/YYYY-MM-DD_HH-MM_codex_static_rebuild.md`

**Interfaces:**
- Records result, decisions, files changed, verification, blockers, and next action.

- [ ] **Step 1: Update `.ai/STATE.md`**

Record:

```markdown
- Clean static rebuild created with `index.html`, `styles.css`, and `script.js`.
- Original bundled export remains unchanged.
- Local verification completed or any blocker encountered.
```

- [ ] **Step 2: Create session handoff**

Create a concise handoff in `.ai/sessions/` with:

```markdown
# Static Rebuild Handoff

## Goal

Rebuild the Claude Design export as editable static files while preserving the design.

## Result

Summarize what was completed.

## Decisions

List only decisions made during implementation.

## Files Changed

List changed files.

## Verification

List checks run and outcomes.

## Blockers

List blockers or `None`.

## Exact Next Action

State the next useful site task.
```

- [ ] **Step 3: Report completion**

Final response must include:

- Result.
- Files changed.
- Verification performed.
- Risks or unverified areas.
