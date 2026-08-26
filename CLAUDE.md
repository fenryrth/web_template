# Claude Code adapter

The canonical project instructions are in `AGENTS.md`.

Before substantial work, read and follow `AGENTS.md`, then load the canonical project documents it references.

Do not store unique project rules or project state in this file.

Canonical reusable skills live in `.agents/skills/`. Claude-compatible generated copies live in `.claude/skills/`; regenerate them with:

```bash
node scripts/sync-agent-skills.mjs
```
