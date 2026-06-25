# Project State

Last updated: 2026-06-25 15:35 PDT
Updated by: Blue Rose

## Status

- Homepage is a focused newsletter landing page for "805 AI News & Moves".
- Newsletter promise: "Practical AI-powered weekly playbooks and insights for the Ventura and Oxnard business community."
- Signup form wired to real Buttondown handle `mikemllr77` — endpoint live and accepting subscriptions.
- Social preview metadata (Open Graph + Twitter Card) added with a generated 1200x630 preview image.
- Background image compressed from 14 MB to 716 KB; CSS references the compressed version.
- Local Git repository on branch `main`, pushed to GitHub.
- All changes committed and pushed.
- Site deployed to Vercel at `https://market-street-ai-website-smoky.vercel.app`.
- `.gitignore` added to protect `newsletter/` folder (contains Buttondown API token) from being committed.

## Active objective

- Test a real signup from the deployed URL and verify social preview rendering.

## Current facts

- Main prototype: `Market Street AI - standalone (1).html` (unchanged reference).
- Live editable static site files: `index.html`, `styles.css`, `script.js`.
- Remote: `https://github.com/mlmil/Market-Street-Ai-Website.git`.
- Buttondown handle: `mikemllr77`.
- Buttondown API token in `newsletter/buttondown prompt.md` for pushing RTF drafts.
- Signup form posts to `https://buttondown.email/api/emails/embed-subscribe/mikemllr77`.
- Background image (compressed): `Assets /Market Street Ai Website/market street AI web page on progress/Can_you_recreate_this_in_202605091921_compressed.jpeg` (716 KB).
- Background image (original, unused): `...Can_you_recreate_this_in_202605091921.jpeg` (14 MB).
- Social preview image: `Logos/social-preview.png` (1200x630, 384 KB).
- Operator image: `Biopics/mikes-bio-pic-master-small.jpg`.
- Header logo: `Logos/white.png`.
- Vercel project: `mlmils-projects/market-street-ai-website`.
- Production URL: `https://market-street-ai-website-smoky.vercel.app`.

## Decisions in force

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Use clean static files for the editable site: `index.html`, `styles.css`, `script.js`.
- Newsletter-first landing page; Spark AI visible as operator without hard sales pitch.
- Dark industrial/orange Market Street AI visual direction.
- Ventura map texture behind dark overlays for local context.
- Compressed background replaces original in CSS; original kept on disk for reference.
- Deploy to Vercel; future pushes auto-deploy via Vercel Git integration if connected.

## Blockers / risks

- Buttondown has Cloudflare Turnstile captcha on the embed endpoint — subscribers will see a verification challenge. Expected but may reduce conversion.
- Newsletter name on Buttondown has typos ("Ai" not "AI", "NEwsletter") — should be cleaned up in Buttondown settings.
- `newsletter/` folder is .gitignored but was included in the Vercel deploy (Vercel uploads all files, not just tracked ones). The API token is on the private Vercel deployment — low risk but should be excluded via `.vercelignore`.
- Vercel deployment is not yet connected to the Git repo for auto-deploys.

## Working tree

- Latest commit: `9228c03` (`Add .gitignore for newsletter API tokens and working files`) pushed to `origin/main`.
- All tracked changes are committed and pushed.
- Do not overwrite: `Market Street AI - standalone (1).html`.

## Verification status

- Passing: No placeholder handle remains; Buttondown embed endpoint returns subscription verification page (HTTP 200 with Turnstile); local server returns HTTP 200; deployed Vercel URL returns HTTP 200; OG and Twitter Card meta tags present in deployed HTML; social preview image serves at HTTP 200 (384 KB); compressed background serves at HTTP 200 (716 KB); `node --check script.js` passed; no `preventDefault` or fake submit listener remains.
- Not yet verified: real end-to-end signup from a browser (Turnstile captcha blocks automated test); social preview rendering on actual social platforms.

## Next action

1. Test a real signup from `https://market-street-ai-website-smoky.vercel.app` in a browser.
2. Add a `.vercelignore` to exclude `newsletter/` from future Vercel deploys.
3. Connect the Vercel project to the GitHub repo for auto-deploys on push.
4. Clean up the Buttondown newsletter name/description in account settings.