let board = document.getElementsByClassName('board')
let rowOne = document.getElementById('row-1')
let rowTwo = document.getElementById('row-2')
let rowThree = document.getElementById('row-3')
let cellZ = document.getElementById('cell-0')
let cellOne = document.getElementById('cell-1')
let cellTwo = document.getElementById('cell-2')
let cellThree = document.getElementById('cell-3')
let cellFour = document.getElementById('cell-4')
let cellFive = document.getElementById('cell-5')
let cellSix = document.getElementById('cell-6')
let cellSeven = document.getElementById('cell-7')
let cellEight = document.getElementById('cell-8')
let start = document.getElementById('start')
let statusText = document.getElementById('status-text')
let allCells = document.getElementsByClassName('cell')

//----need to develop a function for changing players-----
let currentPlayer = true 

start.addEventListener('click', (evt) => {
    start.disabled = true;
    statusText.textContent = "Player X's Move"

})
//----Used true and flase values to trigger the players to change, no function needed
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', event => {
        if (cell.textContent === "O" || cell.textContent === "X") {
            statusText.textContent = "Please select an empty cell."
        }        
        else if (currentPlayer === true){
        cell.textContent = "X"
        currentPlayer = false
        statusText.textContent = "Player O's Move"
        }
        else {
            cell.textContent = "O"
            currentPlayer = true
            statusText.textContent = "Player X's Move"
        }
    }) 
})


// playerSwitch = () => {
//     if (currentPlayer === "X"){
//         currentPlayer = "O"
//         console.log(currentPlayer)
//     }
//     if (currentPlayer === "O") {
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