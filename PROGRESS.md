# Progress

## Where we are
Phase 3 — Grid generation done. Next: evaluate paylines / payouts.

## Steps done
- Phase 0–2 — Setup, domain types, RNG + Vitest
- 3.1 — `generateGrid(config, rng)` + tests (shape, determinism)

## Concepts learned
- (prior) + grid as spin snapshot; stop = top row; wrap with `% strip.length`
- Don’t leave compiled `.js` under `src/` when using ESM + Vitest

## Open questions
- Vitest Windows “current suite” flake — clear `node_modules/.vite` / re-run

## Next step
3.2 — Evaluate wins on a grid (paylines + paytable).
