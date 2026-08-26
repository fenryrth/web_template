# AGENTS.md

## Purpose

This repository is designed to be built and maintained primarily by AI agents while the human user acts as project director.

This file is the universal entry point for agents. Keep it concise. Detailed project knowledge belongs in the linked canonical documents.

## Instruction hierarchy

Follow instructions in this order:

1. The user's current explicit instruction.
2. This `AGENTS.md`.
3. Canonical project documents linked below.
4. Existing code, tests, and configuration.
5. Reasonable implementation defaults.

If documentation and code conflict, investigate which is stale. Do not silently preserve contradictory state. Update stale documentation when the correct state can be determined.

## Canonical project memory

Read these before substantial work:

- `PROJECT.md` — goals, audience, scope, constraints, approvals.
- `HANDOFF.md` — current state and exact continuation point.
- `ROADMAP.md` — milestones and priorities.
- `docs/ARCHITECTURE.md` — technical architecture and commands.
- `docs/DESIGN.md` — visual system and UX rules.
- `docs/CONTENT.md` — approved/current content and SEO copy.
- `docs/QUALITY.md` — acceptance criteria and verification.
- `docs/decisions/` — durable decisions and rationale.
- `CHANGELOG.md` — meaningful completed changes.

Load only the deeper documents relevant to the current task. Do not flood context with every file by default.

## Session start protocol

Before editing code:

1. Read `AGENTS.md`, `PROJECT.md`, `HANDOFF.md`, and `ROADMAP.md`.
2. Inspect repository state: current branch, `git status`, recent commits, package manifest, and relevant config.
3. Read only the design/architecture/content/quality docs relevant to the task.
4. Confirm the next actionable objective from `HANDOFF.md` and the user's request.
5. Continue from repository state. Never assume prior chat history is available or authoritative.

## Agent autonomy

The human user is the director; the agent is responsible for implementation.

- Resolve ordinary implementation details independently.
- Prefer a strong recommended default instead of asking the user to choose among trivial technical options.
- Ask for direction only when a choice materially changes product intent, brand direction, scope, cost, legal exposure, data handling, deployment ownership, or an irreversible external action.
- Never invent approvals.
- Never expose or commit secrets.
- Never perform destructive remote operations, force pushes, production deployment, purchases, or domain/DNS changes unless explicitly authorized.

## Clarification policy

Before substantial work, determine whether the user's brief contains enough information to proceed confidently.

Do not ask questions merely to be thorough. The default behavior is to proceed autonomously when a reasonable, reversible choice can be made.

Proceed without clarification when:

- the missing detail is minor,
- a strong conventional default exists,
- the choice is easy to reverse,
- the decision does not materially affect product direction,
- or the missing information can safely remain unresolved as `[TODO]` while other work continues.

Ask the user before proceeding when missing information could materially affect:

- project purpose,
- target audience,
- primary conversion or call to action,
- scope,
- brand or art direction,
- content strategy,
- major architecture or platform choice,
- paid services or ongoing cost,
- legal/privacy requirements,
- data ownership or handling,
- deployment ownership,
- or another difficult-to-reverse decision.

Distinguish between **blocking** and **non-blocking** unknowns:

- A blocking unknown prevents responsible progress or could send the project in the wrong direction. Ask about it before substantial implementation.
- A non-blocking unknown can be marked `[TODO]`, handled with a documented default, or deferred while useful work continues.

When clarification is necessary:

- ask only the smallest useful set of questions,
- normally ask no more than 3–5 questions at once,
- prioritize questions by their impact on the project,
- provide a recommended default when that helps the user decide,
- do not ask the user to choose ordinary implementation details the agent can responsibly decide,
- and do not repeat questions already answered in the prompt, repository, or current conversation.

After receiving enough information to remove the blocking uncertainty, proceed autonomously. Do not turn the project into an unnecessary interview process.

## Design and implementation rules

For websites and landing pages:

- Design is part of the task, not decoration added after coding.
- Establish hierarchy, spacing, typography, responsive behavior, interaction states, and visual rhythm before considering a page finished.
- Reuse a coherent design system rather than styling sections independently.
- Mobile, tablet, and desktop behavior must be intentional.
- Accessibility, semantic HTML, keyboard use, reduced motion, image alt text, contrast, and form labeling are Definition of Done concerns.
- Avoid generic AI-looking UI: excessive cards, random gradients, weak hierarchy, gratuitous glassmorphism, and inconsistent spacing.
- Prefer simple, maintainable architecture over unnecessary abstraction.
- Do not add dependencies without a concrete benefit.

## Documentation is part of Definition of Done

After any material change, update only the documents affected by the change.

Use this mapping:

- Product goal/scope/audience changed → `PROJECT.md`
- Priority/milestone changed → `ROADMAP.md`
- Current continuation point changed → `HANDOFF.md`
- User-visible behavior/content shipped → `CHANGELOG.md`
- Architecture/dependency/data-flow changed → `docs/ARCHITECTURE.md`
- Visual/UX system changed → `docs/DESIGN.md`
- Copy/SEO/content changed → `docs/CONTENT.md`
- Acceptance/verification process changed → `docs/QUALITY.md`
- Durable tradeoff or irreversible decision → add/update an ADR in `docs/decisions/`

Do not create documentation churn for trivial formatting changes.

## Decision records

Create an ADR when a future agent would reasonably ask, "Why was this done this way?"

Examples:

- framework or rendering strategy
- CMS choice
- analytics platform
- authentication approach
- component architecture
- deployment provider
- major accessibility or performance tradeoff

Use `docs/decisions/0000-template.md`.

## Verification

Before declaring implementation work complete:

1. Run the applicable commands from `docs/QUALITY.md`.
2. Fix failures caused by the change.
3. Inspect the final diff for accidental edits, secrets, dead code, debug output, and documentation drift.
4. Report tests/checks actually run. Never claim a check passed if it was not run.

## Mandatory handoff protocol

Treat any user wording equivalent to these as a handoff trigger:

- "round af"
- "afslut sessionen"
- "lav handoff"
- "vi starter en ny chat"
- "gør klar til næste AI"
- "wrap up"

When triggered, do not start new feature work. Execute the `session-handoff` procedure in `.agents/skills/session-handoff/SKILL.md`.

At minimum:

1. Inspect git status/diff and recent commits.
2. Run the appropriate quality checks.
3. Update all relevant canonical docs.
4. Rewrite `HANDOFF.md` so it accurately describes the repository at this exact moment.
5. Archive a session note in `docs/sessions/`.
6. Rewrite `NEXT_CHAT_PROMPT.md` with a compact bootstrap prompt for the next agent.
7. State clearly whether there are uncommitted changes and whether verification passed.

The next agent must be able to continue without access to the previous chat.

## Tool-specific adapters

Tool-specific files are adapters only:

- `CLAUDE.md`
- `GEMINI.md`
- `.github/copilot-instructions.md`
- `.cursor/rules/00-project.mdc`
- `.claude/skills/` generated copies

Never place unique project truth in those files. Update canonical docs instead.
