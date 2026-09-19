---
title: "Stack: Python CLI"
priority: medium
---

# Stack: Python CLI

- Ship as a package with a `[project.scripts]` entry point, users run a command, not a file path
- Keep the CLI layer thin: parse, validate, call the library, format the result, choose an exit code
- Put the real logic in importable modules that know nothing about argv or stdout, and test those directly
- Use one argument parsing library consistently, and give every command and flag help text
- Resolve configuration in documented order: CLI flag, then environment, then XDG config
  file, then defaults; follow the project's twelve-factor config level
- Results go to stdout, diagnostics go to stderr, and offer a machine readable output flag such as `--json`
- Exit 0 on success and a documented non zero code on failure, and translate exceptions into messages
  that say what to do next
- Support `--verbose` and `--quiet` by adjusting log levels, not by adding print statements
- Never prompt interactively without a non interactive path, scripts need to call this too
- Make destructive operations require confirmation, with a `--yes` flag for automation
- Test the entry point end to end with a runner, in addition to unit testing the core
