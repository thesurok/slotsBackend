import { expect, test } from "vitest";
import { seededRng } from "../rng/seededRng.js";
import { generateGrid } from "./generateGrid.js";
import { CONFIG } from "./config.js";
import { SymbolId } from "./symbols.js";

test("Same seed - two identical grids", () => {
    const seed = 12345;
    const rng1 = seededRng(seed);
    const rng2 = seededRng(seed);
    const grid1 = generateGrid(CONFIG, rng1);
    const grid2 = generateGrid(CONFIG, rng2);
    expect(grid1).toEqual(grid2);
});

test("Valid grid shape according to config", () => {
    const seed = 12345;
    const rng = seededRng(seed);
    const grid = generateGrid(CONFIG, rng);
    expect(grid.length).toBe(CONFIG.reelCount);
    for (let i = 0; i < CONFIG.reelCount; i++) {
        const row = grid[i];
        expect(row.length).toBe(CONFIG.rowCount);
    }
});

test("Every cell is SymbolId", () => {
    const seed = 12345;
    const rng = seededRng(seed);
    const grid = generateGrid(CONFIG, rng);
    for (let reel = 0; reel < grid.length; reel++) {
        const row = grid[reel];
        for (let symbolIndex = 0; symbolIndex < row.length; symbolIndex++) {
            const symbol: SymbolId = row[symbolIndex];
            expect(CONFIG.reels[reel].includes(symbol)).toBe(true);
        }
    }
});

