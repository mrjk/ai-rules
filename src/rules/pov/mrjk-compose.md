---
name: Mrjk Compose Apps
description: Pin tags, restart policy, no container_name, real Compose CLI, escape interpolation
category: pov
tags: [pov, mrjk, compose, docker]
---

# Mrjk Compose Apps

- Always set a restart policy such as `unless-stopped`
- Always pin image tags; never deploy `latest`; drive name and version through variables
- Never set `container_name`; address services with networks and aliases
- Prefer directory bind mounts over single-file mounts; do not use Docker named volumes by default
- Drive Compose through the real CLI; do not reimplement merge, interpolate, or `config` semantics
- Escape `$` as `$$` when the value must reach the container literally
- After `docker compose config`, do not assume map vs list shape for `environment`, `labels`, or
  `ports`
- A multi-service app defines an explicit network; a single-service app may use the default
