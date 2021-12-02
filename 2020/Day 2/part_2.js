const input = require("./input.json");

let correct = 0;

for (let pass of input) {
  let rule_pass = pass.split(/-|\s/gi);
  rule_pass[2] = rule_pass[2].replace(":", "");

  let min = rule_pass[0];
  let max = rule_pass[1];

  let letter = rule_pass[2];
  let word = rule_pass[3];

  let occurrences = 0;

  if (word[min - 1] === letter) occurrences++;
  if (word[max - 1] === letter) occurrences++;

  if (occurrences == 1) correct++;
}

console.log(correct);
