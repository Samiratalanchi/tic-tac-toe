function loadGame() {
    state = 'X';
    gameState.innerHTML = `It's ${state}'s turn`;
    gameArray = ["","","","","","","","",""] ;
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
    if (gameArray[cellIndex] === '') {
        gameArray[cellIndex] = state;
        element.innerHTML = state;
        changeState();
    }
}

function restartGame() {
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.innerHTML = '';
    })
    loadGame();
}

let state;
let gameArray;
let gameState = document.querySelector(".game--status");

loadGame();

const test = document.querySelector(".game--container").addEventListener("click", (event) => {
    const cell = event.target;
    const cellIndex = cell.getAttribute("data-cell-index");
    fillCell(cell,cellIndex);
    
})

document.querySelector(".game--restart").addEventListener("click", restartGame);