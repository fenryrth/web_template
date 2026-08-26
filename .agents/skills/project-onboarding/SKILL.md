---
name: project-onboarding
description: Initialize or normalize an AI-first website or landing-page repository. Use when starting a new project, converting an existing repo to the template, or when project documentation is incomplete and the agent needs to establish product, design, architecture, quality, roadmap, and handoff state.
---

# Project Onboarding

## Goal

Turn the user's brief and the current repository into a coherent project state that another agent can understand without the original chat.

## Procedure

1. Read `AGENTS.md` and inspect the repository before proposing structure.
2. Extract known project facts from the user's brief and existing files.
3. Fill or update:
   - `PROJECT.md`
   - `ROADMAP.md`
   - `HANDOFF.md`
   - `docs/ARCHITECTURE.md`
   - `docs/DESIGN.md`
   - `docs/CONTENT.md`
   - `docs/QUALITY.md`
4. Mark unknown product facts as `TBD`; do not invent them.
5. Make ordinary technical recommendations when the user has delegated implementation.
6. Record durable architecture/product tradeoffs as ADRs only when actually decided.
7. Ensure `HANDOFF.md` contains a concrete first implementation action.
8. If canonical skills changed, sync tool-specific generated copies.

## Output expectation

At completion, a new agent should be able to read the repository and start implementation with minimal rediscovery.
