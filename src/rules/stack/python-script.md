---
name: Stack Single File Python Script
description: One portable, self contained, dependency declaring Python file
category: stack
tags: [python, script, stack]
---

# Stack: Single File Python Script

- Everything lives in one file, if it needs a second module it is no longer this archetype
- Declare dependencies in an inline PEP 723 header so `uv run script.py` works from a bare checkout
- Start with a shebang of `#!/usr/bin/env -S uv run --script`, and keep the file executable
- Prefer the standard library, every dependency is a cost to a script whose value is portability
- Parse arguments with `argparse`, and provide `--help` text that explains the purpose
- Structure it as small functions plus a `main(argv)` that returns an exit code
- Write diagnostics to stderr and results to stdout, so the script composes in a pipeline
- Exit non zero on failure, and never print a traceback as the user facing error
- Keep configuration at level 1: flags and environment variables only, no config file or XDG
  layout
- Document usage in a module docstring at the top, since there is no README
