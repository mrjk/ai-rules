---
title: Repo Hygiene
priority: medium
---

# Repo Hygiene

- Leave the default branch buildable from a fresh clone
- Do not commit generated artifacts, caches, virtualenvs, dist tarballs or IDE junk
- Do not leave commented-out dumps, stray debug prints or WIP files in the change
- Keep a `LICENSE` and a README that states what the project is
- Update the changelog in the same change as a user-visible behaviour change
- Do not weaken ignore rules to make a generated file easier to commit
- Delete the dead path when you replace a command or a file; do not leave both
