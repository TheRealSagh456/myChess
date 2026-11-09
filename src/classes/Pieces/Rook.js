import { getOffsets, possibleMoves } from "../../utils/index.js";
import { Piece } from "../Piece.js";

export class Rook extends Piece {
  constructor(color) {
    super(color);
  }

  possibleMoves(row, column, board) {
    if (board.isValidPosition(row, column)) {
      const offsets = getOffsets("rook");

      const possibilities = possibleMoves(row, column, board, offsets);

      return possibilities;
    } else {
      throw new Error("Peça em posição inválida!");
    }
  }
}
