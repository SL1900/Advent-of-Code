const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(",")
  .map((e) => +e);

let fish = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
};

for (let i of input) {
  fish[i]++;
}
for (let i = 0; i < 256; i++) {
  for (let [key, value] of Object.entries(fish)) {
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
for (let [key, value] of Object.entries(fish)) {
  sum += value;
}

console.log(sum);
