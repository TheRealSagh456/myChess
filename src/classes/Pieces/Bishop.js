import { Piece } from "../Piece.js";
import { getOffsets, possibleMoves } from "../../utils/index.js";

export class Bishop extends Piece {
  constructor(color) {
    super(color);
  }
  possibleMoves(row, column, board) {
    if (board.isValidPosition(row, column)) {
      const offsets = getOffsets("bishop");

      const possibilities = possibleMoves(row, column, board, offsets);

      return possibilities;
    } else {
      throw new Error("Peça em posição inválida!");
    }
  }
}
