import { getOffsets } from "../../utils/index.js";
import { Piece } from "../Piece.js";
import { possibleMoves } from "../../utils/index.js";

export class Queen extends Piece {
  constructor(color) {
    super(color);
  }
  possibleMoves(row, column, board) {
    if (board.isValidPosition(row, column)) {
      const offsets = getOffsets("queen");

      const possibilities = possibleMoves(row, column, board, offsets);

      return possibilities;
    } else {
      throw new Error("Peça em posição inválida!");
    }
  }
}
