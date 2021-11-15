//function declaration 

function sayHello(){
    console.log("Hello!");
}

//function expresion

let sayHi= function(){
    console.log("Hello!");
}

let sayHi2 = sayHello;

//callback functions

function ask (question , function1,  function2){
    if(confirm(question)){
        function1()
    }else{
       function2()
    }
}
function yes(){
    alert("of course");
}
function no(){
    alert("no no no");
}
function sleep(){
    alert("go to sleep")
}
function play(){
    alert("go to play");
}
function run(){
    alert("go to run");
}
function stop(){
    alert("stop");
}


ask("are you hungry?" , yes,no)
ask("are you tired?" ,sleep,play)
ask("can you keep running?" , run,stop)