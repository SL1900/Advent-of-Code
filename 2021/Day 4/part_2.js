const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();
input = input.split(/\r\n\r\n/gi);

let order = input.shift().split(",");
let boards = [...input].map((b) => {
  let lines = b.split("\r\n");
  return lines.map((l) =>
    l
      .replace(/  /g, " ")
      .replace(/^ /g, "")
      .split(" ")
      .map((c) => {
        return {
          value: c,
          checked: false,
        };
      })
  );
});

let lastWinningNumber;
let winningBoard;

for (let currentNumber of order) {
  for (let board of boards) {
    if (board.won) continue;
    let board_won = check_set_board(board, currentNumber);
    if (board_won) {
      winningBoard = board;
      lastWinningNumber = currentNumber;
      board.won = true;
    }
  }
}

let sum = 0;
for (let line_i = 0; line_i < winningBoard.length; line_i++) {
  for (let cell_i = 0; cell_i < winningBoard[line_i].length; cell_i++) {
    let cell = winningBoard[line_i][cell_i];
    if (cell.checked == false) sum += +cell.value;
  }
}
console.log(`Final result: ${sum * lastWinningNumber}`);

function check_set_board(board, number) {
  for (let line_i = 0; line_i < board.length; line_i++) {
    for (let cell_i = 0; cell_i < board[line_i].length; cell_i++) {
      let cell = board[line_i][cell_i];
      if (cell.value == number) cell.checked = true;
    }
  }

  for (let line_i = 0; line_i < board.length; line_i++) {
    if (board[line_i].every((c) => c.checked == true)) return true;
  }

  for (let cell_i = 0; cell_i < board[0].length; cell_i++) {
    let checked_count = 0;
    for (let line_i = 0; line_i < board.length; line_i++) {
      if (board[line_i][cell_i].checked) checked_count++;
    }
    if (checked_count == board.length) return true;
  }

  return false;
}
