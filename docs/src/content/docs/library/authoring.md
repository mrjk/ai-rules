---
title: Authoring rules
description: How to write a portable module rule for ai-rulez
---

## Placement

- Put portable practices in `modules/<module>/rules/<name>.md`
- One practice per file; imperative bullets under a single `#` heading
- Frontmatter: `title`, `priority` (quote titles that contain `:`)
- Skills live in `modules/<module>/skills/<name>/SKILL.md`
- Agents and optional commands live beside rules in the same module

## Style

Follow the `meta-library` authoring rule. Prefer amending an existing file over adding a near
duplicate. Prefer an ai-rulez builtin when it already covers the practice.

## Wiring

- Reference new modules from at least one `examples/*/config.toml` or the dogfood
  `.ai-rulez/config.toml`
- Run `task validate` after edits
- Run `task build` to regenerate this repo's agent files

## Variables

ai-rulez has no rulesmith-style slug `vars`. Put project-specific values (license, minimum
Python version) in the consumer's `.ai-rulez/context/` or local override rules.
