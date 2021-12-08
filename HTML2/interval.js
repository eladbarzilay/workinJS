    // let times = Number(prompt("how many times do you want?"));
let scount=57;
let mcount=0;

    function timer(){
        if (scount<60) {
            console.log( "H:"+mcount+":"+scount++);         

        }else if (scount>=60) {
            scount=0;
            mcount++;
                console.log("H:"+mcount+":"+(scount++));
    }
    }
    let inter = setInterval(timer, 1000);

    // function stop() {
    //     clearInterval(inter);
    // }
    // setTimeout(stop,(2000*times));