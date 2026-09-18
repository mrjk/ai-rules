---
title: Using with Codex
description: Open a project that has AGENTS.md generated from this library
---

After [Install and apply](./install/), ai-rulesmith writes Codex files from the `Codex` target
in `AI_RULES.json`.

## Output files

| File | Role |
| --- | --- |
| `AGENTS.md` | Main agent instructions Codex (and other AGENTS.md consumers) load |
| `.rulesmith/steps/step-*.md` | Step files when the profile uses a `steps` workflow |

## Use with Codex CLI

Run Codex from the project root that contains `AGENTS.md`. Codex loads that file for repository
guidance. Step files under `.rulesmith/steps/` are referenced from the composed workflow when the
profile uses steps.

`AGENTS.md` is also the Generic target path in ai-rulesmith; other tools that honour the same
convention can use the same file.

## Rebuild

After preamble or rule-list edits, rebuild from the project (or re-run `task apply` from this
library). See [Install and apply](./install/).
