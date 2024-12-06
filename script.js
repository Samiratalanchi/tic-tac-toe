let state = 'X';
let gameState = document.querySelector(".game--status")
gameState.innerHTML = `It's ${state}'s turn`;

function changeState() {
    if(state === 'X') {
        state = 'O';
    } else {
        state = 'X'
    }
    gameState.innerHTML = `It's ${state}'s turn`
}

function writeTurn(cellIndex) {
    cells[cellIndex].innerHTML = state;
}

const cells = document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const cellIndex = cell.getAttribute('data-cell-index');
        writeTurn(cellIndex);
        changeState();
    });
})