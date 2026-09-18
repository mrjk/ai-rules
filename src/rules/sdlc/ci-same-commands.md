---
name: CI Same Commands
description: CI must run the same install, lint, typecheck, test and build commands as the README
category: sdlc
tags: [sdlc, ci, dx]
---

# CI Same Commands

- CI is the merge gate: lint, type check, tests and the build must run on every change that would merge
- Call the same documented task-runner commands the README advertises, never a parallel private
  invocation that can drift
- Install in CI with a frozen lockfile so the pipeline uses the committed versions
- Fail the job on the first red check; do not add a skip, a continue-on-error or a weaker command to
  go green
- When you add a local command, add it to CI in the same change, or the command does not exist yet
- Do not introduce a second CI system or a second way to run the suite
