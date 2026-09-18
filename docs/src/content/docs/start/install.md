---
title: Install and apply
description: Install this library, pick a profile, and generate agent files
---

This library does not talk to any AI tool by itself.
[ai-rulesmith](https://github.com/Luzgan/ai-rulesmith) reads `AI_RULES.json` and writes the
files each target expects. Run `ai-rulesmith list-targets` for the full list of supported
targets and their output paths.

## 1. Install tools in this repo

From a clone of [ai-rules](https://github.com/mrjk/ai-rules):

```bash
mise install
task install
```

`mise.toml` pins Node, Task, and `ai-rulesmith`. `task install` is `mise install`.

## 2. Make the rules visible to the target project

Pick one:

```bash
task link                              # global: all projects see this library
task vendor TARGET=~/code/my-project   # pin a snapshot in one project
```

`task link` symlinks `src/rules/` to `~/.config/rulesmith/rules`. `task vendor` copies the files
into `TARGET/.rulesmith/rules/`.

## 3. Apply a profile

```bash
task apply PROFILE=python-cli-standard TARGET=~/code/my-project
```

That copies `src/profiles/<PROFILE>.json` to `TARGET/AI_RULES.json` and runs `ai-rulesmith build`
in the target. Profiles in this library include three targets by default: Cursor, Codex, and
GitHub Copilot. Typical output:

- `AI_RULES.json` - which rules to compose, plus a `preamble` you should edit
- `.cursorrules` - [Cursor](./cursor/)
- `AGENTS.md` - [Codex](./codex/)
- `.github/copilot-instructions.md` - [GitHub Copilot](./copilot/)

See [Profiles](../library/profiles/) for the list shipped here.

## 4. Describe the project, then rebuild

Edit the `preamble` in `AI_RULES.json` so the agent knows what the repo is. Rebuild after that
change:

```bash
cd ~/code/my-project
ai-rulesmith build --force --no-preview
```

From this repo you can rebuild a target again with `task apply` (it overwrites `AI_RULES.json`
from the profile) or run `ai-rulesmith build` in the target if you only changed the preamble.

## This repository

This repo uses the `rulesmith-library-standard` profile. `AI_RULES.json` at the root should stay in
sync with `src/profiles/rulesmith-library-standard.json` (rule lists and steps; keep the local
preamble). After changing that profile:

```bash
task build
```

That regenerates this repo's agent files for Cursor, Codex, and GitHub Copilot.
