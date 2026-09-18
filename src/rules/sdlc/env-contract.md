---
name: Environment Contract
description: Document required env keys without secret values; fail fast when one is missing
category: sdlc
tags: [sdlc, config, env]
---

# Environment Contract

- Keep a documented example env file with key names and dummy or empty values, never live secrets
- Validate required variables at startup and fail fast when one is missing
- Do not invent extra variable names; reuse the project's existing names
- Load secrets from the environment or an untracked local file, not from git
- When you add a required variable, update the example file in the same change
- Do not commit a filled `.env` "just for the team"
