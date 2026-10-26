# Progress

## Where we are
Phase 3 — `evaluateWins` implemented; needs unit tests with hand-built grids.

## Steps done
- Phase 0–2 — Setup, domain types, RNG
- 3.1 — `generateGrid`
- 3.2 — `evaluateWins` (LTR, MatchCount guard) — pending tests

## Concepts learned
- (prior) + narrowing / type predicates (`n is MatchCount`)
- Runtime values → types (`MATCH_COUNTS` → `MatchCount`); types don’t exist at runtime

## Open questions
- (none)

## Next step
3.2b — Tests for `evaluateWins`; then 3.3 spin() wrapper (grid + wins).
