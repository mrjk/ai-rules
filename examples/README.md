# Intention recipes

Each directory contains `.ai-rulez/config.toml` for a kind of project.

## Local / CI (this checkout)

Includes use `source = "../../modules/<module>"`. Validate from the recipe directory:

```bash
cd examples/library-standard && ai-rulez validate
```

## Consumer project

1. `task apply RECIPE=<name> TARGET=/path/to/project`
2. Rewrite includes to the published library:

```toml
[[includes]]
name = "house"
source = "https://github.com/mrjk/ai-rules.git"
path = "modules/house"
ref = "v1.0.0"
include = ["rules", "context", "skills", "agents"]
merge_strategy = "local-override"
```

3. Set `name` / `description`, add `.ai-rulez/context/` for the project
4. Run `ai-rulez validate` then `ai-rulez generate`
5. Optional: ai-rulez MCP + `enablement-guide` skill to toggle modules
