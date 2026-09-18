---
title: Profiles
description: Ready-made AI_RULES.json variants, from fast scripts to a full web lifecycle
---

A profile is a self contained `AI_RULES.json`. There is no inheritance in `ai-rulesmith`, so to make
a variant, copy the closest file in `src/profiles/` and edit its rule lists.

| Profile | Shape | For |
| --- | --- | --- |
| `python-script-fast` | standard workflow, thin rule set | a single portable `uv run` script |
| `python-cli-standard` | steps: Implement, Review | a packaged CLI tool |
| `python-web-strict` | steps: Specify, Design, Implement, Review, Verify, Release | a web service, full lifecycle |
| `bash-script-fast` | standard workflow, thin rule set | a single Bash 4+ script |
| `sh-script-fast` | standard workflow, thin rule set | a single POSIX `sh` script |
| `rules-library` | standard workflow, meta plus house standards | this repository, maintaining the rule library |

The three Python profiles include `pov/mrjk-python-*` plus shared `pov/mrjk-cicd` (and compose,
http, docs where listed). The bash and POSIX sh script profiles include `pov/mrjk-bash-misc` or
`pov/mrjk-sh-misc`. Copy a profile and drop those slugs if a project should not take mrjk opinions.
`rules-library` does not include them.

This repo's `AI_RULES.json` is a copy of `src/profiles/rules-library.json`. Keep them the same, then
run `task build` to regenerate `AGENTS.md` and `.cursorrules`.

Apply a profile to a project with:

```bash
task apply PROFILE=python-cli-standard TARGET=/path/to/project
```

See [Using with Cursor](../start/cursor/) for the rest of that flow.
