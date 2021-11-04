let num1 = Number(prompt("choose a number"));
let num2 = Number(prompt("another number"));
let num3 = Number(prompt("last number"));

let max = 0;
// max =  num1 > max ? num1 : max; 
// max =  num2 > max ? num2 : max; 
// max =  num3 > max ? num3 : max; 


// max = Math.max(num1, num2,num3);

max  = (num1 > num2) ? (num1 > num3)  ? num1  : num3 :(num2 > num3) ? num2  : num3; 


console.log(max);
