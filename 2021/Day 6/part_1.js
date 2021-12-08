const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split(",")
  .map((e) => +e);

for (let i = 0; i < 80; i++) {
  for (let f_i = 0; f_i < input.length; f_i++) {
    if (input[f_i] == 0) {
      input[f_i] = 7;
      input.push(9);
    }
    input[f_i]--;
  }
}

console.log(input.length);
