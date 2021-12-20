let validate = require("./validate.js");

let count = 1;


function createPerson(firstName, lastName, age, city, eyeColor) {
  let p = {
    id: count,
    firstName: validate(firstName) == true ? firstName : null,
    lastName: validate(lastName) == true ? lastName : null,
    age: validate(age) == true ? age : 0,
    city: validate(city) == true ? city : null,
    eyeColor: validate(eyeColor) == true ? eyeColor : null,
  };
  if (
    p.firstName != null &&
    p.lastName != null &&
    p.age != 0 &&
    p.city != null &&
    p.eyeColor != null
  ) {
    count++;
    return p;
  }else{
      return false;
  }
}

module.exports = createPerson;
