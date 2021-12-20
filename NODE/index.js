// console.log("hello world");
// let msg = require('./message.js');
// console.log(msg);
// let plus = require('./plus.js');
// let minus = require('./minus.js');
// let multyply = require('./multyply.js');
// let divide = require('./divide.js');
let calc = require('./calc.js');
// let calcAll = require('./calcAll.js');

// console.log("plus with calc "+calc.plus(10,5));
// console.log("minus with calc "+calc.minus(10,5));
// console.log("multyply with calc "+calc.multyply(10,5));
// console.log("divide with calc "+calc.divide(10,5));


// console.log("plus "+plus(5,2));
// console.log("minus "+minus(5,2));
// console.log("multyply "+multyply(5,2));
// console.log("divide "+divide(6,2));


// console.log(calcAll(8,4));

function calcAll(num,num1){
    for (key in calc) {
               console.log(calc[key](num,num1));
    }
}
calcAll(5,5);