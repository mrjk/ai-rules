---
title: Cursor user rule for git commits
description: Paste-ready User Rules block so Cursor does not override Conventional Commits
---

Cursor injects a user-level git-commit protocol into every Agent chat. The stock version drafts a
1-2 sentence prose message focused on why, not what. That instruction is more specific to "please
commit" than a project's **Before You Finish** section, so it wins over
`git/conventional-commits` in `.cursorrules`.

Do not paste the full [Conventional Commits](../rules/git/conventional-commits/) rule into User
Rules. Replace only the **message-drafting** bullets of the stock protocol. Keep the safety parts
(no `git config`, no force push, no `--no-verify`, HEREDOC for the message, parallel status / diff /
log).

## Where to paste

**Cursor Settings > Rules > User Rules.** Edit the existing git-commit block, or add the snippet
below after it so it overrides message shape. Start a new Agent chat after saving.

This library cannot write your Cursor user settings for you.

## Snippet

```text
When creating a git commit, the subject is Conventional Commits: type(scope): description.
Types: feat, fix, docs, style, refactor, test, chore. Imperative mood, no trailing period,
hard limit 72 characters.

Body is optional "-" bullets, separated from the title by a blank line. Omit the body when the
title already says everything. Plain text only: no bold, italics, or fenced code in the message.

If the project has git/conventional-commits, or the same practice in .cursorrules or AGENTS.md,
follow that rule for the message. Do not replace it with a 1-2 sentence prose summary.

If the project has no commit convention, still use type(scope): description, not a paragraph title.

Keep the rest of the stock git safety protocol unchanged.
```
