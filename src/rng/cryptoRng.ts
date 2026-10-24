import type { Rng } from "./types.js";
import { randomInt } from "./randomInt.js";

export const cryptoRng: Rng = {
    randomInt: (min: number, max: number) => {
        return randomInt(min, max);
    }
}