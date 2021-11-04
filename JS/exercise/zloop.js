
let c = "*",
  num = 8;
let lineBorder = "",
  counter = 0;
while (counter < num) {
  lineBorder += c;
  counter++;
}
console.log(lineBorder);
let lines = num - 2;
while (lines >= 1) {
  let space = "";
  while (counter < lines) {
      space+=" ";
      counter++;
  }
  console.log(space+counter);
  lines--;
}

console.log(lineBorder);
