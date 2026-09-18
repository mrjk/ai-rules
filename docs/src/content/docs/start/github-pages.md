---
title: GitHub Pages
description: Enable Actions-based Pages for this documentation site
---

The site is a Starlight app under `docs/`. CI builds it with mise and Task, then GitHub Pages
serves `docs/dist`. Rule pages come from a symlink to `src/rules/`; profile pages are Astro routes
that read `src/profiles/*.json` at build time.

Live URL: [https://mrjk.github.io/ai-rules/](https://mrjk.github.io/ai-rules/)

## One-time GitHub settings

After the workflow file is on `main`:

1. Push `main` to `origin` (`git@github.com:mrjk/ai-rules.git`).
2. Repo **Settings > Pages**: Build and deployment **Source = GitHub Actions** (not "Deploy from a branch").
3. **Settings > Actions > General**: allow GitHub Actions for this repository.
4. If the repo is **private**, GitHub Pages needs a paid plan. Public repos work on the free plan.
5. Open the **Actions** tab and wait for the `ci` workflow on `main` to finish. The deploy job
   prints the Pages URL.
6. Open [https://mrjk.github.io/ai-rules/](https://mrjk.github.io/ai-rules/). The first deploy can
   take a minute.

A 404 usually means Pages is still set to "Deploy from a branch", or the workflow has not
succeeded yet.

## Local preview

```bash
task docs:dev
```

Then open the URL Task/Astro prints. With `base: /ai-rules`, the app is served under `/ai-rules/`.

## How CI deploys

`.github/workflows/ci.yml` runs `task ci` (`task validate` then `task docs:build`) on every push
and pull request. On push to `main` it uploads `docs/dist` and deploys with
`actions/deploy-pages`.
