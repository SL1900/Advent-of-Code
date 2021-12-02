const input = require("./input.json");

let ups = 0;

for (let i = 0; i < input.length - 3; i++) {
  let a_sum = input[i] + input[i + 1] + input[i + 2];
  let b_sum = input[i + 1] + input[i + 2] + input[i + 3];

  if (a_sum < b_sum) ups++;
}

console.log(ups);
