# AI Rules by mrjk

A reusable library of AI agent modules, composed into per-project agent files with
[ai-rulez](https://github.com/Goldziher/ai-rulez).

Documentation: [https://mrjk.github.io/ai-rules/](https://mrjk.github.io/ai-rules/)

Modules live under `modules/`. Recipes under `examples/` declare intention (`builtins` + includes).
Define a practice once, include it in every project.

## Commands

| Command | What it does |
| --- | --- |
| `task install` | Install tools pinned in `mise.toml` |
| `task help` | Show ai-rulez CLI help |
| `task rulez -- --help` | Pass any args to the mise-managed `ai-rulez` binary |
| `task apply RECIPE=<name> TARGET=/path` | Copy a recipe config into a project |
| `task list` | List rules for this repo's dogfood config |
| `task validate` | Validate dogfood config and every example recipe |
| `task build` | Generate this repo's agent files |
| `task docs:dev` | Preview the Starlight site locally |
| `task docs:build` | Build the site into `docs/dist` |
| `task ci` | Validate the library and build the site |

Tools are pinned in `mise.toml`, so `mise install` is the only setup step.

## Using it in a project

```bash
task apply RECIPE=python-cli-standard TARGET=~/code/my-project
```

Rewrite includes to the git library URL with a pinned `ref` (see `examples/README.md`), add
project context, then:

```bash
cd ~/code/my-project
ai-rulez validate
ai-rulez generate
```

## Recipes

See the docs Recipes sidebar or `examples/`. Each recipe is an intention config, not a hardcoded
list of every rule file.

## Docs

Site: [https://mrjk.github.io/ai-rules/](https://mrjk.github.io/ai-rules/)

- [Install and apply](https://mrjk.github.io/ai-rules/start/install/)
- [Migrate from ai-rulesmith](https://mrjk.github.io/ai-rules/start/migrate/)
- [Library structure](https://mrjk.github.io/ai-rules/library/structure/)
- [Authoring](https://mrjk.github.io/ai-rules/library/authoring/)
