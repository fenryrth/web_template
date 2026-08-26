# AI-First Web Project Template

A model-neutral repository structure for websites and landing pages designed and implemented primarily by AI agents, with a human acting as director and decision-maker.

## Core principle

Project knowledge has one canonical home. Tool-specific files such as `CLAUDE.md`, `GEMINI.md`, Cursor rules, or Copilot instructions are adapters only. They must not become separate sources of truth.

The repository separates:

- **Why** — `PROJECT.md`
- **How agents work** — `AGENTS.md`
- **Where the project is now** — `HANDOFF.md`
- **Where it is going** — `ROADMAP.md`
- **What changed** — `CHANGELOG.md`
- **How it is designed** — `docs/DESIGN.md`
- **How it is built** — `docs/ARCHITECTURE.md`
- **What it says** — `docs/CONTENT.md`
- **How quality is verified** — `docs/QUALITY.md`
- **Why durable technical/product decisions were made** — `docs/decisions/`
- **Reusable AI procedures** — `.agents/skills/`

## First use

1. Copy this template into a new repository.
2. Fill in `PROJECT.md`.
3. Tell the first AI agent to read `AGENTS.md` and run the project-onboarding procedure.
4. Let the agent update the remaining docs as it learns and builds.
5. When you say that the session should be wrapped up or moved to a new chat, the agent must run the handoff protocol in `AGENTS.md` and `.agents/skills/session-handoff/SKILL.md`.
6. Start the next chat with the contents of `NEXT_CHAT_PROMPT.md`.

## Rule against documentation drift

Never duplicate project facts across tool-specific adapter files. If a rule or fact applies to the project, put it in the canonical project docs and point adapters at those docs.

## Skills

Canonical skills live in `.agents/skills/`.

Claude Code uses project skills from `.claude/skills/`, so this template includes `scripts/sync-agent-skills.mjs` to generate Claude-compatible copies. Generated Claude skill files must not be edited directly.

Run:

```bash
node scripts/sync-agent-skills.mjs
```

after changing canonical skills.

## Recommended working style

Use short-lived chats and durable repository state. Chat history is convenient context; repository documentation is the actual memory.
