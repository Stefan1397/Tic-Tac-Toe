const cells = document.querySelectorAll('.cell');
const turn = document.querySelector(".player");
const reset = document.querySelector(".reset");
let result = document.getElementById("result");
let wonX = document.getElementById("player-X");
let won0 = document.getElementById("player-0");
let player = true;
let moves = 0;

function startGame() {
    cells.forEach(cell => {
        cell.addEventListener('click', pressX0, {once:true});
    });
}

function checkWinner() {
    if(
        (cells[0].innerHTML != "" && cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML) ||
        (cells[3].innerHTML != "" && cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML) ||
        (cells[6].innerHTML != "" && cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML) ||
        (cells[0].innerHTML != "" && cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML) ||
        (cells[1].innerHTML != "" && cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML) ||
        (cells[2].innerHTML != "" && cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML) ||
        (cells[0].innerHTML != "" && cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML) ||
        (cells[2].innerHTML != "" && cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML)
    ) 
    {
        result.innerHTML = player?"Player X won" : "Player 0 won";
        player? ++wonX.innerHTML : ++won0.innerHTML;
    } else if (moves == 9) {
        result.innerHTML = "Draw!";
    }
    player? turn.innerHTML = "Player's 0 turn" : turn.innerHTML = "Player's X turn"; 
}

function pressX0() {
    this.innerHTML = player? "X" : "0";
    ++moves;
    checkWinner();
    player = !player;
}

reset.addEventListener('click', playAgain);

function playAgain() {
    cells.forEach(cell => {
        cell.innerHTML = '';
    })
    startGame();
    player = true;
    moves = 0;
    result.innerHTML = '';
}

startGame();
