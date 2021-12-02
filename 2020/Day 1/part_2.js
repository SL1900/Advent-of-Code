const input = require("./input.json");

for (let i = 0; i < input.length - 2; i++) {
  for (let j = i + 1; j < input.length - 1; j++) {
    for (let k = j + 1; k < input.length; k++) {
      if (input[i] + input[j] + input[k] == 2020) {
        console.log(
          `First:${input[i]};\nSecond:${input[j]};\nThird:${
            input[k]
          };\nResult:${input[i] * input[j] * input[k]}`
        );
        return;
      }
    }
  }
}
