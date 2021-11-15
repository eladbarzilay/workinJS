let nums = [4,2,54,6,45,4,34,67,3,224,7,5]
let nums2 = [4,2,5]

let people = [
    {
name: 'John',
age: 21,
},
{
    name: 'dohn',
    age:35
},
{
name: 'gili',
age:37
},
{
    name:'kol',
    age:51
}
]

// let result = people.map((item) => {
//     return item.age>36?item: item.pop
// })

let result = people.filter(item => item.name.toString().includes("k") );
console.log(result)


// let x = nums.filter((item) => item > 50 ?item :0);

// let x = nums.map((item)=> item.toString().includes(6)?item:undefined);

let x = nums2.reduce(getSum,0)

function getSum(total, num) {
    return total + Math.round(num);
  }


console.log(x);