---
title: Authoring rules
description: How to write a rule, and the variables gotcha
---

## What makes a rule worth adding

A rule is one practice, stated as instructions an agent can act on. Before writing one, run
`task list` and confirm the practice is not already covered by a built-in rule or by another rule
here.

- **One practice per file.** If the title needs "and", it is two rules.
- **Actionable, not aspirational.** "Return early on precondition failure" is a rule. "Write clean
  code" is noise, and the agent already believes it.
- **Imperative bullets, not prose.** Bullets survive being concatenated with 20 other rules.
- **Short.** Aim for under 12 bullets. If a rule needs a long explanation, the explanation belongs
  in project docs and the rule should point at it.
- **No file paths.** Paths go stale and a stale path actively misleads the agent. Describe the
  shape of things and the commands to run instead.
- **Portable.** Anything specific to one repository belongs in that repository's `preamble` or a
  vendored rule, not in this library.

## The instruction budget

Everything a profile composes is loaded on every request. Current models follow roughly 150 to 200
instructions with any consistency, so a profile that includes 40 rules of 15 bullets each is worse
than one that includes 12 rules. Adding a rule to a profile has a cost. Prefer:

- a **standard** workflow with a thin rule list for small work,
- a **steps** workflow for anything bigger, because each step file is loaded only when the agent
  reaches that step. That is progressive disclosure, and it is the main reason to use `steps`.

## File format

Frontmatter, then one `#` heading, then bullets.

```markdown
---
name: Verify Before Completing
description: Run linter, type checker, and tests after every change before declaring done
category: workflow
tags: [workflow, verification]
---

# Verify Before Completing

- Run linter, type checker, and tests after every change
- Never declare a task done until verification passes
```

`name` and `description` are what `task list` shows, so write the `description` as a single line
that says what the rule enforces. `category` must match the directory name.

See [Rule templates](rule-template/) for the generic template and the role template.

## Variables

A rule can declare `{{placeholders}}` in frontmatter:

```yaml
vars:
  python_min_version:
    description: Oldest Python version that must keep working
    default: "3.11"
```

**Gotcha worth knowing:** `ai-rulesmith` only performs substitution when the config passes at least
one variable for that rule. A rule referenced as a plain slug string keeps the literal
`{{python_min_version}}` text in the generated output, even when the frontmatter declares a
`default`. So a rule that uses variables must always be referenced in object form:

```json
{ "slug": "lang-python/packaging", "vars": { "python_min_version": "3.12" } }
```

Because that is easy to forget, use variables only where a value genuinely differs per project, and
make sure every profile in `src/profiles/` passes them.

## Roles

A role rule is a persona, and personas work best with three tiers of boundaries: what to always do,
what to ask about first, and what to never touch. Keep a role focused on one job and say explicitly
what is out of scope, because the failure mode of a persona is that it drifts into being a general
assistant.

Roles are designed to be the first rule of a step in a `steps` workflow: one step, one role.

## Adding a category

1. Pick the category name using the axis prefix convention in [Library structure](structure/).
2. Create `src/rules/<category>/` and add rules whose `category` frontmatter matches.
3. Reference them from at least one profile, otherwise the rule is dead code.
4. Run `task validate`.

## Keeping the library alive

The library gets better by capturing corrections, not by upfront design. When the agent gets
something wrong and you correct it, that correction is a candidate rule: see
[Capture Learnings](../rules/meta/capture-learnings/), which instructs the agent to do exactly this.
Prune with the same energy. A rule nobody references, or one that describes a tool you no longer
use, costs tokens on every request and should be deleted.
