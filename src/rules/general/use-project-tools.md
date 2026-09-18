---
name: Use Project Tools
description: Use the project's configured tools and integrations, do not invent a parallel workflow
category: general
tags: [general, tools, mcp]
---

# Use Project Tools

- Use the tools already configured in the project: task runner, linters, CLIs, MCP servers
- If a task is done in a tracker, the browser or the database, use that integration rather than a paste-back loop
- Do not add an MCP server, CLI or dependency the project does not already use, without asking
- Do not invent a parallel workflow (ad hoc HTTP calls, scraping, a second task tracker)
- When a needed tool is missing, say so and offer to add it
- Prefer one tool per job; delete the extra when two exist
