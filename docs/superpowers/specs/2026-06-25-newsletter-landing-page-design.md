# Newsletter Landing Page Design

## Goal

Turn `index.html` into a focused newsletter landing page for “Practical AI News & Moves for the Ventura Business Community.”

## Approach

Replace the current portal-style placeholder homepage with a single-purpose signup page using the existing static files and visual system. Keep the dark industrial Market Street AI look, but reduce navigation and page density so the primary action is joining the newsletter.

## Page Structure

1. Header with Market Street AI brand and minimal navigation anchors.
2. Hero section with the newsletter promise, short supporting copy, and email signup form.
3. Three proof/value cards: practical tools, local examples, and weekly moves.
4. “What you’ll get” section with issue contents.
5. Sample issue preview to make the newsletter tangible.
6. Transparent operator note naming Spark AI as the builder/operator.
7. Footer with Ventura-area positioning.

## Form Behavior

The signup form is front-end only for this pass. It accepts an email address, shows a success message on submit, and leaves a clear markup hook for a future email service integration.

## Constraints

- Do not modify `Market Street AI - standalone (1).html`.
- Use `index.html`, `styles.css`, and `script.js`.
- Keep the site static with no new build tooling.
- Preserve the existing industrial orange/dark visual direction.
- Avoid generic newsletter copy; keep the promise local, practical, and operator-facing.

## Verification

- Check JavaScript syntax with `node --check script.js`.
- Serve the static files locally.
- Inspect desktop and mobile rendering in a browser.
- Confirm the signup form validation and success state work.
