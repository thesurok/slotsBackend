# Progress

## Where we are
Phase 2 — RNG. `randomInt` wraps unbiased `node:crypto.randomInt`.

## Steps done
- Phase 0 — Setup
- Phase 1 — Domain types
- 2.1 — `src/rng/randomInt.ts` via `crypto.randomInt` (unbiased); `@types/node` + `types: ["node"]`

## Concepts learned
- Prior Phase 0–1 concepts
- `@types/node` = declaration files for Node APIs
- `types: ["node"]` in tsconfig for IDE + tsc
- `crypto.randomInt(min, max)` = half-open `[min, max)`, CSPRNG, no modulo bias

## Open questions
- (none)

## Next step
2.2 — Seedable RNG for tests (injectable `Rng` type).
