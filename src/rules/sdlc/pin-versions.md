---
name: Pin Versions
description: Pin tools, images, actions and lockfiles; never use latest or a floating tag
category: sdlc
tags: [sdlc, versions, lockfile]
---

# Pin Versions

- Pin every tool, container image and CI action to an exact version; never use `latest` or a floating tag
- Commit the lockfile and treat it as the install source of truth
- Install in CI with a frozen lockfile so the runner cannot resolve a newer tree
- Drive image name and version through variables, not a hard-coded `latest`
- When you add a tool, pin it in the project's toolchain file in the same change
- Do not mix a version bump with a feature change
- Language-specific upgrade commands stay in their own rules; this rule is the no-float policy

Good:

```text
python = "3.12.8"
image: "postgres:16.4"
```

Bad:

```text
python = "latest"
image: "postgres:latest"
actions/checkout@v4  # unpinned moving tag, prefer a SHA
```
