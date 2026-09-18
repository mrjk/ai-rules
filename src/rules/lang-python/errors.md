---
name: Python Errors
description: Raise specific exceptions, catch narrowly, never swallow
category: lang-python
tags: [python, errors]
---

# Python Errors

- Define one base exception per package and derive the specific ones from it, so callers can catch broadly
- Raise the most specific exception available, and prefer a built in over a new class when it fits
- Catch the narrowest exception type that can actually occur, never a bare `except:` or `except Exception`
  outside a top level handler
- Never `pass` in an `except` block, handle it, log it, or re-raise it
- Use `raise NewError(...) from err` to preserve the cause when translating an exception
- Put the values that caused the failure in the message, not just the fact of failure
- Do not use exceptions for expected control flow that a return value can express
- Validate inputs at the boundary and fail fast, rather than defending in every inner function
- Let unexpected exceptions propagate to a single top level handler that decides the exit code
