<!-- GENERATED from .agents/skills. DO NOT EDIT THIS COPY DIRECTLY. -->

---
name: session-handoff
description: Close an AI coding/design session and prepare a repository for a different chat or agent to continue with no hidden context. Use when the user says to wrap up, hand off, start a new chat, prepare the next AI, end the session, or equivalent wording.
---

# Session Handoff

## Objective

Move all durable context out of chat history and into the repository.

Do not begin new feature work after this skill is triggered.

## Procedure

### 1. Inspect reality

Collect:

- current branch
- HEAD/recent commits
- `git status`
- relevant diff summary
- current build/test status
- unfinished work

### 2. Verify

Run the applicable `quality-gate` checks for the work completed in the session.

Do not hide failures or unverified areas.

### 3. Update canonical documentation

Review changes made during the session and update as applicable:

- `PROJECT.md`
- `ROADMAP.md`
- `CHANGELOG.md`
- `docs/ARCHITECTURE.md`
- `docs/DESIGN.md`
- `docs/CONTENT.md`
- `docs/QUALITY.md`
- `docs/decisions/`

Do not modify unrelated docs just to create activity.

### 4. Rewrite HANDOFF.md

`HANDOFF.md` must describe the repository as it exists now, not the plan from the beginning of the session.

It must include:

- timestamp/timezone
- branch and HEAD
- current objective
- recently completed work
- actual current state
- exact next best action
- user decisions still needed
- blockers/known issues
- verification results
- working-tree state
- useful resume commands

### 5. Archive the session

Create:

```text
docs/sessions/YYYY-MM-DD-HHMM.md
```

Include a concise snapshot of:

- session goal
- completed work
- decisions
- verification
- unresolved items
- next action

Do not copy the entire chat.

### 6. Rewrite NEXT_CHAT_PROMPT.md

Create a compact prompt that tells the next agent to:

1. read `AGENTS.md`
2. read `PROJECT.md`, `HANDOFF.md`, `ROADMAP.md`
3. inspect git state
4. load only relevant deeper docs
5. continue from `HANDOFF.md`
6. treat repository state as authoritative over assumptions from prior chat

Include the current objective and next action, but do not embed large amounts of project documentation in the prompt.

### 7. Final handoff report to the user

State:

- what was completed
- verification status
- whether the working tree is clean
- the exact next step
- that `NEXT_CHAT_PROMPT.md` is ready

The handoff is complete only when another agent can continue without prior chat context.
