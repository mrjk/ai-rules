---
title: Support Branches
priority: medium
---

# Support Branches

- Use a long-lived support line only while that major.minor is still shipped, named `support/<major.minor>` or the project's equivalent
- Land the fix on the default branch first, then cherry-pick onto each support line that still needs it
- Do not merge a support line back into the default branch
- Tag the commit on the line it ships from; do not retag a default-branch commit as a support release
- Do not open a support branch for work that is not a backport; that is a feature branch
- This is not gitflow: no `develop`, and no hotfix branch that never lands on default
- If the project has no support lines, do not create one without asking
