---
name: Pin Toolchain With Mise
description: Pin tool versions in mise.toml; mise installs tools, Task owns workflows
category: tool-mise
tags: [mise, toolchain, versions]
---

# Pin Toolchain With Mise

- Pin every project tool in `mise.toml` to an exact version, never `@latest` or a floating channel
- Install with `mise install` locally and in CI so both get the same binaries
- Let mise own tool versions; let Task own workflow entrypoints; do not duplicate the same workflow in both
- Add a new tool to `mise.toml` in the same change that first requires it
- Do not document a global OS package or a manual download as the install path
- Commit `mise.toml` (and the lockfile when the project uses one)
- Call tools through mise or the PATH it prepared, not a one-off binary in `/tmp`
