const input = require("./input.json");

let x = 0;
let d = 0;

for (let line of input) {
  let command = line.split(" ");

  switch (command[0]) {
    case "down":
      d += +command[1];
      break;
    case "up":
      d -= +command[1];
      break;
    case "forward":
      x += +command[1];
      break;
  }
}

console.log(`x: ${x};\nd: ${d};\nOutput: ${x * d};`);
