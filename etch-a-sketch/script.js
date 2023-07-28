let squareNum;
squareNum = prompt( 'how many squares in a row?');
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
    rowContainer.appendChild(column);
  }
}