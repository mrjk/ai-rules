---
title: Recipes
description: Intention recipes that replace old self-contained profiles
---

A **recipe** is an example `.ai-rulez/config.toml` under `examples/<name>/`. It lists
`builtins` and module includes. It is a declaration of intention, not a hardcoded merge list of
every rule file.

Browse the Recipes sidebar for each shipped recipe, or read [examples/README.md](https://github.com/mrjk/ai-rules/blob/main/examples/README.md).

Apply with:

```bash
task apply RECIPE=python-cli-standard TARGET=/path/to/project
```

Then rewrite includes for the published git source and pin `ref`.
