# Newsletter Setup & Deployment

Date/time: 2026-06-25 16:15 PDT
Agent: Blue Rose

## Goal

Take over from Codex (who left the Buttondown form with a placeholder handle) and finish the newsletter setup: wire the form to a real Buttondown account, deploy to Vercel, and get the full subscription flow working.

## Result

- Discovered Buttondown handle `mikemllr77` by querying the Buttondown API with the token from `newsletter/buttondown prompt.md`.
- Replaced placeholder handle in `index.html`.
- Compressed background image from 14 MB to 716 KB (95% reduction).
- Created 1200x630 social preview image (`Logos/social-preview.png`) with the white logo on dark background.
- Added Open Graph + Twitter Card meta tags to `index.html`.
- Added `.gitignore` and `.vercelignore` to protect the Buttondown API token.
- Deployed to Vercel at `https://market-street-ai-website-smoky.vercel.app`.
- Set `BUTTONDOWN_API_TOKEN` as Vercel environment variable.

### Form/subscription evolution

The signup form went through several iterations as we hit cross-origin issues:

1. **Native POST to Buttondown** (Codex's approach) — 403 Forbidden because Buttondown blocks cross-origin form submissions from non-Buttondown domains.
2. **Serverless API proxy** (`/api/subscribe.js`) — created a Vercel serverless function that calls the Buttondown API server-side. This fixed the 403. Users stay on the site with inline success/error messages via JS fetch.
3. **Auto-activate subscribers** (`type=regular`) — worked for creating subscribers but no confirmation or welcome email was sent.
4. **Double-opt-in with send-reminder** — final approach: create subscriber as `unactivated`, then call `send-reminder` to trigger the confirmation email. After confirming, the welcome email sends automatically. Confirmation and welcome email content configured via Buttondown API.

### Buttondown configuration applied via API

- `auditing_mode` set to `disabled` (was `aggressive`, blocking legitimate signups)
- `subscription_redirect_url` set to `https://market-street-ai-website-smoky.vercel.app/?subscribed=true`
- `custom_subscription_confirmation_email_subject`: "Confirm your subscription to 805 AI News & Moves"
- `custom_subscription_confirmation_email_text`: includes `{{ confirmation_url }}` link
- `custom_subscription_confirmed_email_subject`: "Welcome to 805 AI News & Moves"
- `custom_subscription_confirmed_email_text`: welcome message from Mike
- CSS updated to use Lora font (closest free web font to Claude's Galaxie Copernicus), with orange brand links and clean typography

### Blocker

Buttondown account is under review (disabled). Created today (2026-06-25). A real person at Buttondown is reviewing the account — "usually takes a few hours but can sometimes take up to a day." No emails can be sent until approved. The code and configuration are all correct and will work automatically once approved.

## Decisions

- Use serverless API proxy instead of native form POST (fixes cross-origin 403)
- Double-opt-in flow (confirmation email + welcome email) rather than auto-activating
- Lora font for Buttondown emails
- Deploy to Vercel with `BUTTONDOWN_API_TOKEN` as environment variable
- `.gitignore` and `.vercelignore` to protect API token

## Files changed

- `index.html` — Buttondown handle replacement, social preview metatags, form changed to JS fetch to `/api/subscribe`, inline success/error messages
- `styles.css` — background image references compressed version (2 occurrences)
- `api/subscribe.js` — Vercel serverless function for Buttondown subscription proxy
- `.gitignore` — protect `newsletter/`, Affinity files, unused logos
- `.vercelignore` — exclude `newsletter/` from Vercel deploys
- `Logos/social-preview.png` — 1200x630 social preview image (new file)
- `Assets /.../Can_you_recreate_this_in_202605091921_compressed.jpeg` — compressed background (new file)
- `.ai/STATE.md` — updated
- `.ai/sessions/2026-06-25_16-15_bluerose_newsletter_setup.md` — this handoff

## Verification

- `/api/subscribe` returns 200 `{"success": true}` for valid new email (tested with real email format)
- Duplicate email returns 200 `{"success": true, "already_subscribed": true}`
- Invalid email returns 400 with validation error
- Subscriber created as `unactivated` type (verified via API)
- `send-reminder` returns 200
- Production site serves at HTTP 200
- Form and JS handler present in deployed HTML
- Compressed background serves at HTTP 200 (716 KB)
- Social preview image serves at HTTP 200 (384 KB)
- OG/Twitter meta tags in deployed HTML
- `node --check api/subscribe.js` passed
- Buttondown confirmation and welcome email content verified via API
- Buttondown CSS verified as Lora font via API

## Blockers

- **Buttondown account under review (disabled)** — cannot send emails until approved. No code action needed; wait for Buttondown's human review.

## Exact next action

1. Wait for Buttondown approval email (check inbox + spam).
2. Once approved: test real signup from `https://market-street-ai-website-smoky.vercel.app`.
3. Verify confirmation email arrives, click link, verify welcome email arrives.
4. Clean up Buttondown newsletter name typos.
5. Connect Vercel to GitHub for auto-deploys.
6. Mike wants to make landing page design changes in a new chat.