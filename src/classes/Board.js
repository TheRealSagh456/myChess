class Board {
  constructor() {
    let grid = [];
    for (let i = 0; i < 8; i++) {
      grid.push(Array.from({ length: 8 }).fill(null));
    }
    this.grid = grid;
  }

  getPiece(row, column) {
    this.validatePosition(row, column);
    return this.grid[row][column];
  }

  setPiece(row, column, piece) {
    this.validatePosition(row, column);
    this.grid[row][column] = piece;
    const columnIdentifier = this.getColumn(column);
    if (piece === null) {
      return `posição ${columnIdentifier}${8 - row} vazia`;
    }
    return `${piece} posicionada em ${columnIdentifier}${8 - row}`;
  }

  validatePosition(row, column) {
    const isValid = (index) =>
      Number.isInteger(index) && index <= 7 && index >= 0;
    if (isValid(row) && isValid(column)) {
      return;
    } else {
      throw new Error("Posição fora do escopo");
    }
  }

  getColumn(index) {
    const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
    return columns[index];
  }
}

const board = new Board();

console.log(board.setPiece(0, 0, "blabla"));
console.log(board.getPiece(0, 0));
console.log(board.setPiece(0, 1, "teste2"));
console.log(board.getPiece(0, 1));
console.log(board.setPiece(0, 0, null));
console.log(board.getPiece(0, 0));
