---
name: Project License
description: Keep a LICENSE that matches the declared project license; default GPLv3 or later
category: sdlc
tags: [sdlc, license]
vars:
  project_license:
    description: SPDX identifier for the project's own license
    default: "GPL-3.0-or-later"
---

# Project License

- Keep a `LICENSE` file whose text matches `{{project_license}}`
- Do not add a second project license or a dual-license without asking
- Do not relicense in a feature change
- If the tree already uses a different license, keep it; do not silently switch to GPL
- Add license headers only when the project already uses them, and match the existing style
- When you add a new top-level work that ships, it inherits `{{project_license}}` unless the human says otherwise
