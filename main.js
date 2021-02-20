let grid = document.getElementsByClassName("grid");
let rowOne = document.getElementById("row-1");
let rowTwo = document.getElementById("row-2");
let rowThree = document.getElementById("row-3");
let cellZ = document.getElementById("cell-0");
let cellOne = document.getElementById("cell-1");
let cellTwo = document.getElementById("cell-2");
let cellThree = document.getElementById("cell-3");
let cellFour = document.getElementById("cell-4");
let cellFive = document.getElementById("cell-5");
let cellSix = document.getElementById("cell-6");
let cellSeven = document.getElementById("cell-7");
let cellEight = document.getElementById("cell-8");
let start = document.getElementById("start");
let statusText = document.getElementById("status-text");
let cells = document.querySelectorAll(".cell");

//----need to develop a function for changing players-----
let currentPlayer = "X";

start.addEventListener("click", (evt) => {
  start.disabled = true;
  cells.textContent = "";
  statusText.textContent = "Player X's Move";
});

let board = ["", "", "", "", "", "", "", "", ""];

let winCombo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winCheck() {
  for (let i = 0; i <= 7; i++) {
    let winner = winCombo[i];
    let winOne = board[winner[0]];
    let winTwo = board[winner[1]];
    let winThree = board[winner[2]];
    if (winOne === "" || winTwo === "" || winThree === "") {
      continue;
    }
    //------because current player alternates after each turn if it is X's turn and win condition has been met O is the winner-------
    if (winOne === winTwo && winTwo === winThree && currentPlayer === "X") {
      statusText.textContent = "Player O wins!";
      start.disabled = false;
      document.querySelectorAll(".cell").forEach((cell) => {
        console.log(cell.id)
        console.log(winner)
        if (winner.includes(parseInt(cell.id.split("-")[1]))) {
          cell.style.textDecoration = "line-through"
          console.log("blah")
        }
        // cell.value.includes(winOne).style.textDecoration = "line-through"
        console.log(cell)
      })
      
      console.log(winOne)
      console.log(winTwo)
      console.log(winThree)
      
      // winTwo.style.textDecoraction = "line-through"
      // winThree.style.textDecoraction = "line-through"
      // setTimeout(() => {
      // document.location = "/";
      //  }, 3000);
    } else if (
      winOne === winTwo &&
      winTwo === winThree &&
      currentPlayer === "O"
    ) {
      statusText.textContent = "Player X wins!";
      start.disabled = false;
      
      
      // setTimeout(() => {
      //   document.location = "/";
      // }, 3000);
    } else if (
      !board.includes("") &&
      winOne !== winTwo &&
      winTwo !== winThree
    ) {
      statusText.textContent = "Draw!";
    }
  }
}

//----Used true and false values to trigger the players to change, no function needed

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", (evt) => {
    if (start.disabled === true) {
      if (cell.textContent === "O" || cell.textContent === "X") {
        statusText.textContent = "Please select an empty cell.";
      } else if (currentPlayer === "X") {
        board[cell.textContent] = currentPlayer;
        cell.textContent = "X";
        currentPlayer = "O";
        statusText.textContent = "Player O's Move";
        console.log(board);
      } else {
        board[cell.textContent] = currentPlayer;
        cell.textContent = "O";
        currentPlayer = "X";
        statusText.textContent = "Player X's Move";
        console.log(board);
      }
      winCheck();
    }
  });
});

// make a lineThroughFunction 

//build player array on each turn
//if player record includes winning combination game status equals player wins
//         currentPlayer ="X"
//         console.log(currentPlayer)
//     }
// }

//event listener for click
//store click target as variable
//iterate over cells
//match click target to cell iteration
//check to see if it's clicked
//change text content

/*
let cellArray = Array.from(document.getElementsByClassName('cell'));

for (let count = 0; count < imageArray.length; count++) {
    (function)
}

*/

// for (selected of allCells) {
//     selected.addEventListener('click', (evt) => {
//         selected.textContent = "X"
//     })
// }

//  allCells.addEventListener('click', (evt) => {
//     allCells.textContent = "X"
//  });
