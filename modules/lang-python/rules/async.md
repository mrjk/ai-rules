---
title: Python Async
priority: medium
---

# Python Async

- Use `async def` only when the function awaits IO or coordinates other coroutines, not for ordinary
  CPU work
- Call async functions with `await`, never by dropping the coroutine on the floor
- Run the loop at the edge with `asyncio.run(...)` in `main`, not from inside library code
- Never call blocking IO (`time.sleep`, `open` on a slow path, sync HTTP or DB clients) from async
  code; use the async equivalent or `asyncio.to_thread`
- Pass a timeout on every wait that can hang: `asyncio.wait_for`, client timeouts, lock timeouts
- Cancel and await cleanup in `finally` or with `TaskGroup` / `async with`, do not leak tasks
- Do not mix `trio`, `anyio` and raw `asyncio` in one project; follow whatever the codebase already uses

Good:

```python
async def fetch_all(client: httpx.AsyncClient, urls: list[str]) -> list[bytes]:
    async with asyncio.TaskGroup() as tg:
        tasks = [tg.create_task(client.get(url)) for url in urls]
    return [t.result().content for t in tasks]
```

Bad:

```python
async def fetch_all(urls: list[str]) -> list[bytes]:
    return [httpx.get(url).content for url in urls]
```
