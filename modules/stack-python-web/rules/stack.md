---
title: "Stack: Python Web Service"
priority: medium
---

# Stack: Python Web Service

- Separate the layers: routing, then service logic, then data access, and never call the database from
  a route handler
- Define request and response models explicitly and validate every incoming payload at the boundary
- Keep the routing layer free of business rules, it maps HTTP to a service call and back
- Treat the process environment as the deploy contract (level 1 twelve-factor); validate required
  keys at startup and fail fast when something is missing; add a typed schema only at level 3
- Return the correct status codes and a consistent error body shape with a machine readable code
- Never leak internal details, tracebacks or SQL in a response
- Manage database schema through versioned migrations, never by mutating a live schema by hand
- Use dependency injection for external clients and sessions so tests can substitute them
- Expose a liveness endpoint that is cheap and a readiness endpoint that actually checks dependencies
- Log one structured line per request with a correlation id, and never log request bodies or auth headers
- Enforce authentication and authorisation at the boundary, and check ownership on every resource access
- Test with a real HTTP client against the app, and use a real database in integration tests
