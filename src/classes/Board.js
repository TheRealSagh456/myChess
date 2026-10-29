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
}
