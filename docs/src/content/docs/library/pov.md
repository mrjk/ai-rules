---
title: Point-of-view rules
description: Person-prefixed opinions, default mrjk set, source map
---

`pov` holds person-prefixed opinions. They are not universal house law. A later contributor can
add `pov/alice-cicd` without editing `pov/mrjk-universal-cicd`. Slugs stay two segments:
`pov/<who>-<topic>`.

Python profiles in this library enable the `mrjk-python-*` set (and compose, http, docs where the
profile already lists them). House CI is `tool-mise/pin-toolchain` and `tool-task/taskfile-practices`.
`pov/mrjk-universal-cicd` is opt-in on a copied profile. To omit POV slugs, copy the closest profile
and drop them. There is no inheritance. Browse the live slugs under Rules in the sidebar, or run
`task list`.

## Source map (first import)

Distilled from existing ADRs; originals stay in those projects. Not copied wholesale.

| Rule | Origin (topic, not a live path) |
| --- | --- |
| `mrjk-universal-cicd` | Paasify ADR 0021 Universal CI/CD |
| `mrjk-python-oop` | Paasify ADR 0080 OOP coding style, layering from ADR 0030 |
| `mrjk-docs` | Paasify ADR 0068 docs autogeneration |
| `mrjk-python-cli` | Clak architecture (argparse engine, owned UI) plus Paasify dual-CLI altitude |
| `mrjk-python-logging` | Paasify ADR 0044 logging and verbosity |
| `mrjk-compose` | Paasify ADR 0016 Compose challenges, ADR 0017 Compose app practices |
| `mrjk-http` | Portable HTTP bits from Paasify ADR 0079 (not product routes) |
| `mrjk-python-misc` | Paasify ADR 0030 / 0022 leftovers |

Left in the product repos: Kouly domain (stacks, plugins, vars, secrets engines, Phoenix, sakoku),
Clak internals (parser merging, help renderer), Black/Pylint (this library uses Ruff and uv).
