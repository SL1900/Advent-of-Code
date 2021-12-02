const input = require("./input.json");

let width = input[0].length;

let trees_met_per_slope = [];

function calculate_trees_met(right, down) {
  let trees_met = 0;
  let pos = [0, 0];

  for (;;) {
    //
    pos[0] += right;
    pos[1] += down;

    if (pos[0] >= width) pos[0] -= width;

    if (input[pos[1]][pos[0]] == "#") trees_met++;

    if (pos[1] == input.length - 1) break;
  }

  trees_met_per_slope.push(trees_met);
}

calculate_trees_met(1, 1);
calculate_trees_met(3, 1);
calculate_trees_met(5, 1);
calculate_trees_met(7, 1);
calculate_trees_met(1, 2);

console.log(
  trees_met_per_slope.reduce((a, b) => {
    return a * b;
  })
);
