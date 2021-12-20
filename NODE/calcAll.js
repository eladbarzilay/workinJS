let calc = require('./calc.js')


function calcAll(num,num1){
    for (key in calc) {
               console.log(calc[key](num,num1));
    }
}



module.exports = calcAll;