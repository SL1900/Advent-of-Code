const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split("\r\n").map((l) => {
  let [left, right] = l.split(" -> ").map((c) => c.split(","));
  return [left, right];
});
let board = [];
let x_max = (y_max = 0);
for (let pair of input) {
  if (+pair[0][0] > x_max) x_max = +pair[0][0];
  if (+pair[1][0] > x_max) x_max = +pair[1][0];

  if (+pair[0][1] > x_max) y_max = +pair[0][1];
  if (+pair[1][1] > x_max) y_max = +pair[1][1];
}

for (let x = 0; x < x_max * 2; x++) {
  if (board[x] == undefined) board[x] = [];
  for (let y = 0; y < y_max * 2; y++) {
    board[x][y] = 0;
  }
}
for (let pair of input) {
  let dx = Math.abs(pair[0][0] - pair[1][0]);//5
  let dy = Math.abs(pair[0][1] - pair[1][1]);//0

  if(dx && dy) continue;

  let s_x = +pair[0][0] < +pair[1][0] ? +pair[0][0] : +pair[1][0];
  let s_y = +pair[0][1] < +pair[1][1] ? +pair[0][1] : +pair[1][1];

  if (dx) {
    dx++
    for (let i = 0; i < +dx; i++) {
      board[s_x + i ][s_y]++;
    }
  }
  if (dy) {
    dy++
    for (let i = 0; i < +dy; i++) {
      board[s_x][s_y + i]++;
    }
  }
}
//console.log(board.map(l=>l.join('')).join("\n"))

let dots = 0;
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board.length; j++) {
    if (board[i][j] > 1) dots++;
  }
}

console.log(dots);
