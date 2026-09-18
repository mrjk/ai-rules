---
name: Mrjk Universal CI
description: Pin tools with mise, own workflow in Task, keep provider YAML as a thin bootstrap
category: pov
tags: [pov, mrjk, ci, mise, task]
---

# Mrjk Universal CI

- Pin the toolchain in `mise.toml` so local and CI install the same tool versions
- Put every workflow entrypoint in Task: at least `setup`, `lint`, `test`, and `build`
- Expose pipeline entrypoints as `ci:` (or `ci_`) aliases that call those same tasks
- Provider configs only check out, load mise, and run `task ci:...`; they do not own build logic
- Run the same `mise install && task ci:...` command on a laptop as on the runner
- Do not add a second CI system or a private invocation that can drift from Task
- When you add a local task that CI should gate, add the `ci:` alias in the same change
