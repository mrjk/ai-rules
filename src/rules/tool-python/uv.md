---
name: uv
description: Manage Python environments, dependencies and runs through uv
category: tool-python
tags: [python, uv, dependencies]
---

# uv

- Use `uv` for everything: interpreters, virtual environments, dependencies, running commands
- Add dependencies with `uv add <pkg>` and development ones with `uv add --dev <pkg>`, never edit
  `pyproject.toml` dependency lists by hand
- Remove with `uv remove <pkg>`, so the lockfile stays consistent
- Run project commands through `uv run <cmd>`, which resolves the environment automatically
- Sync an existing checkout with `uv sync`, and use `uv sync --frozen` in CI so the lockfile is enforced
- Commit `uv.lock`, and regenerate it with `uv lock` rather than editing it
- Pin the interpreter with `uv python pin <version>` when the project needs a specific one
- Never call `pip`, `pip-tools`, `poetry`, `virtualenv` or `python -m venv` in a uv project
- For a standalone script, declare dependencies in an inline PEP 723 header and run `uv run script.py`
