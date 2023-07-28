let squareNum;
squareNum = prompt( 'how many squares in a row?');
const container = document.querySelector('.canvasContainer');

for (let i = squareNum; i > 0 ;i--){
    let row = document.createElement('div');
    row.classList.add('rowContainer')
    container.appendChild(row);
}  
