---
name: Python Logging
description: Use the logging module correctly and keep secrets out of the output
category: lang-python
tags: [python, logging, observability]
---

# Python Logging

- Get one logger per module with `logger = logging.getLogger(__name__)`, never log on the root logger
- Libraries configure no handlers, only the application entry point calls `basicConfig` or `dictConfig`
- Never use `print` for diagnostics, `print` is reserved for a program's actual output
- Pass values as arguments (`logger.info("loaded %s items", n)`), do not pre-format with f-strings
- Use `logger.exception(...)` inside an `except` block so the traceback is captured
- Choose the level deliberately: `DEBUG` for developers, `INFO` for lifecycle events, `WARNING` for
  recoverable problems, `ERROR` for failed operations
- Never log credentials, tokens, cookies, full request bodies or personal data
- Make verbosity a flag or environment variable, defaulting to `WARNING` for scripts and `INFO` for services
