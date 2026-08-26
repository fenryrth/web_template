---
name: project-onboarding
description: Initialize or normalize an AI-first website or landing-page repository. Use when starting a new project, converting an existing repo to the template, or when project documentation is incomplete and the agent needs to establish product, design, architecture, quality, roadmap, and handoff state.
---

# Project Onboarding

## Goal

Turn the user's brief and the current repository into a coherent project state that another agent can understand without the original chat.

## Brief sufficiency check

Before substantial implementation, evaluate whether the available brief is sufficient to make responsible progress.

Look especially for clarity about:

- project purpose and primary outcome,
- target audience,
- primary conversion or CTA,
- scope,
- brand/art direction,
- available content and assets,
- and any material technical, legal, privacy, deployment, or cost constraints.

Do not mechanically ask about every item above. Infer answers from the user's prompt, existing repository content, and current conversation whenever possible.

Classify missing information as either:

- **Blocking** — the answer could materially change product direction, scope, brand, architecture, cost, compliance, or another difficult-to-reverse choice. Ask the user before substantial implementation.
- **Non-blocking** — a reasonable reversible default exists, the information can safely be marked `TBD`, or useful work can continue without it. Proceed and document the assumption or unknown where relevant.

When questions are required:

1. Ask only the smallest useful set, normally no more than 3–5 at once.
2. Prioritize questions with the greatest downstream impact.
3. Recommend a sensible default when that helps the user answer quickly.
4. Never ask the user to repeat information already available.
5. Avoid technical-choice questions that the agent can responsibly resolve itself.
6. Once blocking uncertainty is removed, proceed autonomously rather than continuing an unnecessary discovery interview.

## Procedure

1. Read `AGENTS.md` and inspect the repository before proposing structure.
2. Extract known project facts from the user's brief and existing files.
3. Run the brief sufficiency check above and ask only genuinely blocking questions.
4. Fill or update:
   - `PROJECT.md`
   - `ROADMAP.md`
   - `HANDOFF.md`
   - `docs/ARCHITECTURE.md`
   - `docs/DESIGN.md`
   - `docs/CONTENT.md`
   - `docs/QUALITY.md`
5. Mark unknown non-blocking product facts as `TBD`; do not invent them.
6. Make ordinary technical recommendations when the user has delegated implementation.
7. Record durable architecture/product tradeoffs as ADRs only when actually decided.
8. Ensure `HANDOFF.md` contains a concrete first implementation action.
9. If canonical skills changed, sync tool-specific generated copies.

## Output expectation

At completion, a new agent should be able to read the repository and start implementation with minimal rediscovery.
