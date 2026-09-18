---
name: Rule Authoring Style
description: How to write a rule so it survives being concatenated with twenty others
category: meta
tags: [meta, rules, style]
---

# Rule Authoring Style

- One practice per rule, if the title needs "and" it is two rules
- Frontmatter first (`name`, `description`, `category`, `tags`), then one `#` heading, then bullets
- Write imperative bullets, not paragraphs, and keep the list under roughly twelve items
- State the command to run whenever one exists, flags included
- Show a short good and bad example when the wording alone would be ambiguous
- Never hardcode a file path into a rule, paths go stale and stale rules mislead
- Keep the rule portable, anything true of only one repository belongs in that repo's preamble
- Delete rules that restate what the model already does well
