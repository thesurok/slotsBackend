import { test, expect } from "vitest";
import { seededRng } from "../rng/seededRng.js";
import { spin } from "./spin.js";
import { CONFIG } from "./config.js";

test("Same bet identical SpinResult", () => {
    const spin1 = spin(CONFIG, seededRng(1234), 100);
    const spin2 = spin(CONFIG, seededRng(1234), 100);
    expect(spin1).toEqual(spin2);
});
