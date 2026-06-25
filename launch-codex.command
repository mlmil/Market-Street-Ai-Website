#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="$(cd -- "$(dirname -- "$0")" && pwd -P)"
SESSIONS_DIR="$PROJECT_DIR/.ai/sessions"

mkdir -p "$SESSIONS_DIR" "$PROJECT_DIR/.ai/prompts"

if ! command -v codex >/dev/null 2>&1; then
  osascript -e 'display dialog "The codex command was not found in PATH." buttons {"OK"} default button "OK" with icon stop'
  exit 127
fi

TIMESTAMP="$(date '+%Y-%m-%d_%H-%M-%S')"
LAUNCH_FILE="$SESSIONS_DIR/${TIMESTAMP}_codex_launch.md"
BRANCH="$(git -C "$PROJECT_DIR" branch --show-current 2>/dev/null || true)"
STATUS="$(git -C "$PROJECT_DIR" status --short 2>/dev/null || true)"

cat > "$LAUNCH_FILE" <<EOF_LAUNCH
# Codex Launch

- Started: $(date '+%Y-%m-%d %H:%M:%S %Z')
- Project: \`$PROJECT_DIR\`
- Git branch: ${BRANCH:-not available}

## Working tree at launch

\`\`\`text
${STATUS:-clean or not a Git repository}
\`\`\`

## Startup instruction

Read \`.ai/START_HERE.md\` and follow it.
EOF_LAUNCH

osascript - "$PROJECT_DIR" <<'APPLESCRIPT'
on run argv
  set projectDir to item 1 of argv
  tell application "Terminal"
    activate
    do script "cd " & quoted form of projectDir & " && codex app"
  end tell
end run
APPLESCRIPT
