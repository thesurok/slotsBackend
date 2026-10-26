import type { SymbolId } from "./symbols.js";

export const MATCH_COUNTS = [3, 4, 5] as const;
export type MatchCount = (typeof MATCH_COUNTS)[number];

export type PaytableEntry = Record<MatchCount, number>;

export const PAYTABLE: Partial<Record<SymbolId, PaytableEntry>> = {
    "l1": { 3: 10, 4: 90, 5: 950 },
    "l2": { 3: 12, 4: 110, 5: 1100 },
    "l3": { 3: 9, 4: 95, 5: 1005 },
    "l4": { 3: 14, 4: 105, 5: 980 },
    "l5": { 3: 11, 4: 102, 5: 1040 },
    "l6": { 3: 13, 4: 97, 5: 990 },
    "l7": { 3: 8, 4: 108, 5: 970 },
    "h1": { 3: 120, 4: 950, 5: 10000 },
    "h2": { 3: 100, 4: 1100, 5: 9000 },
    "h3": { 3: 130, 4: 1020, 5: 11000 },
}

export function isMatchCount(n: number): n is MatchCount {
    return (MATCH_COUNTS as readonly number[]).includes(n);
}