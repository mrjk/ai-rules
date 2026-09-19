---
title: Rule template
description: Templates for a plain rule and for a skill
---

## Plain rule

```markdown
---
title: Short practice name
priority: medium
---

# Short practice name

- Imperative bullet
- Another bullet
- State the command when one exists
```

## Skill (on-demand)

```markdown
---
name: skill-name
description: When to load this skill
priority: high
---

# Skill title

Instructions the agent follows when the skill applies.
```

Place rules under `modules/<module>/rules/` and skills under `modules/<module>/skills/<name>/`.
