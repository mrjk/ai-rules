---
name: One Command Per Action
description: Every common action has exactly one obvious command, documented in the README
category: sdlc
tags: [sdlc, tooling, dx]
---

# One Command Per Action

- Provide exactly one command for each of: install, run, test, lint, format, build
- Route them through a single task runner, so the same command works for a human, for CI and for an agent
- Document them near the top of the README, and keep CI calling the same commands rather than its own
- Never leave two ways to do the same thing, delete the old one when you add a new one
- Keep the commands working from a fresh checkout with no manual setup steps
- Use the documented command rather than reconstructing the underlying invocation by hand
- When a needed command does not exist, add it to the task runner instead of running an ad hoc one liner
