import { test, expect } from "vitest";
import { seededRng } from "./seededRng.js";
import type { Rng } from "./types.js";

test("Two different seeds don't produce identical sequences", () => {
    const drawsCount = 1000;
    const rng1: Rng = seededRng(1);
    const rng2: Rng = seededRng(2);
    let isIdenticalSequence: boolean = true;

    for (let i = 0; i < drawsCount; i++) {
        const randomInt1 = rng1.randomInt(0, 10);
        const randomInt2 = rng2.randomInt(0, 10);
        if (randomInt1 !== randomInt2) {
            isIdenticalSequence = false;
            break;
        }
    }

    expect(isIdenticalSequence).toBe(false);
});


test("Two seededRng calls produce the same output with the same seed", () => {
    const seed = 123456;
    const rng1: Rng = seededRng(seed);
    const rng2: Rng = seededRng(seed);
    const drawsCount = 1000;
    for (let i = 0; i < drawsCount; i++) {
        expect(rng1.randomInt(0, 10)).toEqual(rng2.randomInt(0, 10));
    }
});

test("Exclusive max seeded rng", () => {
    const drawsCount = 1000;
    const rng: Rng = seededRng(123456);
    for (let i = 0; i < drawsCount; i++) {
        const randomInt = rng.randomInt(0, 3);
        expect(randomInt).toBeLessThan(3);
        expect(randomInt).toBeGreaterThanOrEqual(0);
    }
});





