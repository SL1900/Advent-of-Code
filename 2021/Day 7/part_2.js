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
    let crab_fuel = 0;
    for (let j = 0; j < dx; j++) {
      crab_fuel += j + 1;
    }
    total_fuel += crab_fuel;
  }
  results[i] = total_fuel;
}

console.log(Math.min(...results));
