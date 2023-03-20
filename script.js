// --- CREATE GRID ---
function createGrid(rows, columns) {
  //get container element where the grid will be created
  const container = document.getElementById('div-container');
  container.innerHTML = ''; // Clear previous grid

// Update the grid-template-columns property based on columns input
  container.style.gridTemplateColumns = `repeat(${columns}, auto)`;

  // Calculate the width and height of each grid cell
  const cellWidth = container.clientWidth / columns;
  const cellHeight = container.clientHeight / rows;

  //create rows and columns for the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const square = document.createElement('div');
      square.style.width = `${cellWidth}px`; // Set the width of the grid cell
      square.style.height = `${cellHeight}px`; // Set the height of the grid cell
      container.appendChild(square);
    }
  }

// Call the addColorHover function
addColorHover();
}
// Initialize default grid
createGrid(16, 16);

// --- ADD COLOR ON HOVER ---
function addColorHover() {
  const colorDiv = document.querySelectorAll('#div-container div');

  colorDiv.forEach(div => {
    let blackness = 0; // variable to keep track of the amount of black added to the div
    div.addEventListener('mouseover', () => {
      // Generate random pastel shades for each color component
      const red = Math.floor(Math.random() * 131) + 125;
      const green = Math.floor(Math.random() * 131) + 125;
      const blue = Math.floor(Math.random() * 131) + 125;

      // add black to the color of the div
      if (blackness < 100) {
        blackness += 10;
        const newRed = Math.round((1 - blackness / 100) * red);
        const newGreen = Math.round((1 - blackness / 100) * green);
        const newBlue = Math.round((1 - blackness / 100) * blue);
        div.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
      } else {
        div.style.backgroundColor = 'black'; // After 10 passes, set color to black
      }
    })
  });
}

// --- NEW GRID BUTTON ---
function generateGridSize() {
  let gridSize = 0;
  while (gridSize < 1 || gridSize > 100) {
    gridSize = parseInt(prompt('Enter desired grid size. Type a number between 1-100.'), 10);
    if (isNaN(gridSize)) {
      alert('Incorrect format. Please enter a number between 1-100.');
      gridSize = 0;
    } else if (gridSize < 1 || gridSize > 100) {
      alert('Your number must be between 1 and 100.');
    }
  }
  return gridSize;
}



// Add event listener for the "New Grid" button
const newGridButton = document.getElementById('gridButton');

newGridButton.addEventListener('click', () => {
  const gridSize = generateGridSize();
  createGrid(gridSize, gridSize);
});

// --- ERASE FUNCTION ---
function erase() {
  const colorDiv = document.querySelectorAll('#div-container div');

  colorDiv.forEach(div => {
    div.style.backgroundColor = 'rgb(236, 236, 240)';
  });
}

// event listener for the "Erase" button
const eraseButton = document.getElementById('erase');

eraseButton.addEventListener('click', () => {
  erase();
});
