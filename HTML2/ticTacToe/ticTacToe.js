let gameSet = [];
let xGameSet =[];
let oGameSet =[];
let idCount = 0;
let moveCount = 0;
let boardSize = 3;


creatBoard(boardSize);
function creatBoard(size) {
  let x = document.querySelector("#board");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      x.innerHTML += `<span id=${++idCount}> &nbsp</span>`;
    }
    x.innerHTML += `<br>`;
  }
}

function clearBoard() {
  let spans = document.querySelectorAll("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.backgroundImage = "none";
  }
  gameSet = [];
}

function undoMove(){
    if(gameSet.length > 0){
        let lastMove = gameSet[gameSet.length-1];
        let remove = document.getElementById(lastMove);
        remove.style.backgroundImage = "none";
        gameSet.pop();
        moveCount--;
    }else{
        console.log("empty");
    }
}

document.querySelector("#undo").addEventListener("click", () => {
    undoMove();
  });






document.querySelector("#board").addEventListener("click", (e) => {
  let id = e.target.id;
  if (id != "board") {
    id = e.target.id;
  } else {
    id = null;
  }
  let x = document.getElementById(id);
  let takenCheck = gameSet.find((v) => v == id);
  if (takenCheck == undefined && takenCheck != id) {
    if (moveCount % 2 == 0) {
      markX(x);
      gameSet.push(x.id);
    } else {
      markO(x);
      gameSet.push(x.id);
    }
    moveCount++;
    // console.log("o game "+oGameSet);
    // console.log("x game "+xGameSet);
  } else {
    // alert("position is taken");
    console.log("taken");
  }
//   console.log(gameSet);
});



function markX(item) {
  item.style.backgroundImage = "url(./images/x.jpg)";
    xGameSet.push(item.id);
    xGameSet.sort();
}

function markO(item) {
    item.style.backgroundImage = "url(./images/o.jpg)";
  oGameSet.push(item.id);
  oGameSet.sort();
}

document.querySelector("#clearBoard").addEventListener("click", () => {
  let x = confirm("are you sure?");
  if(x == true){
      clearBoard();
  }else{
    confirm("continue")
  }
});


function win(){
        for(let i = 0; i < xGameSet.length;i++){

        }
}




