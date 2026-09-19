---
title: Rule Placement
priority: high
---

# Rule Placement

- Shared library content lives under `modules/<module>/{rules,context,skills,agents,commands}/`
- Module names are kebab-case and match `^[a-z0-9-]+$`
- Put one practice per `rules/*.md` file; never place README or template prose inside a content directory
- Classify by module axis: `house`, `sdlc`, `lang-*`, `tool-*`, `stack-*`, `workflow-*`, `pov-*`, `meta-library`, `role`
- Consumer projects declare intention via `[[includes]]` paths and `builtins`, not by listing every rule file
- A new module must appear in at least one `examples/` recipe or this repo's dogfood config, otherwise it is dead weight
