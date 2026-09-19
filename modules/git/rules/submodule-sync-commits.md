---
title: Submodule Sync Commits
priority: medium
---

# Submodule Sync Commits

- Title: `chore(submodules): sync <name> with <descriptive-action>`. Imperative, no trailing period, hard limit 72
- Do not repeat the title in the body. Wrap at 72. Use `-` bullets only
- First body line: `Updates <name> from <old-short> to <new-short> (<tip title>)`
- Changes header: `Changes (<name>) [<old-sha>..<new-sha>]:` with full 40-character SHAs, then commits in chronological order (older to newer)
- If `git rev-list --count <old>..<new>` is over 500, switch to bookend listing: header `Changes (<name>) [<old>..<new>] (N commits, bookend listing):`, oldest 10, one ellipsis bullet with omitted count and the `git -C <submodule> log --oneline <old>..<new>` recovery command, then newest 10 ending at the tip
- Metadata header: `Metadata (<name>):`
- Include every field: `Submodule: <name> -> <new-sha>`, `Submodule commit parent: <sha>` (add merge parents when the tip is a merge), `Submodule commit msg:` with the tip title plus the original body preserved without paraphrase or omission, `Submodule commit changes` (tip paths and line counts), `Submodule commit author`, `Submodule commit author time`, `Submodule commit committer`, `Submodule commit committer time`
- End the metadata block with `Register <name> submodule pointing to <registration-url>` from the gitmodules registration URL
- Summarize the actual submodule changes from its commit messages. Never ship a SHA-only body
