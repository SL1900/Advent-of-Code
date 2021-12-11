const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\r\n");
input = input.map((e) => e.replace(/(.*\| )|( $)/g, ""));

let result = 0;
for (let line of input) {
  let words = line.split(" ");
  for (let word of words) {
    if ([2, 3, 4, 7].includes(word.length)) {
      result++;
    }
  }
}

console.log(result);
