# Project State

Last updated: 2026-06-30 22:52 PDT
Updated by: Codex

## Status

- Homepage is a focused newsletter landing page for "805 AI News & Moves".
- Newsletter signup form uses Vercel serverless function (`/api/subscribe`) to proxy to Buttondown API.
- Double-opt-in flow: subscriber created as unactivated → send-reminder triggers confirmation email → after confirming, welcome email sent.
- Social preview metadata (Open Graph + Twitter Card) with generated 1200x630 preview image.
- Background image: 2400px JPEG (1.4 MB) — `Can_you_recreate_this_in_202605091921_v2.jpeg`. DO NOT CHANGE.
- Site deployed to Vercel at `https://market-street-ai-website-smoky.vercel.app`.
- Buttondown setup reported complete by Mike on 2026-06-30.
- Buttondown email CSS set to Lora font. Confirmation and welcome emails configured via API.
- Buttondown auditing_mode set to disabled.

## Pages

- **index.html** — Homepage with newsletter signup, value strip, Recent Issues (6 cards), What You Get section
- **playbooks.html** — 4 playbooks: Construction, Professional Services, Home Care, Home Services (preview images + Google Drive download links)
- **gpts.html** — 2 GPTs: Ventura Business Dashboard Builder, Ventura County Business Context Builder (links to ChatGPT) + 1 placeholder
- **manifesto.html** — Full 8-principles manifesto, Lora serif, $400/month updated, closing box with Mike's signature

## Navigation

- Main nav: AI Playbooks → GPTs & Templates → Manifesto → Recent Issues
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
- `.issue-body` provides scrollable expandable content for Recent Issues articles

## Decisions in force

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Newsletter-first landing page; Spark AI visible without hard sales pitch.
- Dark industrial/orange Market Street AI visual direction.
- Deploy to Vercel with serverless API proxy for subscriptions.
- Double-opt-in flow for subscribers.
- Lora font for Buttondown emails.
- Background image is the 2400px v2 version — DO NOT CHANGE.
- Operator section removed per user request.

## Blockers

- No custom domain yet.
- Vercel not connected to GitHub for auto-deploys.
- Buttondown newsletter name has typos in account settings.
- Playbooks page missing Cleaning and Staffing playbooks (were added then lost in revert). Playbook PNG files still on disk in `playbooks/` folder.
- Real subscriber flow still needs a named test email before submitting to Buttondown.

## Working tree

- Latest commit: `b06ad12` (Use 2400px background)
- All tracked changes committed and pushed.
- Untracked: `newsletter/`, `Logos/logo 2.png`, `Logos/logo1.png`, `Biopics/biopic small.af`, `playbooks/cleaning.png`, `playbooks/staffing.png`
- Do not overwrite: `Market Street AI - standalone (1).html`

## Next action

1. Run a real signup test with a user-approved test email, then verify confirmation + welcome emails.
2. Re-add Cleaning and Staffing playbooks to playbooks.html (PNG files already on disk).
3. Clean up Buttondown newsletter name typos.
4. Optionally connect Vercel to GitHub for auto-deploys.
5. Optionally set up custom domain.
