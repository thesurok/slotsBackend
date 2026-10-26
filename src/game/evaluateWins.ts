import type { Config } from "./config.js";
import type { Grid } from "./generateGrid.js";
import { isMatchCount, type MatchCount } from "./paytable.js";
import type { SymbolId } from "./symbols.js";

export type LineWin = { paylineIndex: number, symbol: SymbolId, count: MatchCount, payout: number };
export type WinEvaluationResult = {
    lineWins: LineWin[],
    totalPayout: number
};

export const evaluateWins = (config: Config, grid: Grid): WinEvaluationResult => {
    const { paylines } = config;
    const result: WinEvaluationResult = {
        lineWins: [],
        totalPayout: 0
    }

    for (let i = 0; i < paylines.length; i++) {
        const payline = paylines[i];
        const firstSymbol: SymbolId = grid[0][payline[0]];
        const symbolPaytable = config.paytable[firstSymbol];
        const streak = [firstSymbol];

        if (!symbolPaytable) {
            continue;
        }

        for (let j = 1; j < payline.length; j++) {
            const paylineRow = payline[j];
            const nextSymbol = grid[j][paylineRow];
            if (nextSymbol === firstSymbol) {
                streak.push(nextSymbol);
            } else {
                break;
            }
        }

        if (isMatchCount(streak.length)) {
            const payout = symbolPaytable[streak.length];
            const lineWin: LineWin = {
                paylineIndex: i,
                symbol: firstSymbol,
                count: streak.length,
                payout
            }
            result.lineWins.push(lineWin);
            result.totalPayout += payout;
        }
    }

    return result;
}

