let color = prompt("what color is the light?");

color =
  color == "red"
    ? "stop!"
    : color == "orange"
    ? "slow down"
    : color == "green"
    ? "go"
    : "wrong color";

console.log(color);
