let counter = 0;

let add = () => {
  document.getElementById("spn").innerText = ++counter;
};
function minus() {
  document.getElementById("spn").innerText = --counter;
}


function show(){

    if(document.getElementById("inp").value == document.getElementById("rng1").value){
        document.getElementById("guess").innerText =
         `${document.getElementById("rng1").value}
        good job!!!`;
    }else{
        document.getElementById("guess").innerText = 
        `${document.getElementById("rng1").value}
        try again ......`;
    }
    // document.getElementById("guess").innerText = document.getElementById("rng1").value;
}

function show2(){
    document.getElementById("output").innerText = document.getElementById("rng2").value;
}





