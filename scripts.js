const container = document.querySelector(".container");
const newButton = document.querySelector(".new");
const colorButton = document.querySelector("input");
const saveButton = document.querySelector(".save");
const maxSize = 600;
var color = '#000000';

function newGrid(size) {
    var boxSize = maxSize / size;
    for (let i = 0; i < size; i++) {
        let newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.setAttribute("style", "display: flex; justify-content: center;");
        container.appendChild(newRow);
        for (let j = 0; j < size; j++) {
            let newBox = document.createElement("div");
            newBox.classList.add("box");
            newBox.setAttribute("style", `border: 0; height: ${boxSize}px; width: ${boxSize}px; flex: 0 0 auto; background-color: white;`);
            newBox.addEventListener("mouseenter", () => {
                newBox.style["background-color"] = `${color}`;
            });
            newRow.appendChild(newBox);
        }
    }
} 

function deleteGrid() {
    container.innerHTML = '';
}

newGrid(16);

newButton.addEventListener("click", () => {
    var size = prompt("How many boxes? (1 - 100)");
    while (size < 1 || size > 100) {
        size = prompt("Please enter a number from 0 - 100");
    }
    deleteGrid();
    newGrid(size);
});

colorButton.addEventListener("input", () => {
    color = colorButton.value;
})

saveButton.addEventListener("click", () => {
    
})