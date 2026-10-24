export const ALLOWED_ROW_INDICES = [0, 1, 2] as const;
export type RowIndex = (typeof ALLOWED_ROW_INDICES)[number];
export type Payline = readonly [RowIndex, RowIndex, RowIndex, RowIndex, RowIndex];

export const PAYLINES: Payline[] = [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2],
    [0, 1, 2, 1, 0],
    [0, 1, 1, 2, 2]
];