import { possibleMoves } from "../../utils/index.js";
import { Piece } from "../Piece.js";

export class Knight extends Piece {
  constructor(color) {
    super(color);
  }
  possibleMoves(row, column, board) {
    if (board.isValidPosition(row, column)) {
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

      const possibilities = possibleMoves(row, column, board, offsets);

      return possibilities;
    } else {
      throw new Error("Peça em posição inválida!");
    }
  }
}
