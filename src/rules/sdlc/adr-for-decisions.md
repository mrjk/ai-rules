---
name: ADR For Decisions
description: Record every non obvious technical decision as a short dated ADR
category: sdlc
tags: [sdlc, architecture, documentation]
---

# ADR For Decisions

- Any decision that a future reader would ask "why is it like this?" about gets an ADR
- Keep it to one page: context, the decision, the alternatives considered, the consequences
- Write it when the decision is made, not later, the reasoning is gone within a week
- Number ADRs sequentially and never edit an accepted one, supersede it with a new one that links back
- Include the constraints that forced the decision, since those are what change over time
- State the consequences honestly, including what becomes harder
- Reference the ADR number in the code when a surprising implementation follows from it
