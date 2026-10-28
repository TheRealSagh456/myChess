export class Piece {
  constructor(color) {
    if (color === "white" || color === "black") {
      this.color = color;
    } else {
      throw new Error("Cor inválida");
    }
  }
}
