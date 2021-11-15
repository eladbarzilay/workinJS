let animals = [ "cat","dog","dolphin","snake","bee","donkey","pig"];

let result = animals.filter((value , index , array)=>{

    return value.includes('a');
})

let result2 = animals.filter(value => value.includes('a'))

let result3 = animals.filter((value,index) => value.includes('a') && index%2==0);
