---
title: Docker Image Hardening
priority: medium
---

# Docker Image Hardening

- Pin the base image tag; never `FROM ...:latest`
- Use multi-stage builds when the image compiles or downloads a toolchain
- Run the process as a non-root user
- Do not copy secrets, `.env` files or private keys into an image layer
- Add a healthcheck when the process is a long-running service
- Keep the runtime image small: copy only what the process needs
- Prefer a distroless or slim runtime stage over shipping a compiler

Good:

```dockerfile
FROM python:3.12.8-slim AS runtime
USER app
HEALTHCHECK CMD ...
```

Bad:

```dockerfile
FROM python:latest
COPY .env /app/.env
USER root
```
