---
name: Timeouts And Retries
description: Timeouts on outbound IO, bounded retries only when idempotent, correlation ids on logs
category: sdlc
tags: [sdlc, resilience, observability]
---

# Timeouts And Retries

- Set an explicit timeout on every outbound network or subprocess call
- Retry only idempotent calls, with a bound and backoff; do not retry POST that creates a resource
- Propagate a correlation id on request logs and on outbound calls when the protocol allows it
- Do not log bodies, credentials or PII; secrets stay out of logs entirely
- Fail the operation when retries are exhausted; do not swallow the error and return success
- Do not wait forever on a lock, a queue or a health check; bound it
