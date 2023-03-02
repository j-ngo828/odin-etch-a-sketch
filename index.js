function createGrid(width, height) {
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

function main() {
  createGrid(16, 16);
  const pixels = document.querySelectorAll(".pixel");
  const changeColor = (event) => {
    console.log("ENTERED");
    event.target.classList.add("paint");
  };
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter", changeColor);
    // pixel.addEventListener("mouseleave", () => console.log("BYE!"));
  });
}

main();
