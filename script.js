// your code here...
function loadGame() {
    state = 'X';
    gameState.innerHTML = `It's ${state}'s turn`;
    gameArray = ["","","","","","","","",""] ;
    win = false;
}

function changeState() {
    if(state === 'X') {
        state = 'O';
    } else {
        state = 'X'
    }
    gameState.innerHTML = `It's ${state}'s turn`
}

function fillCell(element,cellIndex) {
    if (win == false) {
        if (gameArray[cellIndex] === '') {
            gameArray[cellIndex] = state;
            element.innerHTML = state;
            if(!handlerEndGame()) {
                changeState();
            } 
        }
    }
    
}

function restartGame() {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.innerHTML = '';
    })
    loadGame();
}

function handlerEndGame() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameArray[a] === gameArray[b] && gameArray[a] === gameArray[c] && gameArray[a] !== "") {
            gameState.innerHTML = `Player ${state} has won`;
            win = true;
            return true;
        }
    }
    if (win == false) {
        let counter = 0;
        for (let i = 0; i < gameArray.length; i++) {
            if(!gameArray[i] == "") {
                counter++;
            }
        }
        if (counter == 9) {
            gameState.innerHTML = `Game ended in a draw`;
            win = true;
            return true;
        } else {
            return false;
        }
    }
        
}

let state;
let gameArray;
let gameState = document.querySelector(".game--status");
let win;

loadGame();

const test = document.querySelector(".game--container").addEventListener("click", (event) => {
    const cell = event.target;
    const cellIndex = cell.getAttribute("data-cell-index");
    fillCell(cell,cellIndex);
})

document.querySelector(".game--restart").addEventListener("click", restartGame);