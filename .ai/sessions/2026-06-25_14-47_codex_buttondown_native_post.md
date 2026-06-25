# Buttondown Native POST Handoff

Date/time: 2026-06-25 14:47 PDT
Agent: Codex

## Goal

Find the exact string `early list`, identify the fake JavaScript handler, and rewrite the form so it uses a native Buttondown HTML POST.

## Result

Removed the fake JavaScript submit interception and changed the newsletter form to use the requested Buttondown embed attributes:

- `action="https://buttondown.email/api/emails/embed-subscribe/[PUT_YOUR_BUTTONDOWN_HANDLE_HERE]"`
- `method="post"`
- `target="popupwindow"`
- `onsubmit="window.open('https://buttondown.email/[PUT_YOUR_BUTTONDOWN_HANDLE_HERE]', 'popupwindow')"`

## Exact string location

- `script.js` contained `You are on the early list. Email service hookup is the next integration step.`

## Mock handler removed

The removed handler was the `newsletterForm.addEventListener("submit", ...)` block in `script.js`. It called `event.preventDefault()`, ran local validity checks, wrote the fake status text, and reset the form.

## Files changed

- `index.html` — changed `#newsletter-form` to native Buttondown POST attributes.
- `script.js` — removed submit interception and fake success text.
- `.ai/STATE.md` — updated current state and verification.
- `.ai/sessions/2026-06-25_14-47_codex_buttondown_native_post.md` — this handoff.

## Verification

- `rg -n --fixed-strings "early list" .` returns no matches.
- `rg -n "preventDefault|addEventListener\\(\"submit\"|onsubmit|embed-subscribe|popupwindow" index.html script.js` shows only the requested Buttondown attributes.
- `node --check script.js` passed.
- Served HTML on `http://localhost:8099/` includes the requested Buttondown form attributes.

## Blockers

- `[PUT_YOUR_BUTTONDOWN_HANDLE_HERE]` must be replaced with the real Buttondown handle before the form can collect subscribers.

## Exact next action

Replace the Buttondown placeholder with the real handle, then test an actual signup flow.
