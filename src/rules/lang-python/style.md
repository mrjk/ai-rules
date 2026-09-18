---
name: Python Style
description: Idiomatic modern Python structure, naming and control flow
category: lang-python
tags: [python, style]
---

# Python Style

- Target the versions declared in the project metadata, do not use syntax newer than the floor
- `snake_case` for functions and variables, `PascalCase` for classes, `UPPER_SNAKE_CASE` for constants
- Prefer plain functions and modules, reach for a class only when there is state to hold
- Use `dataclasses` or `pydantic` models for structured data instead of dicts of unknown shape
- Prefer comprehensions and generators over building lists with `append` in a loop
- Use `pathlib.Path` rather than `os.path` string joining
- Use context managers for anything that must be released, never a bare `open` without `with`
- Guard early and return early, keep the happy path at the lowest indentation
- Never use a mutable default argument, use `None` and construct inside the function
- Keep `if __name__ == "__main__":` to a single call into a `main()` function
- Avoid `from module import *`, and avoid relative imports beyond one level
