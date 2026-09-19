---
title: Revert Failed Change
priority: medium
---

# Revert Failed Change

- If verification fails after the work is shaped as a merge, restore last green before stacking more fixes
- On a shared branch, revert the bad commit, do not rewrite published history
- Leave the tree green, then start a new change that includes a reproduction
- Record the failing command and its output in the revert or the follow-up issue
- Do not disable tests, skip CI or comment out the check to get a green run
- A revert is a complete change of its own, do not mix it with the next attempt
