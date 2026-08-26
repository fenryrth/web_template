---
name: project-onboarding
description: Initialize or normalize an AI-first website or landing-page repository. Use when starting a new project, converting an existing repo to the template, or when project documentation is incomplete and the agent needs to establish product, design, architecture, quality, roadmap, and handoff state.
---

# Project Onboarding

## Goal

Turn the user's brief and the current repository into a coherent project state that another agent can understand without the original chat.

The user is the project director, not the documentation operator. The agent is responsible for translating the user's natural-language brief into the canonical project files and keeping those files current.

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

Do not mechanically ask about every item above. Infer answers from the user's prompt, existing repository content, current conversation, assets, and sensible reversible defaults whenever possible.

Classify missing information as either:

- **Blocking** — the answer could materially change product direction, scope, brand, architecture, cost, compliance, or another difficult-to-reverse choice. Ask the user before substantial implementation.
- **Non-blocking** — a reasonable reversible default exists, the information can safely remain marked `[TODO]`, or useful work can continue without it. Proceed and document the assumption or unknown where relevant.

When questions are required:

1. Ask only the smallest useful set, normally no more than 3–5 at once.
2. Prioritize questions with the greatest downstream impact.
3. Recommend a sensible default when that helps the user answer quickly.
4. Never ask the user to repeat information already available.
5. Avoid technical-choice questions that the agent can responsibly resolve itself.
6. Once blocking uncertainty is removed, proceed autonomously rather than continuing an unnecessary discovery interview.

## Procedure

1. Read `AGENTS.md` and inspect the repository before proposing structure.
2. Extract known project facts from the user's brief, existing files, assets, and repository state.
3. Run the brief sufficiency check above and ask only genuinely blocking questions.
4. Populate or update:
   - `PROJECT.md`
   - `ROADMAP.md`
   - `HANDOFF.md`
   - `docs/ARCHITECTURE.md`
   - `docs/DESIGN.md`
   - `docs/CONTENT.md`
   - `docs/QUALITY.md`
5. Replace `[TODO]` markers whenever the answer can be inferred responsibly. Keep unresolved non-blocking facts as `[TODO]`; do not invent facts merely to make the documents look complete.
6. Do not instruct the user to fill project Markdown files manually. Ask direct conversational questions only when user input is genuinely required.
7. Make ordinary technical and implementation decisions when the user has delegated implementation.
8. Record durable architecture/product tradeoffs as ADRs only when actually decided.
9. Ensure `HANDOFF.md` contains a concrete first implementation action.
10. After onboarding, summarize the agent's understanding, important assumptions, and any unresolved blocking decisions, then proceed with the highest-value next step when possible.
11. If canonical skills changed, sync tool-specific generated copies.

## Output expectation

At completion, a new agent should be able to read the repository and start implementation with minimal rediscovery. The human should have been able to provide the project as a natural-language brief rather than manually maintaining the project documentation.
