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
    !pass.byr ||
    !pass.iyr ||
    !pass.eyr ||
    !pass.hgt ||
    !pass.hcl ||
    !pass.ecl ||
    !pass.pid
  )
    continue;

  if (pass.byr < 1920 || pass.byr > 2002) continue;
  if (pass.iyr < 2010 || pass.iyr > 2020) continue;
  if (pass.eyr < 2020 || pass.eyr > 2030) continue;

  let height = +pass.hgt.match(/\d+/gi);
  let height_measure = pass.hgt.substr(-2);

  if (!["cm", "in"].includes(height_measure)) continue;

  if (height_measure == "cm" && (height < 150 || height > 193)) continue;
  if (height_measure == "in" && (height < 59 || height > 76)) continue;

  if (!pass.hcl.match(/#[0-9|a-f]{6}/gi)) continue;

  if (!["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(pass.ecl))
    continue;

  if (pass.pid.length > 9) continue;
  if (!pass.pid.match(/\d{9}/gi)) continue;

  valid_count++;
}

console.log(valid_count);
