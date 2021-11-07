const str = `4,"f","H" ,"a","K",8,2,"v","e"`;
let count =0;
let right = 0;
console.log(str)
for (let i = 0; i < 4; i++) {
    let guess = prompt("enter your guess")
   if(guess.toLowerCase() == " "||guess.length>1) {
        console.log("not a valid guess")
        i--;
   }
   else if((str.toLowerCase()).includes(guess.toLowerCase())){
        count++;
        right++;
    }else{
        count++;
    }

}
console.log(`guesses : ${count}
right : ${right}`)
