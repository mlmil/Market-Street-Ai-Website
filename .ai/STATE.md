# Project State

Last updated: 2026-06-25 16:00 PDT
Updated by: Blue Rose

## Status

- Homepage is a focused newsletter landing page for "805 AI News & Moves".
- Newsletter promise: "Practical AI-powered weekly playbooks and insights for the Ventura and Oxnard business community."
- Signup form uses a Vercel serverless function (`/api/subscribe`) to proxy subscriptions to the Buttondown API. No cross-origin issues, no captcha, users stay on the site.
- Social preview metadata (Open Graph + Twitter Card) added with a generated 1200x630 preview image.
- Background image compressed from 14 MB to 716 KB; CSS references the compressed version.
- Local Git repository on branch `main`, pushed to GitHub.
- All changes committed and pushed.
- Site deployed to Vercel at `https://market-street-ai-website-smoky.vercel.app`.
- `.gitignore` and `.vercelignore` added to protect `newsletter/` folder (contains Buttondown API token).
- Buttondown `auditing_mode` set to `disabled` (was `aggressive`, blocking legitimate signups).
- Buttondown `subscription_redirect_url` set to the Vercel URL.

## Active objective

- Test a real signup from the deployed URL and verify the confirmation email arrives.

## Current facts

- Main prototype: `Market Street AI - standalone (1).html` (unchanged reference).
- Live editable static site files: `index.html`, `styles.css`, `script.js`.
- Serverless function: `api/subscribe.js` — proxies subscription requests to Buttondown API.
- Remote: `https://github.com/mlmil/Market-Street-Ai-Website.git`.
- Buttondown handle: `mikemllr77`.
- Buttondown API token stored as Vercel environment variable `BUTTONDOWN_API_TOKEN`.
- Signup flow: form JS fetch -> `/api/subscribe` -> Buttondown API -> inline success/error message. No page navigation.
- Vercel project: `mlmils-projects/market-street-ai-website`.
- Production URL: `https://market-street-ai-website-smoky.vercel.app`.

## Decisions in force

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Use clean static files for the editable site: `index.html`, `styles.css`, `script.js`.
- Newsletter-first landing page; Spark AI visible as operator without hard sales pitch.
- Dark industrial/orange Market Street AI visual direction.
- Ventura map texture behind dark overlays for local context.
- Compressed background replaces original in CSS; original kept on disk for reference.
- Deploy to Vercel with serverless API proxy for subscriptions.
- Buttondown auditing disabled to allow API-based signups without firewall blocks.

## Blockers / risks

- Buttondown sends a confirmation email to new subscribers. If the email lands in spam, subscribers won't confirm.
- No custom domain yet — site lives at `market-street-ai-website-smoky.vercel.app`.
- Vercel deployment is not yet connected to the GitHub repo for auto-deploys.
- `BUTTONDOWN_API_TOKEN` is a sensitive env var on Vercel — not in the repo.
- Buttondown newsletter name has typos in account settings ("Ai" not "AI", "NEwsletter").

## Working tree

- Latest commit: `aaad911` (`Handle duplicate subscribers gracefully and clean up error messages`) pushed to `origin/main`.
- All tracked changes are committed and pushed.
- Do not overwrite: `Market Street AI - standalone (1).html`.

## Verification status

- Passing: `/api/subscribe` returns 200 with `{"success": true}` for valid new email; returns 200 with `{"success": true, "already_subscribed": true}` for duplicate; returns 400 for invalid email; production site serves at HTTP 200 with form and JS handler present; test subscribers created and cleaned up via API; compressed background and social preview image serve at 200; OG/Twitter meta tags present in deployed HTML.
- Not yet verified: real signup from a browser with a real email and confirmation of the Buttondown confirmation email arriving in inbox.

## Next action

1. Open `https://market-street-ai-website-smoky.vercel.app` in a browser, enter a real email, submit, and verify the inline success message appears.
2. Check inbox for the Buttondown confirmation email.
3. Connect the Vercel project to the GitHub repo for auto-deploys on push.
4. Optionally set up a custom domain in Vercel.
5. Clean up the Buttondown newsletter name/description in account settings.