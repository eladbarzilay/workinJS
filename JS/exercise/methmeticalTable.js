let array = []
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        array.push ((i*j+'\t')); 
    }
    array.push("\n");
    
}
console.log(array.join(""));