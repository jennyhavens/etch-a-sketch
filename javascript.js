const gridContainer = document.querySelector('.grid-container');
const changeButton = document.querySelector('#change-grid');
const randomColorButton = document.querySelector('#colors');
const blackWhiteButton = document.querySelector('#black-white');
const whiteBlackButton = document.querySelector('#white-black');
const opacityButton = document.querySelector('#opacity');
const resetButton = document.querySelector('#reset-grid');
//const for buttons here

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize**2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
            gridSquare.style.width = `${40 / gridSize}vw`;
            gridSquare.style.height = `${40 / gridSize}vw`;
            gridContainer.appendChild(gridSquare);

        gridSquare.addEventListener('mouseover', () => {
            gridSquare.style.backgroundColor = getRandomColor();
        });
    };
};
createGrid(gridSize);

//function drawingOnGrid() {
   // const squares = document.querySelectorAll('.square');
    //squares.forEach((square) => {
        //square.addEventListener("mouseover", () => {
            //if(isLeftClick) {
                //if(isRainbow) {
                    //item.style.backgroundColor = "hsl(" + Math.floor(Math.random() * (355 -1) + 1) + ",65%,65%)";
                //} else {
                   //item.style.backgroundColor = selectedColor;
                //}
        //squares.addEventListener('mouseover', () => {
            //squares.style.backgroundColor = getRandomColor();
       // });
//}

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    };
};

changeButton.addEventListener('click', () => {
    const userInput = window.prompt("Choose new grid dimensions (enter 1-100):");
    if (userInput > 0 && userInput <= 100) {
        gridSize = userInput;
        resetGrid();
        createGrid(gridSize);
    } else if (isNaN(userInput)) {
        alert("Please input a number between 1 and 100");
    } else {
        alert("The number must be between 1 and 100");
    };  
});

//const allSquares = document.querySelectorAll('.square');
//allSquares.forEach(square => {
    //if(square.style.backgroundColor === "") {
        //square.style.backgroundColor = getRandomColor;
    //}
//});

function getRandomColor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
};

randomColorButton.addEventListener('click', () => {
    getRandomColor();
});

resetButton.addEventListener('click', () => {
    resetGrid();
    createGrid(gridSize);
});