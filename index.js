function createGrid(width, height) {
  const createdCanvas = document.createElement("div");
  createdCanvas.classList.add("canvas");
  document.querySelector("#app").appendChild(createdCanvas);
  const canvas = document.querySelector(".canvas");
  for (let row = 0; row < height; ++row) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");
    for (let column = 0; column < width; ++column) {
      const square = document.createElement("div");
      square.classList.add("pixel");
      rowContainer.appendChild(square);
    }
    canvas.appendChild(rowContainer);
  }
}

function clearGrid() {
  const canvas = document.querySelector(".canvas");
  if (!canvas) return;
  document.querySelector("#app").removeChild(canvas);
}

function main() {
  const inputButton = document.querySelector(".grid-input-size");
  inputButton.addEventListener("click", (event) => {
    let size = prompt("Enter a size for the grid: ");
    while (true) {
      if (size === null) return;
      size = parseInt(size);
      if (isNaN(size) || size < 1 || size > 100) {
        size = prompt("Please enter a number between 1 and 100 ");
        continue;
      }
      break;
    }
    clearGrid();
    createGrid(size, size);
    const pixels = document.querySelectorAll(".pixel");
    const changeColor = (event) => {
      console.log("ENTERED");
      event.target.classList.add("paint");
    };
    pixels.forEach((pixel) => {
      pixel.addEventListener("mouseenter", changeColor);
      // pixel.addEventListener("mouseleave", () => console.log("BYE!"));
    });
  });
}

main();
