---
title: "Stack: AI Rules Library"
priority: high
---

# Stack: AI Rules Library

- Follow meta placement and authoring rules for layout; do not restate them here
- Follow generated-versus-handwritten documentation practices for the docs site
- This repo dogfoods ai-rulez: edit `.ai-rulez/` and `modules/`, then run `task validate` and `task build`
- Do not hand-edit generated agent output; regenerate with `ai-rulez generate`
- Prefer one-line references to docs over inlining catalogs that go stale
- Run `task docs:build` or `task ci` before calling Verify done
