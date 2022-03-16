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

function pressX0() {
    this.innerHTML = player?"X":"0";
    ++moves;
    let cell0 = cells[0].innerHTML;
    let cell1 = cells[1].innerHTML;
    let cell2 = cells[2].innerHTML;
    let cell3 = cells[3].innerHTML;
    let cell4 = cells[4].innerHTML;
    let cell5 = cells[5].innerHTML;
    let cell6 = cells[6].innerHTML;
    let cell7 = cells[7].innerHTML;
    let cell8 = cells[8].innerHTML;
    if(
        (cell0 != "" && cell0 == cell1 && cell1 == cell2) ||
        (cell3 != "" && cell3 == cell4 && cell4 == cell5) ||
        (cell6 != "" && cell6 == cell7 && cell7 == cell8) ||
        (cell0 != "" && cell0 == cell3 && cell3 == cell6) ||
        (cell1 != "" && cell1 == cell4 && cell4 == cell7) ||
        (cell2 != "" && cell2 == cell5 && cell5 == cell8) ||
        (cell0 != "" && cell0 == cell4 && cell4 == cell8) ||
        (cell2 != "" && cell2 == cell4 && cell4 == cell6)
    ) 
    {
        result.innerHTML = player?"Player X won":"Player 0 won";
        if (player) {
            ++wonX.innerHTML;
        } else {
            ++won0.innerHTML;
        }
    } else if (moves == 9) {
        result.innerHTML = "Draw!";
    }
    player =! player;
    if (player) {
        turn.innerHTML = "Player's X turn";
    } else {
        turn.innerHTML = "Player's 0 turn";
    }
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
