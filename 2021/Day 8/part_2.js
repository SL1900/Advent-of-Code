const fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\r\n");

let total = 0;

for (let str of input) {
  str = str
    .split(" | ")
    .map((e) => e.split(" ").map((i) => Array.from(i).sort().join("")));

  let display = [];
  let numbers = [];

  numbers[1] = str[0].filter((i) => i.length == 2)[0];
  numbers[4] = str[0].filter((i) => i.length == 4)[0];
  numbers[7] = str[0].filter((i) => i.length == 3)[0];
  numbers[8] = str[0].filter((i) => i.length == 7)[0];

  let d = diff(numbers[1], numbers[7]);
  display[0] = d.a.length ? d.a[0] : d.b[0];

  for (let word of str[0].filter((i) => i.length == 5)) {
    if (diff(numbers[1], word).a.length == 0) {
      numbers[3] = word;
    }
  }

  for (let word of str[0].filter((i) => i.length == 6)) {
    if (diff(numbers[1], word).a.length == 1) {
      numbers[6] = word;
    }
  }

  for (let word of str[0].filter((i) => i.length == 5)) {
    if (diff(numbers[6], word).a.length == 1) {
      numbers[5] = word;
    }
  }

  display[5] = diff(numbers[5], numbers[6]).b[0];

  for (let word of str[0].filter((i) => i.length == 6 && i != numbers[6])) {
    if (word.includes(display[5])) {
      numbers[0] = word;
    }
  }

  numbers[2] = str[0].filter(
    (i) => i.length == 5 && i != numbers[3] && i != numbers[5]
  )[0];
  numbers[9] = str[0].filter(
    (i) => i.length == 6 && i != numbers[0] && i != numbers[6]
  )[0];

  display[1] = diff(numbers[0], numbers[8]).b[0];
  display[3] = diff(numbers[1], numbers[4]).b.filter((i) => i != display[1])[0];
  display[4] = diff(numbers[7], numbers[6]).a[0];
  display[6] = Array.from(numbers[1]).filter((i) => i != display[4])[0];
  display[2] = diff(["a", "b", "c", "d", "e", "f", "g"], [...display]).a[0];

  total += +str_to_number(str[1], numbers);
}
console.log(total);

function diff(a, b) {
  a = Array.from(a);
  b = Array.from(b);

  let common = [];
  let all = [...new Set([...a, ...b])];

  for (let l of all) {
    let a_i = a.indexOf(l);
    let b_i = b.indexOf(l);

    if (a_i != -1 && b_i != -1) {
      common.push(a.splice(a_i, 1)[0]);
      b.splice(b_i, 1);
    }
  }

  return {
    a: a,
    b: b,
    common: common,
  };
}

function str_to_number(string, numbers) {
  let result = "";
  for (let word of string) {
    let index = numbers.indexOf(word);
    result += index;
  }
  return result;
}
