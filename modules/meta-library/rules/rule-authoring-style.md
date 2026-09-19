---
title: Rule Authoring Style
priority: high
---

# Rule Authoring Style

- One practice per rule; if the title needs "and" it is two rules
- Frontmatter first (`priority`, optional metadata), then one `#` heading, then bullets
- Write imperative bullets, not paragraphs, and keep the list under roughly twelve items
- State the command to run whenever one exists, flags included
- Show a short good and bad example when the wording alone would be ambiguous
- Never hardcode a file path into a portable rule; paths go stale and stale rules mislead
- Exception: layout meta rules may name `modules/` and `.ai-rulez/` paths, because placement is the practice
- Keep the rule portable; anything true of only one repository belongs in that project's local context
- Delete rules that restate what the model already does well, or what an ai-rulez builtin already covers
- Prefer amending an existing rule over adding a near duplicate
