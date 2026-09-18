---
name: Mrjk HTTP API
description: Versioned noun URLs, GET never mutates, POST verbs, RFC 9457 errors, bearer auth
category: pov
tags: [pov, mrjk, http, api]
---

# Mrjk HTTP API

- Prefix the contract with `/v1`, use plural collection nouns, JSON `snake_case`, no trailing slash
- Reject unknown fields on request bodies
- GET never mutates; readable state is GET, named child writes are PUT or DELETE
- Side-effecting verbs are `POST .../{verb}`, not PATCH of a fake state, not `/actions` indirection
- List responses are always `{ "items": [ ... ] }` with `id` and `kind` on each item, never a bare array
- Errors use RFC 9457 Problem Details (`application/problem+json`), not `{ok: false}` on HTTP 200
- Auth is a bearer token, or an explicit local no-auth mode that logs a warning
- Keep OpenAPI as the machine contract; disabled capabilities are absent (404), not 501 stubs that
  claim to exist
