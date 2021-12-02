const input = require("./input.json");

let ups = 0;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i] < input[i + 1]) ups++;
}

console.log(ups);
