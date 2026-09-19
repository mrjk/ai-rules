---
title: Ruff
priority: medium
---

# Ruff

- Format with `ruff format .` and lint with `ruff check .`, and run both before reporting done
- Use `ruff check --fix .` for mechanical fixes, then re-read the diff, autofixes are not always right
- Configure Ruff under `[tool.ruff]` in `pyproject.toml`, never in a separate config file
- Ruff replaces black, isort, flake8, pyupgrade and pydocstyle, do not add any of them
- Never hand format code that the formatter owns, and never fight it with manual line breaks
- Silence a rule inline with a specific code and a reason, `# noqa: E501  # long URL`, never bare `# noqa`
- Prefer disabling a rule project wide in config over repeating the same inline suppression
- Treat a lint failure as a real failure in CI, not a warning
