
let count = 0;

function change(){
    if(count%2==0){

        document.getElementById("change").innerHTML="change me back!!"
    }else{
        document.getElementById("change").innerHTML="change me !!"
    }
    count++;
}

function changeName(){
  p=  document.getElementsByName("p2")
   p[0].innerHTML="dss"
}
function changeTag(){
    let par =document.getElementsByTagName("p")
    par[1].innerHTML = "hello"
}

function changeClass(){
  let x =  document.getElementsByClassName("p3");
  document.getElementsByClassName("p3")[0].innerHTML="ok"
  console.log(x[0])
}

function query(){
    let x =  document.querySelector(".p3");
    
    console.log(x.innerHTML)
  }

  function queryAll(){
    let x =  document.querySelectorAll("#change");
    x[0].innerHTML="ok"
    console.log(x[0].innerHTML)
  }