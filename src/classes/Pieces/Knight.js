import { Piece } from "../Piece.js";

export class Knight extends Piece {
  constructor(color) {
    super(color);
  }
  possibleMoves(row, column, board) {
    if (board.isValidPosition(row, column)) {
      let possibilities = [];
      const offsets = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
      ];

      offsets.forEach((offset) => {
        const move = [row + offset[0], column + offset[1]];
        if (board.isValidPosition(move[0], move[1])) {
          possibilities.push(move);
        }
      });

      return possibilities;
    } else {
      throw new Error("Peça em posição inválida!");
    }
  }
}
