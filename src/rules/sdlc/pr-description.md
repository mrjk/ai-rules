---
name: PR Description
description: Open a pull request with summary, test plan and risk, not a dump of the commit list
category: sdlc
tags: [sdlc, git, review]
---

# PR Description

- Title follows Conventional Commits: `type(scope): description`, imperative, no trailing period
- Lead the body with a short summary of why the change exists, then what a reviewer must look at
- Include a test plan as a checklist of commands or behaviours a human can run
- Call out risk: data, security, public interface, migration, rollback
- Link the requirement or issue when one exists, by title, not by a number that means nothing off-platform
- Do not paste the full diff, whole files or a bullet per hunk; the commits already say that
- Do not open a PR that mixes unrelated work
