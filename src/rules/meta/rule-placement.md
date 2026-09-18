---
name: Rule Placement
description: Where rule files go and how their slugs must be shaped
category: meta
tags: [meta, rules, structure]
---

# Rule Placement

- A rule lives at `src/rules/<category>/<name>.md`, exactly two levels under that tree, never
  deeper
- Both segments are kebab-case and match `^[a-z0-9-]+$`, because the config validator rejects
  anything else
- Category names carry the hierarchy: `lang-<language>` for language knowledge,
  `tool-<ecosystem>` for toolchains, plus `general`, `meta`, `role`, `sdlc`, `stack`
  and `pov`. Person-prefixed opinions are `pov/<who>-<topic>` (example: `pov/mrjk-cicd`).
  To override a built-in, reuse its slug (category and name) so resolution replaces it
- The `category` value in frontmatter must equal the directory name
- Never put a README, a template or any other prose file inside a rules directory, every `.md` there
  is collected as a rule
- A new rule must be referenced by at least one file in `src/profiles/`, otherwise it is dead
  weight
