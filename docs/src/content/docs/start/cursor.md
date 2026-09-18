---
title: Using with Cursor
description: Open a project that has .cursorrules generated from this library
---

After [Install and apply](./install/), ai-rulesmith writes Cursor files from the `Cursor` target
in `AI_RULES.json`.

## Output files

| File | Role |
| --- | --- |
| `.cursorrules` | Main project rules Cursor loads for the workspace |
| `.cursor/rules/step-*.mdc` | Step files when the profile uses a `steps` workflow |

## Open the project in Cursor

Open `TARGET` as the Cursor workspace (the folder that contains `.cursorrules`), not this library,
unless you are editing the library itself.

Cursor project rules apply to that workspace. They do not replace your user rules in Cursor
settings. Keep user rules short; put shared practices in this library.

Cursor's default commit user rule (1-2 sentence why-focused messages) fights
`git/conventional-commits` when you ask the agent to commit. Replace the message-drafting bullets
with the snippet in [Cursor user rule for git commits](./cursor-user-git/). A new Agent chat is
required after you change User Rules.

## Rebuild

After preamble or rule-list edits, rebuild from the project (or re-run `task apply` from this
library). See [Install and apply](./install/).
