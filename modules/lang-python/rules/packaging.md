---
title: Python Packaging
priority: medium
---

# Python Packaging

- Declare everything in `pyproject.toml`, never add `setup.py`, `setup.cfg` or `requirements.txt`
- Set `requires-python = ">={{python_min_version}}"` and do not use syntax newer than that
- Use the `src/` layout with one package directory, so tests import the installed package
- Declare dependencies with a lower bound and only add an upper bound when a break is known
- Keep development dependencies in a dependency group, out of the runtime dependencies
- Commit the lockfile, and treat it as the source of truth for reproducible installs
- Never commit a virtual environment, and never install into the system interpreter
- Expose entry points through `[project.scripts]` rather than telling users to run a file path
- Keep the version in one place, and derive it from the package metadata at runtime
