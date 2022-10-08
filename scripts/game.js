//inicair minhas variáveis
let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let gameOver = false;
let deuVelha = 0;

let symbols = ['o', 'x'];

//Possibilidade de vitória
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//Adiciona simbolo ao quadrado
function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime]

        gameOver = isWin();

        //Vez do jogador
        if (gameOver == false) {
            velha()
            if (playerTime == 0) {
                playerTime = 1;
                emojiVencedor = "⚔️"
            } else {
                playerTime = 0;
                emojiVencedor = "🛡️"
            }
        }

    } 
    return gameOver;
}

//Houve vitória
function isWin() {

    for (let i = 0; i < winStates.length; i++) {

        let sequence = winStates[i];

        let pos1 = sequence[0];
        let pos2 = sequence[1];
        let pos3 = sequence[2];

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }

    }
    return false;
}

function velha() {
    deuVelha++
    if (deuVelha == 9) {
        return 9
    }
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    deuVelha = 0;
    clearScreen()
}