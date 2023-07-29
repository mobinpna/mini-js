let squareNum;
squareNum = 16;
const container = document.querySelector('.canvasContainer');

for (let i = squareNum; i > 0 ;i--){
    let row = document.createElement('div');
    row.classList.add(`rowContainer` );
    row.classList.add(`row${i}`);
    container.appendChild(row);
}  

for (let i = squareNum; i > 0 ;i--){
    let rowContainer = document.querySelector(`.row${i}`);
  for(let j=squareNum; j > 0; j--){
    let column =document.createElement('div');
    column.classList.add('canvasTile');
    column.setAttribute("id", `column${j}row${i}`)
    rowContainer.appendChild(column);
  }
}

function changeColor(e) {
    console.log(e);
}

const canvasTiles = document.querySelectorAll('.canvasTile');
for (let i = canvasTiles.length-1; i>=0; i--) {
    canvasTiles[i].addEventListener('mouseover', (e) => changeColor(e));
}