# Project State

Last updated: 2026-06-25 15:10 PDT
Updated by: Blue Rose

## Status

- Initial startup completed.
- Current Claude Design export reviewed as the visual reference.
- Clean editable static rebuild exists.
- Homepage has been converted into a focused newsletter landing page.
- Newsletter promise in force: "805 AI News & Moves" with "Practical AI-powered weekly playbooks and insights for the Ventura and Oxnard business community."
- The Ventura map image is now used as the fixed textured page background.
- Local Git repository initialized and pushed to GitHub.
- Operator bio image switched to the wider studio photo.
- Operator image display increased by 20%.
- Operator section now stacks text above the image, with the image increased another 20%.
- Operator image crop removed so the studio photo renders at its natural ratio.
- Header now uses the Market Street AI logo image.
- Header background darkened to improve logo visibility.
- Header logo switched to the white logo variant.
- Header panel height and navigation label size increased.
- Signup form now uses native Buttondown POST attributes; fake JavaScript submit handler removed.
- Buttondown handle placeholder replaced with real handle `mikemllr77`. Form is live and pointing at the real Buttondown embed endpoint.

## Active objective

- Launch a clear newsletter signup page for Market Street AI as the first public-facing front door.

## Current facts

- Main prototype: `Market Street AI - standalone (1).html`.
- The prototype is a self-contained bundled export and should remain unchanged as a reference.
- Live editable static site files are `index.html`, `styles.css`, and `script.js`.
- The folder is a Git repository on branch `main`.
- Remote: `https://github.com/mlmil/Market-Street-Ai-Website.git`.
- Website strategy and task context live in `Progress Files/` and `Assets /Market Street Ai Website/Market Street Ai Elements/`.
- The signup form posts natively to Buttondown at `https://buttondown.email/api/emails/embed-subscribe/mikemllr77`.
- Buttondown API token exists in `newsletter/buttondown prompt.md` for pushing RTF drafts via the Buttondown API.
- Buttondown newsletter name: "Ai News Tips and Tricks Weekly NEwsletter For Ventura & Oxnard Business community"
- Buttondown username/handle: `mikemllr77`
- Background image source: `Assets /Market Street Ai Website/market street AI web page on progress/Can_you_recreate_this_in_202605091921.jpeg`.
- Operator image source: `Biopics/mikes-bio-pic-master-small.jpg`.
- Header logo source: `Logos/white.png`.

## Decisions in force

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Use clean static files for the editable site: `index.html`, `styles.css`, and `script.js`.
- Replace the placeholder portal homepage with a newsletter-first landing page.
- Keep Spark AI visible as the builder/operator without turning the page into a hard sales pitch.
- Preserve the dark industrial/orange Market Street AI visual direction.
- Use the Ventura map texture behind dark overlays for local context while preserving readability.

## Blockers / risks

- No social preview image has been created yet.
- Background JPEG is about 14 MB and should be compressed before deployment.
- Buttondown has Cloudflare Turnstile verification on the embed endpoint — subscribers will see a captcha challenge. This is expected behavior but may reduce conversion.
- Newsletter name on Buttondown has typos ("Ai" not "AI", "NEwsletter") — should be cleaned up in Buttondown settings.
- Untracked `newsletter/` folder contains the Buttondown API prompt and newsletter content drafts. Not yet committed.
- Untracked logo variants in `Logos/` (`logo 2.png`, `logo1.png`) — not yet committed.
- Untracked Affinity Photo file in `Biopics/` — not yet committed.

## Working tree

- Initial GitHub commit: `7402ced` (`Initial Market Street AI website`) pushed to `origin/main`.
- Latest content update removes fake JavaScript signup interception and switches the form to native Buttondown POST attributes.
- Latest commit: `a532a3c` (`Use native Buttondown signup form`).
- Form handle replacement in `index.html` is uncommitted.
- Expected changed files from this session: `index.html`, `.ai/STATE.md`, `.ai/sessions/2026-06-25_15-10_bluerose_buttondown_handle.md`.
- Do not overwrite: `Market Street AI - standalone (1).html`.

## Verification status

- Passing: No `PUT_YOUR_BUTTONDOWN_HANDLE_HERE` placeholder remains in any file; `index.html` form action and onsubmit use `mikemllr77`; Buttondown embed endpoint returned the subscription verification page (HTTP 200 with Cloudflare Turnstile challenge — expected); local server returned HTTP 200; served HTML includes `embed-subscribe/mikemllr77`; `node --check script.js` passed (only a comment); no `preventDefault` or fake submit listener remains.
- Not yet verified: real email-provider submission end-to-end (captcha prevents automated test); deployed-host rendering; social preview card; compressed production background asset.

## Next action

1. Commit the handle replacement and push to GitHub.
2. Add social preview metadata and image.
3. Compress/export the Ventura map background for production.
4. Deploy to a hosting provider and test a real signup.
5. Clean up the Buttondown newsletter name/description in account settings.