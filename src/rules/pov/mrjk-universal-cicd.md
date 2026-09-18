---
name: Mrjk Universal CI/CD
description: Pin tools with mise, own workflow in Task, keep provider YAML as a thin bootstrap
category: pov
tags: [pov, mrjk, ci, mise, task]
---

# Mrjk Universal CI/CD

- Pin the toolchain with mise so local and CI install the same tool versions
- Put every workflow entrypoint in Task: at least `setup`, `lint`, `test`, and `build`
- Split further work into Task namespaces such as `docs:`, `docker:`, `fix:`, `test:`, `release:`,
  and `publish:`
- Expose pipeline entrypoints as `ci:` (or `ci_`) aliases that call those same tasks
- Provider configs only check out, load mise, and run `task ci:...`; they do not own build logic
- Put custom project steps in a scripts directory, prefer shell or a language already pinned by mise
- Run the same `mise install && task ci:...` command on a laptop as on the runner
- Do not add a second CI system or a private invocation that can drift from Task
- When you add a local task that CI should gate, add the `ci:` alias in the same change
- Do not grow provider YAML with build steps; add a Task and a script instead

Good:

```text
docs:
docker:
fix:lint
test:unit
test:regression
release:dev
publish:pypi
publish:ghcr
```

```yaml
steps:
  - run: mise install
  - run: task ci:test
```

Bad:

```yaml
steps:
  - run: pip install -r requirements.txt
  - run: pytest tests
  - run: docker build -t app .
```
