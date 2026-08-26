---
name: quality-gate
description: Verify a website or landing-page change before it is declared complete. Use after implementation, before handoff, before release, or when reviewing a page for build, lint, type, functional, responsive, accessibility, visual, SEO, and performance regressions.
---

# Quality Gate

## Procedure

1. Read `docs/QUALITY.md`.
2. Determine which automated checks exist in the repository.
3. Run the applicable checks; never report checks that were not actually run.
4. Fix failures caused by the current change when feasible.
5. Review the relevant user journey manually or through available browser tooling.
6. Check responsive behavior at representative viewport widths.
7. Check keyboard/focus/semantic accessibility.
8. Check console/runtime errors.
9. Check final content, metadata, links, images, and forms.
10. Inspect the final diff for:
    - accidental generated files
    - secrets
    - debug code
    - dead code
    - inconsistent styling
    - documentation drift
11. Record verification status in `HANDOFF.md`.

## Failure handling

If a check cannot be run, record exactly why and what remains unverified. Never convert "not run" into "passed."
