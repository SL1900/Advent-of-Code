const input = require("./input.json");

let correct = 0;

for (let pass of input) {
  let rule_pass = pass.split(/-|\s/gi);
  rule_pass[2] = rule_pass[2].replace(":", "");

  let repeats = 0;
  for (let letter of rule_pass[3]) {
    if (letter === rule_pass[2]) repeats++;
  }

  if (repeats >= +rule_pass[0] && repeats <= +rule_pass[1]) correct++;
}

console.log(correct);
