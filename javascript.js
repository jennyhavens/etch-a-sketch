const gridContainer = document.querySelector('.grid-container');

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize**2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('square');
            gridSquare.style.width = `${40 / gridSize}vw`;
            gridSquare.style.height = `${40 / gridSize}vw`;
            gridContainer.appendChild(gridSquare);
        };

    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => {
        let r = (Math.random() * 255);
        let g = (Math.random() * 255);
        let b = (Math.random() * 255);
        let randomRGB = `rgb(${r}, ${g}. ${b})`;

        square.addEventListener("mouseover", () => {
            if(square.style.backgroundColor === "") {
                square.style.backgroundColor = randomRGB;
            } else {
                square.style.opacity -= "-0.1";
            }
        });
    });    
};

document.addEventListener("DOMContentLoaded", () => {
    createGrid(gridSize);
});

function resetGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    };
};

const changeButton = document.querySelector('#change-grid');
changeButton.addEventListener('click', () => {
    const userInput = window.prompt("Choose new grid dimensions (enter 1-100):");

    if (userInput > 0 && userInput <= 100) {
        gridSize = userInput;
        resetGrid();
        createGrid(gridSize);
    } else if (isNaN(userInput)) {
        alert("Please input a number");
    } else {
        alert("The number must be between 1 and 100");
    };  
});

const resetButton = document.querySelector('#reset-grid');
resetButton.addEventListener('click', () => {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square) => {
        square.style.backgroundColor = "";
        square.style.opacity = "";
    });
}); 