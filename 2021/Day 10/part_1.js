const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\r\n");

let open_chars = ["(", "[", "{", "<"];
let pairs = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};
let score = 0;

for (let line of input) {
  let openings = [];
  for (let [index, letter] of [...line].entries()) {
    if (open_chars.includes(letter)) {
      openings.push(letter);
      continue;
    }

    if (pairs[openings.slice(-1)[0]] != letter) {
      console.log("break on: " + (index + 1) + " char: " + letter);
      switch (letter) {
        case ")":
          score += 3;
          break;
        case "]":
          score += 57;
          break;
        case "}":
          score += 1197;
          break;
        case ">":
          score += 25137;
          break;
      }
      break;
    }

    openings.splice(-1);
  }
  if (openings.length) console.log("Incomplete");
}
console.log("Score" + score);
