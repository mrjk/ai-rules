---
title: "Stack: Bash Script"
priority: medium
---

# Stack: Bash Script

- Prefer `bash` scripts with `set -euo pipefail` unless the project requires POSIX sh
- Keep scripts small; put reusable logic in functions
- Use mise and Task for project entrypoints when the repo already has them
- Do not hardcode secrets; read from the environment or a local untracked file
