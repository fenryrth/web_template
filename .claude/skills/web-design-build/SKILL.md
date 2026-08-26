<!-- GENERATED from .agents/skills. DO NOT EDIT THIS COPY DIRECTLY. -->

---
name: web-design-build
description: Design and implement a production-quality website or landing page from a project brief. Use for new pages, major sections, redesigns, responsive UI implementation, or end-to-end web feature work where visual design and code must be developed together.
---

# Web Design + Build

## Principle

Treat design and implementation as one workflow. Do not code a generic wireframe first and hope styling will fix it later.

## Workflow

### 1. Understand the job

Read the relevant product, design, content, architecture, and handoff docs.

Identify:

- visitor intent
- primary conversion
- content hierarchy
- required interaction
- art direction
- constraints

### 2. Establish the visual system

Before expanding into many sections, decide the relevant:

- type hierarchy
- spacing rhythm
- grid/alignment
- color roles
- image treatment
- component language
- responsive principles
- motion rules

Update `docs/DESIGN.md` if the system materially changes.

### 3. Design the page hierarchy

Prioritize:

1. immediate comprehension
2. trust/interest
3. supporting evidence/content
4. clear conversion path

Avoid repetitive card grids unless they genuinely fit the information architecture.

### 4. Implement

- Follow existing architecture and component patterns.
- Prefer semantic HTML.
- Keep components purposeful and maintainable.
- Avoid dependencies that solve trivial problems.
- Build responsive behavior intentionally rather than relying on accidental wrapping.
- Include hover, focus, disabled, loading, and error states where relevant.

### 5. Content integration

Use `docs/CONTENT.md` as the content source of truth.

Do not invent factual claims, testimonials, credentials, pricing, legal terms, or business promises.

### 6. Verify

Run the `quality-gate` procedure.

### 7. Document

Update only the canonical docs affected by the work, plus `HANDOFF.md` when the continuation point changes materially.
