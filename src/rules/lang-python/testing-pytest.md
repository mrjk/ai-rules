---
name: Python Testing With Pytest
description: Plain assert, fixtures over setup methods, parametrize over loops
category: lang-python
tags: [python, testing, pytest]
---

# Python Testing With Pytest

- Write test functions, not `unittest.TestCase` classes, and use plain `assert`
- Name tests `test_<subject>_<condition>_<expected>` so a failure name explains itself
- Mirror the package layout under `tests/`, and keep test files importable without side effects
- Use `@pytest.mark.parametrize` instead of looping inside a test, so each case reports separately
- Use fixtures for setup, put shared ones in `conftest.py`, and keep their scope as narrow as possible
- Use `tmp_path` for filesystem work and `monkeypatch` for environment and attribute patching
- Assert on behaviour and public output, not on internal calls, unless the call is the behaviour
- Use `pytest.raises` with `match=` to pin the error type and message
- Mock only at the process boundary: network, clock, randomness, subprocess
- Never weaken an assertion or add a skip to get a green run, fix the code or report the failure
