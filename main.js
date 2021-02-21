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
let playerNameInput = document.getElementById("player-form");
let clock = document.getElementById("clock");
let computer = document.getElementById('computer')

//----need to develop a function for changing players-----//
let playerOne = "";
let playerTwo = "";

submit.disabled = true;

let count = 0;

function timer() {
  count++;
  clock.textContent = `Time Elapsed: ${count} seconds`;
}

let startCount = (evt) => {
  newCount = setInterval(timer, 1000);
};

playerNameInput.addEventListener("submit", (evt) => {
  evt.preventDefault();
  playerOne = document.getElementById("player-one");
  playerTwo = document.getElementById("player-two");
  if (playerOne.value !== undefined) {
    statusText.textContent = `${playerOne.value}'s Move`;
    }
    else {
      statusText.textContent = `Player X's Move`
    }
});

let currentPlayer = "X";

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
      document.querySelectorAll(".cell").forEach((cell) => {
        if (winner.includes(parseInt(cell.id.split("-")[1]))) {
          cell.style.textDecoration = "line-through";
        }
        // cell.value.includes(winOne).style.textDecoration = "line-through"
      });
      if (playerOne.value !== undefined) {
        statusText.textContent = `${playerTwo.value} wins!`;
        start.disabled = false;
      } else {
        statusText.textContent = "Player O wins!";
        start.disabled = false;
      }
      clearInterval(newCount);

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
      document.querySelectorAll(".cell").forEach((cell) => {
        if (winner.includes(parseInt(cell.id.split("-")[1]))) {
          cell.style.textDecoration = "line-through";
        }
      });
      if (playerOne.value !== undefined) {
        statusText.textContent = `Player ${playerOne.value} wins!`;
        start.disabled = false;
      } else {
        statusText.textContent = `Player X wins!`;
        start.disabled = false;
      }
      clearInterval(newCount);

      // setTimeout(() => {
      //   document.location = "/";
      // }, 3000);
    } else if (
      !board.includes("") &&
      winOne === "" || winTwo === "" || winThree === "") {
      statusText.textContent = "Draw!";
      clearInterval(newCount);
    }
  }
}

//Player VS Player Game
//---Moved start button eventListener and put the player vs player game inside it, going to change start button id to player vs player
start.addEventListener("click", (evt) => {
  startCount();
  start.disabled = true;
  computer.disabled = true;
  submit.disabled = false;

  statusText.textContent = "Enter Player Names"
//----Used true and false values to trigger the players to change, no function needed, later changed values to X and O because they were put inside the board for win function
document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", (evt) => {
    if (start.disabled === true) {
      if (cell.textContent === "O" || cell.textContent === "X") {
        statusText.textContent = "Please select an empty cell.";
      } else if (currentPlayer === "X") {
        board[cell.textContent] = currentPlayer;
        cell.textContent = "X";
        currentPlayer = "O";
        if (playerTwo.value !== undefined){
          statusText.textContent = `${playerTwo.value}'s Move`
        } else {
        statusText.textContent = "Player O's Move";
        }
      } else {
        board[cell.textContent] = currentPlayer;
        cell.textContent = "O";
        currentPlayer = "X";
        if (playerOne.value !== undefined) {
        statusText.textContent = `${playerOne.value}'s Move`;
        }
        else {
          statusText.textContent = "Player X's Move"
        }
      }
      winCheck();
    }
  });
});
});
//Computer VS Player Game

computer.addEventListener('click', (evt) => {
  startCount();
  computer.disabled = true;
  start.disabled = true;
  statusText.textContent = "You are player X, good luck!"

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", (evt) => {
    if (computer.disabled === true) {
      if (cell.textContent === "O" || cell.textContent === "X") {
        statusText.textContent = "Please select an empty cell.";
      } else if (currentPlayer === "X") {
        board[cell.textContent] = currentPlayer;
        cell.textContent = "X";
        currentPlayer = "O";
        



      } else {
        
        
        board[cell.textContent] = currentPlayer;
        cell.textContent = "O";
        currentPlayer = "X";
        
      }
      winCheck();
    }
  });
});
})

/*
 
randomInteger = (min, max) => {
  let range = max - min + 1;
  let randInt = Math.round(Math.random() * range);

  return randInt;
}

while (cell.textContent)


*/














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
