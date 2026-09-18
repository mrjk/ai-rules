---
name: Brownfield Grounding
description: In an existing repo, trust running code and tests, then fill only the missing docs
category: sdlc
tags: [sdlc, documentation, brownfield]
---

# Brownfield Grounding

- Treat the running code and the tests as the source of truth when specs are missing or stale
- Before a large change, write or refresh a short spec of current behaviour, then the change on top
- Document only what you verified in this session: commands that work, the stack that is imported,
  the invariants the tests enforce
- Do not invent an architecture document that describes a system you have not traced
- Prefer a one page "as-is" note plus a spec for the new work over a full rewrite of missing history
- Record gaps as open questions, not as decided requirements
