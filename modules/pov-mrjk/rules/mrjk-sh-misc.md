---
title: Mrjk POSIX Sh Misc
priority: medium
---

# Mrjk POSIX Sh Misc

- Start scripts with `set -eu`; do not use `-o pipefail` (not POSIX); do not turn `-e` off without
  a documented reason
- Write `name() { ... }` functions; do not use the `function` keyword, `[[ ]]`, arrays, or bash
  parameter transforms
- Do not use `local` (not POSIX); use unique prefixed names for temps, or a subshell
- Prefix every function and global; keep sourced files side-effect light
- Quote expansions; use `[ ]` or `case` instead of bash tests
- Use `.` instead of `source`; do not use process substitution
- Use `printf` over `echo` for data; do not `eval` untrusted input
