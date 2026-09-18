---
name: Security Safe Defaults
description: Keep TLS, queries, auth and crypto on the safe path; do not weaken them for local convenience
category: security
tags: [security, tls, auth]
---

# Security Safe Defaults

- Verify TLS on every outbound client; do not disable certificate checks, including in development
- Use parameterized queries or a query builder; never interpolate untrusted data into SQL or similar
- Keep authentication and CSRF checks on; do not add a "disable auth for local" switch
- Give tokens and credentials the least privilege that still works, and scope them to one job
- Use a well known library for password hashing, tokens and TLS; do not invent cryptography
- Fail closed when a security control is misconfigured, do not skip it and continue
- Treat "just for local testing" as production-shaped: the same checks, fake credentials only

Good:

```text
httpx.get(url, verify=True)
cursor.execute("SELECT id FROM item WHERE name = %s", (name,))
```

Bad:

```text
verify=False
"SELECT * FROM item WHERE name = '" + name + "'"
AUTH_DISABLED=1
```
