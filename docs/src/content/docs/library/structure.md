---
title: Library structure
description: Module layout and how ai-rulez resolves includes
---

This repo is a library of composable modules for
[ai-rulez](https://github.com/Goldziher/ai-rulez). Modules are bare directories under
`modules/`. Consumer projects include them by path (local) or git URL + `path` + `ref`.

## Layout

```
modules/                 bare include sources (rules, skills, agents, ...)
  house/
  sdlc/
  lang-python/
  tool-*/
  stack-*/
  workflow-standard/
  workflow-strict/
  pov-mrjk/
  meta-library/
examples/                intention recipes (starting config.toml files)
.ai-rulez/              this repo's dogfood config
docs/                    Starlight site
```

## Intention, not slug lists

A consumer `.ai-rulez/config.toml` declares:

- `builtins` - stock ai-rulez domains to enable or exclude (`!domain/rule`)
- `[[includes]]` - which library modules to pull
- `presets` - which assistant outputs to generate
- optional MCP so an assistant can adjust includes via CRUD

Updating the library: publish a tag, bump consumer `ref`, run `ai-rulez generate`.

## Hierarchy

- Module names are flat kebab-case.
- Deeper taxonomy lives in the source tree (`modules/...`) and in nested includes if needed.
- Domains inside a single project config remain one level; multi-level composition uses includes.

## Docs

Rule pages under the docs Rules sidebar are symlinks into `modules/*/rules/`.
Recipes are rendered from `examples/*/config.toml` at docs build time.
