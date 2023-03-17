function createGrid(rows, columns) {
  //get container element where the grid will be created
  const container = document.getElementById('div-container');

  //create rows and columns for the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const square = document.createElement('div');
      container.appendChild(square);
    }
  }
}
createGrid(16, 16);

// Get all divs inside the container to apply hover state
const colorDiv = document.querySelectorAll('#div-container div');

// Add event listener to each div to change background color on hover
colorDiv.forEach(div => {
  div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'black';
  })
});
