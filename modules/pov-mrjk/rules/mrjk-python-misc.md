---
title: Mrjk Python Misc Conventions
priority: medium
---

# Mrjk Python Misc Conventions

- Read and write text with `encoding="utf-8"`
- Treat identity, display name, and filesystem path as separate fields; do not silently substitute
  one for another
- Do not hardcode machine-specific paths, sockets, versions, or credentials
- Remove dead and commented-out code before merge; do not commit `# WIP` blocks
- Add golden-file regression tests for generated output that must stay stable
- Import standard library, then third-party packages, then local packages
- Mirror source package layout in unit tests
- Domain code must not import the CLI adapter; keep dependency arrows pointing inward
