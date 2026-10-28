import { CONFIG, type Config } from "../game/config.js";
import { spin } from "../game/spin.js";
import { seededRng } from "../rng/seededRng.js";
import type { Rng } from "../rng/types.js";

export type MonteCarloResult = {
    rtp: number,
    hitFrequency: number
}

export function monteCarlo(
    config: Config,
    rng: Rng,
    spins: number,
    bet: number
): MonteCarloResult {
    let totalWins = 0;
    let totalBets = 0;
    let spinsWithPayout = 0;
    for (let i = 0; i < spins; i++) {
        const { totalWin, bet: betResult } = spin(config, rng, bet);
        totalWins += totalWin;
        totalBets += betResult;
        if (totalWin > 0) {
            spinsWithPayout++;
        }
    }

    return {
        rtp: totalWins / totalBets,
        hitFrequency: spinsWithPayout / spins
    }
}

console.log("MontecarloSimulationResult " + JSON.stringify(monteCarlo(CONFIG, seededRng(1), 1000000, 1)));