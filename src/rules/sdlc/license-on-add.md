---
name: License On Add
description: Read a dependency's license and check it against the project license before adding it
category: sdlc
tags: [sdlc, license, dependencies]
vars:
  project_license:
    description: SPDX identifier for the project's own license
    default: "GPL-3.0-or-later"
---

# License On Add

- Before adding a dependency, read its license and compare it to `{{project_license}}`
- Permissive licenses (MIT, BSD, Apache-2.0) are compatible with GPLv3; add them without relicensing the project
- Do not add a proprietary or unlicensed dependency
- Ask first before adding a stronger copyleft such as AGPL, or any license that would change distribution duties
- Do not mix a license exception or a vendored third-party tree into a feature change
- Record the new dependency through the project's package manager so the lockfile stays honest
