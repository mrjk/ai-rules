---
name: Reproduce Then Fix
description: Capture a failing command and a minimal case before changing production code
category: sdlc
tags: [sdlc, debugging, testing]
---

# Reproduce Then Fix

- Start from an observable failure: the exact command, its output, and the input that caused it
- Reduce that to a minimal, deterministic case before editing production code
- Turn the case into a test or a recorded command that fails for the same reason
- Change the code so that case passes, then run the surrounding suite
- If you cannot reproduce it, say so and stop; do not "fix" a failure you have not seen
- Keep the reproduction after the fix, so the same hole cannot close silently
