
export const SYMBOLS = [
    "l1",
    "l2",
    "l3",
    "l4",
    "l5",
    "l6",
    "l7",
    "h1",
    "h2",
    "h3",
    "w",
    "b"
] as const;

export type SymbolId = (typeof SYMBOLS)[number];
