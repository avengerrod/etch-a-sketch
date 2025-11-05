const grid = document.getElementById('grid');
const drawChoice = document.querySelector('#drawChoice');
let isDrawing = false;
let currentMode = 'color'; // default mode
const colorPicker = document.getElementById('colorPicker');
let currentColor = '#000000'; // default black
const sizeButton = document.getElementById('sizeButton');
const rowInput = document.getElementById('row');
const colInput = document.getElementById('column');
const rows = 16;
const cols = 16;
colorPicker.addEventListener('input', (event) => {
  currentColor = event.target.value;
  console.log('Selected color:', currentColor);
});
// Create the grid
function createGrid(rows, cols) {
  grid.innerHTML = ''; // clear existing grid
  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < cols; j++) {
      const column = document.createElement('div');
      column.className = 'column';
      column.addEventListener('mousedown', handleDraw);
      column.addEventListener('mouseover', handleDraw);
      row.appendChild(column);
    }
    grid.appendChild(row);
  }
}
// Drawing logic
function handleDraw(event) {
  if (event.type === 'mouseover' && !isDrawing) return;
  let option = event.target;
  switch (currentMode) {
    case 'color':
      option.style.backgroundColor = currentColor;
      break;
    case 'random':
      option.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      break;
    case 'erase':
      option.style.backgroundColor = '';
      break;
  }
}
// Mouse state tracking
grid.addEventListener('mousedown', () => (isDrawing = true));
grid.addEventListener('mouseup', () => (isDrawing = false));
grid.addEventListener('mouseleave', () => (isDrawing = false));
// Tools
drawChoice.addEventListener('click', (event) => {
  const choice = event.target.id;
  let columnSelected = document.querySelectorAll('.column');
  switch (choice) {
    case 'colorButton':
      currentMode = 'color';
      break;
    case 'randomButton':
      currentMode = 'random';
      break;
    case 'eraseButton':
      currentMode = 'erase';
      break;
    case 'clearButton':
      columnSelected.forEach(column => {
        column.style.backgroundColor = '';
      });
      break;
  }
});
// Create New Grid Size
sizeButton.addEventListener('click', () => {
  const rows = parseInt(rowInput.value);
  const cols = parseInt(colInput.value);
  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0 ) {
    alert('Please enter valid positive numbers for rows and columns.');
    return;
  }
  else if (rows > 100 || cols > 100 ) {
    alert('Numbers can be only be up to 100.');
    return;
  }
  createGrid(rows, cols);
});
// Initialize
createGrid(rows, cols);