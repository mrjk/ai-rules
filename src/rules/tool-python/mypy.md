---
name: Mypy
description: Run a strict type check and keep it at zero errors
category: tool-python
tags: [python, mypy, typing]
---

# Mypy

- Run the type checker after every change, and treat a type error as a build failure
- Configure it under `[tool.mypy]` in `pyproject.toml`, with `strict = true` for new code
- On an existing codebase, enable strictness per module rather than globally weakening the settings
- Never relax a global setting to silence one error, fix the annotation or scope the exception
- Scope every ignore to its error code, `# type: ignore[arg-type]`, with a comment saying why
- Silence third party libraries without stubs through a per module `ignore_missing_imports`, not globally
- Install available stub packages instead of ignoring the import
- Never delete an annotation to make the checker quiet
