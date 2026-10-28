import { test, expect } from "vitest";
import { evaluateWins } from "./evaluateWins.js";
import type { Grid } from "./generateGrid.js";
import { CONFIG } from "./config.js";

test("evaluateWins on a winning middle row grid of l1 symbols", () => {
    const grid: Grid = [
        ["w", "l1", "l3"],
        ["l2", "l1", "h1"],
        ["l3", "l1", "h3"],
        ["l4", "l1", "h2"],
        ["l5", "l1", "h1"]
    ];
    const winsEvaluation = evaluateWins(CONFIG, grid);
    const l1Pays = CONFIG.paytable.l1;
    expect(l1Pays).toBeDefined();
    expect(winsEvaluation.lineWins.length).toBe(1);
    expect(winsEvaluation.lineWins[0].payout).toBe(l1Pays![5]);
    expect(winsEvaluation.totalPayout).toBe(l1Pays![5]);
});

test("evaluateWins no matches, 0 total payout", () => {
    const grid: Grid = [
        ["l1", "l2", "l3"],
        ["l2", "l1", "l1"],
        ["l3", "l3", "h3"],
        ["l4", "l1", "h2"],
        ["l5", "l1", "h1"]
    ];
    const winsEvaluation = evaluateWins(CONFIG, grid);
    expect(winsEvaluation.lineWins.length).toBe(0);
    expect(winsEvaluation.totalPayout).toBe(0);
});

test("evaluateWins right side only match, 0 total payout", () => {
    const grid: Grid = [
        ["l1", "l2", "l3"],
        ["l2", "l3", "l1"],
        ["l3", "l1", "h3"],
        ["l4", "l1", "h2"],
        ["l5", "l1", "h1"]
    ];
    const winsEvaluation = evaluateWins(CONFIG, grid);
    expect(winsEvaluation.lineWins.length).toBe(0);
    expect(winsEvaluation.totalPayout).toBe(0);
});