import { generateGrid, type Grid } from "./generateGrid.js";
import { evaluateWins, type WinEvaluationResult, type LineWin } from "./evaluateWins.js";
import type { Rng } from "../rng/types.js";
import type { Config } from "./config.js";

export type SpinResult = {
    grid: Grid,
    lineWins: LineWin[],
    totalWin: number,
    bet: number
}

export function spin(config: Config, rng: Rng, bet: number): SpinResult {
    const grid: Grid = generateGrid(config, rng);
    const winEvaluation: WinEvaluationResult = evaluateWins(config, grid);

    const result: SpinResult = {
        grid,
        lineWins: winEvaluation.lineWins,
        totalWin: winEvaluation.totalPayout * bet,
        bet
    }

    return result;
}