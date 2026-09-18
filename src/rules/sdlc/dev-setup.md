---
name: Development Setup
description: First-run is mise, Task setup, env example, Compose only when the project ships it
category: sdlc
tags: [sdlc, dx, setup]
---

# Development Setup

- Document first-run as: clone, `mise install`, then `task setup` (or the project's documented install task)
- Copy the env example to a local untracked file; do not invent extra variables
- Start Compose only when the project ships a Compose file and the work needs those services
- Follow the README path; do not invent pip, poetry, nvm or a global OS install
- Never use `sudo` to make the project work
- When setup is missing a step, add it to Task and the README in the same change
- Keep first-run free of manual GUI clicks or undocumented host packages
