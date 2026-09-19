---
title: Dependency Upgrades
priority: medium
---

# Dependency Upgrades

- Upgrade a single dependency with `uv lock --upgrade-package <name>`, not `uv lock --upgrade`
- Read the changelog or release notes for that version before taking it, and note anything breaking
- Run lint, type check and tests after the lockfile changes, on a clean sync (`uv sync --frozen` in CI)
- Bump the declared lower bound in `pyproject.toml` only when the code needs the new API
- Do not mix a dependency upgrade with a feature change
- If the upgrade is forced by a security advisory, say so in the commit and the changelog
- Ask first before upgrading the language version or a framework that defines the stack
