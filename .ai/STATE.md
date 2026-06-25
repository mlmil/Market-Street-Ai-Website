# Project State

Last updated: 2026-06-25 14:47 PDT
Updated by: Codex

## Status

- Initial startup completed.
- Current Claude Design export reviewed as the visual reference.
- Clean editable static rebuild exists.
- Homepage has been converted into a focused newsletter landing page.
- Newsletter promise in force: “805 AI News & Moves” with “Practical AI-powered weekly playbooks and insights for the Ventura and Oxnard business community.”
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

## Active objective

- Launch a clear newsletter signup page for Market Street AI as the first public-facing front door.

## Current facts

- Main prototype: `Market Street AI - standalone (1).html`.
- The prototype is a self-contained bundled export and should remain unchanged as a reference.
- Live editable static site files are `index.html`, `styles.css`, and `script.js`.
- The folder is a Git repository on branch `main`.
- Remote: `https://github.com/mlmil/Market-Street-Ai-Website.git`.
- Website strategy and task context live in `Progress Files/` and `Assets /Market Street Ai Website/Market Street Ai Elements/`.
- The signup form posts natively to Buttondown placeholder URLs using `[PUT_YOUR_BUTTONDOWN_HANDLE_HERE]`.
- Background image source: `Assets /Market Street Ai Website/market street AI web page on progress/Can_you_recreate_this_in_202605091921.jpeg`.
- Operator image source: `Biopics/mikes-bio-pic-master-small.jpg`.
- Header logo source: `Logos/white.png`.
- Buttondown handle placeholder must be replaced before launch.

## Decisions in force

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Use clean static files for the editable site: `index.html`, `styles.css`, and `script.js`.
- Replace the placeholder portal homepage with a newsletter-first landing page.
- Keep Spark AI visible as the builder/operator without turning the page into a hard sales pitch.
- Preserve the dark industrial/orange Market Street AI visual direction.
- Use the Ventura map texture behind dark overlays for local context while preserving readability.

## Blockers / risks

- Newsletter signup is not connected to Mailchimp, Buttondown, ConvertKit, Google Forms, or another provider.
- Buttondown form still contains `[PUT_YOUR_BUTTONDOWN_HANDLE_HERE]` placeholder.
- No social preview image has been created yet.
- Background JPEG is about 14 MB and should be compressed before deployment.

## Working tree

- Initial GitHub commit: `7402ced` (`Initial Market Street AI website`) pushed to `origin/main`.
- Latest content update removes fake JavaScript signup interception and switches the form to native Buttondown POST attributes.
- Expected changed files from the newsletter pass: `index.html`, `styles.css`, `script.js`, `.ai/STATE.md`, `.ai/sessions/2026-06-25_10-33_codex_newsletter_landing.md`, `.ai/sessions/2026-06-25_11-31_codex_map_texture_background.md`, `.ai/sessions/2026-06-25_11-51_codex_github_initial_push.md`, `docs/superpowers/specs/2026-06-25-newsletter-landing-page-design.md`, and `docs/superpowers/plans/2026-06-25-newsletter-landing-page.md`.
- Do not overwrite: `Market Street AI - standalone (1).html`.

## Verification status

- Passing: startup docs read; exact search for `early list` returns no matches; no `preventDefault` or submit listener remains in `index.html` or `script.js`; `node --check script.js`; local server returned `HTTP/1.0 200 OK`; served HTML includes requested Buttondown `action`, `method`, `target`, and `onsubmit` attributes; browser loaded `http://localhost:8099/` with correct title and rendered newsletter heading; favicon 404 fixed; background image file exists and returns `HTTP/1.0 200 OK`; operator image exists and returns `HTTP/1.0 200 OK`; white logo image exists and returns `HTTP/1.0 200 OK`.
- Not yet verified: real email-provider submission; deployed-host rendering; social preview card; compressed production background asset.

## Next action

1. Replace `[PUT_YOUR_BUTTONDOWN_HANDLE_HERE]` with the real Buttondown handle.
2. Add social preview metadata and image.
3. Compress/export the Ventura map background for production.
