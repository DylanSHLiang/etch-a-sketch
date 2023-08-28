const container = document.querySelector(".container");
const button = document.querySelector("button");
const maxSize = 600;

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
            newBox.setAttribute("style", `border: 1px solid rgb(50, 50, 50); height: ${boxSize}px; width: ${boxSize}px; flex: 0 0 auto;`);
            newBox.addEventListener("mouseenter", () => {
                newBox.style["background-color"] = "rgb(50, 50, 50)";
            });
            newRow.appendChild(newBox);
        }
    }
} 

function deleteGrid() {
    container.innerHTML = '';
}

newGrid(16);

button.addEventListener("click", () => {
    var size = prompt("How many boxes?");
    while (size < 1 || size > 100) {
        size = prompt("Please enter a number from 0 - 100");
    }
    deleteGrid();
    newGrid(size);
});

