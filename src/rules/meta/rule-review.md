---
name: Rule Review
description: Review a rules-library diff for placement, profiles, and docs boundaries
category: meta
tags: [meta, rules, review]
---

# Rule Review

- Check every new or moved rule uses a two-segment kebab-case slug and matching frontmatter category
- Confirm every new rule is referenced from at least one profile
- Flag hardcoded repository paths outside layout meta rules
- Confirm generated docs and agent files were not hand-edited
- Flag near-duplicate rules that should have been an amendment instead
