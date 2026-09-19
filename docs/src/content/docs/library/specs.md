---
title: Specifications
description: Original requirements and migration notes
---

## Project specifications

* Document the collection of AI/agent rules for reuse across contexts
* Keep the file structure clear and maintainable
* Use [ai-rulez](https://github.com/Goldziher/ai-rulez) for composition and generation
* Cover general rules, roles, language/tool knowledge, stacks, and workflows from light to strict

## Design decisions

See [Library structure](structure/) and [Authoring](authoring/). Notable choices after migrating
off ai-rulesmith:

* Shared content is bare modules under `modules/`, included by consumers
* Profiles became intention recipes (`examples/`) selecting builtins + modules
* Steps workflows are skills, agents, and commands under `workflow-*` modules
* Deeper hierarchy is optional via nested includes and module paths, not a two-segment slug validator
