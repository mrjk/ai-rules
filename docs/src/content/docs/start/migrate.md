---
title: Migrate from ai-rulesmith
description: Playbook to move a project from AI_RULES.json to ai-rulez intention config
---

Use this when a project still has `AI_RULES.json` and/or `.rulesmith/`.

## Steps

1. Note the profile name (or rule lists) in `AI_RULES.json`.
2. Pick the closest recipe under `examples/` (see [Recipes](../library/profiles/)).
3. `task apply RECIPE=<name> TARGET=/path/to/project` or copy the recipe `config.toml` by hand.
4. Rewrite every `[[includes]]` to the git library URL with a pinned `ref`.
5. Move the old preamble into `.ai-rulez/context/` (or a root rule).
6. Project-specific vars (license, Python version): put them in local context or override rules under `.ai-rulez/rules/`.
7. Run `ai-rulez validate` and `ai-rulez generate`.
8. Decide whether generated outputs are committed or gitignored (`gitignore = true` in config).
9. Delete `AI_RULES.json` and `.rulesmith/` once generation looks right.
10. Optional: keep ai-rulez MCP enabled and use `enablement-guide` for later toggles.

## Mapping cheat sheet

| rulesmith idea | ai-rulez idea |
| --- | --- |
| Hardcoded rule slug list | `builtins` + module `[[includes]]` |
| Profile JSON | Recipe directory under `examples/` |
| Steps workflow | `workflow-standard` or `workflow-strict` module (skills, agents, commands) |
| Global `~/.config/rulesmith` or vendor | Git include `ref` pin |
| `task build` (rulesmith) | `ai-rulez generate` / `task build` here |

## This library

This repository already dogfoods ai-rulez (`.ai-rulez/` + `modules/`). No other local
`AI_RULES.json` consumers were found at migration time; apply the playbook when you hit one.
