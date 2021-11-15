let txt1 = "Dog12, CAT3, LiOn7, DolphiN11, fish6";
let txt2 = "PIG17, bear29, BiRd8, SNAKE39, donkey14";
let animals_txt = txt1.concat(", ", txt2).toLowerCase().split(", ");
let animals = getGoodArray(animals_txt);
let code=""
let animalName =""

function getGoodArray(arr) {
  let arr2 = [];
  for (v of arr) {
    for (i in v) {
      if (!isNaN(v[i])) {
        let code = Number(v.slice(i, v.length));
        let name = v.slice(0, i);
        arr2[code] = name;
        break;
      } else {
      }
    }
  }
  return arr2;
}

console.log(animals);
let choose = "";

while (choose != -1) {
  choose = Number(
    prompt(`wellcome to the data center , please choose an option: 
      1: find by code.
      2: find by name.
      3: add animal.
      4: delete animal.
      5: exit.`)
  );
  switch (choose) {
    case 1:
       code = Number(prompt("enter code"));
      console.log(findByCode(animals, code));
      break;
    case 2:
        animalName = prompt("enter animal name");
      console.log(findByName(animals, animalName));
      break;
    case 3:
         code = Number(prompt("enter code"));
         nanimalNameame = prompt("enter animal name");
        addAnimal(animals,code, animalName);
      break;
    case 4:
      break;
    case 5:
      choose = -1;
      break;
    default:
  }
}
console.log("good bye");

function findByCode(arr, code) {
  let ans = "";
  for (i in arr) {
    if (code == i) {
      ans = ` code : ${code}
            name : ${arr[i]}
            `;
      break;
    } else {
      ans = "animal not exist";
    }
  }
  return ans;
}

function findByName(arr, name) {
  let ans = "";
  let ans2 = "";
  let count = 0;
  for (v of arr) {
    if (v == undefined) {
      continue;
    } else {
      if (v.includes(name)) {
        ans2 += ` name : ${name}
            code : ${v}
            `;
        count++;
      } else {
        ans = "animal not exist";
      }
    }
  }
  if (count > 0) {
    return ans2;
  } else {
    return ans;
  }
}

function addAnimal(arr , code , name){
    console.log(isExist(arr , code));

}
function isExist(arr,code){
    for (i in arr) {
        if (code == i) {
            return true; 
        }else{
            return false;
        }
    }
}