---
title: Mrjk Python Verbosity Ladder
priority: medium
---

# Mrjk Python Verbosity Ladder

- Use one `-v` count ladder for the whole CLI, not per-command flags
- Default is quiet: warnings and errors
- `-v` is cheap startup health, `-vv` is important pipeline steps, `-vvv` is loop-heavy detail,
  `-vvvv` is full dumps
- `--trace` is not a log level; it means show the Python traceback on failure
- Never log secrets, tokens, or credentials below maximum verbosity; warn that max verbosity can leak
- Get `logging.getLogger(__name__)` in each module; do not `print` on committed control paths
- Prefer colored logs on a TTY and plain text when not interactive
- Do not reimplement verbosity, color, or traceback switches outside the shared CLI mixin
