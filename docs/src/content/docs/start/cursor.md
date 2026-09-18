---
title: Using with Cursor
description: Install this library into a project and generate Cursor rules
---

This library does not talk to Cursor by itself. [ai-rulesmith](https://github.com/Luzgan/ai-rulesmith)
reads `AI_RULES.json` and writes a `.cursorrules` file (and optionally `AGENTS.md` / `CLAUDE.md`).
Cursor then loads `.cursorrules` for that project.

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
in the target. Typical output:

- `AI_RULES.json` - which rules to compose, plus a `preamble` you should edit
- `.cursorrules` - what Cursor actually reads
- `AGENTS.md` - depending on the profile's `target` list

See [Profiles](../library/profiles/) for the list shipped here.

## 4. Open the project in Cursor

Open `TARGET` as the Cursor workspace (the folder that contains `.cursorrules`), not this library,
unless you are editing the library itself.

Cursor project rules apply to that workspace. They do not replace your user rules in Cursor
settings. Keep user rules short; put shared practices in this library.

## 5. Describe the project, then rebuild

Edit the `preamble` in `AI_RULES.json` so the agent knows what the repo is. Rebuild after that
change:

```bash
cd ~/code/my-project
# from this library, or after mise install in the target:
ai-rulesmith build --force --no-preview
```

From this repo you can rebuild a target again with `task apply` (it overwrites `AI_RULES.json`
from the profile) or run `ai-rulesmith build` in the target if you only changed the preamble.

## This repository

This repo uses the `rules-library` profile. `AI_RULES.json` at the root should stay in sync with
`src/profiles/rules-library.json`. After changing that profile:

```bash
task build
```

That regenerates this repo's `.cursorrules` and `AGENTS.md`. Open **this** clone in Cursor when you
are authoring rules, not when you are applying them to another project.
