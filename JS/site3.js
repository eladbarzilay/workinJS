
let check = prompt("how much is the check?");
let checkNum = + check;
let tip = 0.15;

if(check <= 200 && check >= 50){
    let checktip = checkNum*tip;
    let together = checkNum + checktip;
    // console.log("check is "+ check + " tip is "+ checktip + " all together is "+together)  ;
    console.log(` cost : ${checkNum}
    tip : ${checktip}
    total : ${together}`);

}else{
    tip = 0.20;
    let checktip = check*tip;
    let together = checkNum + checktip;
    // console.log("check is "+ check + " tip is "+ checktip + " all together is "+together) ;
    console.log(` cost : ${checkNum}
    tip : ${checktip}
    total : ${together}`);

}