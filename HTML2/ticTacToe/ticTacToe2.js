let gameSet = [];
let xGameSet = [];
let oGameSet = [];
let idCount = 0;
let moveCount = 0;
let boardSize = 3;
let board = new Array(boardSize * boardSize);
let xOrO = null;
let record = 1000;


function createPlayer() {
  let p = {
    name: prompt("player name?"),
  };
  return p;
}
creatBoard(boardSize);
function creatBoard(size) {
  let x = document.querySelector("#board");
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      x.innerHTML += `<span id='box${idCount++}'> &nbsp</span>`;
    }
    x.innerHTML += `<br>`;
  }
  p1 = createPlayer();
  p2 = createPlayer();
  document.getElementById("player1").innerHTML+=p1.name;
  document.getElementById("player2").innerText+=p2.name;
}

document.getElementById("changeSize").addEventListener("click", function () {
  boardSize = Number(prompt("choose a new board size"));
  let x = document.querySelector("#board");
  x.innerHTML = "";
  clearBoard();
  idCount = 0;
  creatBoard(boardSize);
});

function clearBoard() {
  let spans = document.querySelectorAll("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].style.backgroundImage = "";
  }
  gameSet = [];
  xGameSet = [];
  oGameSet = [];
  moveCount = 0;
  board = new Array(boardSize * boardSize);
  document.querySelector("#board").addEventListener("click", writeToBoard);
}

function undoMove() {
  if (gameSet.length > 0) {
    let lastMove = gameSet[gameSet.length - 1];
    let remove = document.getElementById(lastMove);
    remove.style.backgroundImage = "";
    gameSet.pop();
    moveCount--;
  } else {
    console.log("empty");
  }

  document.querySelector("#board").addEventListener("click", writeToBoard);
}

document.querySelector("#undo").addEventListener("click", () => {
  undoMove();
});

function writeToBoard(e) {
  let p1 = document.getElementById("player1");
  let p2 = document.getElementById("player2");
  let fullId = e.target.id;
  let id = Number(fullId.slice(3));
  if (fullId != "board") {
    id = id;

  if(moveCount%2 == 0) {
    p1.style.color = "black";
    p2.style.color ="blue"
  }else{
    p1.style.color = "blue";
    p2.style.color ="black";
  }
  let x = document.getElementById(fullId);
  let takenCheck = gameSet.find((v) => v == fullId);
  if (takenCheck == undefined && takenCheck != fullId ) {
    if (moveCount % 2 == 0) {
      markX(x);
      board[id] = "x";
      gameSet.push(x.id);
      xOrO = 1;
    } else {
      markO(x);
      board[id] = "o";
      gameSet.push(x.id);
      xOrO = 0;
    }
    moveCount++;
  } else {
    alert("position is taken");
    // console.log("taken");
  }
} else {
  id = null;
}
  again();
}

document.querySelector("#board").addEventListener("click", writeToBoard);

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
  if (xOrO == 1 && win() == true) {
    // setTimeout(function() {animation()},1);

    setTimeout(function () {
      alert("x wins!!");
    }, 1);
    checkRecord(gameSet.length);
    setTimeout(function () {
      confirm("do you want to play again?")
        ? clearBoard()
        : document
            .querySelector("#board")
            .removeEventListener("click", writeToBoard);
    }, 1);
  } else if (xOrO == 0 && win() == true) {
    setTimeout(function () {
      alert("o wins!!");
    }, 1);
    checkRecord(gameSet.length);
    setTimeout(function () {
      confirm("do you want to play again?")
        ? clearBoard()
        : document
            .querySelector("#board")
            .removeEventListener("click", writeToBoard);
    }, 1);
  } else if (gameSet.length == boardSize * boardSize && win() == false) {
    setTimeout(function () {
      alert("draw!!");
    }, 1);
    checkRecord(gameSet.length);
    setTimeout(function () {
      confirm("do you want to play again?")
        ? clearBoard()
        : document
            .querySelector("#board")
            .removeEventListener("click", writeToBoard);
    }, 1);
  }
}

function markX(item) {
  item.style.backgroundImage = "url(./images/xcrop.png)";
  board[item.id] = "x";
  xGameSet.push(item.id);
  xGameSet.sort();
}

function markO(item) {
  item.style.backgroundImage = "url(./images/ocrop.png)";
  board[item.id] = "o";
  oGameSet.push(item.id);
  oGameSet.sort();
}

document.querySelector("#clearBoard").addEventListener("click", () => {
  let x = confirm("are you sure?");
  if (x == true) {
    clearBoard();
  } else {
    confirm("continue");
  }
});

document.querySelector("#save").addEventListener("click", () => {
  let x = confirm(`you can only save one game , last game saved will be deleted.
  are you sure ??`);
  if (x == true) {
    saveGame();
  } else {
    console.log("continue");
  }
});

function saveGame() {
  localStorage.gameSet = JSON.stringify(gameSet);
  localStorage.xGameSet = JSON.stringify(xGameSet);
  localStorage.oGameSet = JSON.stringify(oGameSet);
  localStorage.moveCount = JSON.stringify(moveCount);
  let save = document.querySelector("#board");
  localStorage.setItem("board", save.innerHTML);
  alert("saved");
}

document.querySelector("#load").addEventListener("click", () => {
  loadGame();
});

function loadGame() {
  gameSet = JSON.parse(localStorage.gameSet);
  xGameSet = JSON.parse(localStorage.xGameSet);
  oGameSet = JSON.parse(localStorage.oGameSet);
  moveCount = JSON.parse(localStorage.moveCount);
  let board = document.querySelector("#board");
  let load = localStorage.getItem("board");
  board.innerHTML = load;
  alert("game loaded have fun");
  document.querySelector("#board").addEventListener("click", writeToBoard);
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
    localStorage.record = JSON.stringify(num);
  }
}

function win() {
  if (checkWin() == true) {
    return true;
  } else {
    return false;
  }
}

function checkWin() {
  let stam = [];
  for (let i = 0; i < boardSize; i++) {
    stam.push(new Array(boardSize));
  }

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const value = board[j + i * boardSize];

      if (!value) {
        continue;
      } else {
        stam[i][j] = value;
      }
    }
  }

  let raw = new Array(boardSize);
  let coloumn = new Array(boardSize);
  let alchsonLeft = new Array(boardSize);
  let alchsonRight = new Array(boardSize);
  
  for (let i = 0; i < boardSize; i++) {
    let countFromLeft = 0;
    let countFromRight = boardSize - 1;
    for (let j = 0; j < boardSize; j++) {
      raw[j] = stam[i][j];
      coloumn[j] = stam[j][i];
      alchsonLeft[j] = stam[j][countFromLeft++];
      alchsonRight[j] = stam[j][countFromRight--];
    }

    flag0 = raw.every((e) => (e == "x" ? (flag = true) : (flag = false)));
    flag1 = raw.every((e) => (e == "o" ? (flag = true) : (flag = false)));
    flag2 = coloumn.every((e) => (e == "x" ? (flag = true) : (flag = false)));
    flag3 = coloumn.every((e) => (e == "o" ? (flag = true) : (flag = false)));
    flag4 = alchsonLeft.every((e) =>
      e == "x" ? (flag = true) : (flag = false)
    );
    flag5 = alchsonLeft.every((e) =>
      e == "o" ? (flag = true) : (flag = false)
    );
    flag6 = alchsonRight.every((e) =>
      e == "x" ? (flag = true) : (flag = false)
    );
    flag7 = alchsonRight.every((e) =>
      e == "o" ? (flag = true) : (flag = false)
    );

    if (flag1 || flag0 || flag3 || flag2 || flag4 || flag5 || flag6 || flag7) {
      return true;
    }
  }
}
