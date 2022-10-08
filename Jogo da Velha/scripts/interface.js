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

    if (handleMove(position)) {
        setTimeout(() => {
            alert("O Jogo Acabou\nO Vencedor foi o Player " + emojiVencedor)
        }, 10);
        playAgain()
    }
    if (deuVelha == 9) {
        setTimeout(() => {
            alert("O Jogo deu Velha ")
        }, 10);
        deuVelha = 0
        playAgain()
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
function playAgain() {
    let btnJogar = document.createElement('button')
    btnJogar.setAttribute('id', 'btnJogar')
    btnJogar.innerText = 'Jogar Novamente'
    btnJogar.addEventListener('click', restartGame)
    document.body.appendChild(btnJogar)
}

function clearScreen() {
    squares.forEach((square) => {
        square.innerHTML = ''
    })
    let btnJogar = document.getElementById("btnJogar")
    btnJogar.remove()
}
