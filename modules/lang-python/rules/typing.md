---
title: Python Typing
priority: medium
---

# Python Typing

- Annotate every function signature: parameters and return type, including `-> None`
- Annotate module level and class level attributes, let local variables be inferred
- Use built in generics (`list[str]`, `dict[str, int]`) and `X | None`, not `typing.List` or `Optional`
- Never use bare `Any` to silence the checker, model the real shape instead
- Use `Protocol` for duck typed interfaces rather than inheriting from an abstract base class
- Use `TypedDict` or a dataclass for dicts with a known set of keys
- Use `Sequence` or `Iterable` for parameters and a concrete type for return values
- Prefer `enum.Enum` or `Literal` over free form strings for a closed set of values
- When a narrowing `assert` or `cast` is unavoidable, add a comment explaining why it holds
- Never add a blanket `# type: ignore`, scope it to the error code and explain it
