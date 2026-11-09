import { Rook } from "./classes/Pieces/Rook.js";
import { Knight } from "./classes/Pieces/Knight.js";
import { Board } from "./classes/Board.js";
import { Bishop } from "./classes/Pieces/Bishop.js";
import { Queen } from "./classes/Pieces/Queen.js";

const board = new Board();
const whiteRook = new Rook("white");
const whiteKnight = new Knight("white");
const blackBishop = new Bishop("black");
const whiteQueen = new Queen("white");

console.log(`Cavalo branco em ${board.getColumn(0)}${1}`);
console.log(whiteKnight.possibleMoves(0, 0, board));
console.log(`Torre branca em ${board.getColumn(5)}${5}`);
console.log(whiteRook.possibleMoves(4, 5, board));
console.log(`Bispo preto em ${board.getColumn(5)}${5}`);
console.log(blackBishop.possibleMoves(4, 5, board));
console.log(`Rainha branca em ${board.getColumn(5)}${5}`);
console.log(whiteQueen.possibleMoves(4, 5, board));
