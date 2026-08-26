# Quality Gates

A feature is not complete merely because it renders.

Adapt commands to the chosen stack and keep this file current.

## Automated checks

```bash
# Example placeholders — replace with real project commands.
# npm run lint
# npm run typecheck
# npm test
# npm run build
```

## Functional QA

- [ ] Primary navigation works.
- [ ] All internal/external links intended for release work.
- [ ] Forms validate correctly and show success/error states.
- [ ] No production-blocking console errors.
- [ ] Empty/loading/error states are intentional where applicable.

## Responsive QA

Check at minimum:

- [ ] Narrow mobile
- [ ] Large mobile
- [ ] Tablet
- [ ] Laptop
- [ ] Wide desktop

Look for:

- overflow
- broken line lengths
- awkward stacking
- unusable touch targets
- clipped imagery
- unexpected sticky/fixed behavior

## Accessibility QA

- [ ] Semantic landmarks/headings are coherent.
- [ ] Keyboard navigation is usable.
- [ ] Focus state is visible.
- [ ] Forms have programmatic labels and useful errors.
- [ ] Images have appropriate alt behavior.
- [ ] Color contrast is acceptable.
- [ ] Reduced-motion preference is respected.
- [ ] Interactive elements use correct semantics.

## Visual QA

- [ ] Typography matches `docs/DESIGN.md`.
- [ ] Spacing rhythm is consistent.
- [ ] Component states are coherent.
- [ ] No placeholder/demo assets remain unintentionally.
- [ ] Page hierarchy is clear without relying on decorative effects.

## Performance

Targets should be project-specific. For public marketing sites, investigate regressions in:

- image weight
- font loading
- unused JavaScript
- layout shift
- render-blocking resources

## SEO / metadata

- [ ] Unique title/description where appropriate.
- [ ] Canonical URL strategy is correct.
- [ ] Heading structure is sensible.
- [ ] Social metadata is configured if required.
- [ ] Sitemap/robots behavior matches project intent.

## Release gate

Before production release, record the actual checks run in `HANDOFF.md`.
