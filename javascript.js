const grid = document.querySelector('.gridContainer');

    let gridSize = 16;



    function createGrid(gridSize) {
        for (i = 0; i < gridSize * gridSize; i++) {
            const oneSquare = document.createElement('div');
            oneSquare.classList.add('square-style');
            oneSquare.dataset.opacityLevel = '0';
            oneSquare.dataset.inreasing = true;
            grid.appendChild(oneSquare);
        }
    }

    const squareSize = 100 / gridSize;
    const squares = document.querySelector('.square-style');

    createGrid(gridSize);


