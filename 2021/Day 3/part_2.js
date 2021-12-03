const input = require("./input.json");

function find_value(rule) {
  let next = [...input];

  for (let i = 0; i < next[0].length; i++) {
    let zero = [];
    let one = [];

    for (let line of next) {
      if (line[i] == 0) zero.push(line);
      else one.push(line);
    }

    let crytiria = one.length / next.length < 0.5;
    if (rule) crytiria = one.length / next.length >= 0.5;

    if (crytiria) next = one;
    else next = zero;

    if (next.length == 1) {
      return parseInt(next, 2);
    }
  }
}

let oxygen = find_value(1);
let co2 = find_value(0);

console.log(`Oxygen:${oxygen}`);
console.log(`CO2:${co2}`);
console.log(oxygen * co2);
