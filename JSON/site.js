let student = {
    name:"elad",
    age:30,
    semester:{
    semesterA:  [ {math:90,history:75}],
    semesterB:  [ {math:85,history:85}],
    }
}
console.log(student);

 let json = JSON.stringify(student);
  let obj = JSON.parse(json);

 console.log(json);
console.log(obj);
