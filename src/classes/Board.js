import { pieceTypes } from "../utils/index.js";

export class Board {
  constructor() {
    let grid = [];
    for (let i = 0; i < 8; i++) {
      grid.push(Array.from({ length: 8 }).fill(null));
    }
    this.grid = grid;
  }

  getPiece(row, column) {
    if (this.isValidPosition(row, column)) {
      return this.grid[row][column];
    } else {
      throw new Error("Posição inválida!");
    }
  }

  setPiece(row, column, piece) {
    if (this.isValidPosition(row, column)) {
      this.grid[row][column] = piece;
    } else {
      throw new Error("Posição inválida!");
    }
  }

  isValidPosition(row, column) {
    const isValid = (index) =>
      Number.isInteger(index) && index <= 7 && index >= 0;
    return isValid(row) && isValid(column);
  }

  getColumn(index) {
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
    return columns[index];
  }

  sanitizeMoves(pieceType, positions) {
    const sanitizedMoves = [];
    if (!pieceTypes.includes(pieceType)) {
      throw new Error("Tipo de peça inválido");
    }
    if (pieceType === "pawn") {
      for (let i = 0; i <= 3; i++) {
        positions.possibilities[i] &&
        this.getPiece(
          positions.possibilities[i][0],
          positions.possibilities[i][1],
        ) !== null
          ? i === 0 || i === 3
            ? sanitizedMoves.push(positions.possibilities[i])
            : ""
          : i === 1 || i === 2
            ? sanitizedMoves.push(positions.possibilities[i])
            : "";
      }

      return sanitizedMoves;
    }
  }
}
