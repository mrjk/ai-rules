---
title: Release Checklist
priority: medium
---

# Release Checklist

- The full suite, the linter and the type checker pass on the commit being released, not on a local variant
- The version is bumped in exactly one place, following semantic versioning against the public interface
- The changelog lists user visible changes, grouped by added, changed, fixed and removed
- Every breaking change is called out with the migration step a user must take
- Documentation and examples reflect the released behaviour
- Build the artifact and install it from scratch before tagging, a clean install catches missing files
- Tag the exact released commit, and never move or reuse a tag
- Never release with a known failing test that has been skipped to get a green run
