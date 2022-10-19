let squares = document.querySelectorAll(".square");

//Deixa cada quadrado clicável quando o documento carrega
document.addEventListener('DOMContentLoaded', () => {

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

//Pega a posição do quadrado clicável
function handleClick(event) {

    let square = event.target;
    let position = square.id;
    let player = ''

    if (handleMove(position)) {
        if (playerTime == 0) {
            player = "Rick"
        } else {
            player = "Morty"
        }
        setTimeout(playAgain(player), 2000);   
    }
    if (deuVelha == 9) {
        setTimeout(playAgain(), 2000);
        deuVelha = 0
        
    }
    updateSquare(position);
}

//Adiciona simbolo ao quadrado
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'><div>`
}

//Jogar novamente
function playAgain(playerName) {

    let gameOverLayer = document.createElement("div")
    gameOverLayer.id = 'game-over'
    if (playerName) {
        gameOverLayer.innerHTML = `<div>O Jogo Acabou!!!<p>O vencedor foi ${playerName}!</p></div>`
    } else {
        gameOverLayer.innerHTML = `<div>O Jogo deu VELHA!!!</div>`
    }

    let btnJogar = document.createElement('button')
    btnJogar.setAttribute('id', 'btnJogar')
    btnJogar.innerText = 'Jogar Novamente'
    btnJogar.addEventListener('click', restartGame)
    gameOverLayer.appendChild(btnJogar)
    document.body.appendChild(gameOverLayer)
}

function clearScreen() {
    squares.forEach((square) => {
        square.innerHTML = ''
    })
    let gameOverLayer = document.getElementById("game-over")
    gameOverLayer.remove()
}
