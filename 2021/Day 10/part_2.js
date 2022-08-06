const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\r\n");

let open_chars = ["(", "[", "{", "<"];
let pairs = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">",
};

let scores = [];

for (let line of input) {
  let openings = [];
  let corrupted = false;

  for (let letter of line) {
    if (open_chars.includes(letter)) {
      openings.push(letter);
      continue;
    }

    if (pairs[openings.slice(-1)[0]] != letter) {
      corrupted = true;
      break;
    }

    openings.splice(-1);
  }

  if (corrupted) continue;

  let score = 0;
  openings = openings.reverse();
  for (let i = 0; i < openings.length; i++) {
    score *= 5;
    switch (openings[i]) {
      case "(":
        score += 1;
        break;
      case "[":
        score += 2;
        break;
      case "{":
        score += 3;
        break;
      case "<":
        score += 4;
        break;
    }
  }
  scores.push(score);
}
console.log(
  "Middle score is: " +
    scores.sort((a, b) => a - b)[Math.floor(scores.length / 2)]
);
