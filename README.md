# AI Rules by mrjk

A reusable library of AI agent rules, composed into per project agent files with
[ai-rulesmith](https://github.com/Luzgan/ai-rulesmith).

Documentation: [https://mrjk.github.io/ai-rules/](https://mrjk.github.io/ai-rules/)

Rules are small markdown atoms under `src/rules/`. Profiles under `src/profiles/` compose them into a
`CLAUDE.md`, `.cursorrules` or `AGENTS.md` for a given kind of project. Define a practice once, use
it in every project.

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

| Profile | Shape | For |
| --- | --- | --- |
| `python-script-fast` | standard workflow, thin rule set | a single portable `uv run` script |
| `python-cli-standard` | steps: Implement, Review | a packaged CLI tool |
| `python-web-strict` | steps: Specify, Design, Implement, Review, Verify, Release | a web service, full lifecycle |
| `bash-script-fast` | standard workflow, thin rule set | a single Bash 4+ script |
| `sh-script-fast` | standard workflow, thin rule set | a single POSIX `sh` script |
| `rules-library` | standard workflow, meta plus house standards | this repository, maintaining the rule library |

The three Python profiles include `pov/mrjk-python-*` plus shared `pov/mrjk-cicd` (and compose,
http, docs where listed). The bash and POSIX sh script profiles include `pov/mrjk-bash-misc` or
`pov/mrjk-sh-misc`. Copy a profile and drop those slugs if a project should not take mrjk opinions.
`rules-library` does not include them.

This repo's `AI_RULES.json` is a copy of `src/profiles/rules-library.json`. Keep them the same, then
run `task build` to regenerate `AGENTS.md` and `.cursorrules`.

A profile is a self contained `AI_RULES.json`. There is no inheritance in `ai-rulesmith`, so to make
a variant, copy the closest profile and edit its rule lists.

## Rule categories

| Category | Contents |
| --- | --- |
| `general/` | house standards that apply to every task |
| `meta/` | how the agent maintains this library |
| `role/` | personas: developer, reviewer, architect, qa, product owner, tech writer |
| `sdlc/` | lifecycle practices: specs, ADRs, CI, PRs, brownfield, rollback, release |
| `stack/` | project archetypes: python script, python CLI, python web service |
| `lang-python/` | Python language knowledge |
| `tool-python/` | Python toolchain: uv, ruff, mypy, pytest |
| `pov/` | person-prefixed opinions (`pov/mrjk-cicd`, later other authors) |
| `git/` | overrides of the ai-rulesmith git built-ins |

The 29 rules built into `ai-rulesmith` are not duplicated here unless this library
overrides a slug. Profiles reference built-ins directly. Run `task list` to see everything at once.

## Docs

Site: [https://mrjk.github.io/ai-rules/](https://mrjk.github.io/ai-rules/)

- [Using with Cursor](https://mrjk.github.io/ai-rules/start/cursor/): install a profile and generate `.cursorrules`
- [Cursor user rule for git](https://mrjk.github.io/ai-rules/start/cursor-user-git/): stop the default commit protocol from overriding Conventional Commits
- [Library structure](https://mrjk.github.io/ai-rules/library/structure/): the layout, the slug constraint, resolution order
- [Authoring](https://mrjk.github.io/ai-rules/library/authoring/): how to write a rule, and the variables gotcha
- [Rule templates](https://mrjk.github.io/ai-rules/library/rule-template/): templates for a plain rule and for a role
- [Specs](https://mrjk.github.io/ai-rules/library/specs/): the original requirements and the design decisions
- [POV](https://mrjk.github.io/ai-rules/library/pov/): person-prefixed opinions, default mrjk set, source map
- [Rules](https://mrjk.github.io/ai-rules/rules/general/ascii-punctuation/): browse every rule in the library

Local sources live under `docs/src/content/docs/`. Scratch notes stay in `docs/TMP/` and are not published.

### GitHub Pages (one-time)

1. Push `main` to `origin`.
2. Repo **Settings > Pages**: Source = **GitHub Actions** (not "Deploy from a branch").
3. Allow Actions for the repo. Private repos need a paid plan for Pages.
4. Wait for the `ci` workflow on `main`, then open https://mrjk.github.io/ai-rules/
