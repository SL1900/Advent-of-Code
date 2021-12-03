const input = require("./input.json");

let gamma = [];

for (let i = 0; i < input[0].length; i++) {
  gamma[i] = 0;
}

for (let line of input) {
  for (let i = 0; i < line.length; i++) {
    gamma[i] += +line[i];
  }
}

gamma = gamma.map((e) => (e / input.length >= 0.5 ? 1 : 0));
let epsilon = gamma.map((e) => (e == 0 ? 1 : 0));

gamma = parseInt(gamma.join(""), 2);
epsilon = parseInt(epsilon.join(""), 2);
console.log(gamma * epsilon);
