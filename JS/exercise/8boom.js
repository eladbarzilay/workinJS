var array = [];
function buff(val){
    var buff = '';
    var pad = 4 - val;
      while( pad-- > 0 )
              buff += ' ';            
    return buff;
  }
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        if((j*i).toString().includes(8) || ((j*i)/8)==8 ){
            array.push("boom"+"\t");
        }else{
            array.push (i*j+"\t");
        }
    }
    array.push("\n");
    
}
console.log(array.join(""))
