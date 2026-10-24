import type { Rng } from "./types.js";

function mulberry32(a: number): () => number {
    return function () {
        let t = a += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
}

export function seededRng(seed: number): Rng {
    const nextFloat = mulberry32(seed);
    return {
        randomInt: (min: number, max: number) => {
            return Math.floor(nextFloat() * (max - min) + min);
        }
    }
}

