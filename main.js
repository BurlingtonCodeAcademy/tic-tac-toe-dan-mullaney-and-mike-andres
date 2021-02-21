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
let computer = document.getElementById("computer");

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
  } else {
    statusText.textContent = `Player X's Move`;
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
      });
      if (playerOne.value !== undefined) {
        statusText.textContent = `${playerTwo.value} wins!`;
        start.disabled = false;
      } else {
        statusText.textContent = "Player O wins!";
        start.disabled = false;
      }
      clearInterval(newCount);

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
      (!board.includes("") && winOne === "") ||
      winTwo === "" ||
      winThree === ""
    ) {
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

  statusText.textContent = "Enter Player Names";
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
          if (playerTwo.value !== undefined) {
            statusText.textContent = `${playerTwo.value}'s Move`;
          } else {
            statusText.textContent = "Player O's Move";
          }
        } else {
          board[cell.textContent] = currentPlayer;
          cell.textContent = "O";
          currentPlayer = "X";
          if (playerOne.value !== undefined) {
            statusText.textContent = `${playerOne.value}'s Move`;
          } else {
            statusText.textContent = "Player X's Move";
          }
        }
        winCheck();
      }
    });
  });
});

//Computer VS Player Game

let playerChoice


computer.addEventListener("click", (evt) => {
  startCount();
  computer.disabled = true;
  start.disabled = true;
  statusText.textContent = "You are player X, good luck!";

  document.querySelectorAll(".cell").forEach((cell) => {
    cell.addEventListener("click", (evt) => {
      currentPlayer = "X";
      if (computer.disabled === true) {
        if (cell.textContent === "O" || cell.textContent === "X") {
          statusText.textContent = "Please select an empty cell.";
        } else {
          statusText.textContent = "Human : X and Computer : O";
          playerChoice = parseInt(cell.textContent)
          board[cell.textContent] = currentPlayer;
          cell.textContent = "X";
          winCheck();
          currentPlayer = "O";
          //----------------------------------------------------------------//
          //If Game Isn't Over the Computer Takes a Turn
          if (
            statusText.textContent !== "Draw!" ||
            statusText.textContent !== `Player X wins!` ||
            statusText.textContent !== "Player O wins!"
          ) {
            
            //Computer Picks a Random Cell
            let randomMove = Math.floor(Math.random() * 9);
            console.log(randomMove)
            console.log(playerChoice)
            
            //Random Cell is Available
            if (board[randomMove] !== "X" && board[randomMove] !== "O" && randomMove !== playerChoice) {
              board[randomMove] = "O";
              console.log(board)
              
              //Random Cell is Set to O and a Victory Check Occurs
              document.querySelectorAll(".cell").forEach((newCell) => {
                if (parseInt(newCell.textContent) === randomMove && randomMove !== playerChoice) {
                  newCell.textContent = "O";
                  winCheck();
                }
              });
            
              //Random Cell is Chosen Repeatedly Until an Available Cell is Matched
            } else {
              while (board[randomMove] === "X" && board[randomMove] === "O" && randomMove === playerChoice) {
                randomMove = Math.floor(Math.random() * 9);
                console.log(randomMove)
                console.log(board)
                console.log(playerChoice)

                //Random Cell is Available
                if (board[randomMove] !== "X" && board[randomMove] !== "O" && randomMove !== playerChoice) {
                  board[randomMove] = "O";
                  document.querySelectorAll(".cell").forEach((newCell) => {
                    
                    //Random Cell is Set to O and a Victory Check Occurs and Loop Ends
                    if (parseInt(newCell.textContent) === randomMove && randomMove !== playerChoice) {
                      newCell.textContent = "O";
                      winCheck();
                      return
                    }
                  });
                }
              }
            }
          }
        }
      }
    });
  });
});

