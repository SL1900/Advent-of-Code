const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(",")
  .map((e) => +e);

let max = Math.max(...input);

let results = [];
for (let i = 0; i < max; i++) {
  let total_fuel = 0;
  for (let crab of input) {
    let dx = Math.abs(i - crab);
    total_fuel += dx;
  }
  results[i] = total_fuel;
}

console.log(Math.min(...results));
