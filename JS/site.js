let x = prompt("type a number");
let y = prompt("type a number");
let z = prompt("type a number");
let num = 10;
let max = 0;

if(x > num){
    console.log("num is bigger")
}else if(x < num){
console.log("num is smaller")
}else{
  console.log("num is equal")
}

findmax();



function findmax(){
if(x>max){
    max = x;
}if(y>max){
    max = y;
}
if(z>max){
    max = z;
}
console.log(max + " is the biggest");
}

