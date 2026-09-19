---
title: "Stack: POSIX sh Script"
priority: medium
---

# Stack: POSIX sh Script

- Stay POSIX sh compatible; avoid bashisms
- Prefer `set -eu` and explicit error messages on failure
- Keep scripts small; put reusable logic in functions
- Use mise and Task for project entrypoints when the repo already has them
- Do not hardcode secrets; read from the environment or a local untracked file
