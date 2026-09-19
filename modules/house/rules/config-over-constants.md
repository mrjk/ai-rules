---
title: Config Over Constants
priority: medium
---

# Config Over Constants

- Define a value once and reference it, in code, in shell scripts, in CI and in task runners
- Paths, hostnames, ports, versions and timeouts are variables, never inline literals
- When the same literal appears a second time, that is the signal to name it
- Read deployment specific values from the environment, with a documented default
- Do not duplicate a block of logic to handle a variant, parameterise the original
- Duplication in tests is acceptable when it makes the assertion clearer
