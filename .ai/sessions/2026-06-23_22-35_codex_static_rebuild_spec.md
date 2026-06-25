# Static Rebuild Spec Handoff

## Goal

Prepare the Market Street AI website project for a first implementation pass that preserves the current Claude Design look while making the site editable.

## Result

- Reviewed the existing bundled HTML export.
- Confirmed the project is not a Git repository.
- Created the approved design spec at `docs/superpowers/specs/2026-06-23-static-rebuild-design.md`.
- Updated `.ai/STATE.md`.

## Decisions

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Rebuild into clean static files instead of editing the bundle directly.
- Keep first-pass scope to visual preservation and maintainability.
- Defer content strategy, backend, CMS, forms, deployment, and real directory data.

## Files Changed

- `docs/superpowers/specs/2026-06-23-static-rebuild-design.md`
- `.ai/STATE.md`
- `.ai/sessions/2026-06-23_22-35_codex_static_rebuild_spec.md`

## Verification

- Read startup files: `AGENTS.md`, `skill.md`, `.ai/STATE.md`.
- Checked Git status; folder is not a Git repository.
- Extracted visible text from the bundled HTML to confirm page structure.
- Self-reviewed the design spec for scope, ambiguity, and placeholders.

## Blockers

- The required design-doc commit cannot be made because this folder is not a Git repository.
- Implementation should wait until Mike reviews and approves the written spec.

## Exact Next Action

Ask Mike to review `docs/superpowers/specs/2026-06-23-static-rebuild-design.md`. If approved, create an implementation plan and then rebuild the page into `index.html`, `styles.css`, and `script.js`.
