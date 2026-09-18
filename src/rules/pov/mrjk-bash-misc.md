---
name: Mrjk Bash Misc
description: Strict mode, modular prefixed functions, Bash 4.0 floor, no global leaks
category: pov
tags: [pov, mrjk, bash]
---

# Mrjk Bash Misc

- Start scripts with `set -euo pipefail`; do not turn `-e` off without a documented reason
- Target Bash 4.0 as the floor: no Bash 5-only features; do not rely on 4.3+ extras such as namerefs
  or `wait -n` unless the project already requires them
- Prefer small named functions over a growing top-level script; one concern per function
- Declare function temps with `local`; do not leak loop counters or scratch vars into the global
  namespace
- Prefix library function names; do not dump unprefixed helpers into the global namespace
- Quote expansions; use arrays instead of unquoted splitting
- Guard sourced files so main runs only when the file is the entry script
- Use `printf` over `echo` for data; do not `eval` untrusted input
