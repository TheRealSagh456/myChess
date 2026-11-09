export function possibleMoves(row, column, board, offsets) {
  if (board.isValidPosition(row, column)) {
    let possibilities = [];

    offsets.forEach((offset) => {
      const move = [row + offset[0], column + offset[1]];
      if (board.isValidPosition(move[0], move[1])) {
        possibilities.push(move);
      }
    });

    return possibilities;
  } else {
    throw new Error("Peça em posição inválida!");
  }
}

export function getOffsets(piece) {
  const pieces = ["bishop", "king", "knight", "pawn", "queen", "rook"];

  const offsets = [];

  if (!pieces.includes(piece)) {
    throw new Error("Tipo de peça inválida");
  }

  const padronized = (num) => {
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

  switch (piece) {
    case "bishop":
      padronized(1);
      break;
    case "king":
      break;
    case "knight":
      break;
    case "pawn":
      break;
    case "queen":
      padronized(1);
      padronized(2);
      break;
    case "rook":
      padronized(2);
      break;
  }

  return offsets;
}
