---
name: GitHub Actions Hygiene
description: DRY workflows with workflow_dispatch, pinned actions, least privilege
category: sdlc
tags: [sdlc, github-actions, ci]
---

# GitHub Actions Hygiene

- Keep one workflow definition for the merge gate; `push`, `pull_request` and `workflow_dispatch` share the same jobs
- Always include `workflow_dispatch` so the same pipeline can run from the Actions web UI
- Do not copy-paste install, lint or test steps into YAML; after mise, call `task ci:...`
- Pin third-party actions by commit SHA, not a moving major tag
- Give `GITHUB_TOKEN` the least privilege the job needs
- Do not `continue-on-error` on the merge gate, and do not echo secrets
- Optional `workflow_dispatch` inputs only when they change real behaviour; do not add unused inputs

Good:

```yaml
on:
  push:
    branches: [main]
  pull_request:
  workflow_dispatch:
jobs:
  ci:
    steps:
      - uses: actions/checkout@<sha>
      - run: mise install
      - run: task ci
```

Bad:

```yaml
on:
  push:
    branches: [ci-hidden]
jobs:
  ci:
    steps:
      - run: pip install -r requirements.txt
      - run: pytest
        continue-on-error: true
```
