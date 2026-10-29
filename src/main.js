import { Rook } from "./classes/Pieces/Rook.js";
import { Knight } from "./classes/Pieces/Knight.js";
import { Board } from "./classes/Board.js";

const board = new Board();
const whiteRook = new Rook("white");
const whiteKnight = new Knight("white");

console.log(whiteKnight.possibleMoves(0, 0, board));
console.log(whiteRook.color);
