import { randomInt as cryptoRandomInt } from "node:crypto";

export function randomInt(min: number, max: number): number {
    return cryptoRandomInt(min, max);
}