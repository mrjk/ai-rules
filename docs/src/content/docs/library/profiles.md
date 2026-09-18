---
title: Profiles
description: Ready-made AI_RULES.json variants, from fast scripts to a full web lifecycle
---

A profile is a self contained `AI_RULES.json`. There is no inheritance in `ai-rulesmith`, so to make
a variant, copy the closest file in `src/profiles/` and edit its rule lists. Per-profile pages under
[Profiles](../../profiles/python-web-standard/) are generated at docs build time from `src/profiles/`.

## Tiers: fast, middle, strict

| Tier | When to use | Workflow | Example profiles |
| --- | --- | --- | --- |
| **fast** | Run, explore, one-off scripts | `standard` (no steps) | [`python-script-fast`](../../profiles/python-script-fast/), [`bash-script-fast`](../../profiles/bash-script-fast/), [`sh-script-fast`](../../profiles/sh-script-fast/) |
| **middle** | Everyday feature and fix | `steps`: Implement → Review → Verify | [`python-web-standard`](../../profiles/python-web-standard/) |
| **strict** | Large feature or full ship | `steps`: Specify → Design → Implement → Review → Verify → Release | [`python-web-strict`](../../profiles/python-web-strict/) |
| CLI mid | Small CLI work | `steps`: Implement → Review | [`python-cli-standard`](../../profiles/python-cli-standard/) |
| Rules library mid | Author rules, profiles, docs | `steps`: Implement → Review → Verify | [`rulesmith-library-standard`](../../profiles/rulesmith-library-standard/) |

Intents select which steps to enter. Do not invent separate Feature, Fix, Test, Run, or Release
profiles; keep one pipeline per product shape and start or stop at the right step.

| Intent | Enter these steps | Skip |
| --- | --- | --- |
| Add feature (non-trivial) | Specify → Design → Implement → Review → Verify | Release (unless shipping now) |
| Add feature (small / obvious) | Implement → Review → Verify | Specify, Design, Release |
| Fix bug | Reproduce first (Verify / `sdlc/reproduce-then-fix`), then Implement → Review → Verify | Specify, Design, Release |
| Test / harden | Verify only (optionally Review after) | everything else |
| Run / explore / one-off | no steps (`*-script-fast`) | full SDLC |
| Release | Review → Verify → Release | Specify, Design; Implement only if checklist finds gaps |

Official step names stay: Specify, Design, Implement, Review, Verify, Release. Roles map one-to-one
onto those steps.

## Shared zones vs step rules

Treat each profile as three editable zones:

1. **Preamble** - project-specific (REPLACE ME). Put session intent hints here when useful.
2. **Shared zones** - `before_start` / `before_finish` = house SDLC and workflow. Copied into every
   step. After a house-process change, sync these zones across profiles of the same rigor first.
3. **Steps** - `[role, ...phase SDLC, ...stack/lang/tool/pov]`. Scale rigor by dropping early or late
   steps, not by renaming them.

## POV and house CI

Python profiles include `pov/mrjk-python-*` (and compose, http, docs where listed), plus house
`tool-mise` / `tool-task` instead of `pov/mrjk-universal-cicd`. The bash and POSIX sh script profiles
include `pov/mrjk-bash-misc` or `pov/mrjk-sh-misc`. Copy a profile and drop POV slugs if a project
should not take mrjk opinions. Add `pov/mrjk-universal-cicd` if you want the extra ADR 0021 flavour
on top of the house CI rules.

This repo's `AI_RULES.json` dogfoods `src/profiles/rulesmith-library-standard.json` (same rule lists
and steps; keep the project-specific preamble). After changing that profile, sync the lists into
`AI_RULES.json` and run `task build` to regenerate Cursor, Codex, and GitHub Copilot agent files.

Apply a profile to a project with:

```bash
task apply PROFILE=python-web-standard TARGET=/path/to/project
```

See [Install and apply](../start/install/) for the shared flow, then the tool pages under Tools
([Cursor](../start/cursor/), [Codex](../start/codex/), [GitHub Copilot](../start/copilot/)).
Run `task list` to see every resolvable rule a profile can reference.
