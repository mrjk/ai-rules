---
name: Pytest Runner
description: How to invoke and configure the test runner
category: tool-python
tags: [python, pytest, tooling]
---

# Pytest Runner

- Run the whole suite with `uv run pytest`, and a single case with `uv run pytest path::test_name`
- Configure it under `[tool.pytest.ini_options]` in `pyproject.toml`, no `pytest.ini` or `tox.ini`
- Set `addopts` so the default invocation is strict: `--strict-markers --strict-config`
- Register every custom marker in config, so a typo in a marker fails instead of silently skipping
- Use `-x` while iterating on a failure and the full suite before reporting done
- Measure coverage with `pytest-cov` and fail under an agreed threshold in CI
- Investigate a flaky test rather than rerunning it, and never paper over it with a retry plugin
- Keep the suite fast enough to run on every change, and mark genuinely slow tests so they can be excluded
