const input = require("./input.json");

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i; j < input.length; j++) {
    if (input[i] + input[j] == 2020) {
      console.log(
        `First:${input[i]};\nSecond:${input[j]};\nResult:${input[i] * input[j]}`
      );
      return;
    }
  }
}
