---
title: Rule templates
description: Templates for a plain rule and for a role
---

Copy one of these into `src/rules/<category>/<name>.md`. Do not keep templates inside
`src/rules/`, they would be collected as rules.

## Generic rule

```markdown
---
name: Short Title Case Name
description: One line saying what this rule enforces
category: matches-the-directory-name
tags: [two, or, three, tags]
---

# Short Title Case Name

- Imperative instruction
- Imperative instruction, including the command to run when there is one
- What to do when the check fails
```

## Role rule

```markdown
---
name: Role Name
description: One line saying what this role is responsible for
category: role
tags: [role, area]
---

# Role: Role Name

You are acting as a <role>. Stay in this role until the step is complete.

## Focus

- The two or three things this role optimizes for
- The question this role keeps asking

## Method

- The concrete sequence this role follows
- The command it runs to verify its own work

## Boundaries

- Always: what this role is expected to do without asking
- Ask first: what needs confirmation before proceeding
- Never: what this role must not touch, even when it looks convenient

## Done when

- The observable condition that ends this role's turn
```
