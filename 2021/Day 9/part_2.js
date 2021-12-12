const fs = require("fs");

let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .split("\r\n")
  .map((e) =>
    Array.from(e).map((i) => {
      return { checked: false, value: i };
    })
  );

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    input[i][j].pos = [i, j];
  }
}

let height = input.length;
let width = input[0].length;

let lows = [];

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    let top = input[i - 1] ? input[i - 1][j].value : null;
    let bottom = input[i + 1] ? input[i + 1][j].value : null;
    let left = input[i][j - 1] ? input[i][j - 1].value : null;
    let right = input[i][j + 1] ? input[i][j + 1].value : null;

    let check_top = top == null ? true : top > input[i][j].value;
    let check_bottom = bottom == null ? true : bottom > input[i][j].value;
    let check_left = left == null ? true : left > input[i][j].value;
    let check_right = right == null ? true : right > input[i][j].value;

    if (check_top && check_bottom && check_left && check_right) {
      lows.push([i, j]);
    }
  }
}

let basins = [];
for (let low of lows) {
  let map = [];
  let size = 0;
  let unchecked = [input[low[0]][low[1]]];
  input[low[0]][low[1]].checked = true;
  for (;;) {
    let next_unchecked = [];
    for (let point of unchecked) {
      size++;
      let neighbours = get_neighbours(point.pos);
      neighbours = neighbours.filter((e) => e != null);
      next_unchecked.push(...neighbours);
      for (let neighbour of neighbours) {
        neighbour.checked = true;
      }
    }
    unchecked = [...next_unchecked];

    if (next_unchecked.length == 0) {
      break;
    }
  }
  basins.push(size);
}
basins = basins.sort((a, b) => a - b);
console.log(basins.slice(-3).reduce((a, b) => a * b));

function get_neighbours([i, j]) {
  let top = input[i - 1] ? input[i - 1][j] : null;
  let bottom = input[i + 1] ? input[i + 1][j] : null;
  let left = input[i][j - 1] ? input[i][j - 1] : null;
  let right = input[i][j + 1] ? input[i][j + 1] : null;

  if (top) top = +top.value == 9 || top.checked == true ? null : top;
  if (bottom)
    bottom = +bottom.value == 9 || bottom.checked == true ? null : bottom;
  if (left) left = +left.value == 9 || left.checked == true ? null : left;
  if (right) right = +right.value == 9 || right.checked == true ? null : right;

  return [top, bottom, left, right];
}
