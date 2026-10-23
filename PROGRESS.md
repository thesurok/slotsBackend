# Progress

## Where we are
Phase 1 — Domain types. Symbols done; next: reel strips.

## Steps done
- 0.1–0.6 — Project setup (npm, TS 5.9.3, tsconfig, tsx, gitignore, ESLint, Prettier)
- 1.1 — `src/game/symbols.ts`: `SYMBOLS` + `SymbolId`

## Concepts learned
- ESM vs CommonJS: `"type": "module"` → `import`/`export`; without it → `require`
- `devDependencies` vs `dependencies`: build/check tools stay in dev; runtime needs compiled JS
- `tsc` typechecks then **emits** `.js` into `outDir` (`dist`); Node runs `dist`, not `src`
- `tsconfig.json`: options under `compilerOptions`; `include` top-level
- Type annotations: `name: string`; params matter most under `strict`
- `tsx`: run `.ts` in development without a separate emit step
- Type **inference**: return type comes from what you `return`, not from the parameter type
- ESLint **flat config** (`eslint.config.js`): export an array of config objects; unmatched files are ignored
- Peer dependencies: tools declare which TypeScript versions they support
- Prettier owns formatting; ESLint owns code-quality rules
- `as const` → literal types instead of widened `string`
- `type` alias: compile-time name for a type (erased at runtime)
- TS `typeof` (type position) vs JS `typeof` (runtime)
- Indexed access `(typeof ARR)[number]` → union of element types
- `export type` / named exports for sharing types + values

## Open questions
- (none)

## Next step
1.2 — Define reel strips in `src/game/reels.ts` (arrays of `SymbolId`).
