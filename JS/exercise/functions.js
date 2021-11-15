// const  clean  = (name)=>{
//     let num =1;
//     while (1==num){
//         console.log(name)
//         num++;
//     }
// };

// function saySomething(){
//     console.log(`hello world!
//     how are you?`);
// }
// function saySomething1(msg){
//     console.log(msg);
// }

// function calc(num,num1){
//     return num+num1;
// }

// function show(){
//     let x ="";
//     let num = 0;
//     let arr =[];
//     while(x!="exit"){
//         x = prompt(`what do you want ?
//         1:creat array  
//         2: sum of array 
//         3:exit`)
       
//         switch(x){
//             case "1":
//              num = Number(prompt("what size?"))
//                 arr = makeArray(num)
//                  console.log(arr)
//                 break;
//                 case "2":
//                     console.log(sum(arr))
//                     break;
//                     case "3":
//                         x="exit";
//                         break
//                         default: 
//                         console.log("no valid")
//         }
//     }
//     console.log("good bye")
// }

// function makeArray(size){
//     let arr = [];
//     arr.length = size;
//     for(let i=0;i<arr.length;i++){
//         arr[i]= Math.round(Math.random()*10);
//     }
//     return arr;
// }

// function sum(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i] ;
//     }
//     return sum;
// }

// let arr = makeArray(10);
// let sumArr = sum(makeArray(10));
// console.log(arr); 
// console.log(sumArr);
// show()


function shortName (arr){
    for(let i=0; i<arr.length; i++){
        if (arr[i].length<5){
            console.log(arr[i]+" is shorter than 5 chars");
        }else{
            console.log(arr[i]+" name is longer than 5 chars");
        }
    }
}
function containsI(arr){
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length-1; j++){
            if(arr[i][j]=="i" || arr[i][j]=="I"){
                    console.log(arr[i]+" contains i")
                    break;
            }else{
                console.log(arr[i]+" not contains i")
                break;
            }
        }
    }
}

function numsOfI(arr){
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++){
            if(arr[i][j]=="i" || arr[i][j] =="I"){   
                    count++;
                    break;
            }else{
                console.log(arr[i]+" not contains i")
                break;
            }
        }
        console.log(arr[i]+" contains i "+count+" times");
    }
}
function sumsOfChars(arr){
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr[i].length; j++){
                sum+=arr[i][j].length;
        }
       
    }
    console.log(sum);
}
function execut(){
    let arr = ["elad","shlomi","itamar","yoav"];
    shortName(arr)
    containsI(arr)
    numsOfI(arr)
    sumsOfChars(arr)

}
execut();