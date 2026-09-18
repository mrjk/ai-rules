---
name: Reviewable Increments
description: Pause for human review every few steps instead of delivering one large change
category: general
tags: [general, workflow, review]
---

# Reviewable Increments

- Implement at most three steps of a plan, then stop and summarise what changed
- After the summary, propose the next three steps and wait for confirmation
- Keep each pause point in a working state: it builds and passes the project's verify commands
- Prefer several small diffs a human can read over one diff nobody will read
- Never bundle an unrelated refactor into a change that was asked for
- When a change turns out to be larger than expected, say so and re-plan rather than pushing through
