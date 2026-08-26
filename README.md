# AI-First Web Project Template

A model-neutral repository structure for websites and landing pages designed and implemented primarily by AI agents, with a human acting as project director and decision-maker.

## Core principle

The human directs the project. The AI handles the project setup, design, implementation, documentation, verification, and handoff work.

You should not have to manually fill project-management Markdown files before work can begin. Describe the project in ordinary language; the AI should translate that brief into the repository's canonical project memory and keep it updated as the project evolves.

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

### 1. Create a new repository from this template

Create or copy this template into the repository that will contain the new website or landing page.

You do **not** need to fill in `PROJECT.md`, `ROADMAP.md`, or the files in `docs/` yourself. `[TODO]` markers are intentionally left for the AI to resolve from your project description, existing assets, repository state, and any necessary follow-up questions.

### 2. Start your first AI chat with this prompt

Copy the prompt below into your preferred coding AI or LLM, then replace the final project-description section with your own brief. You can write the brief naturally; it does not need to follow a form.

```text
You are the lead designer and developer for this project. I am the project director.

Your job is to take responsibility for turning my project description into a designed, coded, documented, and verified website or landing page. Do not make me manually maintain the project Markdown files or choose ordinary implementation details that you can responsibly decide yourself.

Before substantial work:

1. Read and follow AGENTS.md.
2. Inspect the repository and current git state.
3. Run the project-onboarding procedure in .agents/skills/project-onboarding/SKILL.md.
4. Use my project description below to populate and maintain PROJECT.md, ROADMAP.md, HANDOFF.md, and the relevant files in docs/.
5. Replace [TODO] markers whenever the answer can be inferred responsibly from my brief, the repository, or strong conventional defaults.
6. If important information is genuinely blocking, ask only the smallest useful set of questions, normally no more than 3–5 at once. Do not ask about details you can decide yourself or safely defer.
7. For non-blocking unknowns, keep [TODO] or document a sensible reversible assumption and continue.
8. After onboarding, briefly summarize your understanding of the project, identify any assumptions you made, and continue with the highest-value next step unless a blocking decision requires my input.

Treat me as the director: bring me decisions that materially affect purpose, audience, conversion, scope, brand direction, major cost, legal/privacy matters, or difficult-to-reverse choices. Handle the rest autonomously.

PROJECT DESCRIPTION:

[Describe what you want to build here. Write as much or as little as you naturally know: what the site is for, who it is for, what it should feel like, useful references, content/assets you already have, and anything you definitely want or do not want.]
```

### 3. Describe the project — not the documentation

A useful project description can be as simple as:

```text
I want a portfolio website for a sculptor. The work should be the main focus, with large images and a restrained, editorial feeling. The audience is galleries, collectors, curators, and people interested in contemporary sculpture. The main conversion is to view the work and then make contact.

I want the site to feel serious, tactile, quiet, and slightly raw rather than like a generic creative-agency template. Avoid excessive cards, gradients, glass effects, and anything that feels obviously AI-generated.

The site should have a strong homepage, a works/projects section, an about page, and contact information. I have photography and text that can be added as the project develops. Choose a sensible modern technical stack unless there is a reason I should be involved in that decision.
```

That is enough to start. The AI should extract the product brief, fill the project memory, decide ordinary implementation details, and ask only about genuinely consequential missing information.

### 4. Direct the work normally

Once onboarding is complete, work conversationally. Give direction such as:

- "Make the hero more monumental and less commercial."
- "I prefer the second direction. Continue with that."
- "The typography feels too clean; make it more editorial."
- "Build the projects page next."

The AI should implement the direction and update the relevant project documentation as part of the work.

### 5. End a session with a handoff

When you want to stop a chat and continue with another AI or a fresh context window, say something equivalent to:

```text
Let's wrap up this session and prepare a handoff for a new chat.
```

The agent must then run the handoff protocol in `AGENTS.md` and `.agents/skills/session-handoff/SKILL.md`, update the canonical project memory, record verification status, and rewrite `NEXT_CHAT_PROMPT.md`.

### 6. Start the next chat

Copy the contents of `NEXT_CHAT_PROMPT.md` into the new chat. The next AI should be able to continue from repository state without needing the previous conversation.

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
