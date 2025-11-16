<!--
SYNC IMPACT REPORT
Version change: N/A → 1.0.0 (Initial constitution implementation)
Added principles: Test-First Development, Python Type Safety, Code Quality, Architectural Decision Records, OOP Standards, Technical Stack Requirements
Added sections: Quality Requirements, Development Workflow
Templates requiring updates: ✅ Updated all templates to align with new principles
Follow-up TODOs: None
-->
# calc Constitution

## Core Principles

### I. Test-First Development (NON-NEGOTIABLE)
TDD is mandatory: All tests must be written before implementation code; Tests must initially fail before feature implementation; The Red-Green-Refactor cycle must be strictly enforced.

### II. Python Type Safety
Python 3.12+ with type hints everywhere in all code; Strict typing enforcement to prevent runtime errors; Type checking must pass before any code is merged.

### III. Code Quality and Readability
All code must be clean, well-documented, and easy to read; Code reviews must assess readability; Complex implementations must be justified and documented.

### IV. Architectural Decision Records (ADRs)
Important decisions MUST be documented using ADRs; All architectural changes require an ADR to explain reasoning; ADRs provide historical context for future maintainers.

### V. Object-Oriented Programming Standards
Follow essential OOP principles: SOLID, DRY, KISS; Code structure must adhere to established OOP patterns; Violations of these principles must be justified.

### VI. Technical Stack Requirements
Use Python 3.12+ with UV package manager; Use pytest for testing; All project files must be tracked in git; Leverage dataclasses for data structures.

## Quality Requirements

All tests must pass before merging; Maintain at least 80% code coverage; Use dataclasses for all data structures; Follow established coding standards and style guides; Ensure code is maintainable and well-documented.

## Development Workflow

All features must start with a specification document before implementation; Code reviews are mandatory for all changes; Follow Spec-Driven Development practices; Each feature development follows: spec → plan → tasks → implementation → test cycle; Changes must be independently testable and verifiable.

## Governance

This Constitution supersedes all other practices and guidelines in the project; All PRs and code reviews must verify compliance with these principles; Any deviation from these principles must be justified and documented; Amendments to this Constitution require explicit approval and must follow the Spec-Driven Development process.

**Version**: 1.0.0 | **Ratified**: 2025-11-16 | **Last Amended**: 2025-11-16
