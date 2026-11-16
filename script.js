const boardDiv = document.querySelector("#board");

function createBoard() {
  for (let i = 0; i <= 7; i++) {
    const row = document.createElement("div");
    row.id = i;
    boardDiv.appendChild(row);
    for (let j = 0; j <= 7; j++) {
      const indexSum = i + j;
      if (indexSum % 2 === 0) {
        const lightSquare = document.createElement("div");
        lightSquare.classList.add("lightSquare");
        row.appendChild(lightSquare);
      } else {
        const darkSquare = document.createElement("div");
        darkSquare.classList.add("darkSquare");
        row.appendChild(darkSquare);
      }
    }
  }
}

createBoard();
