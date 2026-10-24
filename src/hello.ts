import { seededRng } from "./rng/seededRng.js";

const rng = seededRng(123);

console.log(rng.randomInt(0, 100));
console.log(rng.randomInt(0, 100));
console.log(rng.randomInt(0, 100));