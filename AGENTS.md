<!--
🤖 AI-RULEZ :: GENERATED FILE — DO NOT EDIT
Project: ai-rules
Generated: 2026-09-18 18:12:59
Source: .ai-rulez/config.toml

NEVER edit this file - modify .ai-rulez/ content instead
Use MCP server: npx -y ai-rulez@latest mcp
Regenerate: ai-rulez generate

Docs: https://github.com/Goldziher/ai-rulez
Content-Hash: blake3:18721c4cb380f950f9e75cfe780ba1654c508321a725f1a0fcdc1052e6222031
Source-Hash: blake3:c9dcf9bb1429e59bad40bafcbad23c04c0bea7d301c123197d723c772c55e417
-->

# ai-rules

Composable AI agent rules library (ai-rulez modules and recipes)

## Rules

### adr-for-decisions

**Priority:** medium

- Any decision that a future reader would ask "why is it like this?" about gets an ADR
- Keep it to one page: context, the decision, the alternatives considered, the consequences
- Write it when the decision is made, not later, the reasoning is gone within a week
- Number ADRs sequentially and never edit an accepted one, supersede it with a new one that links back
- Include the constraints that forced the decision, since those are what change over time
- State the consequences honestly, including what becomes harder
- Reference the ADR number in the code when a surprising implementation follows from it

### agent-workflow

**Priority:** high

Prefer subagents for non-trivial work — implementation, research, file exploration. Parallelize aggressively — launch independent subagents in a single message. Always critically review subagent output — check actual file changes, verify correctness, fix issues before reporting done. Never trust subagent summaries at face value; the summary describes intent, not necessarily what happened. Work in iterations: delegate → critically review → fix → verify. Run tests after every change — never assume code works without verification.

### anti-patterns

**Priority:** high

No magic numbers — use named constants. No global state — use dependency injection. No inheritance for code reuse — prefer composition. No bare exception handlers — catch specific types. No mocking internal services — use real objects for integration tests. No blocking I/O in async code paths — keep async paths fully async.

### architect

**Priority:** medium

You are acting as the architect. Decide the shape, then hand it over.

## Focus

- The boundaries: what the modules are, what crosses between them, what owns state
- Reusing what the project already has before introducing anything new
- The cost of being wrong, and how reversible each choice is

## Method

- Establish the constraints first: existing stack, deployment target, team size, expected lifetime
- Offer two or three options with their tradeoffs, then recommend one and say why
- Prefer the boring option, and prefer the reversible option when uncertainty is high
- Name the failure modes of the recommended design before it is built
- Record the decision, the alternatives and the consequences as an ADR
- Hand over a plan in numbered steps that a developer can implement independently

## Boundaries

- Always: justify a new dependency or pattern against what already exists, write the decision down
- Ask first: introducing a new language, datastore, service boundary or build system
- Never: design for scale that is not on the roadmap, start implementing the feature, or leave a
  decision recorded only in chat

## Done when

- One design is recommended with tradeoffs stated, the decision is written down, and the
  implementation plan is numbered

### ascii-punctuation

**Priority:** medium

- Use the ASCII hyphen-minus `-` (U+002D) as the only dash character
- Never emit U+2014 em dash, U+2013 en dash, U+2012 figure dash, U+2015 horizontal bar or
  U+2212 minus sign, anywhere: source, comments, docs, commit messages, PR bodies, UI copy, chat
- When a sentence wants an em dash, use a comma, a colon, a period or parentheses instead
- Prefer ASCII quotes `'` and `"` over typographic quotes
- Never introduce these characters while editing an existing file, even if neighbouring text has them

### ask-when-blocked

**Priority:** medium

- When a requirement is ambiguous, ask before implementing, do not pick an interpretation silently
- When two reasonable designs exist and the choice is not yours to make, present them and stop
- When an approach has failed twice, stop and report what was tried instead of trying a third variant
- Do not struggle in silence: a question costs less than a wrong implementation
- State assumptions explicitly when proceeding without an answer is the only option

### atomic-commits

**Priority:** high

Each commit represents one logical change. Don't mix unrelated changes. Use conventional commits format (`feat:`, `fix:`, `chore:`, `refactor:`, `docs:`, `test:`). Keep commits small and focused for easier review and bisection.

### avoid-duplication

**Priority:** medium

Extract shared logic after the third repetition, not before. Three similar lines of code are better than a premature abstraction. When extracting, ensure the shared code has a single reason to change — if two callers would evolve the logic differently, keep them separate. Premature abstraction creates worse coupling than duplication.

### batch-operations

**Priority:** medium

Group related file reads and writes into single operations. Combine independent tool calls in parallel rather than sequentially. When making multiple edits to the same file, batch them into one edit operation. Prefer multi-file search tools over individual file reads when exploring.

### branch-hygiene

**Priority:** medium

Use descriptive branch names. Keep branches short-lived. Delete merged branches. Rebase or merge from main regularly to avoid drift.

### brownfield-grounding

**Priority:** medium

- Treat the running code and the tests as the source of truth when specs are missing or stale
- Before a large change, write or refresh a short spec of current behaviour, then the change on top
- Document only what you verified in this session: commands that work, the stack that is imported,
  the invariants the tests enforce
- Do not invent an architecture document that describes a system you have not traced
- Prefer a one page "as-is" note plus a spec for the new work over a full rewrite of missing history
- Record gaps as open questions, not as decided requirements

### capture-learnings

**Priority:** medium

- Trigger: the human corrected you, or a long session exposed a recurring miss
- Treat that correction as a candidate rule change, not a one-off chat note
- Prefer amending an existing rule over adding a near duplicate
- Propose the text and where it belongs, then wait for approval before editing
- Only capture lessons that will recur; a typo fix is not a rule
- After a long session, offer a short list of rules worth adding, amending, or deleting

### change-has-a-rule

**Priority:** medium

- Trigger: you are about to introduce a new practice, not just follow an existing one
- Search existing rules first so you amend instead of duplicating
- Propose the rule text and slug, then wait for confirmation before writing files
- Skip typos, generated output, and work that already follows an existing rule
- If the change contradicts a rule, propose updating or deleting that rule, do not work around it

Good: a new install flag is about to land, you propose `meta/install-flag-defaults` and wait

Bad: you ship the flag, then mention a possible rule after the files are already written

### ci-same-commands

**Priority:** medium

- CI is the merge gate: lint, type check, tests and the build must run on every change that would merge
- Call the same documented task-runner commands the README advertises, never a parallel private
  invocation that can drift
- Install in CI with a frozen lockfile so the pipeline uses the committed versions
- Fail the job on the first red check; do not add a skip, a continue-on-error or a weaker command to
  go green
- When you add a local command, add it to CI in the same change, or the command does not exist yet
- Do not introduce a second CI system or a second way to run the suite

### commit-messages

**Priority:** high

Use conventional commits: `feat: add user auth`, `fix: handle null input`, `chore: update deps`, `refactor: extract parser`, `docs: add API guide`, `test: cover edge case`. First line under 72 chars, imperative mood. Body explains _why_, not _what_. Add scope when useful: `feat(api): add pagination`.

### communication-style

**Priority:** critical

Be concise and precise — no fluff, no emojis, no unnecessary checklists. PR descriptions: state what changed and why in 1-3 sentences, not bullet-point essays. Issue comments: answer the question directly. Code review: point out the problem and suggest the fix, skip praise and filler. Commit messages: imperative mood, under 72 chars, body explains why not what. Never pad output to appear thorough — brevity is clarity.

### complexity-limits

**Priority:** medium

Enforce concrete limits: max 20 cyclomatic complexity per function, max 4 levels of nesting depth, max 50 lines per function. Use early returns to flatten conditionals. Break complex functions into well-named helpers that each do one thing.

### concise-reporting

**Priority:** medium

- Open with the result: what changed, what broke, or what the answer is
- Put reasoning and detail after the outcome, for the reader who wants it
- Answer a simple question with prose, not with headings and sections
- Skip pleasantries, apologies and restatements of the request
- Name the files touched, do not paste whole files back
- Only correct an earlier statement when the error changes what the reader should do

### config-over-constants

**Priority:** medium

- Define a value once and reference it, in code, in shell scripts, in CI and in task runners
- Paths, hostnames, ports, versions and timeouts are variables, never inline literals
- When the same literal appears a second time, that is the signal to name it
- Read deployment specific values from the environment, with a documented default
- Do not duplicate a block of logic to handle a variant, parameterise the original
- Duplication in tests is acceptable when it makes the assertion clearer

### context-preservation

**Priority:** medium

Record key findings (file paths, function signatures, patterns discovered) before they scroll out of context. Summarize investigation results before acting on them. When working on multi-step tasks, note intermediate decisions and their rationale to avoid re-deriving them later.

### conventional-commits

**Priority:** medium

- Format: `type(scope): description`. Types: feat, fix, docs, style, refactor, test, chore
- Write the final message as plain text. Do not use bold, italics, or fenced code. Punctuation `-`, `:`, `()`, `[]` is allowed
- Title: imperative mood, no trailing period, ideally under 50 chars, hard limit 72. Include critical context (dates for meetings, releases, time-sensitive work). Be specific: "fix null check in user validation" not "fix bug"
- Refer to documentation by section title, never by section number
- Separate title and body with a blank line. Body is `-` bullets only, wrap at 72, cover what and why, never repeat the title
- Omit the body when the title already says everything (style cleanup, simple deletion). Do not add filler to satisfy a structure
- Summarize repetitive edits at domain level, not item by item
- For binary or opaque files, inspect the content and name the real change (asset, encoding conversion, key dependency bumps)
- When amending, describe the final combined commit, not the amend delta and not the pre-amend state
- Commit in working chunks. Each commit leaves the tree in a working state
- If the commit only advances a git submodule pointer, follow `git/submodule-sync-commits` instead of a default body

Good:

```text
feat(auth): implement JWT token refresh strategy

- Rotate expired tokens without forcing logout
- Catch 401s in the auth interceptor
- Cover expiration in unit tests
```

Bad:

```text
Added new auth features.

I added a new way to handle tokens so users don't get logged out.
**Changes:**
* `RefreshToken` service
```

### dead-code

**Priority:** low

Remove dead code instead of commenting it out. Version control preserves history. Commented-out code creates confusion and maintenance burden.

### dependency-upgrades

**Priority:** medium

- Upgrade a single dependency with `uv lock --upgrade-package <name>`, not `uv lock --upgrade`
- Read the changelog or release notes for that version before taking it, and note anything breaking
- Run lint, type check and tests after the lockfile changes, on a clean sync (`uv sync --frozen` in CI)
- Bump the declared lower bound in `pyproject.toml` only when the code needs the new API
- Do not mix a dependency upgrade with a feature change
- If the upgrade is forced by a security advisory, say so in the commit and the changelog
- Ask first before upgrading the language version or a framework that defines the stack

### dev-setup

**Priority:** medium

- Document first-run as: clone, `mise install`, then `task setup` (or the project's documented install task)
- Copy the env example to a local untracked file; do not invent extra variables
- Start Compose only when the project ships a Compose file and the work needs those services
- Follow the README path; do not invent pip, poetry, nvm or a global OS install
- Never use `sudo` to make the project work
- When setup is missing a step, add it to Task and the README in the same change
- Keep first-run free of manual GUI clicks or undocumented host packages

### developer

**Priority:** medium

You are acting as the developer. Implement what was specified, no more.

## Focus

- Making the requested behaviour work, verifiably, in the smallest correct diff
- Matching the conventions already present in the surrounding code
- Leaving the codebase easier to change than you found it

## Method

- Read the existing code and tests for the area before writing anything
- Restate the requirement you are implementing, by number when the spec is numbered
- Write or extend the test that proves the behaviour, then make it pass
- Run the project's lint, type check and test commands before reporting done
- Keep the change working at every commit

## Boundaries

- Always: follow existing patterns, add tests, run the verification commands
- Ask first: adding a dependency, changing a public interface, changing a schema, reformatting a file
  you were not asked to touch
- Never: weaken or delete a failing test to go green, commit secrets, expand scope silently

## Done when

- The requirement is implemented, covered by a test, and lint, types and tests all pass

### env-contract

**Priority:** medium

- Keep a documented example env file with key names and dummy or empty values, never live secrets
- Validate required variables at startup and fail fast when one is missing
- Do not invent extra variable names; reuse the project's existing names
- Load secrets from the environment or an untracked local file, not from git
- When you add a required variable, update the example file in the same change
- Do not commit a filled `.env` "just for the team"

### error-handling

**Priority:** high

Always wrap errors with context describing what operation failed. Never swallow errors silently — either handle, propagate, or log them. Use language-idiomatic patterns: `Result<T, E>` in Rust, `if err != nil` with `fmt.Errorf("doing X: %w", err)` in Go, typed exceptions in Python/Java. Fail fast on unrecoverable errors.

### explain-reasoning

**Priority:** medium

Briefly explain your reasoning for non-obvious decisions. State trade-offs when multiple approaches exist. Be transparent about uncertainty.

### feature-branch-workflow

**Priority:** medium

- Branch from the default branch for each change; do not commit directly to the default branch
- Keep the branch short-lived and named for the work; delete it after the PR merges
- Open a pull request and merge only when CI is green
- Do not use gitflow: no long-lived `develop`, no dual `release/` plus `hotfix/` ceremony
- Do not merge a personal long-lived branch into the default branch without a PR
- Rebase or merge the default branch into the feature branch to stay current; prefer the project's existing method
- One concern per branch; do not pile unrelated work onto an old feature branch

Good:

```text
git switch -c feat/token-refresh
```

Bad:

```text
git switch develop
git flow hotfix start oops
```

### github-actions-hygiene

**Priority:** medium

- Keep one workflow definition for the merge gate; `push`, `pull_request` and `workflow_dispatch` share the same jobs
- Always include `workflow_dispatch` so the same pipeline can run from the Actions web UI
- Do not copy-paste install, lint or test steps into YAML; after mise, call `task ci:...`
- Pin third-party actions by commit SHA, not a moving major tag
- Give `GITHUB_TOKEN` the least privilege the job needs
- Do not `continue-on-error` on the merge gate, and do not echo secrets
- Optional `workflow_dispatch` inputs only when they change real behaviour; do not add unused inputs

Good:

```yaml
on:
  push:
    branches: [main]
  pull_request:
  workflow_dispatch:
jobs:
  ci:
    steps:
      - uses: actions/checkout@<sha>
      - run: mise install
      - run: task ci
```

Bad:

```yaml
on:
  push:
    branches: [ci-hidden]
jobs:
  ci:
    steps:
      - run: pip install -r requirements.txt
      - run: pytest
        continue-on-error: true
```

### grounding-docs

**Priority:** medium

- Before designing or implementing, read the project's spec, architecture notes and stack description
- Use the stack that is already declared, never introduce a second library for a job one already does
- When a document contradicts the code, trust the code and report the contradiction
- Keep these documents short and describe capabilities and concepts, not directory listings, which go stale
- Update the affected document in the same change that makes it out of date
- When a needed document does not exist, say so and offer to write it, do not silently invent the context
- Prefer one line references between documents over copying a section into a second place

### ignore-and-secrets-files

**Priority:** medium

- Keep a root ignore file that excludes virtualenvs, build output, caches, IDE junk and secret files
- Keep a separate agent ignore file for the editor in use, so search and the agent skip generated or
  huge trees that git already tracks
- Never commit `.env`, credential files, private keys or dumped secrets; load them from the
  environment or a local untracked file
- If a secret is already in history, rotate it, do not just delete the file on the current branch
- Do not work around an ignore rule by copying a secret into a tracked path so the agent can see it
- When the agent needs a value from an ignored file, ask the human to paste a redacted sample

### ignore-hygiene

**Priority:** medium

- Keep generated, local and secret files out of git via the repository ignore file
- Never commit `.env`, credentials, keys or dumps; inject secrets from the environment
- Add an agent ignore file for content the agent should not index: large generated trees, vendor blobs
- A git ignore already hides files from many agents; use a negation pattern when the agent must read an ignored file
- When you add a generated output, ignore it in the same change
- Do not weaken ignore rules to make a file easier to commit
- Do not put secrets in the repo "just for local testing"

### incremental-approach

**Priority:** medium

Start with the smallest viable change, verify it works, then extend. Avoid generating large blocks of speculative code. Build iteratively: implement one piece, test, then move to the next. When uncertain about an approach, prototype the critical part first before committing to the full implementation.

### input-validation

**Priority:** high

Validate and sanitize all external input at system boundaries. Use allowlists over denylists. Validate types, ranges, and formats. Never trust user input.

### instruction-budget

**Priority:** medium

- Assume roughly 150 to 200 instructions can be followed consistently, everything beyond that dilutes
- Every rule in a profile is paid for on every request, so adding one has a real cost
- Use a standard workflow with a thin rule list for small work, a steps workflow when the set grows,
  so each step file loads only when that step is reached
- Point at documentation rather than inlining it: a one line reference beats a copied section
- Describe capabilities and commands, not directory listings, so the context cannot go stale
- When a profile stops working well, remove rules before adding more

### least-privilege

**Priority:** medium

Request only necessary permissions. Minimize file system access, network access, and API scopes. Run processes with minimal required privileges.

### library

**Priority:** high

- Follow meta placement and authoring rules for layout; do not restate them here
- Follow generated-versus-handwritten documentation practices for the docs site
- This repo dogfoods ai-rulez: edit `.ai-rulez/` and `modules/`, then run `task validate` and `task build`
- Do not hand-edit generated agent output; regenerate with `ai-rulez generate`
- Prefer one-line references to docs over inlining catalogs that go stale
- Run `task docs:build` or `task ci` before calling Verify done

### license-on-add

**Priority:** medium

- Before adding a dependency, read its license and compare it to `{{project_license}}`
- Permissive licenses (MIT, BSD, Apache-2.0) are compatible with GPLv3; add them without relicensing the project
- Do not add a proprietary or unlicensed dependency
- Ask first before adding a stronger copyleft such as AGPL, or any license that would change distribution duties
- Do not mix a license exception or a vendored third-party tree into a feature change
- Record the new dependency through the project's package manager so the lockfile stays honest

### meaningful-assertions

**Priority:** medium

Assert exact expected values, not just truthiness (`assert result == 42`, not `assert result`). Use snapshot testing for complex structured output. Consider property-based testing for functions with wide input ranges. Include descriptive failure messages. Always test error paths and edge cases, not just the happy path.

### minimal-changes

**Priority:** high

Make the smallest change that achieves the goal. Avoid unnecessary refactoring, reformatting, or scope creep. Don't fix what isn't broken.

### mrjk-bash-misc

**Priority:** medium

- Start scripts with `set -euo pipefail`; do not turn `-e` off without a documented reason
- Target Bash 4.0 as the floor: no Bash 5-only features; do not rely on 4.3+ extras such as namerefs
  or `wait -n` unless the project already requires them
- Prefer small named functions over a growing top-level script; one concern per function
- Declare function temps with `local`; do not leak loop counters or scratch vars into the global
  namespace
- Prefix library function names; do not dump unprefixed helpers into the global namespace
- Quote expansions; use arrays instead of unquoted splitting
- Guard sourced files so main runs only when the file is the entry script
- Use `printf` over `echo` for data; do not `eval` untrusted input

### mrjk-compose

**Priority:** medium

- Always set a restart policy such as `unless-stopped`
- Always pin image tags; never deploy `latest`; drive name and version through variables
- Never set `container_name`; address services with networks and aliases
- Prefer directory bind mounts over single-file mounts; do not use Docker named volumes by default
- Drive Compose through the real CLI; do not reimplement merge, interpolate, or `config` semantics
- Escape `$` as `$$` when the value must reach the container literally
- After `docker compose config`, do not assume map vs list shape for `environment`, `labels`, or
  `ports`
- A multi-service app defines an explicit network; a single-service app may use the default

### mrjk-docs

**Priority:** medium

- If a document can be generated from a source of truth, generate it; do not maintain a second copy
- If a reference list can drift from code, generate it or check it against code
- Do not maintain parallel catalog tables by hand; point at the list or generate command
- Keep ADRs, guides, and intent essays handwritten
- Use a stable prose wrapper with a generated middle between marker comments when the page is mixed
- Hook generators into the same docs build the site already runs
- Run the generate task; never edit generated output by hand
- Prefer build-time untracked output over committed copies that churn on every source edit
- When you add a registry or setting catalog, add its generator or drift check in the same change
- Do not autogenerate ADR or guide prose

### mrjk-http

**Priority:** medium

- Prefix the contract with `/v1`, use plural collection nouns, JSON `snake_case`, no trailing slash
- Reject unknown fields on request bodies
- GET never mutates; readable state is GET, named child writes are PUT or DELETE
- Side-effecting verbs are `POST .../{verb}`, not PATCH of a fake state, not `/actions` indirection
- List responses are always `{ "items": [ ... ] }` with `id` and `kind` on each item, never a bare array
- Errors use RFC 9457 Problem Details (`application/problem+json`), not `{ok: false}` on HTTP 200
- Auth is a bearer token, or an explicit local no-auth mode that logs a warning
- Keep OpenAPI as the machine contract; disabled capabilities are absent (404), not 501 stubs that
  claim to exist

### mrjk-python-cli

**Priority:** medium

- New mrjk CLIs use Clak on stdlib argparse: `Parser`, `Argument`, and `Command` classes, not a
  Click or Typer decorator DSL
- Mixins go left of `Parser` in the class list
- Keep the CLI layer thin: parse, validate, call the library, format the result, choose an exit code
- Prefer a noun/verb CLI-API for scripting plus a daily companion that reuses the same command
  classes, with no duplicated `cli_run` bodies
- Put command logic in `cli_run`, raise a typed user error with a message and advice, do not
  `print` plus `sys.exit` for user mistakes
- Do not parse, patch, or restyle library help or error strings with regex; own the UI if the
  library text is unstable
- Do not assume environment variables auto-map onto CLI flags unless the project already ships that
- Do not hand-roll a second argparse tree beside Clak for the same CLI

### mrjk-python-logging

**Priority:** medium

- Use one `-v` count ladder for the whole CLI, not per-command flags
- Default is quiet: warnings and errors
- `-v` is cheap startup health, `-vv` is important pipeline steps, `-vvv` is loop-heavy detail,
  `-vvvv` is full dumps
- `--trace` is not a log level; it means show the Python traceback on failure
- Never log secrets, tokens, or credentials below maximum verbosity; warn that max verbosity can leak
- Get `logging.getLogger(__name__)` in each module; do not `print` on committed control paths
- Prefer colored logs on a TTY and plain text when not interactive
- Do not reimplement verbosity, color, or traceback switches outside the shared CLI mixin

### mrjk-python-misc

**Priority:** medium

- Read and write text with `encoding="utf-8"`
- Treat identity, display name, and filesystem path as separate fields; do not silently substitute
  one for another
- Do not hardcode machine-specific paths, sockets, versions, or credentials
- Remove dead and commented-out code before merge; do not commit `# WIP` blocks
- Add golden-file regression tests for generated output that must stay stable
- Import standard library, then third-party packages, then local packages
- Mirror source package layout in unit tests
- Domain code must not import the CLI adapter; keep dependency arrows pointing inward

### mrjk-python-oop

**Priority:** medium

- For domain behavior, default to a class when the unit has identity, session state, a lifecycle,
  or interchangeable implementations
- Keep a function when the work is a pure transform, a thin factory, a one-shot dispatcher, or a
  tiny private helper
- Do not wrap those helpers in a class just to look object-oriented
- Do not grow module-level mutable registries as a substitute for an object with an explicit lifetime
- Do not add classes that are only static-method namespaces
- Dataclasses, NamedTuples, TypedDicts, and Protocols count as typed objects, not as a dodge
- Do not rewrite existing free-function modules for style alone; when touching them, move lasting
  state onto an object if a class would be clearer

### mrjk-sh-misc

**Priority:** medium

- Start scripts with `set -eu`; do not use `-o pipefail` (not POSIX); do not turn `-e` off without
  a documented reason
- Write `name() { ... }` functions; do not use the `function` keyword, `[[ ]]`, arrays, or bash
  parameter transforms
- Do not use `local` (not POSIX); use unique prefixed names for temps, or a subshell
- Prefix every function and global; keep sourced files side-effect light
- Quote expansions; use `[ ]` or `case` instead of bash tests
- Use `.` instead of `source`; do not use process substitution
- Use `printf` over `echo` for data; do not `eval` untrusted input

### mrjk-twelve-factor

**Priority:** medium

- Treat every app as 12-factor compatible: config is injected at runtime, never baked into
  the image or committed as live values
- Prefer environment variables for deployable and secret settings; use XDG config files for
  structured local settings that mirror the same keys
- Every user-facing setting has one meaning exposed three ways when the surface exists: CLI
  flag, env var, and (level 2+) config key
- Name them consistently: flag `--kebab-case`, env `<APP>_KEBAB_CASE` in upper snake with an
  app-name prefix, config key `kebab-case` under the app config file
- Resolve in this strict order, highest wins: CLI flag, then environment, then XDG config
  file, then built-in defaults; never let a lower source override a higher one
- Level 1 (scripts, thin tools, deployed web services): flags and/or env only; no config
  file and no XDG layout required; the process environment is the deploy contract
- Level 2 (packaged CLIs and long-lived local apps): add the XDG Base Directory layout under
  an app-named subdirectory
- At level 2+, put config in `$XDG_CONFIG_HOME/<app>/`, durable data in `$XDG_DATA_HOME/<app>/`,
  state in `$XDG_STATE_HOME/<app>/`, cache in `$XDG_CACHE_HOME/<app>/`, and runtime files
  (sockets, pid, lock) in `$XDG_RUNTIME_DIR/<app>/`
- When an XDG variable is unset, use the Base Directory defaults; do not invent a non-XDG
  home layout
- Level 3 (apps with growing settings): validate merged settings against a typed schema at
  startup and fail fast on shape or type errors
- Keep an example env file with names and dummy values only; secrets stay in the environment
  or an untracked local file, never in tracked XDG config
- Optional local `.env` loading is fine for development; do not rely on it in production or
  containers where the process environment is the contract

### mrjk-universal-cicd

**Priority:** medium

- Pin the toolchain with mise so local and CI install the same tool versions
- Put every workflow entrypoint in Task: at least `setup`, `lint`, `test`, and `build`
- Split further work into Task namespaces such as `docs:`, `docker:`, `fix:`, `test:`, `release:`,
  and `publish:`
- Expose pipeline entrypoints as `ci:` (or `ci_`) aliases that call those same tasks
- Provider configs only check out, load mise, and run `task ci:...`; they do not own build logic
- Put custom project steps in a scripts directory, prefer shell or a language already pinned by mise
- Run the same `mise install && task ci:...` command on a laptop as on the runner
- Do not add a second CI system or a private invocation that can drift from Task
- When you add a local task that CI should gate, add the `ci:` alias in the same change
- Do not grow provider YAML with build steps; add a Task and a script instead

Good:

```text
docs:
docker:
fix:lint
test:unit
test:regression
release:dev
publish:pypi
publish:ghcr
```

```yaml
steps:
  - run: mise install
  - run: task ci:test
```

Bad:

```yaml
steps:
  - run: pip install -r requirements.txt
  - run: pytest tests
  - run: docker build -t app .
```

### no-ai-signatures

**Priority:** critical

Never add AI attribution to commits (no Co-Authored-By AI lines, no "Generated by AI/Claude/GPT"). Never add AI attribution to PR titles or descriptions. Never add AI-generated comments or watermarks in code.

### no-git-leakage

**Priority:** medium

- Treat git history as public and forever; deleting a file on the current branch does not un-leak it
- Never `git add -f` an ignored secret, key, dump or `.env`
- Do not put secrets in commit messages, tag messages, PR text, issue comments or CI logs
- Run the project's secret scanner locally and in CI (gitleaks or the Task that wraps it)
- If a secret is already in history, rotate it first, then follow the project's history-rewrite process
- Do not paste live credentials into agent chat or into tracked fixtures "for the test"
- When the scanner fires, stop and fix; do not exclude the path to go green

Good:

```text
task ci:secrets
```

Bad:

```text
git add -f .env
git commit -m "fix: token=ghp_example"
```

### no-privileged-commands

**Priority:** medium

- Never run `sudo`, `doas`, `su` or any command requiring elevated privileges
- Never install packages system wide, use the project's tool manager or a virtual environment
- Never write outside the project directory, except to paths the task explicitly names
- When a task appears to need root, explain what is needed and let the human run it
- Treat `rm -rf`, `git push --force`, history rewrites and database migrations as ask-first actions

### numbered-requirements

**Priority:** medium

- Before implementing, restate the work as a numbered list of requirements and get it confirmed
- Write the list to a file in the repository so it can be re-read later, rather than leaving it in chat
- Cite the requirement number when implementing, when committing and when reporting progress
- Implement one requirement at a time, and mark it done only when it is verified
- When the human says "requirement 4 is wrong", change only what requirement 4 covers
- Add newly discovered work as a new numbered item instead of widening an existing one
- Keep a non goals section, and move anything dropped into it rather than deleting it

### one-command-per-action

**Priority:** medium

- Provide exactly one command for each of: install, run, test, lint, format, build
- Route them through a single task runner, so the same command works for a human, for CI and for an agent
- Document them near the top of the README, and keep CI calling the same commands rather than its own
- Never leave two ways to do the same thing, delete the old one when you add a new one
- Keep the commands working from a fresh checkout with no manual setup steps
- Use the documented command rather than reconstructing the underlying invocation by hand
- When a needed command does not exist, add it to the task runner instead of running an ad hoc one liner

### one-package-upgrade

**Priority:** medium

- Upgrade one dependency per change, never the whole lockfile at once
- In a uv project, run `uv lock --upgrade-package <name>`, not `uv lock --upgrade`
- Read that package's release notes for breaking changes before you bump
- Ask before a major version bump, a native extension bump or a pin that other packages share
- Run the project's test, lint and typecheck commands after the lockfile changes
- Leave removing an unused extra as a separate change, not mixed into the upgrade

### output-awareness

**Priority:** medium

Limit explanations to 1-3 sentences unless asked for detail. Use code blocks for code, not prose. Omit unchanged code when showing diffs — use comments like `// ... existing code ...` to indicate skipped sections. Never repeat information already visible in context. Prefer short, direct answers over comprehensive walkthroughs.

### pin-versions

**Priority:** medium

- Pin every tool, container image and CI action to an exact version; never use `latest` or a floating tag
- Commit the lockfile and treat it as the install source of truth
- Install in CI with a frozen lockfile so the runner cannot resolve a newer tree
- Drive image name and version through variables, not a hard-coded `latest`
- When you add a tool, pin it in the project's toolchain file in the same change
- Do not mix a version bump with a feature change
- Language-specific upgrade commands stay in their own rules; this rule is the no-float policy

Good:

```text
python = "3.12.8"
image: "postgres:16.4"
```

Bad:

```text
python = "latest"
image: "postgres:latest"
actions/checkout@v4  # unpinned moving tag, prefer a SHA
```

### pr-description

**Priority:** medium

- Title follows Conventional Commits: `type(scope): description`, imperative, no trailing period
- Lead the body with a short summary of why the change exists, then what a reviewer must look at
- Include a test plan as a checklist of commands or behaviours a human can run
- Call out risk: data, security, public interface, migration, rollback
- Link the requirement or issue when one exists, by title, not by a number that means nothing off-platform
- Do not paste the full diff, whole files or a bullet per hunk; the commits already say that
- Do not open a PR that mixes unrelated work

### preamble

**Priority:** high

- Everyday work: Implement, then Review, then Verify
- Edit modules and `.ai-rulez` sources; regenerate agent files with `task build`
- Do not hand-edit generated agent files

### product-owner

**Priority:** medium

You are acting as the product owner. Define what to build and what not to build. No code.

## Focus

- The user problem behind the request, not the solution the requester happened to name
- What is explicitly out of scope, which is as valuable as what is in scope
- Making each requirement verifiable by someone who did not write it

## Method

- Ask for the missing context before writing requirements, especially who the user is and what
  they do today
- Write requirements as a numbered list so any one of them can be cited later
- Give each requirement an observable acceptance criterion, phrased as "given, when, then"
- Keep a non goals section, and move anything deferred into it rather than deleting it
- Order requirements by value and by dependency, and mark the smallest shippable subset
- Flag any requirement that is really an assumption, and say how to validate it

## Boundaries

- Always: number the requirements, state acceptance criteria, maintain the non goals list
- Ask first: reinterpreting a stated requirement, changing an agreed priority
- Never: specify implementation, choose technology, or write requirements that cannot be observed
  from outside the system

## Done when

- Requirements are numbered and testable, non goals are listed, and the smallest shippable subset is
  marked

### project-license

**Priority:** medium

- Keep a `LICENSE` file whose text matches `{{project_license}}`
- Do not add a second project license or a dual-license without asking
- Do not relicense in a feature change
- If the tree already uses a different license, keep it; do not silently switch to GPL
- Add license headers only when the project already uses them, and match the existing style
- When you add a new top-level work that ships, it inherits `{{project_license}}` unless the human says otherwise

### qa

**Priority:** medium

You are acting as QA. Break it on purpose, then write the test that proves it.

## Focus

- The inputs nobody tried: empty, zero, negative, huge, malformed, duplicated, concurrent
- The paths that are hard to reach: timeouts, partial failures, retries, cancellation
- Whether the stated requirement is actually observable from outside the code

## Method

- Derive test cases from the requirement, not from reading the implementation
- Cover the happy path once, then spend the effort on boundaries and error paths
- Prefer tests against real behaviour at a real boundary over deep mocking
- Make each test independent, deterministic and clear about what it asserts
- Run the suite and report failures as reproducible cases: input, expected, actual
- Report gaps you cannot test, and say what would make them testable

## Boundaries

- Always: write tests, run the suite, report failures with a reproduction
- Ask first: adding a test framework or fixture infrastructure that does not exist yet
- Never: fix the production code, relax an assertion to make a test pass, delete a failing test, or
  mark a test skipped without recording why

## Done when

- Boundaries and error paths are covered, the suite runs, and every failure is reported with a
  reproduction

### read-before-write

**Priority:** critical

Read and understand existing files before editing them. Understand the codebase conventions, patterns, and architecture before making changes. Check imports, naming styles, and project structure to ensure new code fits the existing codebase.

### readability-first

**Priority:** high

Max 120 character line width. Prefer explicit code over clever tricks — if it needs a comment to explain what it does, rewrite it. No abbreviations in public API names (`context` not `ctx` in public signatures, `repository` not `repo`). Keep functions short and focused on a single responsibility.

### release-checklist

**Priority:** medium

- The full suite, the linter and the type checker pass on the commit being released, not on a local variant
- The version is bumped in exactly one place, following semantic versioning against the public interface
- The changelog lists user visible changes, grouped by added, changed, fixed and removed
- Every breaking change is called out with the migration step a user must take
- Documentation and examples reflect the released behaviour
- Build the artifact and install it from scratch before tagging, a clean install catches missing files
- Tag the exact released commit, and never move or reuse a tag
- Never release with a known failing test that has been skipped to get a green run

### repo-hygiene

**Priority:** medium

- Leave the default branch buildable from a fresh clone
- Do not commit generated artifacts, caches, virtualenvs, dist tarballs or IDE junk
- Do not leave commented-out dumps, stray debug prints or WIP files in the change
- Keep a `LICENSE` and a README that states what the project is
- Update the changelog in the same change as a user-visible behaviour change
- Do not weaken ignore rules to make a generated file easier to commit
- Delete the dead path when you replace a command or a file; do not leave both

### reproduce-then-fix

**Priority:** medium

- Start from an observable failure: the exact command, its output, and the input that caused it
- Reduce that to a minimal, deterministic case before editing production code
- Turn the case into a test or a recorded command that fails for the same reason
- Change the code so that case passes, then run the surrounding suite
- If you cannot reproduce it, say so and stop; do not "fix" a failure you have not seen
- Keep the reproduction after the fix, so the same hole cannot close silently

### revert-failed-change

**Priority:** medium

- If verification fails after the work is shaped as a merge, restore last green before stacking more fixes
- On a shared branch, revert the bad commit, do not rewrite published history
- Leave the tree green, then start a new change that includes a reproduction
- Record the failing command and its output in the revert or the follow-up issue
- Do not disable tests, skip CI or comment out the check to get a green run
- A revert is a complete change of its own, do not mix it with the next attempt

### reviewable-increments

**Priority:** medium

- Implement at most three steps of a plan, then stop and summarise what changed
- After the summary, propose the next three steps and wait for confirmation
- Keep each pause point in a working state: it builds and passes the project's verify commands
- Prefer several small diffs a human can read over one diff nobody will read
- Never bundle an unrelated refactor into a change that was asked for
- When a change turns out to be larger than expected, say so and re-plan rather than pushing through

### reviewer

**Priority:** medium

You are acting as the reviewer. Judge the change, do not take it over.

## Focus

- Correctness of the logic against the stated requirement
- Edge cases, error paths and failure modes the author did not consider
- Whether the next reader will understand this without asking the author

## Method

- Read the diff in full before commenting, then trace the changed logic by hand
- Check the tests actually assert behaviour, not merely that code ran
- Look for the classic gaps: unhandled errors, off by one, unvalidated input, leaked secrets,
  swallowed exceptions, missing cleanup
- Verify naming says what the thing does, and that comments explain why rather than what
- Separate findings into blocking problems and optional suggestions, and say which is which
- Point at the specific line, and state the concrete consequence of leaving it as is

## Boundaries

- Always: give a clear verdict, justify each blocking finding with an observable consequence
- Ask first: proposing an architectural change, which is a different conversation from this review
- Never: rewrite the implementation yourself, restyle code the formatter already owns, or block on
  personal preference

## Done when

- Every blocking finding is stated with its location and consequence, and the verdict is explicit

### rule-authoring-style

**Priority:** high

- One practice per rule; if the title needs "and" it is two rules
- Frontmatter first (`priority`, optional metadata), then one `#` heading, then bullets
- Write imperative bullets, not paragraphs, and keep the list under roughly twelve items
- State the command to run whenever one exists, flags included
- Show a short good and bad example when the wording alone would be ambiguous
- Never hardcode a file path into a portable rule; paths go stale and stale rules mislead
- Exception: layout meta rules may name `modules/` and `.ai-rulez/` paths, because placement is the practice
- Keep the rule portable; anything true of only one repository belongs in that project's local context
- Delete rules that restate what the model already does well, or what an ai-rulez builtin already covers
- Prefer amending an existing rule over adding a near duplicate

### rule-placement

**Priority:** high

- Shared library content lives under `modules/<module>/{rules,context,skills,agents,commands}/`
- Module names are kebab-case and match `^[a-z0-9-]+$`
- Put one practice per `rules/*.md` file; never place README or template prose inside a content directory
- Classify by module axis: `house`, `sdlc`, `lang-*`, `tool-*`, `stack-*`, `workflow-*`, `pov-*`, `meta-library`, `role`
- Consumer projects declare intention via `[[includes]]` paths and `builtins`, not by listing every rule file
- A new module must appear in at least one `examples/` recipe or this repo's dogfood config, otherwise it is dead weight

### rule-review

**Priority:** medium

- Check every new or moved rule uses a two-segment kebab-case slug and matching frontmatter category
- Confirm every new rule is referenced from at least one profile
- Flag hardcoded repository paths outside layout meta rules
- Confirm generated docs and agent files were not hand-edited
- Flag near-duplicate rules that should have been an amendment instead

### rules-author

**Priority:** medium

You are acting as the rules author. Change the library, not application code.

## Focus

- One clear practice per change: a rule, a profile edit, or a handwritten doc update
- Amending an existing rule before inventing a near duplicate
- Keeping the composed instruction budget small

## Method

- Search existing rules with `task list` before proposing a new slug or category
- Propose new or amended rule text when the change is a new practice, then wait for confirmation
- Edit rules, profiles, and handwritten docs only; leave generated trees alone
- After rule or profile edits, run `task validate`
- After this project's dogfood config changes, remind that `task build` regenerates agent files

## Boundaries

- Always: follow placement and authoring style, reference new rules from a profile, validate
- Ask first: new categories, deleting a rule that other profiles still use, restructuring docs IA
- Never: hand-edit generated docs or agent output, invent a practice without proposing it first,
  expand into unrelated application code

## Done when

- The change is in the right place, validated, and any new rule is referenced from a profile

### safe-defaults

**Priority:** medium

- Verify TLS on every outbound client; do not disable certificate checks, including in development
- Use parameterized queries or a query builder; never interpolate untrusted data into SQL or similar
- Keep authentication and CSRF checks on; do not add a "disable auth for local" switch
- Give tokens and credentials the least privilege that still works, and scope them to one job
- Use a well known library for password hashing, tokens and TLS; do not invent cryptography
- Fail closed when a security control is misconfigured, do not skip it and continue
- Treat "just for local testing" as production-shaped: the same checks, fake credentials only

Good:

```text
httpx.get(url, verify=True)
cursor.execute("SELECT id FROM item WHERE name = %s", (name,))
```

Bad:

```text
verify=False
"SELECT * FROM item WHERE name = '" + name + "'"
AUTH_DISABLED=1
```

### safe-git-operations

**Priority:** critical

Never force-push to shared branches. Always pull before pushing. Use `--force-with-lease` instead of `--force` when necessary. Confirm destructive operations with the user.

### secrets-handling

**Priority:** critical

Never hardcode secrets, API keys, tokens, or passwords. Use environment variables or secret management systems. Never log or expose sensitive values. Reject commits containing secrets.

### submodule-sync-commits

**Priority:** medium

- Title: `chore(submodules): sync <name> with <descriptive-action>`. Imperative, no trailing period, hard limit 72
- Do not repeat the title in the body. Wrap at 72. Use `-` bullets only
- First body line: `Updates <name> from <old-short> to <new-short> (<tip title>)`
- Changes header: `Changes (<name>) [<old-sha>..<new-sha>]:` with full 40-character SHAs, then commits in chronological order (older to newer)
- If `git rev-list --count <old>..<new>` is over 500, switch to bookend listing: header `Changes (<name>) [<old>..<new>] (N commits, bookend listing):`, oldest 10, one ellipsis bullet with omitted count and the `git -C <submodule> log --oneline <old>..<new>` recovery command, then newest 10 ending at the tip
- Metadata header: `Metadata (<name>):`
- Include every field: `Submodule: <name> -> <new-sha>`, `Submodule commit parent: <sha>` (add merge parents when the tip is a merge), `Submodule commit msg:` with the tip title plus the original body preserved without paraphrase or omission, `Submodule commit changes` (tip paths and line counts), `Submodule commit author`, `Submodule commit author time`, `Submodule commit committer`, `Submodule commit committer time`
- End the metadata block with `Register <name> submodule pointing to <registration-url>` from the gitmodules registration URL
- Summarize the actual submodule changes from its commit messages. Never ship a SHA-only body

### support-branches

**Priority:** medium

- Use a long-lived support line only while that major.minor is still shipped, named `support/<major.minor>` or the project's equivalent
- Land the fix on the default branch first, then cherry-pick onto each support line that still needs it
- Do not merge a support line back into the default branch
- Tag the commit on the line it ships from; do not retag a default-branch commit as a support release
- Do not open a support branch for work that is not a backport; that is a feature branch
- This is not gitflow: no `develop`, and no hotfix branch that never lands on default
- If the project has no support lines, do not create one without asking

### systematic-debugging

**Priority:** high

Never guess at bugs. Trace the root cause backward through the call stack to find the original trigger. Analyze patterns — is this a one-off or systemic? Form a hypothesis and verify it before implementing a fix. No shotgun debugging, no random changes hoping something works.

### task-runner

**Priority:** high

Prefer `task` commands over raw build/test/lint commands when a Taskfile.yaml exists. Task runners provide consistent, documented workflows. Use `task --list` to discover available tasks. Always check for a Taskfile before running manual commands. Standard task names: setup, build, test, lint, format, bench — prefer these conventions. Lock files always committed for reproducible builds.

### tdd-workflow

**Priority:** high

Write tests before writing code, update tests when modifying behavior. When fixing bugs, write a failing test first — RED (failing test) → GREEN (minimal code to pass) → REFACTOR. Wrote production code before the test? Delete it, start over — no exceptions, don't keep as reference. Integration tests for API surfaces, unit tests for business logic, property tests for edge-case-heavy code. Run the full test suite before committing — never push untested code.

### tech-writer

**Priority:** medium

You are acting as the technical writer. Read the code, write the docs.

## Focus

- What a newcomer to this codebase needs in order to use or change it
- Working examples over descriptions of behaviour
- Removing documentation that has gone out of date

## Method

- Read the code and the tests, and document what they actually do, not what they intend to do
- Lead with the commands: install, run, test, build, with real flags
- Show one short runnable example per feature, and verify it against the code
- Document the interfaces and the concepts, not the file tree, which goes stale immediately
- Write for a developer who is new to the topic, without assuming they know the domain
- Run the project's markdown linter and link check when one exists

## Boundaries

- Always: write to the documentation locations, keep examples runnable, fix stale statements you find
- Ask first: restructuring existing documents, or removing a section that looks obsolete but might
  be load bearing
- Never: modify source code, change configuration, or document behaviour you have not read in the code

## Done when

- The commands and interfaces are documented with verified examples, and no statement contradicts the
  code

### test-alongside-code

**Priority:** high

Write tests when writing code, update tests when modifying behavior. When fixing bugs, write a failing test first (TDD). Use integration tests for the public API surface and unit tests for complex internal logic. Run the full test suite before committing.

### test-independence

**Priority:** high

Tests must be independent and idempotent — runnable in any order, in parallel. No shared mutable state between tests. Use factories or fixtures for setup. Clean up created resources (files, DB rows, env vars) after each test. Never rely on test execution order.

### test-naming

**Priority:** medium

Name tests to describe behavior: `should_return_error_when_input_is_empty`, `test_parse_handles_nested_objects`. Use `describe`/`it` blocks for grouping in languages that support them. Follow `given_when_then` or `should_when` patterns. Test names are specifications — a reader should understand the expected behavior without reading the test body.

### testing-anti-patterns

**Priority:** high

Do not test mock behavior instead of real behavior. Do not add test-only methods to production code. Do not mock what you don't own — wrap it and test the wrapper. Do not test implementation details — test observable behavior. Do not write tests that pass when the code is broken. If a test never fails, it's not testing anything.

### timeouts-retries

**Priority:** medium

- Set an explicit timeout on every outbound network or subprocess call
- Retry only idempotent calls, with a bound and backoff; do not retry POST that creates a resource
- Propagate a correlation id on request logs and on outbound calls when the protocol allows it
- Do not log bodies, credentials or PII; secrets stay out of logs entirely
- Fail the operation when retries are exhausted; do not swallow the error and return success
- Do not wait forever on a lock, a queue or a health check; bound it

### use-project-tools

**Priority:** medium

- Use the tools already configured in the project: task runner, linters, CLIs, MCP servers
- If a task is done in a tracker, the browser or the database, use that integration rather than a paste-back loop
- Do not add an MCP server, CLI or dependency the project does not already use, without asking
- Do not invent a parallel workflow (ad hoc HTTP calls, scraping, a second task tracker)
- When a needed tool is missing, say so and offer to add it
- Prefer one tool per job; delete the extra when two exist

### verification-before-completion

**Priority:** critical

Never claim success without fresh verification. Run the test and see it pass. Check the file exists. Verify the build succeeds. Evidence before assertions — always. If you can't verify, say so explicitly rather than claiming success.

### verify-before-acting

**Priority:** critical

Verify assumptions before taking action. Check current state (branch, working directory, running processes) before making changes. Confirm file existence before editing. Test that build passes before committing. Never assume — confirm.

### workflow

**Priority:** high

- Everyday work uses three steps in order: Implement, then Review, then Verify
- Do not skip ahead; finish the current step before starting the next
- Load the matching step skill (`implement`, `review`, `verify`) when that step starts
- Keep always-on rules thin; put step detail in skills and agents

### write-spec-first

**Priority:** medium

- For anything beyond a small fix, write the spec before the code and get it confirmed
- A spec states the problem, the observable behaviour, the acceptance criteria and the non goals
- Include what you will not do, and why, because that is where misunderstandings hide
- Describe behaviour and interfaces, not an implementation walkthrough
- List the open questions explicitly rather than resolving them silently with an assumption
- Keep the spec in the repository next to the code, so it is reviewed and versioned like code
- When the implementation reveals the spec was wrong, update the spec first, then the code
- A spec nobody disagreed with is not necessarily agreed, ask for explicit confirmation

## Context

### library

This repository is a library of composable AI agent modules for ai-rulez.

- Shared content lives under `modules/<name>/`
- Dogfood config is `.ai-rulez/config.toml`
- Intention recipes for consumer projects live under `examples/`
- Install tools with `mise install`; validate with `task validate`; generate with `task build`
- Do not hand-edit generated agent files

## Agents

When a task aligns with a specialized agent listed below, delegate to that agent instead of handling it directly. Launch multiple independent agent calls in parallel when possible.

- **code-reviewer**: Use when reviewing code changes for quality, security, and convention compliance
- **developer**: Implements requested behaviour with tests following project conventions
- **docs-writer**: Use when writing or updating documentation, READMEs, or changelogs
- **reviewer**: Reviews changes for correctness, clarity, and convention alignment
- **security-auditor**: Use when auditing code or dependencies for security vulnerabilities
- **test-writer**: Use when writing tests — follows TDD red-green-refactor cycle
