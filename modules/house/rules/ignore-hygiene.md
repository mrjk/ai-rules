---
title: Ignore Hygiene
priority: medium
---

# Ignore Hygiene

- Keep generated, local and secret files out of git via the repository ignore file
- Never commit `.env`, credentials, keys or dumps; inject secrets from the environment
- Add an agent ignore file for content the agent should not index: large generated trees, vendor blobs
- A git ignore already hides files from many agents; use a negation pattern when the agent must read an ignored file
- When you add a generated output, ignore it in the same change
- Do not weaken ignore rules to make a file easier to commit
- Do not put secrets in the repo "just for local testing"
