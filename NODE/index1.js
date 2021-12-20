const numbers = [2,4,3,9,-4,8,3,2];

let sum = 0; 
numbers.forEach(e => {
    sum+=e;
});
console.log(sum);

let rednums = numbers.reduce((acc,current)=>acc>current?current:acc,numbers[0]);
console.log(rednums);