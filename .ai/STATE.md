# Project State

Last updated: 2026-11-02 18:55 PST
Updated by: Claude

## Status

- 2026-11-02 (Claude): Unified main nav on index/playbooks/gpts/manifesto (AI Playbooks, GPTs & Templates, Discovery, Recent Issues; aria-current on own page). Header logo now `/Logos/white-web.png` (800px, 135 KB, proportional resize, original untouched). Absolute OG image/url on homepage; OG tags added to playbooks, gpts, manifesto. Homepage playbook card copy lists all four playbooks. `.vercelignore` now excludes internal files (.ai/, Progress Files/, docs/, prompts/, AGENTS.md, CLAUDE.md, etc.). Changes are uncommitted; backup copies in `_backup-2026-11-02/`.
- 2026-11-02 (Claude): Ventura map restored on homepage at Mike's request. Copied v2 map to `images/ventura-map.jpg` (original untouched). `body.home` shows it at 100% width, natural height, top-aligned: no cropping. Homepage hero panel is fully transparent (no blur/shadow) with a text shadow for readability; map shown at 65% strength via a 35% page-color overlay.

- Homepage is a focused newsletter landing page for "805 AI News & Moves".
- Newsletter signup form uses Vercel serverless function (`/api/subscribe`) to proxy to Buttondown API.
- Double-opt-in flow: subscriber created as unactivated → send-reminder triggers confirmation email → after confirming, welcome email sent.
- Social preview metadata (Open Graph + Twitter Card) with generated 1200x630 preview image.
- Homepage hero map background removed from the current trial layout after repeated cropping/positioning issues.
- Site deployed to Vercel at `https://market-street-ai-website-smoky.vercel.app`.
- Buttondown setup reported complete by Mike on 2026-06-30.
- Buttondown email CSS set to Lora font. Confirmation and welcome emails configured via API.
- Buttondown auditing_mode set to disabled.
- Hero side card changed from "Next Issue" to a "Worth Watching" YouTube video panel.
- Video panel now includes thumbnails in each row.
- Hero video panel now features one weekly video with Mike's summary underneath.
- Featured video thumbnail now crops out YouTube letterbox padding.
- Featured video thumbnail now uses YouTube `maxresdefault.jpg` without manual scale-up.
- Manifesto link moved from the top navigation to footer fine print.
- Custom GPTs & Templates homepage box now says the tools are made for the Ventura and Oxnard communities.
- GPTs page now includes Ventura County Content Engine as a live ChatGPT link.
- GPT card buttons are aligned flush to the bottom of each card.
- GPTs page now includes AI Pre-Op Onboarding Tool as a live ChatGPT link.
- GPTs page now includes 805 AI Readiness Check-Up as a live ChatGPT link.
- Trial branch `codex/ui-ux-pro-max-trial` applies UI/UX Pro Max polish passes to the GPTs page and homepage.
- Discovery Board added for Phil intake at `/phase1.html`.
- Discovery Board first panel uses `Where is the pressure showing up?` with generic business pressure points.
- Discovery page-by-page questionnaire variant added at `/phase1-wizard.html`.
- Discovery pages are now standalone Spark AI pages with no Market Street AI header/nav/footer links.
- Discovery pages now include a Business Snapshot panel/step: business name, role/position, staff size, website, current AI tools in use, and short business description.
- Discovery pages were copied into their own standalone repo at `/Volumes/VADER/Projects/AI Foundation Intake/Discovery` and pushed to GitHub: `https://github.com/mlmil/AI-Foundation-Intake-Discovery`.

## Pages

- **index.html** — Homepage with newsletter signup, value strip, Recent Issues (6 cards), What You Get section
- **playbooks.html** — 4 playbooks: Construction, Professional Services, Home Care, Home Services (preview images + Google Drive download links)
- **gpts.html** — 4 GPTs: Ventura Business Dashboard Builder, Ventura County Content Engine, AI Pre-Op Onboarding Tool, 805 AI Readiness Check-Up (links to ChatGPT)
- **phase1.html** — Standalone Spark AI Discovery Board with Business Snapshot, multiple-choice panels, comment boxes, and Discovery / Phase 2 / later / not now sorting
- **phase1-wizard.html** — Standalone Spark AI page-by-page Discovery Questionnaire version with Business Snapshot as step one, Back/Next navigation, summary review, and copy-summary output
- **manifesto.html** — Full 8-principles manifesto, Lora serif, $400/month updated, closing box with Mike's signature

## Navigation

- Main nav: AI Playbooks → GPTs & Templates → Discovery → Recent Issues
- Footer fine print includes Manifesto link.
- GPTs page trial nav highlights `GPTs & Templates` with `aria-current="page"`.
- Operator section REMOVED from nav and page
- Animated underline on nav link hover (orange line slides in from left)
- Value strip on homepage: AI Playbooks (linked), Custom GPTs & Templates (linked), By Mike (Substack link)

## Recent Issues (6 cards in one grid)

1. Agent Versus Chat (Philosophy) — expandable full article
2. The Power of the Little Fires (Strategy) — expandable full article
3. The Greatest AI Skill Nobody Talks About (Judgment) — expandable full article
4. Turn missed calls into follow-up tasks (Tool)
5. Audit your front desk questions (Local Move)
6. Do not automate trust away (Watch)

## Hero Video Panel

- Header: `Worth Watching` / `YouTube`
- Primary video: `The Winners and Losers of the AI Revolution | Tyler Cowen [ARC 2026]`
- URL: `https://www.youtube.com/watch?v=hfZWfkQR9zs&t=333s`
- Secondary links are YouTube searches for practical AI small business and AI agents/business workflows.
- First video uses the real YouTube thumbnail from `https://i.ytimg.com/vi/hfZWfkQR9zs/maxresdefault.jpg`.
- Former secondary hero link `Practical AI for small business` moved to the Recent Issues `Watch` card.

## Current facts

- Remote: `https://github.com/mlmil/Market-Street-Ai-Website.git`
- Buttondown handle: `mikemllr77`
- Buttondown API token: Vercel env var `BUTTONDOWN_API_TOKEN`
- Vercel project: `mlmils-projects/market-street-ai-website`
- Background image (DO NOT CHANGE): `Assets /Market Street Ai Website/market street AI web page on progress/Can_you_recreate_this_in_202605091921_v2.jpeg` (2400px, 1.4 MB)
- Original background (14 MB, on disk only, not referenced): `...Can_you_recreate_this_in_202605091921.jpeg`
- First compressed background (1920px, too zoomed, not referenced): `...Can_you_recreate_this_in_202605091921_compressed.jpeg`

## CSS notes

- Duplicate media query blocks were cleaned up (removed ~111 lines of duplicated CSS)
- `.site-header` retains its original panel styling (dark background, border, shadow)
- Nav animated underline added via `.main-nav a::after` pseudo-element
- `.gpt-card` and `.playbook-card` have dedicated CSS for consistent card styling
- `.gpt-card .button` uses `margin-top: auto` so card buttons align to the bottom.
- Trial branch adds `.gpts-grid` for a balanced 2x2 GPT card layout.
- Trial branch adds homepage proof chips and elevated value cards.
- Trial branch removes the signup wrapper box and expands the Worth Watching summary.
- Trial branch removes the negative video-card offset that clipped the card top; the video card now sits inside the hero and aligns near the newsletter note bottom.
- Discovery Board uses `phase1.js` for checkbox/comment capture, browser-local autosave, clear, and copy-summary behavior.
- Discovery Questionnaire uses `phase1-wizard.js` for step navigation, checkbox/comment capture, browser-local autosave, clear, and copy-summary behavior.
- `.issue-body` provides scrollable expandable content for Recent Issues articles

## Decisions in force

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Newsletter-first landing page; Spark AI visible without hard sales pitch.
- Dark industrial/orange Market Street AI visual direction.
- Deploy to Vercel with serverless API proxy for subscriptions.
- Double-opt-in flow for subscribers.
- Lora font for Buttondown emails.
- Current trial homepage no longer uses the Ventura map background.
- Discovery is a guided intake/alignment tool, not a backend CRM or client data store; entries stay in the visitor's browser until copied.
- Discovery pages should not visually connect to Market Street AI; they are Spark AI standalone intake assets.
- Operator section removed per user request.

## Blockers

- No custom domain yet.
- Vercel not connected to GitHub for auto-deploys.
- Buttondown newsletter name has typos in account settings.
- Playbooks page missing Cleaning and Staffing playbooks (were added then lost in revert). Playbook PNG files still on disk in `playbooks/` folder.
- Real subscriber flow still needs a named test email before submitting to Buttondown.

## Working tree

- Latest commit on main before trial: `ae595e6` (Replace automation checkup GPT)
- Latest pending trial update: no-map homepage, unboxed signup form, expanded Worth Watching summary, unclipped video card, standalone Spark AI Discovery Board and Questionnaire with Business Snapshot intake, plus the separate pushed Discovery repo.
- Untracked: `newsletter/`, `Logos/logo 2.png`, `Logos/logo1.png`, `Biopics/biopic small.af`, `playbooks/cleaning.png`, `playbooks/staffing.png`
- Do not overwrite: `Market Street AI - standalone (1).html`

## Next action

1. Compare the Discovery Board at `http://localhost:8099/phase1.html` with the page-by-page Discovery Questionnaire at `http://localhost:8099/phase1-wizard.html`.
2. Decide whether the board should remain public-nav visible or become a private/direct-link page.
3. Run a real signup test with a user-approved test email, then verify confirmation + welcome emails.
4. Re-add Cleaning and Staffing playbooks to playbooks.html (PNG files already on disk).
5. Clean up Buttondown newsletter name typos.
6. Optionally connect Vercel to GitHub for auto-deploys.
7. Optionally set up custom domain.
