import { REEL_STRIPS } from "./reels.js";
import { PAYLINES } from "./paylines.js";
import { PAYTABLE } from "./paytable.js";

export const CONFIG = {
    reelCount: 5,
    rowCount: 3,
    reels: REEL_STRIPS,
    paylines: PAYLINES,
    paytable: PAYTABLE
} as const;

export type Config = typeof CONFIG;