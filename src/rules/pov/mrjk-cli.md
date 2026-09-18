---
name: Mrjk Clak CLI
description: Build mrjk CLIs with Clak classes, a thin adapter over a library, typed user errors
category: pov
tags: [pov, mrjk, cli, clak]
---

# Mrjk Clak CLI

- New mrjk CLIs use Clak on stdlib argparse: `Parser`, `Argument`, and `Command` classes, not a
  Click or Typer decorator DSL
- Mixins go left of `Parser` in the class list
- Keep the CLI layer thin: parse, validate, call the library, format the result, choose an exit code
- Prefer a noun/verb CLI-API for scripting plus a daily companion that reuses the same command
  classes, with no duplicated `cli_run` bodies
- Put command logic in `cli_run`, raise a typed user error with a message and advice, do not
  `print` plus `sys.exit` for user mistakes
- Do not parse, patch, or restyle library help or error strings with regex; own the UI if the
  library text is unstable
- Do not assume environment variables auto-map onto CLI flags unless the project already ships that
- Do not hand-roll a second argparse tree beside Clak for the same CLI
