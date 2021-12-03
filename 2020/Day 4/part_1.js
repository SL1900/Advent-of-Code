const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString();

let valid_count = 0;

input = input.split("\r\n\r\n").map((e) => e.replace(/\r\n/gi, " "));
input = input.map((e) => {
  let fields = e.split(" ").map((i) => i.split(":"));
  let obj = {};

  for (let field of fields) {
    obj[field[0]] = field[1];
  }

  return obj;
});

for (let pass of input) {
  if (
    pass.byr &&
    pass.iyr &&
    pass.eyr &&
    pass.hgt &&
    pass.hcl &&
    pass.ecl &&
    pass.pid
  )
    valid_count++;
}

console.log(valid_count);
