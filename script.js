function createGrid(rows, columns) {
  //get container element where the grid will be created
  const container = document.getElementById('div-container');

  //create rows for the grid
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    container.appendChild(row);

    //create columns for each row
    for (let j = 0; j < columns; j++) {
      const column = document.createElement('div');
      container.appendChild(column);
    }
  }
}
createGrid(16, 16);
