---
name: Mrjk Generated Docs
description: Generate or check any reference table that can drift from code; keep prose handwritten
category: pov
tags: [pov, mrjk, docs]
---

# Mrjk Generated Docs

- If a reference list can drift from code, generate it or check it against code
- Do not maintain parallel tables by hand
- Keep ADRs, guides, and intent essays handwritten
- Use a stable prose wrapper with a generated middle between marker comments
- Hook generators into the same docs-prep task the site build already runs
- When you add a registry or setting catalog, add its generator or drift check in the same change
- Do not autogenerate ADR or guide prose
