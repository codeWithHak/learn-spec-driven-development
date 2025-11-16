---
description: Update Code Quality Standards in constitution
model: Qwen
tools: [read_file, edit, write_file, grep_search, glob, run_shell_command, save_memory, todo_write]
mode: constitution
---

## Prompt

Update .specify/memory/constitution.md to improve Code Quality Standards

- All functions must include type hints on parameters and return types
  - Example: `def add(a: float, b: float) -> float:`
- All functions must include docstrings explaining what they do
  - Example: `"""Add two numbers and return the sum."""`
- Follow PEP 8 naming conventions (lowercase_with_underscores for functions)
- Lines must be under 100 characters
- No magic numbers; use named constants
  - Bad: `if x > 10:`
  - Good: `if x > MAX_POWER_EXPONENT:`

## Response snapshot

I've updated the constitution to improve the Code Quality Standards section with more specific requirements. I modified the "Code Quality and Readability" principle (III) and updated the "Quality Requirements" section to reference these detailed standards. The constitution version has been updated from 1.0.0 to 1.0.1, and the sync impact report in the file reflects these changes.

## Outcome

- ✅ Impact: Enhanced code quality standards with specific requirements for type hints, docstrings, naming conventions, line length, and constants
- 🧪 Tests: No tests required for this documentation change
- 📁 Files: Updated .specify/memory/constitution.md with enhanced code quality standards
- 🔁 Next prompts: Ready for implementation of functions following new standards
- 🧠 Reflection: Constitution now includes much more specific guidance on code quality requirements

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Not applicable for this task
- Prompt variant (if applicable): Not applicable
- Next experiment (smallest change to try): Begin implementing functions that comply with new standards