---
title: Specifications
description: Original requirements and design decisions
---

## Project specifications

* The collection of AI/agent rules should be documented comprehensively to ensure reusability across diverse contexts.
* The file structure must be clear, consistent, and maintainable.
* Adhere to the guidelines outlined in the following best practices documentation
* Utilize the tool available at https://github.com/Luzgan/ai-rulesmith for rule generation.
    * Conform to project standards by reviewing the documentation at: https://raw.githubusercontent.com/Luzgan/ai-rulesmith/refs/heads/main/README.md
* The framework should incorporate the following core concepts:
  * General rules applicable across use cases
  * Role-specific perspectives, such as developer, reviewer, architect, QA, product owner, etc.
  * Knowledge Base (KB), structured as follows:
    * By programming languages
    * By project types or targets (e.g., complete Python projects, command-line tools, web applications, standalone scripts)
    * Comprehensive coverage of software development workflows
    * Opportunities for continuous improvement and feedback
    * Support for workflows ranging from lightweight/rapid to large-scale/rigorous projects
    * Guidance on tooling integration and adherence to best practices


## Design decisions

See [Library structure](structure/) for the resulting layout and [Authoring rules](authoring/) for the
rule conventions. Notable constraints found in `ai-rulesmith` that shaped the answers above:

* Rule slugs are exactly `<category>/<name>`, so the KB hierarchy is encoded in category names
  (`lang-python`, `tool-python`) rather than nested directories.
* There is no `extends` in `AI_RULES.json`, so the "simple/fast to bigger/stricter" axis is expressed
  as separate self contained files in `src/profiles/`, not as inheritance.
* Roles map onto the steps of a `steps` workflow, one role per step.
