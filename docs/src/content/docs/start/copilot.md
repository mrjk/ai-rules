---
title: Using with GitHub Copilot
description: Open a project that has Copilot instructions generated from this library
---

After [Install and apply](./install/), ai-rulesmith writes Copilot files from the
`GitHub Copilot` target in `AI_RULES.json`.

## Output files

| File | Role |
| --- | --- |
| `.github/copilot-instructions.md` | Main repository instructions Copilot loads |
| `.github/instructions/step-*.instructions.md` | Step files when the profile uses a `steps` workflow |

## Use in Copilot

Open the project that contains those files in an IDE with GitHub Copilot enabled (VS Code,
JetBrains, or github.com). Copilot reads `.github/copilot-instructions.md` for repository-wide
guidance. Step instruction files live under `.github/instructions/` next to the main file.

Commit the generated files if your team wants the same Copilot behaviour for every clone.

## Rebuild

After preamble or rule-list edits, rebuild from the project (or re-run `task apply` from this
library). See [Install and apply](./install/).
