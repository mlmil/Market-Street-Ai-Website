# Site audit and safe fixes

Goal: improve the Market Street AI site.

Result: nav unified across 4 public pages; logo payload cut from 450 KB to 135 KB; social previews use absolute URLs and cover subpages; homepage playbook copy updated; .vercelignore blocks internal notes from the public deploy.

Files changed: index.html, playbooks.html, gpts.html, manifesto.html, .vercelignore, Logos/white-web.png (new), .ai/STATE.md.

Verification: Playwright render of index/playbooks/manifesto at 1440 and 390 widths via local HTTP server; logo loads (naturalWidth 800); nav order checked by grep on all 4 pages.

Open decisions for Mike: Discovery nav link leads to a standalone Spark AI page with no way back; stale model names (Opus 4.6, GPT 5.4) in "Agent Versus Chat"; orphan sentence in "Greatest AI Skill" issue; issues carry no dates; all four playbook Download buttons open the same Drive folder; OG URLs point at the vercel.app domain until a custom domain is chosen.

Next action: commit and push on branch codex/ui-ux-pro-max-trial, then confirm internal files return 404 on the live site.
