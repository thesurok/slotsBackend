import type { SymbolId } from "./symbols.js";

export type MatchCount = 3 | 4 | 5;

export type PaytableEntry = Record<MatchCount, number>;

export const PAYTABLE: Partial<Record<SymbolId, PaytableEntry>> = {
    "l1": { 3: 10, 4: 100, 5: 1000 },
    "l2": { 3: 10, 4: 100, 5: 1000 },
    "l3": { 3: 10, 4: 100, 5: 1000 },
    "l4": { 3: 10, 4: 100, 5: 1000 },
    "l5": { 3: 10, 4: 100, 5: 1000 },
    "l6": { 3: 10, 4: 100, 5: 1000 },
    "l7": { 3: 10, 4: 100, 5: 1000 },
    "h1": { 3: 100, 4: 1000, 5: 10000 },
    "h2": { 3: 100, 4: 1000, 5: 10000 },
    "h3": { 3: 100, 4: 1000, 5: 10000 },
}