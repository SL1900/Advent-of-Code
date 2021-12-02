const input = require("./input.json");

let pos_x = (aim = pos_y = 0);

for (let line of input) {
  let [command, value] = line.split(" ");

  switch (command) {
    case "down":
      aim += +value;
      break;
    case "up":
      aim -= +value;
      break;
    case "forward":
      pos_x += +value;
      pos_y += aim * +value;
      break;
  }
}

console.log(
  `Horizontal position: ${pos_x};\nDepth: ${pos_y};\nOutput: ${pos_x * pos_y};`
);
