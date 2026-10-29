import { CONFIG, type Config } from "../game/config.js";
import { spin } from "../game/spin.js";
import type { Rng } from "../rng/types.js";
import type { PayoutProfile } from "./monteCarlo.js";

export function exactRtp(config: Config, bet: number): PayoutProfile {
    let totalBets = 0;
    let totalWins = 0;
    let spinsWithPayout = 0;
    let spins = 0
    for (let s0 = 0; s0 < config.reels[0].length; s0++) {
        for (let s1 = 0; s1 < config.reels[1].length; s1++) {
            for (let s2 = 0; s2 < config.reels[2].length; s2++) {
                for (let s3 = 0; s3 < config.reels[3].length; s3++) {
                    for (let s4 = 0; s4 < config.reels[4].length; s4++) {
                        const stops = [s0, s1, s2, s3, s4];
                        const rng = fakeRng(stops);
                        const { totalWin, bet: betResult } = spin(config, rng, bet);
                        totalWins += totalWin;
                        totalBets += betResult;
                        if (totalWin > 0) {
                            spinsWithPayout++;
                        }
                        spins++;
                    }
                }

            }
        }

    }

    return {
        rtp: totalWins / totalBets,
        hitFrequency: spinsWithPayout / spins
    }
}

function fakeRng(stops: number[]): Rng {
    let i = 0;
    return {
        randomInt: () => {
            return stops[i++];
        }
    }
}

console.log(exactRtp(CONFIG, 2));