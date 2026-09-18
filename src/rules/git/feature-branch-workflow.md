---
name: Feature Branch Workflow
description: Short-lived branches from the default branch, PR when green; not gitflow
category: git
tags: [git, branch, pr]
---

# Feature Branch Workflow

- Branch from the default branch for each change; do not commit directly to the default branch
- Keep the branch short-lived and named for the work; delete it after the PR merges
- Open a pull request and merge only when CI is green
- Do not use gitflow: no long-lived `develop`, no dual `release/` plus `hotfix/` ceremony
- Do not merge a personal long-lived branch into the default branch without a PR
- Rebase or merge the default branch into the feature branch to stay current; prefer the project's existing method
- One concern per branch; do not pile unrelated work onto an old feature branch

Good:

```text
git switch -c feat/token-refresh
# PR into main, CI green, delete the branch
```

Bad:

```text
git switch develop
git flow hotfix start oops
```
