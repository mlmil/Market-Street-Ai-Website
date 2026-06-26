# Project State

Last updated: 2026-06-25 16:15 PDT
Updated by: Blue Rose

## Status

- Homepage is a focused newsletter landing page for "805 AI News & Moves".
- Newsletter promise: "Practical AI-powered weekly playbooks and insights for the Ventura and Oxnard business community."
- Signup form uses a Vercel serverless function (`/api/subscribe`) to proxy subscriptions to the Buttondown API. No cross-origin issues, no captcha, users stay on the site.
- Double-opt-in flow: subscriber created as unactivated -> send-reminder triggers confirmation email -> after confirming, welcome email sent automatically.
- Social preview metadata (Open Graph + Twitter Card) added with a generated 1200x630 preview image.
- Background image compressed from 14 MB to 716 KB; CSS references the compressed version.
- Local Git repository on branch `main`, pushed to GitHub.
- All changes committed and pushed.
- Site deployed to Vercel at `https://market-street-ai-website-smoky.vercel.app`.
- `.gitignore` and `.vercelignore` added to protect `newsletter/` folder (contains Buttondown API token).
- Buttondown `auditing_mode` set to `disabled` (was `aggressive`, blocking legitimate signups).
- Buttondown `subscription_redirect_url` set to the Vercel URL.
- Buttondown confirmation and welcome emails configured via API (custom_subscription_confirmation_email_* and custom_subscription_confirmed_email_*).
- Buttondown email CSS updated to use Lora font (closest free web font to Claude's Galaxie Copernicus).
- Buttondown account is UNDER REVIEW (disabled). Cannot send emails until approved. Created today, pending human review at Buttondown.

## Active objective

- Wait for Buttondown account approval, then test the full email flow end-to-end.
- Mike wants to make changes to the landing page (will be done in a new chat).

## Current facts

- Main prototype: `Market Street AI - standalone (1).html` (unchanged reference).
- Live editable static site files: `index.html`, `styles.css`, `script.js`.
- Serverless function: `api/subscribe.js` — proxies subscription requests to Buttondown API with double-opt-in flow.
- Remote: `https://github.com/mlmil/Market-Street-Ai-Website.git`.
- Buttondown handle: `mikemllr77`.
- Buttondown API token stored as Vercel environment variable `BUTTONDOWN_API_TOKEN`.
- Signup flow: form JS fetch -> `/api/subscribe` -> Buttondown API creates unactivated subscriber + sends confirmation email -> user clicks confirm link -> welcome email sent -> redirect back to Vercel site.
- Vercel project: `mlmils-projects/market-street-ai-website`.
- Production URL: `https://market-street-ai-website-smoky.vercel.app`.
- Compressed background: `Assets /Market Street Ai Website/market street AI web page on progress/Can_you_recreate_this_in_202605091921_compressed.jpeg` (716 KB).
- Social preview image: `Logos/social-preview.png` (1200x630, 384 KB).
- Operator image: `Biopics/mikes-bio-pic-master-small.jpg`.
- Header logo: `Logos/white.png`.

## Decisions in force

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Use clean static files for the editable site: `index.html`, `styles.css`, `script.js`.
- Newsletter-first landing page; Spark AI visible as operator without hard sales pitch.
- Dark industrial/orange Market Street AI visual direction.
- Ventura map texture behind dark overlays for local context.
- Compressed background replaces original in CSS; original kept on disk for reference.
- Deploy to Vercel with serverless API proxy for subscriptions.
- Buttondown auditing disabled to allow API-based signups without firewall blocks.
- Double-opt-in flow (unactivated -> confirmation email -> welcome email) rather than auto-activating subscribers.
- Lora font for Buttondown emails (closest free match to Claude's Galaxie Copernicus).

## Blockers / risks

- **BUTTONDOWN ACCOUNT UNDER REVIEW (disabled)** — cannot send any emails until approved. Created 2026-06-25, pending human review. This blocks: confirmation emails, welcome emails, newsletter sends.
- No custom domain yet — site lives at `market-street-ai-website-smoky.vercel.app`.
- Vercel deployment is not yet connected to the GitHub repo for auto-deploys.
- `BUTTONDOWN_API_TOKEN` is a sensitive env var on Vercel — not in the repo.
- Buttondown newsletter name has typos in account settings ("Ai" not "AI", "NEwsletter") — should be cleaned up.
- Email CSS uses `@import` for Google Fonts Lora — some email clients (Gmail web, Outlook) don't support `@import` and will fall back to Georgia.
- The `api/subscribe.js` file contains a template literal with the Buttondown auth header that some tools redact as `***` in display — the actual file on disk and in Git is correct (verified with `node --check` and `xxd`).

## Working tree

- Latest commit: `c0d59a0` (`Fix template literal syntax in subscribe function`) pushed to `origin/main`.
- All tracked changes are committed and pushed.
- Untracked (gitignored): `newsletter/`, `Logos/logo 2.png`, `Logos/logo1.png`, `Biopics/biopic small.af`, `prompts/.md.md`, `prompts/handoff.md`.
- Do not overwrite: `Market Street AI - standalone (1).html`.

## Verification status

- Passing: `/api/subscribe` returns 200 with `{"success": true}` for valid new email; subscriber created as `unactivated` type; `send-reminder` API returns 200; duplicate email handled gracefully; invalid email returns 400; production site serves at HTTP 200 with form and JS handler present; compressed background and social preview image serve at 200; OG/Twitter meta tags present in deployed HTML; Buttondown confirmation and welcome email content configured; Buttondown CSS updated to Lora font.
- Not yet verified: actual email delivery (blocked by Buttondown account review); social preview rendering on actual social platforms; deployed custom domain.

## Next action

1. **Wait for Buttondown account approval** — check email for approval notification, or log into https://buttondown.com/mikemllr77 and look for the review banner to disappear.
2. Once approved: test a real signup from `https://market-street-ai-website-smoky.vercel.app` and verify confirmation + welcome emails arrive.
3. Clean up the Buttondown newsletter name/description in account settings.
4. Connect Vercel project to GitHub repo for auto-deploys on push.
5. Optionally set up a custom domain in Vercel.
6. Mike wants to make landing page design changes in a new chat.