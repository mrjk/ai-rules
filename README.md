# AI Rules by mrjk

A reusable library of AI agent rules, composed into per project agent files with
[ai-rulesmith](https://github.com/Luzgan/ai-rulesmith).

Documentation: [https://mrjk.github.io/ai-rules/](https://mrjk.github.io/ai-rules/)

Rules are small markdown atoms under `src/rules/`. Profiles under `src/profiles/` compose them into
`.cursorrules`, `AGENTS.md`, or `.github/copilot-instructions.md` for a given kind of project.
Define a practice once, use it in every project.

## Commands

| Command | What it does |
| --- | --- |
| `task install` | Install tools pinned in `mise.toml` |
| `task help` | Show ai-rulesmith CLI help (`task help -- build` for a subcommand) |
| `task rulesmith -- --help` | Pass any args to the mise-managed `ai-rulesmith` binary |
| `task link` | Install the library globally, by symlinking `src/rules/` to `~/.config/rulesmith/rules` |
| `task unlink` | Remove that symlink |
| `task vendor TARGET=/path` | Copy a pinned snapshot of the library into a project's `.rulesmith/rules/` |
| `task apply PROFILE=<name> TARGET=/path` | Install a profile into a project and build its agent files |
| `task list` | List every resolvable rule: this library, plus the ai-rulesmith built-ins |
| `task validate` | Validate this repo's config and every profile |
| `task build` | Rebuild this repo's own agent files |
| `task docs:dev` | Preview the Starlight site locally |
| `task docs:build` | Build the site into `docs/dist` |
| `task ci` | Validate the library and build the site |

Tools are pinned in `mise.toml`, so `mise install` is the only setup step.

## Using it in a project

Install the library once, either globally or per project:

```bash
task link                              # global, all projects see it immediately
task vendor TARGET=~/code/my-project   # or pin a snapshot into one project
```

Then pick a profile and build:

```bash
task apply PROFILE=python-cli-standard TARGET=~/code/my-project
```

That writes an `AI_RULES.json` into the project and generates the agent files. Edit the `preamble`
in that file to describe the project, then rerun `rulesmith build` there whenever it changes.

## Profiles

A profile is a self contained `AI_RULES.json`. There is no inheritance in `ai-rulesmith`, so to make
a variant, copy the closest profile and edit its rule lists. Python profiles include
`pov/mrjk-python-*` (and compose, http, docs where listed), plus house `tool-mise` / `tool-task`
instead of `pov/mrjk-universal-cicd`. The bash and POSIX sh script profiles include
`pov/mrjk-bash-misc` or `pov/mrjk-sh-misc`. Drop POV slugs if a project should not take mrjk
opinions. Add `pov/mrjk-universal-cicd` if you want the extra ADR 0021 flavour on top of the house
CI rules.

This repo's `AI_RULES.json` dogfoods `src/profiles/rulesmith-library-standard.json` (same rule lists
and steps; keep the project-specific preamble). After changing that profile, copy the lists into
`AI_RULES.json` and run `task build` to regenerate Cursor, Codex, and GitHub Copilot agent files.

## Rule categories

Browse every rule on the [docs Rules sidebar](https://mrjk.github.io/ai-rules/rules/general/ascii-punctuation/).
Run `task list` for this library plus the ai-rulesmith built-ins. Built-ins are not duplicated here
unless this library overrides a slug.

## Docs

Site: [https://mrjk.github.io/ai-rules/](https://mrjk.github.io/ai-rules/)

- [Install and apply](https://mrjk.github.io/ai-rules/start/install/): install a profile and generate agent files
- [Cursor](https://mrjk.github.io/ai-rules/start/cursor/) / [GitHub Copilot](https://mrjk.github.io/ai-rules/start/copilot/) / [Codex](https://mrjk.github.io/ai-rules/start/codex/): tool-specific output
- [Cursor user rule for git](https://mrjk.github.io/ai-rules/start/cursor-user-git/): stop the default commit protocol from overriding Conventional Commits
- [Library structure](https://mrjk.github.io/ai-rules/library/structure/): the layout, the slug constraint, resolution order
- [Authoring](https://mrjk.github.io/ai-rules/library/authoring/): how to write a rule, and the variables gotcha
- [Rule templates](https://mrjk.github.io/ai-rules/library/rule-template/): templates for a plain rule and for a role
- [Specs](https://mrjk.github.io/ai-rules/library/specs/): the original requirements and the design decisions
- [POV](https://mrjk.github.io/ai-rules/library/pov/): person-prefixed opinions, default mrjk set, source map
- [Rules](https://mrjk.github.io/ai-rules/rules/general/ascii-punctuation/): browse every rule in the library

Handwritten pages live under `docs/src/content/docs/`. Rule pages come from a symlink to
`src/rules/` (no copy step). Profile pages are Astro routes that read `src/profiles/*.json` at
build time. Scratch notes stay in `docs/TMP/` and are not published.

### GitHub Pages (one-time)

1. Push `main` to `origin`.
2. Repo **Settings > Pages**: Source = **GitHub Actions** (not "Deploy from a branch").
3. Allow Actions for the repo. Private repos need a paid plan for Pages.
4. Wait for the `ci` workflow on `main`, then open https://mrjk.github.io/ai-rules/
