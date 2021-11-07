
const app =()=>{
console.log(` write  somthing and choose an option for
1 - print letter letter 
2 - print ooposite string 
3 - is string polindrom ?
4- is string contains a number ?
5 - how many times a note appears 
6 - exit
`);

let str = prompt(`choose a string`);
console.log(str);
let x = prompt(`choose a number`);

while (x != "exit") { 

  if (x == "1") {
    for (let i = 0; i < str.length; i++) {
      console.log(str[i]);
    }
  } else if (x == "2") {
    let oopsite = "";
    for (let i = str.length - 1; i >= 0; i--) {
      oopsite +=str[i];
    }
    console.log(oopsite);
  } else if (x == "3") {
    let oopsite = "";
    for (let i = str.length - 1; i >= 0; i--) {
      oopsite += str[i];
    }
    if (str == oopsite) {
      console.log("is poloindrom");
    } else {
      console.log("not polindrom");
    }
  } else if (x == "4") {
      let containAnum = false;
    for(let i = 0 ; i < str.length; i++){
        if (str[i] == " ") {
            containAnum = false;
        }
       else if(!isNaN(str[i])) {
            containAnum = true;
            break;
        }else{
            containAnum = false;
        }
    }
    console.log(containAnum);
  } else if (x == "5") {
    let y = prompt("choose a char");
      let count = 0;
        for(let i = 0; i < str.length; i++) {
            if(str[i]==y){
                count++;
            }
        }
        console.log("char appers: " + count);

  } else if (x == "6") {
    x = "exit";
    break;
  } else {
    console.log("only 1-6");
  }

   x = prompt("choose a number");
}
console.log("good bye");
}
