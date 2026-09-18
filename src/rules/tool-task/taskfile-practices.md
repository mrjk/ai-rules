---
name: Taskfile Practices
description: Task owns workflow entrypoints; CI and laptops call the same tasks
category: tool-task
tags: [task, ci, dx]
---

# Taskfile Practices

- Put workflow entrypoints in Task: at least `setup`, `lint`, `test`, and `build`
- Expose pipeline entrypoints as `ci:` (or `ci_`) aliases that call those same tasks
- Use Task `vars` and includes; do not repeat literals or copy-paste whole recipes
- Split further work into namespaces such as `docs:`, `docker:`, `fix:`, `test:`, `release:`, and `publish:` when those jobs exist
- Put custom project steps in a scripts directory, in a language already pinned by mise
- Provider YAML only checks out, loads mise, and runs `task ci:...`; it does not own build logic
- When you add a local task that CI should gate, add the `ci:` alias in the same change
- Run the same `mise install && task ci:...` command on a laptop as on the runner
