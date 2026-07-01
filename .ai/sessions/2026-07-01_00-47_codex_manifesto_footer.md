# Session Handoff: Manifesto Footer Link

## Goal

Move the Manifesto link out of the top navigation and place it in the fine print at the bottom of the homepage.

## Result

- Removed `Manifesto` from the homepage top navigation.
- Added a small footer fine-print `Manifesto` link.
- Kept the existing footer location text and local tagline intact.

## Decisions

- The top navigation now stays focused on primary browsing actions: AI Playbooks, GPTs & Templates, and Recent Issues.
- Manifesto remains available, but as a quieter footer link.

## Files changed

- `index.html`
- `styles.css`
- `.ai/STATE.md`
- `.ai/sessions/2026-07-01_00-47_codex_manifesto_footer.md`

## Verification

- Confirmed local preview markup at `http://localhost:8099/` only shows `Manifesto` in the footer fine-print link.
- Ran `node --check script.js` successfully.
- Reviewed the focused diff before staging.

## Blockers

- None.

## Exact next action

Commit and push the footer navigation update.
