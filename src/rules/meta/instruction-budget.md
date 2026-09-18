---
name: Instruction Budget
description: Keep composed context small and disclose the rest progressively
category: meta
tags: [meta, context, performance]
---

# Instruction Budget

- Assume roughly 150 to 200 instructions can be followed consistently, everything beyond that dilutes
- Every rule in a profile is paid for on every request, so adding one has a real cost
- Use a standard workflow with a thin rule list for small work, a steps workflow when the set grows,
  so each step file loads only when that step is reached
- Point at documentation rather than inlining it: a one line reference beats a copied section
- Describe capabilities and commands, not directory listings, so the context cannot go stale
- When a profile stops working well, remove rules before adding more
