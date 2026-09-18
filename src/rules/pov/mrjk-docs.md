---
name: Mrjk Generated Docs
description: Generate documents that can be derived from a source of truth; keep prose handwritten
category: pov
tags: [pov, mrjk, docs]
---

# Mrjk Generated Docs

- If a document can be generated from a source of truth, generate it; do not maintain a second copy
- If a reference list can drift from code, generate it or check it against code
- Do not maintain parallel catalog tables by hand; point at the list or generate command
- Keep ADRs, guides, and intent essays handwritten
- Use a stable prose wrapper with a generated middle between marker comments when the page is mixed
- Hook generators into the same docs-prep task the site build already runs
- Run the generate task; never edit generated output by hand
- Prefer build-time untracked output over committed copies that churn on every source edit
- When you add a registry or setting catalog, add its generator or drift check in the same change
- Do not autogenerate ADR or guide prose
