import { getOffsets, possibleMoves } from "../../utils/index.js";
import { Piece } from "../Piece.js";

export class King extends Piece {
  constructor(color) {
    super(color);
  }

  possibleMoves(row, column, board) {
    if (board.isValidPosition(row, column)) {
      const offsets = getOffsets("king");

      const possibilities = possibleMoves(row, column, board, offsets, true);

      return possibilities;
    } else {
      throw new Error("Peça em posição inválida!");
    }
  }
}
