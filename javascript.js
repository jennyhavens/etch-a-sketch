const gridContainer = document.querySelector('.grid-container');
const changeButton = document.querySelector('#change-grid');
const randomColorButton = document.querySelector('#colors');
const eraserButton = document.querySelector('#eraser');
const opacityButton = document.querySelector('#opacity');
const resetButton = document.querySelector('#reset-grid');
const clrPicker = document.querySelector("#clr-picker");
//const for buttons here

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize**2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
            gridSquare.style.width = `${40 / gridSize}vw`;
            gridSquare.style.height = `${40 / gridSize}vw`;
            gridContainer.appendChild(gridSquare);

            
            //gridSquare.addEventListener('mouseover', () => {
                //gridSquare.style.backgroundColor = 'red';
            //});
    };

    colorGrid();
};
createGrid(gridSize);

//function blackWhite() { 
    //return "rgb(0, 0, 0)"; 
//};

let selectedColor = clrPicker.value;
let isRainbow = false;
clrPicker.addEventListener("input", () =>{
    selectedColor = clrPicker.value;
    isRainbow = false;
})

function colorGrid() {
    let gridSquare = document.querySelectorAll(".square");
    gridSquare.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if(isRainbow) {
                square.style.backgroundColor = getRandomColor();
            } else {
                square.style.backgroundColor = selectedColor;
            }
                square.style.transition = ".5s";
        });
    });
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

resetButton.addEventListener('click', () => {
    resetGrid();
    createGrid(gridSize);
});

eraserButton.addEventListener("click", () =>{
    selectedColor = "";
    isRainbow = false;
});

//handle rainbow color
randomColorButton.addEventListener("click", () =>{
    isRainbow = true;
});

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    };
};

function getRandomColor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
};