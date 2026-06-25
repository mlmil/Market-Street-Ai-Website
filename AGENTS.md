# AGENTS.md

## Startup

Before making changes:

1. Read `skill.md`.
2. Read `.ai/STATE.md`.
3. Run `git status --short --branch` when this is a Git repository.
4. Read the newest relevant file in `.ai/sessions/` only when more history is needed.
5. Summarize the current state, active task, and any blocker in no more than five bullets.

Do not recursively inspect large dependency, build, cache, model, or generated-output directories unless the task requires it.

## Working rules

- Prefer small, reversible changes.
- Preserve existing behavior unless the task explicitly changes it.
- Do not perform destructive, irreversible, or credential-related actions without explicit approval.
- Do not overwrite unrelated user changes.
- State material assumptions before acting on them.
- Use existing project conventions before introducing new tools or patterns.
- Test the smallest relevant surface first, then broaden verification when warranted.
- Never claim success without reporting the verification performed.

## Project memory

`.ai/STATE.md` is the current source of truth.

After any meaningful work, automatically:

1. Update `.ai/STATE.md` so it reflects the state after the session.
2. Create one concise handoff file in `.ai/sessions/` using `YYYY-MM-DD_HH-MM_AGENT_SLUG.md`.
3. Include the goal, result, decisions, files changed, verification, blockers, and exact next action.
4. Record only consequential commands, decisions, failures, files changed, verification, and next action.
5. Do not paste large diffs, logs, secrets, or generated output into project memory. Refer to files or Git instead.

Do not wait for the user to request the handoff. Complete it as part of finishing the task.

Skip session logging only when the interaction makes no project change and produces no durable decision.

## Definition of done

Before declaring completion:

- State the result.
- List files changed.
- Report tests or checks run and their outcome.
- Identify remaining risks or unverified areas.
- Update project memory.
