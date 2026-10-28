import { CONFIG, type Config } from "../game/config.js";
import { generateGrid } from "../game/generateGrid.js";
import type { Rng } from "../rng/types.js";

export function exactRtp(config: Config, bet: number): number {
    for (let i = 0; i < config.reelCount; i++) {
        const reel = config.reels[i];
        for (let r = 0; r < reel.length; r++) {

        }

    }

    return 0;
}

function fakeRng(stops: number[]): Rng {
    let i = 0;
    return {
        randomInt: () => {
            return stops[i++];
        }
    }
}

exactRtp(CONFIG, 1);