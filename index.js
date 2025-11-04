const grid = document.getElementById('grid');
const rows = 16;
const cols = 16;

for (let i = 0; i < rows; i++) {
  const row = document.createElement('div');
  row.className = 'row';

  for (let j = 0; j < cols; j++) {
    const columnn = document.createElement('div');
    columnn.className = 'columnn';
    // columnn.textContent = i * cols + j + 1;

    row.appendChild(columnn);
  }

  grid.appendChild(row);
}

box.addEventListener('mouseover', () => {
  box.style.backgroundColor = 'dodgerblue';
  box.style.color = 'white';
});
