import type { SymbolId } from "./symbols.js";
import { type Config } from "./config.js";
import type { Rng } from "../rng/types.js";

export type Grid = SymbolId[][];
export function generateGrid(config: Config, rng: Rng): Grid {
    const result: Grid = [];
    for (let reelIndex = 0; reelIndex < config.reelCount; reelIndex++) {
        const reel = config.reels[reelIndex];
        const stopIndex = rng.randomInt(0, reel.length);

        const sequence: SymbolId[] = [reel[stopIndex]];
        for (let row = 1; row < config.rowCount; row++) {
            sequence.push(reel[(stopIndex + row) % reel.length]);
        }
        result.push(sequence);
    }
    return result;
}
