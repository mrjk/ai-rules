---
name: enablement-guide
description: Interview the human and enable ai-rulez modules, builtins, and profiles via MCP or CLI
priority: high
---

# Enablement Guide

Use this skill when the human wants to turn modules on or off, pick a stack recipe, or adjust profiles.

## Ask

1. Stack: python-cli, python-web, python-script, bash-script, sh-script, or library
2. Workflow: standard (Implement / Review / Verify) or strict (Specify through Release)
3. Include `pov-mrjk` opinions: yes or no
4. Extra modules: docker, cicd builtins, documentation, etc.

## Map

- Always suggest `house` + `sdlc` + `git` + `security` includes (or the recipe that already bundles them)
- python-cli -> `lang-python`, `tool-python`, `tool-mise`, `tool-task`, `stack-python-cli`
- python-web -> same plus `stack-python-web`, `tool-docker` when containers exist
- python-script -> `lang-python`, `tool-python`, `stack-python-script`
- bash-script / sh-script -> matching stack module + `tool-mise` + `tool-task`
- library work -> `meta-library` + `workflow-standard`
- POV yes -> `pov-mrjk`
- Workflow -> `workflow-standard` or `workflow-strict`
- Builtins: prefer `python`, `security`, `git-workflow`, `ai-governance`; add `docker` / `cicd` when relevant; exclude overlaps with `!domain/rule` when a house rule is stricter

## Act

1. Prefer the ai-rulez MCP tools to add includes, set profiles, and generate
2. If MCP is unavailable, edit `.ai-rulez/config.toml` and run `ai-rulez validate` then `ai-rulez generate`
3. Summarize what was enabled and which `ref` pin the includes use

## Never

- Do not invent a custom tagging engine or wizard binary
- Do not hand-edit generated assistant files to "enable" a rule
