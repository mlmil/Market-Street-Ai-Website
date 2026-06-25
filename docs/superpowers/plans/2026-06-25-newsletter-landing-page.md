# Newsletter Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a focused static newsletter signup landing page for “Practical AI News & Moves for the Ventura Business Community.”

**Architecture:** Use the existing static site files. `index.html` owns page content and form markup, `styles.css` owns the responsive landing-page presentation, and `script.js` owns only progressive enhancement for the signup form.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript.

## Global Constraints

- Do not modify `Market Street AI - standalone (1).html`.
- Use `index.html`, `styles.css`, and `script.js`.
- Keep the site static with no new build tooling.
- Preserve the existing industrial orange/dark visual direction.
- The signup form is front-end only for this pass.
- This folder is not a Git repository, so skip commit steps and record the limitation in project memory.

---

### Task 1: Replace Portal Markup With Newsletter Page

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Existing `styles.css` and `script.js` links.
- Produces: Semantic sections and signup form ids/classes consumed by CSS and JavaScript: `newsletter-form`, `email`, `form-status`.

- [ ] **Step 1: Replace the body content**

Write a page with header, hero signup form, value cards, issue contents, sample issue preview, operator note, and footer. Keep `Market Street AI` as the brand and use the exact newsletter promise: “Practical AI News & Moves for the Ventura Business Community.”

- [ ] **Step 2: Verify required hooks exist**

Run: `rg 'newsletter-form|form-status|Practical AI News & Moves' index.html`

Expected: all three strings are present.

### Task 2: Rebuild Responsive Landing Styles

**Files:**
- Modify: `styles.css`

**Interfaces:**
- Consumes: Classes from Task 1.
- Produces: Responsive desktop and mobile layout with the existing dark/orange Market Street AI visual direction.

- [ ] **Step 1: Replace obsolete portal styles**

Rewrite `styles.css` around the new layout. Use stable responsive grids, readable text sizes, and no nested card containers.

- [ ] **Step 2: Check for layout-focused selectors**

Run: `rg 'hero|signup|issue|operator|@media' styles.css`

Expected: selectors for the new landing page and responsive rules are present.

### Task 3: Add Form Enhancement

**Files:**
- Modify: `script.js`

**Interfaces:**
- Consumes: `#newsletter-form`, `#email`, and `#form-status`.
- Produces: Submit handling that validates the browser-native email field, prevents a dead navigation, and shows a success message.

- [ ] **Step 1: Replace carousel JavaScript**

Remove the old hero carousel logic. Add a submit listener that reads the email field, stores no data, and shows a clear success message.

- [ ] **Step 2: Syntax check**

Run: `node --check script.js`

Expected: command exits successfully with no syntax errors.

### Task 4: Browser Verification And Project Memory

**Files:**
- Modify: `.ai/STATE.md`
- Create: `.ai/sessions/2026-06-25_10-33_codex_newsletter_landing.md`

**Interfaces:**
- Consumes: Finished static page.
- Produces: Updated project memory and a concise session handoff.

- [ ] **Step 1: Serve locally**

Run a local static server from the project root and load `index.html`.

- [ ] **Step 2: Inspect desktop and mobile**

Verify no obvious overlaps, blank sections, or unreadable text at desktop and mobile widths.

- [ ] **Step 3: Test form behavior**

Submit a valid email and confirm the page shows the success message.

- [ ] **Step 4: Update project memory**

Update `.ai/STATE.md` with the new status, verification, blockers, and next action. Add a session handoff in `.ai/sessions/`.
