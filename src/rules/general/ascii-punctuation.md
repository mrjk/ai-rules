---
name: ASCII Punctuation Only
description: Never emit Unicode dashes or smart quotes in code, docs, commits or chat
category: general
tags: [general, style, text]
---

# ASCII Punctuation Only

- Use the ASCII hyphen-minus `-` (U+002D) as the only dash character
- Never emit U+2014 em dash, U+2013 en dash, U+2012 figure dash, U+2015 horizontal bar or
  U+2212 minus sign, anywhere: source, comments, docs, commit messages, PR bodies, UI copy, chat
- When a sentence wants an em dash, use a comma, a colon, a period or parentheses instead
- Prefer ASCII quotes `'` and `"` over typographic quotes
- Never introduce these characters while editing an existing file, even if neighbouring text has them
