const input = require("./input.json");

let next = [...input];

let oxygen;

for (let i = 0; i < next[0].length; i++) {
  let zero = [];
  let one = [];

  for (let line of next) {
    if (line[i] == 0) zero.push(line);
    else one.push(line);
  }

  if (one.length / next.length >= 0.5) next = one;
  else next = zero;

  if (next.length == 1) {
    oxygen = parseInt(next, 2);
    console.log(`Oxygen:${oxygen}`);
    break;
  }
}

next = [...input];

let co2;

for (let i = 0; i < next[0].length; i++) {
  let zero = [];
  let one = [];

  for (let line of next) {
    if (line[i] == 0) zero.push(line);
    else one.push(line);
  }

  if (zero.length / next.length <= 0.5) next = zero;
  else next = one;

  if (next.length == 1) {
    co2 = parseInt(next, 2);
    console.log(`CO2:${co2}`);
    break;
  }
}

console.log(oxygen * co2);
