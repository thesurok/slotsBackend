# Progress

## Where we are
Phase 4 — Monte Carlo reports RTP (~5.61) and hit frequency (~5.5%). Next: exact RTP (full cycle).

## Steps done
- Phase 0 — Setup (npm, TS 5.9.3, tsconfig, tsx, gitignore, ESLint, Prettier)
- Phase 1 — Domain types (`symbols`, `reels`, `paylines`, `paytable`, `config`)
- Phase 2 — RNG (`randomInt`, `cryptoRng`, `seededRng`, Vitest)
- Phase 3 — Spin engine (`generateGrid`, `evaluateWins`, `spin` + tests)
- 4.1 — Monte Carlo RTP
- 4.2 — Hit frequency in `monteCarlo` (`src/math/monteCarlo.ts`, `npm run monteCarlo`)

## Concepts learned
- ESM vs CommonJS; `devDependencies`; `tsc` emit vs `tsx`
- Type annotations; inference; `type` alias; `as const`; literal unions
- TS `typeof` (type position) vs JS `typeof`; indexed access `[number]`
- `import type`; tuples; `Record` / `Partial`; mapped types
- Structural typing (`Rng`); closures / factory functions; function types
- Type predicates (`n is MatchCount`); optional chaining `?.` vs non-null `!`
- Types = compile-time error prevention, not runtime security
- Test each module’s job separately (wins in `evaluateWins`, wiring in `spin`)
- Monte Carlo RTP ≈ totalWin / totalBet; hit frequency = (spins with win > 0) / spins

## Open questions
- Whether to scale `lineWins[].payout` by bet or keep them raw (only `totalWin` is scaled today)
- Vitest Windows “current suite” flake — clear `node_modules/.vite` / re-run if needed
- Current paytable is extremely rich (~5.6 RTP) — tune after exact RTP
- Wilds (`w`) do not substitute yet in `evaluateWins`

## Next step
4.3 — Exact RTP via full cycle over all reel stop combinations.
