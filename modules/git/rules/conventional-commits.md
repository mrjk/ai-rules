---
title: Conventional Commits
priority: medium
---

# Conventional Commits

- Format: `type(scope): description`. Types: feat, fix, docs, style, refactor, test, chore
- Write the final message as plain text. Do not use bold, italics, or fenced code. Punctuation `-`, `:`, `()`, `[]` is allowed
- Title: imperative mood, no trailing period, ideally under 50 chars, hard limit 72. Include critical context (dates for meetings, releases, time-sensitive work). Be specific: "fix null check in user validation" not "fix bug"
- Refer to documentation by section title, never by section number
- Separate title and body with a blank line. Body is `-` bullets only, wrap at 72, cover what and why, never repeat the title
- Omit the body when the title already says everything (style cleanup, simple deletion). Do not add filler to satisfy a structure
- Summarize repetitive edits at domain level, not item by item
- For binary or opaque files, inspect the content and name the real change (asset, encoding conversion, key dependency bumps)
- When amending, describe the final combined commit, not the amend delta and not the pre-amend state
- Commit in working chunks. Each commit leaves the tree in a working state
- If the commit only advances a git submodule pointer, follow `git/submodule-sync-commits` instead of a default body

Good:

```text
feat(auth): implement JWT token refresh strategy

- Rotate expired tokens without forcing logout
- Catch 401s in the auth interceptor
- Cover expiration in unit tests
```

Bad:

```text
Added new auth features.

I added a new way to handle tokens so users don't get logged out.
**Changes:**
* `RefreshToken` service
```
