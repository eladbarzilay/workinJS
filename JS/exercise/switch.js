
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
    let isFirst = true;
    console.log(str);
    let x = prompt(`choose a number`);
    let oopsite = "";
    while (x != "exit") { 
      if(isFirst == false) {
        x = prompt("choose a number");
      }
      
    switch(x){
        case ("1") : 
        for (let i = 0; i < str.length; i++) {
            console.log(str[i]);
          }
        break;
        case ("2") : 
         oopsite = "";
        for (let i = str.length - 1; i >= 0; i--) {
          oopsite +=str[i];
        }
        console.log(oopsite);
        break;
        case ("3") : 
         oopsite = "";
        for (let i = str.length - 1; i >= 0; i--) {
          oopsite += str[i];
        }
        if (str == oopsite) {
          console.log(oopsite)
          console.log("is poloindrom");
        } else {
          console.log(oopsite)
          console.log("not polindrom");
        }
        break;
        case ("4") : 
        let containAnum = false;
        let num =0;
        for(let i = 0 ; i < str.length; i++){
            if (str[i] == " ") {
                containAnum = false;
            }
           else if(!isNaN(str[i])) {
                containAnum = true;
                num = str[i];
                break;
            }else{
                containAnum = false;
            }
        }
        console.log(containAnum + num);
        break;
        case ("5") : 
        let y = prompt("choose a char");
        let count = 0;
          for(let i = 0; i < str.length; i++) {
              if(str[i]==y){
                  count++;
              }
          }
          console.log("char appers: " + count);
        break;
        case ("6") : 
        x = "exit";
        break;  
         default :  
            console.log("only 1-6");
    }
    isFirst = false;
}
console.log("good bye");
}
