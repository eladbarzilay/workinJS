let speed = prompt("how fast is the car going?")

speed = speed<40?"go already":
speed<80 ? "good driving":
speed<120 ? "slow down":
speed >120  ? "stop!":
console.log("only numbers allowed");

console.log(speed);