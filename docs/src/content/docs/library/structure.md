---
title: Library structure
description: Layout, slug constraint, and how ai-rulesmith resolves rules
---

This repo is a library of small, composable rules for [ai-rulesmith](https://github.com/Luzgan/ai-rulesmith).
Rules are plain markdown. `ai-rulesmith` does the composing and the writing of agent files
(`CLAUDE.md`, `.cursorrules`, `AGENTS.md`, ...). Nothing here generates output on its own.

## Layout

```
src/
  rules/                the library, always exactly two levels deep
    general/            house standards, apply everywhere, language agnostic
    meta/               how the agent maintains this library
    role/               personas: developer, reviewer, architect, qa, ...
    sdlc/               lifecycle practices the built-in ruleset does not cover
    stack/              project archetypes: python-cli, python-web, python-script
    lang-python/        Python language knowledge
    tool-python/        Python toolchain knowledge: uv, ruff, mypy, pytest
    tool-mise/          pin the toolchain with mise
    tool-task/          Taskfile workflow entrypoints
    tool-docker/        Compose layout and image hardening
    security/           house security practices beyond the built-ins
    pov/                person-prefixed opinions: pov/<who>-<topic>
  profiles/             ready made AI_RULES.json variants, fast to strict
docs/                   Starlight site (this documentation)
AI_RULES.json           this repo's own config, it eats its own dog food
Taskfile.yml            install, vendor, build, validate, docs
```

## The two segment rule

A rule is addressed by a slug, and `ai-rulesmith` validates every slug in `AI_RULES.json` against:

```
/^[a-z0-9-]+\/[a-z0-9-]+$/
```

So a slug is exactly `<category>/<name>`, both kebab-case. `src/rules/lang/python/typing.md` would be
found on disk but rejected by config validation, so **deeper nesting is not an option**. The
hierarchy lives in the category name instead.

Categories therefore use an axis prefix when the axis will grow a second member:

| Category pattern | Meaning | Examples |
| --- | --- | --- |
| `lang-<language>` | knowledge about a language itself | `lang-python`, later `lang-bash`, `lang-go` |
| `tool-<ecosystem>` | knowledge about a toolchain | `tool-python`, `tool-mise`, `tool-task`, `tool-docker` |
| `general` | house standards, true for every task | `general/ascii-punctuation` |
| `meta` | rules about writing rules | `meta/capture-learnings` |
| `role` | one persona per rule | `role/reviewer` |
| `sdlc` | lifecycle practices | `sdlc/write-spec-first` |
| `stack` | one project archetype per rule | `stack/python-cli` |
| `security` | house security beyond built-ins | `security/no-git-leakage` |
| `pov` | person-prefixed opinions, not universal house law | `pov/mrjk-universal-cicd` |
| `git` (and other built-in categories) | override a shipped slug | `git/conventional-commits` |

Rule filenames are short nouns describing the single practice: `lang-python/typing.md`, not
`lang-python/python-typing-best-practices.md`. The slug is the documentation.

## Resolution and precedence

`ai-rulesmith` looks for `<slug>.md` in three places and stops at the first hit:

1. `<project>/.rulesmith/rules/` (vendored, per project)
2. `~/.config/rulesmith/rules/` (global, where `task link` points this repo)
3. the 29 rules shipped inside the `ai-rulesmith` package

Same slug at a higher level silently overrides the lower one. That is the override mechanism:
to change a built-in rule for one project, drop a file with the same slug into `.rulesmith/rules/`.

## Relationship to the built-in ruleset

The built-in ruleset already covers `ai-behavior`, `code-style`, `workflow`, `git`, `testing`,
`security`, `review`, `architecture` and `error-handling`. This library does not restate any of it.
Profiles reference built-ins by slug and add only what is missing here. Run `task list` to see all
three sources at once, and check there before writing a new rule.

## What does not belong in src/rules/

Every `.md` file under a rules directory is collected as a rule, recursively. A `README.md` or
`_TEMPLATE.md` inside `src/rules/` would show up as a rule named `readme`. So templates and
prose live in this docs site only.
