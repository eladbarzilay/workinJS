
let gameSet = [];
let xGameSet =[];
let oGameSet =[];
let idCount = 0;
let moveCount = 0;
let boardSize = 3;
let xOrO= null;
record = 1000;

// function myTimer() {
//   let counter = 0;
// const intervalId = setInterval(() => {
//   counter += 1;
// // if (counter === 5) {
// //     console.log('Done');
// //     clearInterval(intervalId);
// //   }
// }, 1000);
//   document.getElementById("demo").innerHTML = intervalId;
// }


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

document.getElementById("changeSize").addEventListener("click", function() {
  boardSize = Number(prompt("choose a new board size"));
  let x = document.querySelector("#board");
  x.innerHTML ="";
  clearBoard()
  idCount = 0;
  creatBoard(boardSize);
})

function clearBoard() {
  let spans = document.querySelectorAll("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.backgroundImage = "";
  }
  gameSet = [];
  xGameSet =[];
  oGameSet = [];
  moveCount = 0;
  document.querySelector("#board").addEventListener("click",writeToBoard);
}

function undoMove(){
    if(gameSet.length > 0){
        let lastMove = gameSet[gameSet.length-1];
        let remove = document.getElementById(lastMove);
        remove.style.backgroundImage =  "";
        gameSet.pop();
        moveCount--;
    }else{
        console.log("empty");
    }
    document.querySelector("#board").addEventListener("click",writeToBoard);
}

document.querySelector("#undo").addEventListener("click", () => {
    undoMove();
  });

function writeToBoard (e) {
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
      xOrO = 1;
    } else {
      markO(x);
      gameSet.push(x.id);
      xOrO = 0;
    }
    moveCount++;
  } else {
    alert("position is taken");
    // console.log("taken");
  }

  again();

}

document.querySelector("#board").addEventListener("click",writeToBoard);

// function animation() {
//   let spans = document.querySelectorAll("span");
//   // let x = document.getElementById(9);
//   // x.style.animation="example";
//   // x.style.animationDuration = "5s";
//   for (let i = 0; i < spans.length; i++) {
//     spans[i].style.animation = "example";
//     spans[i].style.animationSpeed ="fastest"
//     spans[i].style.animationDuration = "5s";
//   }
// }
function again() {
  if(xOrO==1 && win()==true) {

    // setTimeout(function() {animation()},1);

    setTimeout(function() { alert("x wins!!") }, 1);
    checkRecord(gameSet.length);
    setTimeout(function() {confirm("do you want to play again?")? clearBoard(): document.querySelector("#board").removeEventListener("click",writeToBoard);}, 1);

  }else if(xOrO==0 && win()==true){
    setTimeout(function() { alert("o wins!!") }, 1);
    checkRecord(gameSet.length);
    setTimeout(function() {confirm("do you want to play again?")? clearBoard(): document.querySelector("#board").removeEventListener("click",writeToBoard);}, 1);

    }else if(gameSet.length == (boardSize*boardSize) && win()==false){
      setTimeout(function() { alert("draw!!") }, 1);
      checkRecord(gameSet.length);
      setTimeout(function() {confirm("do you want to play again?")? clearBoard(): document.querySelector("#board").removeEventListener("click",writeToBoard);}, 1);
    }
  }

function markX(item) {
  item.style.backgroundImage = "url(./images/xcrop.png)";
    xGameSet.push(item.id);
    xGameSet.sort();
}


function markO(item) {
    item.style.backgroundImage = "url(./images/ocrop.png)";
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


document.querySelector("#save").addEventListener("click", () => {
  let x = confirm(`you can only save one game , last game saved will be deleted.
  are you sure ??`);
  if (x == true) {
    saveGame();
  }else {
    console.log("continue");
  }
});

function saveGame(){
  localStorage.gameSet = JSON.stringify(gameSet);
  localStorage.xGameSet = JSON.stringify(xGameSet);
  localStorage.oGameSet = JSON.stringify(oGameSet);
  localStorage.moveCount = JSON.stringify(moveCount);
  let save = document.querySelector("#board");
  localStorage.setItem("board",save.innerHTML);
  alert("saved");
}

document.querySelector("#load").addEventListener("click", () => {
  loadGame();
  });

function loadGame(){
  gameSet = JSON.parse(localStorage.gameSet);
  xGameSet = JSON.parse(localStorage.xGameSet);
  oGameSet = JSON.parse(localStorage.oGameSet);
  moveCount = JSON.parse(localStorage.moveCount);
  let board = document.querySelector("#board")
  let load = localStorage.getItem("board") ;
  board.innerHTML = load;
  alert("game loaded have fun");
}

document.querySelector("#record").addEventListener("click", () => {
  showRecord();
  });

function showRecord() {
  let record = JSON.parse(localStorage.record);
    alert(`record is ${record}`);
}
function checkRecord(num) {
  let record = JSON.parse(localStorage.record);
  if (record > num) {
    localStorage.record =  JSON.stringify(num);
  }
}

function checkWin(arr){
  let row1 =[`1`,`2`,`3`];
  let row2 =[`4`,`5`,`6`];
  let row3 =[`7`,`8`,`9`];
  let column1 = [`1`,`4`,`7`];
  let column2 = [`2`,`5`,`8`];
  let column3 = [`3`,`6`,`9`];
  let diagonall1 = [`1`,`5`,`9`];
  let diagonall2 = [`3`,`5`,`7`];
if(
  row1.every((e)=>arr.includes(e)) ==true||
  row2.every((e)=>arr.includes(e)) ==true||
  row3.every((e)=>arr.includes(e))==true||
  column1.every((e)=>arr.includes(e))==true||
  column2.every((e)=>arr.includes(e))==true||
  column3.every((e)=>arr.includes(e))==true||
  diagonall1.every((e)=>arr.includes(e))==true||
  diagonall2.every((e)=>arr.includes(e))
){
return true;
}else{
  return false;
}

}

function win(){
  if (checkWin(xGameSet)==true||checkWin(oGameSet)==true)  {
    return true;
  }else{
    return false;
  }
}




// function checkWin2(arr) {
//   let  success = 0;
//   let mode = 0; // 0 חיפוש תחילת שורה 
//   for (let i = 0; i < arr.length; i++) {
//     if(mode == 0){
//       if(arr[i]%boardSize==1){
//         mode = 1; //חיפוש איברים בשורה
//         success++;
//       }
//     }else{
      
//     }
  
    
//   }
//   }