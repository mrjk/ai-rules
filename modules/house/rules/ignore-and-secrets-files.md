---
title: Ignore And Secrets Files
priority: medium
---

# Ignore And Secrets Files

- Keep a root ignore file that excludes virtualenvs, build output, caches, IDE junk and secret files
- Keep a separate agent ignore file for the editor in use, so search and the agent skip generated or
  huge trees that git already tracks
- Never commit `.env`, credential files, private keys or dumped secrets; load them from the
  environment or a local untracked file
- If a secret is already in history, rotate it, do not just delete the file on the current branch
- Do not work around an ignore rule by copying a secret into a tracked path so the agent can see it
- When the agent needs a value from an ignored file, ask the human to paste a redacted sample
