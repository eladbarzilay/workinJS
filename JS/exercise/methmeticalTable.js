let array = []
function buff(val){
    let buff = '';
    let pad = 4 - val;
      while( pad-- > 0 )
              buff += ' ';            
    return buff;
  }
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        array.push ((i*j+'\t')); 
    }
    array.push("\n");
    
}
console.log(array.join(""));