const gameboard = document.querySelector("#gameboard");

let playerGo= 'white';

const startPiece = [
    Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook,
    Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn, Pawn,
    Rook, Knight, Bishop, King, Queen, Bishop, Knight, Rook];

function init() {
    startPiece.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('sq-id', i);
        square.innerHTML = startPiece;
        square.setAttribute('traggable', true);
        const color = Math.floor((63-i) /8)+1;
        if (color % 2 ===0) {
            square.classList.add(i%2 === 0 ? "white-sq" : "black-sq");
        } else {
            square.classList.add(i%2 === 0 ? "black-sq" : "white-sq");
        }
        gameboard.append(square);
    });
}

init();

const allSquares = document.querySelectorAll(".square");

allSquares.forEach(square => {
    square.addEventListener('click', move);
});

function move(e) {
    console.log(e.target.classList);
    
}


