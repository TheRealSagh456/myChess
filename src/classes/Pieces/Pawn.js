import { getOffsets, possibleMoves } from "../../utils/index.js";
import { Piece } from "../Piece.js";

export class Pawn extends Piece {
  constructor(color) {
    super(color);
  }

  possibleMoves(row, column, board) {
    if (board.isValidPosition(row, column)) {
      const offsets = getOffsets("pawn");

      if (this.color === "black") {
        offsets.forEach((array) => (array[0] = array[0] * -1));
        row === 6 ? offsets.push([-2, 0]) : "";
      } else if (this.color === "white" && row === 1) {
        offsets.push([2, 0]);
      }

      const possibilities = possibleMoves(row, column, board, offsets, true);

      const positions = { origin: [row, column], possibilities };

      const sanitizedMoves = board.sanitizeMoves("pawn", positions);

      return sanitizedMoves;
    } else {
      throw new Error("Peça em posição inválida!");
    }
  }

  enPassant(row, column, board, position) {
    const previousColumnPiece = board.getPiece(row, column - 1);
    const nextColumnPiece = board.getPiece(row, column + 1);

    if (previousColumnPiece.constructor.name === "Pawn") {
      position.push("previous");
    }

    if (nextColumnPiece.constructor.name === "Pawn") {
      position.push("next");
    }
  }
}
