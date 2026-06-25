# Market Street AI Static Rebuild Design

## Goal

Create a clean, editable static version of the current Claude Design export while preserving the existing visual direction as closely as practical.

## Source And Reference

- Keep `Market Street AI - standalone (1).html` unchanged as the visual reference.
- Build the editable site as normal static files.
- Treat the current bundled export as a prototype, not the long-term source of truth.

## First-Pass Scope

- Preserve the dark grid background, orange accent, civic-industrial dashboard feel, typography direction, section layout, and overall density.
- Recreate the current page structure:
  - header and navigation
  - hero carousel
  - feature bullets
  - primary calls to action
  - Ventura news column
  - active businesses preview
  - trending topics
  - ask/community panel
  - footer
- Keep the rotating hero text and carousel dot behavior.
- Keep placeholder content mostly intact for this pass.
- Clean only obvious generated rough edges that interfere with maintainability or rendering.

## Out Of Scope For First Pass

- No framework migration.
- No backend or form processing.
- No CMS.
- No final content strategy rewrite.
- No real business-directory data integration.
- No domain, hosting, or deployment decisions.

## Proposed File Shape

- `index.html` for semantic page structure.
- `styles.css` for layout, colors, responsive behavior, and visual polish.
- `script.js` for the small hero carousel behavior.
- Existing assets remain in `Assets /Market Street Ai Website/` unless a later pass organizes them.

## Verification

The first pass is complete when:

1. The new static page opens locally.
2. The design visually matches the Claude export closely on desktop.
3. The page remains usable on mobile.
4. The original bundled HTML remains unchanged.
5. Files are readable and practical to edit in later passes.

## Known Constraints

- This folder is not currently a Git repository, so the design document cannot be committed unless Git is initialized later.
- The Claude export is bundled, so exact extraction is less useful than rebuilding the visible page into maintainable source.
