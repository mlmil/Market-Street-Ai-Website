# Project State

Last updated: 2026-06-25 15:20 PDT
Updated by: Blue Rose

## Status

- Homepage is a focused newsletter landing page for "805 AI News & Moves".
- Newsletter promise: "Practical AI-powered weekly playbooks and insights for the Ventura and Oxnard business community."
- Signup form wired to real Buttondown handle `mikemllr77` — endpoint live and accepting subscriptions.
- Social preview metadata (Open Graph + Twitter Card) added with a generated 1200x630 preview image.
- Background image compressed from 14 MB to 716 KB; CSS references the compressed version.
- Local Git repository on branch `main`, pushed to GitHub.
- All changes committed and pushed.

## Active objective

- Deploy the newsletter landing page to a public host and test a real signup end-to-end.

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

## Decisions in force

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Use clean static files for the editable site: `index.html`, `styles.css`, `script.js`.
- Newsletter-first landing page; Spark AI visible as operator without hard sales pitch.
- Dark industrial/orange Market Street AI visual direction.
- Ventura map texture behind dark overlays for local context.
- Compressed background replaces original in CSS; original kept on disk for reference.

## Blockers / risks

- Buttondown has Cloudflare Turnstile captcha on the embed endpoint — subscribers will see a verification challenge. Expected but may reduce conversion.
- Newsletter name on Buttondown has typos ("Ai" not "AI", "NEwsletter") — should be cleaned up in Buttondown settings.
- Not deployed to a public host yet — the page only works locally or if served from the repo.
- No deployment target chosen (GitHub Pages, Netlify, Vercel, etc.).
- Untracked files not yet committed: `newsletter/` folder (Buttondown prompt + content drafts), `Logos/logo 2.png`, `Logos/logo1.png`, `Biopics/biopic small.af`.

## Working tree

- Latest commit: `9619da1` (`Add social preview metadata, compress background image`) pushed to `origin/main`.
- All tracked changes are committed and pushed.
- Untracked: `newsletter/`, `Logos/logo 2.png`, `Logos/logo1.png`, `Biopics/biopic small.af`, `Biopics/biopic small.af~lock~`, `prompts/.md.md`.
- Do not overwrite: `Market Street AI - standalone (1).html`.

## Verification status

- Passing: No placeholder handle remains; Buttondown embed endpoint returns subscription verification page (HTTP 200 with Turnstile); local server returns HTTP 200; OG and Twitter Card meta tags present in served HTML; social preview image serves at HTTP 200 (384 KB); compressed background serves at HTTP 200 (716 KB); `node --check script.js` passed; no `preventDefault` or fake submit listener remains.
- Not yet verified: real end-to-end signup from a browser (Turnstile captcha blocks automated test); deployed-host rendering; social preview rendering on actual social platforms.

## Next action

1. Choose a deployment target (GitHub Pages, Netlify, Vercel) and deploy.
2. Test a real signup from the deployed URL.
3. Clean up the Buttondown newsletter name/description in account settings.
4. Decide whether to commit the `newsletter/` folder (contains API token — may want to .gitignore it).