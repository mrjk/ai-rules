---
title: One Package Upgrade
priority: medium
---

# One Package Upgrade

- Upgrade one dependency per change, never the whole lockfile at once
- In a uv project, run `uv lock --upgrade-package <name>`, not `uv lock --upgrade`
- Read that package's release notes for breaking changes before you bump
- Ask before a major version bump, a native extension bump or a pin that other packages share
- Run the project's test, lint and typecheck commands after the lockfile changes
- Leave removing an unused extra as a separate change, not mixed into the upgrade
