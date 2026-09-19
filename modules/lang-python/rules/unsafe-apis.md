---
title: Python Unsafe APIs
priority: medium
---

# Python Unsafe APIs

- Never call `eval`, `exec` or `compile` on data you did not write in this repository
- Never `pickle.load` untrusted bytes; use JSON, msgpack or a dedicated schema
- Load YAML with `yaml.safe_load`, never `yaml.load` without a `SafeLoader`
- Run subprocesses with a list of arguments, `shell=False`, and never interpolate user input into a
  shell string
- Pass `check=True` or inspect `returncode`, and set a timeout, when you call `subprocess.run`
- Do not use `os.system` or `os.popen`

Good:

```python
subprocess.run(["git", "status", "--porcelain"], check=True, timeout=10)
```

Bad:

```python
os.system(f"git status --porcelain {user_path}")
pickle.loads(body)
yaml.load(text)
```
