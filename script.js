const container = document.getElementById('div-container');

// create 16 row grid
for (let i = 0; i < 16; i++) {
  const row = document.createElement('div');
  container.appendChild(row);

  // create 16 column grid
  for (let j = 0; j < 16; j++) {
    const column = document.createElement('div');
    container.appendChild(column);
  }
}

