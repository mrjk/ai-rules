---
name: Docker Project Layout
description: Compose at the repo root, image files and overlays under docker/
category: tool-docker
tags: [docker, compose, layout]
---

# Docker Project Layout

- Put the Compose file at the repository root (`compose.yaml` or `docker-compose.yml`)
- Put Dockerfiles, extra Compose overlays, entrypoints and image helper scripts under `docker/`
- Keep a `.dockerignore` next to the image build context
- Do not scatter one-off Dockerfiles at random paths
- A project that runs in containers ships Compose; do not leave "run the image by hand" as the only path
- Point Compose `build.context` at the repo (or the documented context), and `dockerfile` at the file under `docker/`
- Do not add a second Compose stack that duplicates the first; overlay or a profile instead

Good:

```text
compose.yaml
docker/Dockerfile
docker/compose.override.yaml
```

Bad:

```text
misc/app.docker
backend/Dockerfile
frontend/Dockerfile
# no Compose file
```
