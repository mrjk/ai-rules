---
name: No Git Leakage
description: Keep secrets out of git history, commit messages, PRs and CI logs; scan and rotate if they leak
category: security
tags: [security, git, secrets]
---

# No Git Leakage

- Treat git history as public and forever; deleting a file on the current branch does not un-leak it
- Never `git add -f` an ignored secret, key, dump or `.env`
- Do not put secrets in commit messages, tag messages, PR text, issue comments or CI logs
- Run the project's secret scanner locally and in CI (gitleaks or the Task that wraps it)
- If a secret is already in history, rotate it first, then follow the project's history-rewrite process
- Do not paste live credentials into agent chat or into tracked fixtures "for the test"
- When the scanner fires, stop and fix; do not exclude the path to go green

Good:

```text
task ci:secrets
# values from the environment or an untracked local file
```

Bad:

```text
git add -f .env
git commit -m "fix: token=ghp_example"
```
