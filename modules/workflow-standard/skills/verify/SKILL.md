---
name: verify
description: Run when verifying the change with project checks in the Verify step
priority: high
---

# Step: Verify

- Run the project's validate, test, lint, and docs build commands as declared by Task or mise
- Never declare the task done until verification passes
- Prefer the same commands CI runs
