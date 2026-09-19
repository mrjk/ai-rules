---
title: Python Time
priority: medium
---

# Python Time

- Use `datetime.datetime` with an explicit timezone, never a naive datetime for an instant in time
- Create "now" with `datetime.now(UTC)` from `datetime`, not `datetime.utcnow()` and not `datetime.now()`
- Store and compare instants in UTC; convert to a local zone only when formatting for a human
- Use `date` for a calendar day and `timedelta` for a duration, do not encode those as strings or ints
  of seconds unless an external protocol requires it
- Parse incoming timestamps with an explicit format or `fromisoformat`, and reject values with no offset
- Freeze time in tests with a clock injected at the boundary, not by patching every call site

Good:

```python
from datetime import UTC, datetime

def recorded_at() -> datetime:
    return datetime.now(UTC)
```

Bad:

```python
from datetime import datetime

def recorded_at() -> datetime:
    return datetime.now()
```
