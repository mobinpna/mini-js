let squareNum = 16;
const container = document.querySelector('.canvasContainer');

function createCanvas(){
    const rmTiles = document.querySelectorAll('.rowContainer');
    if(rmTiles.length !== 0){
        rmTiles.forEach(row => row.parentNode.removeChild(row));
    }

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
    const canvasTiles = document.querySelectorAll('.canvasTile');
    for (let i = canvasTiles.length-1; i>=0; i--) {
        canvasTiles[i].addEventListener('mouseover', (e) => changeColor(e.target.id));
    }
}

function ColorCodeGenerator(){
    let colorCode = Math.floor(Math.random() * 256);
    return colorCode;
}

function changeColor(id) {
    let tile = document.querySelector(`#${id}`);
    tile.setAttribute('style', `background-color: rgb(${ColorCodeGenerator()},${ColorCodeGenerator()},${ColorCodeGenerator()});`)
}

function clearCanvas() {
    const tiles = document.querySelectorAll('.canvasTile');
    tiles.forEach(tile => tile.style.backgroundColor = '#eaeaee');
}

createCanvas();

const newCanvas= document.querySelector('.new');
newCanvas.addEventListener('click', () => {
    squareNum = prompt('How many squares per side?');
    if(squareNum !== null) createCanvas();
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => clearCanvas());