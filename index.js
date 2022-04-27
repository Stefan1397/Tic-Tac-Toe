const grid = document.getElementById("grid");
let grids = [["", "", ""], ["", "", ""], ["", "", ""]];
let turn = document.getElementById('turn');
let result = document.getElementById("result");
let reset = document.getElementById("reset");
let wonX = document.getElementById("player-X");
let won0 = document.getElementById("player-0");
let gameOver = false;
let moves = 0;
let player = "X";

for (let line = 0; line < 3; ++line) {
    for (let column = 0; column < 3; ++column) {
        let cell = document.createElement("div");
        cell.style.border = "1px solid black";
        grid.appendChild(cell);
        cell.addEventListener("click", pressX0, {once:true});
        function pressX0() {
            if (gameOver) {
                return;
            }
            this.innerHTML = player;
            grids[line][column] = player;
            ++moves;
            checkWinner();
            if (player == "X") {
                player = "0";
            } else {
                player = "X";
            }
        }
    }
}

function checkWinner() {
    let winningPlayer = 0;
    for (let i = 0; i < 3; ++i) {
        if (grids[0][i] != "" && grids[0][i] == grids[1][i] && grids[0][i] == grids[2][i]) {
            gameOver = true;
            winningPlayer = grids[0][i];
            result.innerHTML = "Player " + winningPlayer + " won";
            if (winningPlayer == "X") {
                ++wonX.innerHTML;
            } else {
                ++won0.innerHTML;
            }
        } else if (grids[i][0] != "" && grids[i][0] == grids[i][1] && grids[i][0] == grids[i][2]) {
            gameOver = true;
            winningPlayer = grids[i][0];
            result.innerHTML = "Player " + winningPlayer + " won";
            if (winningPlayer == "X") {
                ++wonX.innerHTML;
            } else {
                ++won0.innerHTML;
            }
        }
    }
    if (grids[0][0] != "" && grids[0][0] == grids[1][1] && grids[0][0] == grids[2][2]) {
        gameOver = true;
        winningPlayer = grids[0][0];
        result.innerHTML = "Player " + winningPlayer + " won";
        if (winningPlayer == "X") {
            ++wonX.innerHTML;
        } else {
            ++won0.innerHTML;
        }
    } else if (grids[0][2] != "" && grids[0][2] == grids[1][1] && grids[0][2] == grids[2][0]) {
        gameOver = true;
        winningPlayer = grids[0][2];
        result.innerHTML = "Player " + winningPlayer + " won";
        if (winningPlayer == "X") {
            ++wonX.innerHTML;
        } else {
             ++won0.innerHTML;
        }
    }
    if (player == "X") {
        turn.innerHTML = "Player's 0 turn";
    } else {
        turn.innerHTML = "Player's X turn";
    }
    if (moves == 9) {
        result.innerHTML = "Draw";
    }
}

reset.addEventListener('click', playAgain);

function playAgain() {
    window.location.reload();
}
