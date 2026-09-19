---
title: Install and apply
description: Install this library, pick a recipe, and generate agent files with ai-rulez
---

This library ships bare [ai-rulez](https://github.com/Goldziher/ai-rulez) modules under
`modules/`. Consumer projects declare **intention** in `.ai-rulez/config.toml` via
`builtins` and `[[includes]]`, then run `ai-rulez generate`.

## 1. Install tools in this repo

```bash
mise install
task install
```

`mise.toml` pins Node, Task, and `ai-rulez`.

## 2. Apply a recipe

```bash
task apply RECIPE=python-cli-standard TARGET=~/code/my-project
```

That copies `examples/<RECIPE>/config.toml` to `TARGET/.ai-rulez/config.toml`.

## 3. Point includes at the published library

Local recipe paths work only inside this checkout. In a consumer project, rewrite each include:

```toml
[[includes]]
name = "house"
source = "https://github.com/mrjk/ai-rules.git"
path = "modules/house"
ref = "v1.0.0"
include = ["rules", "context", "skills", "agents"]
merge_strategy = "local-override"
```

Pin `ref` to a release tag when you want stable updates.

## 4. Describe the project, then generate

Add context under `.ai-rulez/context/`, then:

```bash
cd ~/code/my-project
ai-rulez validate
ai-rulez generate
```

Typical outputs (presets in the recipe): Cursor (`.cursor/rules/`), Codex (`AGENTS.md`),
GitHub Copilot (`.github/copilot-instructions.md`).

## 5. Optional MCP enablement

Recipes enable the ai-rulez MCP server. With MCP connected, ask the assistant to use the
`enablement-guide` skill to turn modules on or off, then regenerate.

See [Recipes](../library/profiles/) and [Library structure](../library/structure/).
