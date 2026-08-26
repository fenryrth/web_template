# CHANGELOG.md

Record meaningful user-visible or operational changes. Do not log every internal refactor.

## Unreleased

### Added

- AI-first repository memory, skill, and handoff structure.
- Clarification policy that distinguishes blocking questions from non-blocking unknowns and limits unnecessary discovery questions.
- Copy/paste first-chat onboarding prompt and example project brief in `README.md`.

### Changed

- `PROJECT.md` is now explicitly AI-maintained and uses `[TODO]` markers for unresolved project facts rather than requiring manual user completion.
- Project onboarding now treats the user as project director and makes the AI responsible for populating and maintaining canonical documentation from a natural-language brief.

### Fixed

- Aligned onboarding and clarification instructions with the `[TODO]` convention used by `PROJECT.md`.
