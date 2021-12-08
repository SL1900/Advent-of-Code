const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(",")
  .map((e) => +e);

let MAX_AGE = 8;
let NUMBER_OF_DAYS = 256;

let fish = {};
for (let i = 0; i < MAX_AGE + 2; i++) {
  fish[i] = 0;
}

for (let i of input) {
  fish[i]++;
}

for (let i = 0; i < NUMBER_OF_DAYS; i++) {
  for (let key of Object.keys(fish)) {
    if (key == 0) {
      fish[7] += fish[0];
      fish[9] += fish[0];
      fish[0] = 0;
    } else {
      fish[key - 1] += fish[key];
      fish[key] = 0;
    }
  }
}

let sum = 0;
for (let value of Object.values(fish)) {
  sum += value;
}

console.log(sum);
