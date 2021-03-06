let people = [];
initData();

function createPersonWithPromt(
  firstName,
  lastName,
  dateOfBirth,
  city,
  id,
  parentId = 0
) {
  return {
    firstName: (firstName = getMsg("first name")),
    lastName: (lastName = getMsg("last name")),
    dateOfBirth: (dateOfBirth = getMsg("enter birthday dd/mm/yyyy")),
    age: (age = getAge(dateOfBirth)),
    city: (city = getMsg("city")),
    id: (id = getMsg("id")),
    parentId: (parentId = getMsg("parent id")),
    printPerson: function printPerson() {
      console.log(`
      first name : ${this.firstName}
      last name : ${this.lastName}
      id : ${this.id}
      birth day : ${this.birthDay}
      age : ${this.age}
      city : ${this.city}
      parent id : ${this.parentId}
      `);
    },
  };
}
function createPerson(
  firstName,
  lastName,
  dateOfBirth,
  city,
  id,
  parentId = 0
) {
  return {
    firstName: firstName.toLowerCase(),
    lastName: lastName.toLowerCase(),
    age: getAge(dateOfBirth),
    id: id,
    dateOfBirth: dateOfBirth,
    city: city.toLowerCase(),
    parentId: parentId,
    printPerson: function printPerson() {
      console.log(`
      first name : ${this.firstName}
      last name : ${this.lastName}
      id : ${this.id}
      birth day : ${this.birthDay}
      age : ${this.age}
      city : ${this.city}
      parent id : ${this.parentId}
      `);
    },
  };
}
function getAge(dateOfBirth) {
  let x = dateOfBirth.split("/");
  age = new Date().getFullYear() - x[2];
  return age;
}
function getMsg(prop, isRequired) {
  isRequired = true;
  let input = "";
  if (isRequired == true) {
    input = prompt(`enter ${prop}`);
  } else {
    input = "must enter value";
  }
  return input;
}
function isContainingNum(name) {
  let arr = [name];
  flag = false;
  for (v of arr) {
    for (i in v) {
      if (!isNaN(v[i])) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
  }
  return flag;
}
function isParentExist(parentId) {
  let res = people.filter((v) => v.id === parentId);
  if (res) {
    return true;
  } else {
    return false;
  }
}
function addPersonToArray(person) {
  let flag = false;
  if (
    !isContainingNum(person.firstName) &&
    !isContainingNum(person.lastName) &&
    isParentExist(person.parentId) == true
  ) {
    flag = true;
  }

  if (flag == true) {
    people.push(person);
  }
}
function getChildren(id) {
  return people.filter((p) => p.parentId == id);
}
function deletePerson(p) {
  let idDelete = p.id;
  let children = getChildren(idDelete);
  if (children) {
    let del = confirm("delete children?");
    if (del) {
      children.forEach((c) => deletePerson(c));
    } else {
      children.forEach((c) => (c.parentId = 0));
    }
  }
  people.splice(people.indexOf(p), 1);
}
function deletePersonByID() {
  let idDelete = Number(prompt("id for delete"));
  let person = findById(idDelete);
  if (!person) {
    console.log(`person: ${idDelete} is not exist`);
    return false;
  }
  deletePerson(person);
}
function updateDetailsOfPerson(personId) {
  let res = people.find((v) => v.id === personId);
  let num = 0;
  while (num != 4) {
    if (res) {
      let str = Number(
        prompt(`what field do you want to update?
    1: first name
    2: last name
    3: city
    4: exit`)
      );
      switch (str) {
        case 1:
          x = prompt("enter first name");
          if (!isContainingNum(x)) {
            res.firstName = x;
          } else {
            console.log("name cant contain a number");
            x = prompt("enter first name or 4 to exit");
            if (x == 4) {
              num = 4;
              console.log("good bye ");
            }
          }
          num = 4;
          break;
        case 2:
          x = prompt("enter last name");
          if (!isContainingNum(x)) {
            res.firstName = x;
          } else {
            console.log("name cant contain a number");
            x = prompt("enter last name or 4 to exit");
            if (x == 4) {
              num = 4;
              console.log("good bye ");
            }
          }
          num = 4;
          break;
        case 3:
          x = prompt("enter city");
          if (!isContainingNum(x)) {
            res.firstName = x;
          } else {
            console.log("city cant contain a number");
            x = prompt("enter city or 4 to exit");
            if (x == 4) {
              num = 4;
              console.log("good bye ");
            }
          }
          num = 4;
          break;
        case 4:
          console.log("good bye ");
          num = 4;
          break;
        default:
          console.log("cant change that field");
          break;
      }
    } else {
      console.log(`person: ${personId} is not exist try again or 4 to exit`);
      personId = Number(prompt("enter id or 4 to exit"));
      res = people.find((v) => v.id === personId);
      if (personId == 4) {
        num = 4;
        console.log("good bye ");
      }
    }
  }
  return res;
}
function initData() {
  addPersonToArray(
    createPerson("eLAd", "barzilay", "29/01/1990", "holon", 11111, 123)
  );
  addPersonToArray(createPerson("john", "doe", "22/02/1993", "rish", 22222));
  addPersonToArray(
    createPerson("dod", "bay", "29/06/1992", "holon", 33333, 123)
  );
  addPersonToArray(
    createPerson("bob", "bayop", "24/06/1987", "holon", 44444, 112233)
  );
  addPersonToArray(
    createPerson("talia", "barzilay", "29/01/1990", "holon", 55555, 11111)
  );
  addPersonToArray(
    createPerson("yossi", "hen", "22/02/2000", "rishon", 66666, 55555)
  );
  addPersonToArray(
    createPerson("timor", "epstein", "12/07/1998", "petah tikva", 77777, 11111)
  );
  addPersonToArray(
    createPerson("brian", "sdfg", "29/03/1992", "holon", 88888, 453)
  );
}
function findById(id) {
  let x = people.find((v) => v.id == id);
  return x;
}
function findByText(text) {
  let res = people.filter(
    (v) => v.firstName.includes(text) || v.lastName.includes(text)
  );
  return res;
}
function findPerson() {
  let num = Number(
    prompt(`
  1: search by id
  2: search by name`)
  );
  let result = "person not exist";
  switch (num) {
    case 1:
      let x = findById(Number(prompt("enter id")));
      if (x != undefined) {
        result = x;
      }
      break;
    case 2:
      let y = findByText(prompt("enter text"));
      if (y != undefined) {
        result = y;
      }
      break;
    default:
      console.log("Invalid option");
  }
  return result;
}
function isAboveAge(age) {
  let x = people.filter((v) => v.age > age);
  return x;
}
let bornInJune = [];
function isBornInJune(people) {
  for (let i = 0; i < people.length; i++) {
    let x = people[i].dateOfBirth.split("/");
    if (x[1].includes("6")) {
      bornInJune.push(people[i]);
    } else {
    }
  }
}
let twoChildrenOrMore = [];
function isHaveTwoChildren(people) {
  let res = [];
  for (let i = 0; i < people.length; i++) {
    let x = getChildren(people[i].id);
    if (x.length >= 2) {
      res.push(x);
      twoChildrenOrMore = people[i];
    }
  }
}
let isChildNamePolindrom = [];
function ispolindrom(name) {
  reverse = name.split("").reverse().join("");
  if (name === reverse) {
    return true;
  } else {
    return false;
  }
}
function isNamePolindrom(people) {
  let res = [];
  for (let i = 0; i < people.length; i++) {
    if (ispolindrom(people[i].firstName) || ispolindrom(people[i].lastName)) {
      res.push(people[i]);
    }
    let x = getChildren(people[i].id);

    for (let j = 0; j < x.length; j++) {
      if (ispolindrom(x[j].firstName) || ispolindrom(x[j].lastName)) {
        res.push(x[j]);
      }
    }
  }
  return res;
}

function whatCity(people) {
  let a = [];
  let b = [];
  people.filter((p) => a.push(p.city));
  for (let i = 0; i < a.length; i++) {
    let c =[];
    for (let j=0;j< people.length; j++) {
      if (a[i] == people[j].city) {

        c.push(people[j]);
      }
    }
    b.push(c);
  }

  console.log(a);
  console.log(b);
}


// addPersonToArray( createPersonWithPromt())
// deletePersonByID()
// updateDetailsOfPerson(Number(prompt("what id do you want to update")))
// console.log(findPerson())

console.log(people);

//more questions

// console.log(isAboveAge(31));
// console.log(getChildren(11111));
// isBornInJune(people);
// console.log(bornInJune);

// isHaveTwoChildren(people);
// console.log(twoChildrenOrMore);

// console.log(isNamePolindrom(people));
// whatCity(people);
