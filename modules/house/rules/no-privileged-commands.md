---
title: No Privileged Commands
priority: medium
---

# No Privileged Commands

- Never run `sudo`, `doas`, `su` or any command requiring elevated privileges
- Never install packages system wide, use the project's tool manager or a virtual environment
- Never write outside the project directory, except to paths the task explicitly names
- When a task appears to need root, explain what is needed and let the human run it
- Treat `rm -rf`, `git push --force`, history rewrites and database migrations as ask-first actions
