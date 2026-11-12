export const pieceTypes = ["bishop", "king", "knight", "pawn", "queen", "rook"];

/**
 *
 * @param {*} row Linha que a peça está / Row of the piece
 * @param {*} column Coluna que a peça está / Column of the piece
 * @param {*} board Tabuleiro instanciado / Board class instance
 * @param {*} offsets Variações de movimentos por índice / Index based movements variations
 * @param {*} log Para ver as casas no console, como A1, F2, etc / To show the positions in the console, like A1, F2, etc
 * @returns Array with possible moves: [[4,2], [5,3], ...]
 */
export function possibleMoves(row, column, board, offsets, log) {
  if (board.isValidPosition(row, column)) {
    let possibilities = [];
    let positions = log ? [] : null;

    if (log && typeof log !== "boolean") {
      throw new Error("'log' é um parâmetro booleano");
    }

    offsets.forEach((offset) => {
      const move = [row + offset[0], column + offset[1]];
      if (board.isValidPosition(move[0], move[1])) {
        possibilities.push(move);
        log ? positions.push(`${board.getColumn(move[1])}${move[0] + 1}`) : "";
      }
    });

    if (typeof log === "boolean" && log === true) {
      const organizedPositions = positions.sort((a, b) => {
        const [letterA, numA] = [a[0], parseInt(a.slice(1))];
        const [letterB, numB] = [b[0], parseInt(b.slice(1))];

        if (letterA > letterB) return 1;
        if (letterA < letterB) return -1;

        return numA - numB;
      });

      let formattedLog = organizedPositions
        .toLocaleString()
        .replaceAll(",", ", ");
      console.log(formattedLog);
    }

    return possibilities;
  } else {
    throw new Error("Peça em posição inválida!");
  }
}

/**
 *
 * @param {string} piece O tipo de peça / The piece's type
 * @returns {number[][]} Os deslocamentos possíveis a partir da posição atual / The possible offsets from the current position
 */
export function getOffsets(pieceType) {
  const offsets = [];

  if (!pieceTypes.includes(pieceType)) {
    throw new Error("Tipo de peça inválida");
  }

  /**
   *
   * @param {*} num 1 para Bispo, 2 para Torre, e ambos para Rainha / 1 for Bishop, 2 for Rook and both for Queen
   */
  const repeatables = (num) => {
    if (num === 1) {
      for (let i = 1; i <= 8; i++) {
        offsets.push([i, i]);
        offsets.push([-i, -i]);
        offsets.push([i, -i]);
        offsets.push([-i, i]);
      }
    } else if (num === 2) {
      for (let i = 1; i <= 8; i++) {
        offsets.push([i, 0]);
        offsets.push([-i, 0]);
        offsets.push([0, i]);
        offsets.push([0, -i]);
      }
    } else {
      throw new Error("Numeração inválida");
    }
  };

  switch (pieceType) {
    case "bishop":
      repeatables(1);
      break;
    case "king":
      [
        [1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
        [0, 1],
        [0, -1],
      ].forEach((item) => offsets.push(item));
      break;
    case "knight":
      [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
      ].forEach((item) => offsets.push(item));
      break;
    case "pawn":
      [
        [1, 0],
        [1, 1],
        [1, -1],
      ].forEach((item) => offsets.push(item));
      break;
    case "queen":
      repeatables(1);
      repeatables(2);
      break;
    case "rook":
      repeatables(2);
      break;
  }

  return offsets;
}
