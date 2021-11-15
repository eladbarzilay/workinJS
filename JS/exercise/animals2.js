let txt1 = "Dog12,CAT3,LiOn7,DolphiN11,fish6";
let txt2 = "PIG17,bear29,BiRd8,SNAKE39,donkey14";
let animals = txt1.concat(",", txt2).toLowerCase().split(",");
console.log(animals);


let choise = "";
let str = "animal not found";
let num = "";

function splitNames(arr){
  for(let i=0; i<arr.length; i++){
    let name = animals[i].replace(/[^a-z,A-Z]/g, "");
    let num = animals[i].replace(/[^0-9]/g, "");
    let code = arr[i].split(name);
    delete arr[i];

    arr[num.toString()] = name; 
    
  }
  return arr;
}
let animals2 = splitNames(animals);
console.log(animals2);


// while (choise != "exit") {
//   let count = 0;
//   choise = Number(
//     prompt(`wellcome to the data center , please choose an option: 
//     1: find by code.
//     2: find by name.
//     3: add animal.
//     4: delete animal.
//     5: exit.`)
//   );

//   switch (choise) {
//     case 1:
//       let animalCode = Number(prompt("what is the animal code?"));
//       let ans = str;
//       for (let i = 0; i < animals.length; i++) {
//         let num = animals[i].replace(/[^0-9]/g, "");
//         let x = animals[i].replace(/[^a-z,A-Z]/g, "");
//         if (num == animalCode) {
//           ans = `
//                     animal code : ${animalCode}
//                     animal name : ${x}
//                     `;
//           break;
//         }
//       }
//       console.log(ans);
//       break;
//     case 2:
//       let animalName = prompt("what is the animal name?");
//       let ans2 = str;
//       if (isNaN(animalName)) {
//         for (let i = 0; i < animals.length; i++) {
//           let x = animals[i].replace(/[^a-z]/g, "");
//           if (x.includes(animalName.toLowerCase())) {
//             ans2 = `
//                 animal name : ${animalName}
//                 animal code : ${animals[i].split(animalName.toLowerCase())}`;
//             break;
//           }
//         }
//         console.log(ans2);
//       } else {
//         console.log("write only string");
//       }
//       break;
//     case 3:
//       let codeToAdd = prompt("what the code animal do you want to add?");
//       let nameToAdd = prompt("what the name of the  animal?");
//       let animalToAdd = "";
//       for (let i = 0; i < animals.length; i++) {
//         let num = animals[i].replace(/[^0-9]/g, "");
//         let x = animals[i].replace(/[^a-z,A-Z]/g, "");
//         if (num == codeToAdd || x.includes(nameToAdd.toLowerCase())) {
//           isExist = true;
//         } else {
//           animalToAdd = nameToAdd + codeToAdd;
//           animals.push(animalToAdd);
//           console.log("animal added");
//           isExist = false;
//           break;
//         }
//       }
//       if (isExist == true) {
//         console.log("animal already exist");
//       }

//       break;
//     case 4:
//       let toDelete = prompt("what animal do you want to delete?");
//       for (let i = 0; i < animals.length; i++) {
//         if (animals[i].toLowerCase().includes(toDelete.toLowerCase())) {
//           animals.splice(i, 1);
//           console.log("animal " + toDelete + " deleted");
//         } else {
//           count++;
//         }
//       }
//       break;
//     case 5:
//       choise = "exit";
//       break;
//     default:
//       console.log("only 1,2 or 3 ");
//   }
//   if (count == animals.length) {
//     console.log(str);
//   }
// }
