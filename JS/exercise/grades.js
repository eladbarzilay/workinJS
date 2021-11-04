let grades = prompt("enter grade");
let totalgrades = 0;
let students=0;
let avg=0;
let max=0;
let min = 100;
while(grades != "exit"){
if(grades < 0 || grades > 100 || isNaN(grades)){
    console.log("Invalid grade")
    grades = prompt("enter grade");
}else{
       if(grades>max){
           max = grades;
       }
      else if(grades<min){
        min = grades;
    }
        students++;
        totalgrades+=Number(grades);
        grades = prompt("enter grade");
}
}
console.log(totalgrades);
 avg = totalgrades/students;

 console.log(` there are ${students} students in the class
 grades avg is ${avg}
 heighst grase is ${max}
 lowest grade is ${min}`);