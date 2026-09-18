---
name: Mrjk Twelve Factor Config
description: Mix 12-factor env config with XDG dirs; three levels; strict source precedence
category: pov
tags: [pov, mrjk, twelve-factor, xdg, config]
---

# Mrjk Twelve Factor Config

- Treat every app as 12-factor compatible: config is injected at runtime, never baked into
  the image or committed as live values
- Prefer environment variables for deployable and secret settings; use XDG config files for
  structured local settings that mirror the same keys
- Every user-facing setting has one meaning exposed three ways when the surface exists: CLI
  flag, env var, and (level 2+) config key
- Name them consistently: flag `--kebab-case`, env `<APP>_KEBAB_CASE` in upper snake with an
  app-name prefix, config key `kebab-case` under the app config file
- Resolve in this strict order, highest wins: CLI flag, then environment, then XDG config
  file, then built-in defaults; never let a lower source override a higher one
- Level 1 (scripts, thin tools, deployed web services): flags and/or env only; no config
  file and no XDG layout required; the process environment is the deploy contract
- Level 2 (packaged CLIs and long-lived local apps): add the XDG Base Directory layout under
  an app-named subdirectory
- At level 2+, put config in `$XDG_CONFIG_HOME/<app>/`, durable data in `$XDG_DATA_HOME/<app>/`,
  state in `$XDG_STATE_HOME/<app>/`, cache in `$XDG_CACHE_HOME/<app>/`, and runtime files
  (sockets, pid, lock) in `$XDG_RUNTIME_DIR/<app>/`
- When an XDG variable is unset, use the Base Directory defaults; do not invent a non-XDG
  home layout
- Level 3 (apps with growing settings): validate merged settings against a typed schema at
  startup and fail fast on shape or type errors
- Keep an example env file with names and dummy values only; secrets stay in the environment
  or an untracked local file, never in tracked XDG config
- Optional local `.env` loading is fine for development; do not rely on it in production or
  containers where the process environment is the contract
