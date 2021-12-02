const input = require("./input.json");

let pos = [0, 0];
let width = input[0].length;

let met_trees = 0;

for (;;) {
  //
  pos[0] += 3;
  pos[1]++;

  if (pos[0] >= width) pos[0] -= width;

  if (input[pos[1]][pos[0]] == "#") met_trees++;

  if (pos[1] == input.length - 1) break;
}

console.log(met_trees);
