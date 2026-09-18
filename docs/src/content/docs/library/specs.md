---
title: Specifications
description: Original requirements and design decisions
---

## Project specifications

* I want to write down all ai/agent rules, to be reusable in different contexts
* I want a clear file structure
* Use the following best practices documentations:
  * docs/TMP/bp1.md, bp2.md, bp3.md, bp4.md
* I would use https://github.com/Luzgan/ai-rulesmith to generate the rules
    * Follow project best practices, read doc on: https://raw.githubusercontent.com/Luzgan/ai-rulesmith/refs/heads/main/README.md
* I want to have at least the following concepts:
  * General rules
  * Roles: like devel, reviewer, architect, qa, product owner, architect ...
  * KB:
    * Per languages
    * Per target or types: Full python project, (simple CLI, simple web app, single portable py script)
    * Must include all software workflow development
    * Any other suggestions to improve this ?
    * Workflow: simple/fast to bigger/stricter projects
    * Tooling support and best practices
    * Best practices

## Design decisions

See [Library structure](structure/) for the resulting layout and [Authoring rules](authoring/) for the
rule conventions. Notable constraints found in `ai-rulesmith` that shaped the answers above:

* Rule slugs are exactly `<category>/<name>`, so the KB hierarchy is encoded in category names
  (`lang-python`, `tool-python`) rather than nested directories.
* There is no `extends` in `AI_RULES.json`, so the "simple/fast to bigger/stricter" axis is expressed
  as separate self contained files in `src/profiles/`, not as inheritance.
* Roles map onto the steps of a `steps` workflow, one role per step.
