const fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .split("\r\n")
  .map((e) => Array.from(e));

let height = input.length;
let width = input[0].length;

let lows = [];

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    let top = input[i - 1] ? input[i - 1][j] : null;
    let bottom = input[i + 1] ? input[i + 1][j] : null;
    let left = input[i][j - 1] ? input[i][j - 1] : null;
    let right = input[i][j + 1] ? input[i][j + 1] : null;

    let check_top = top == null ? true : top > input[i][j];
    let check_bottom = bottom == null ? true : bottom > input[i][j];
    let check_left = left == null ? true : left > input[i][j];
    let check_right = right == null ? true : right > input[i][j];

    if (check_top && check_bottom && check_left && check_right) {
      lows.push(input[i][j]);
    }
  }
}

let sum = 0;
for (let height of lows) {
  sum += 1 + +height;
}

console.log(sum);
