---
title: Profiles
description: Ready-made AI_RULES.json variants, from fast scripts to a full web lifecycle
---

A profile is a self contained `AI_RULES.json`. There is no inheritance in `ai-rulesmith`, so to make
a variant, copy the closest file in `src/profiles/` and edit its rule lists.

Python profiles include `pov/mrjk-python-*` (and compose, http, docs where listed), plus house
`tool-mise` / `tool-task` instead of `pov/mrjk-universal-cicd`. The bash and POSIX sh script profiles
include `pov/mrjk-bash-misc` or `pov/mrjk-sh-misc`. Copy a profile and drop POV slugs if a project
should not take mrjk opinions. Add `pov/mrjk-universal-cicd` if you want the extra ADR 0021 flavour
on top of the house CI rules.

This repo's `AI_RULES.json` is a copy of `src/profiles/rules-library.json`. Keep them the same, then
run `task build` to regenerate `AGENTS.md` and `.cursorrules`.

Apply a profile to a project with:

```bash
task apply PROFILE=python-cli-standard TARGET=/path/to/project
```

See [Using with Cursor](../start/cursor/) for the rest of that flow. Run `task list` to see every
resolvable rule a profile can reference.
