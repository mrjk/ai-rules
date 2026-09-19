---
title: Mrjk Python OOP Default
priority: medium
---

# Mrjk Python OOP Default

- For domain behavior, default to a class when the unit has identity, session state, a lifecycle,
  or interchangeable implementations
- Keep a function when the work is a pure transform, a thin factory, a one-shot dispatcher, or a
  tiny private helper
- Do not wrap those helpers in a class just to look object-oriented
- Do not grow module-level mutable registries as a substitute for an object with an explicit lifetime
- Do not add classes that are only static-method namespaces
- Dataclasses, NamedTuples, TypedDicts, and Protocols count as typed objects, not as a dodge
- Do not rewrite existing free-function modules for style alone; when touching them, move lasting
  state onto an object if a class would be clearer
