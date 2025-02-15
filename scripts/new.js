// Example for creating a bar with a random value between 1 and 999:
const value = Math.floor(Math.random() * 999) + 1;
const cell = document.createElement("div");
cell.classList.add("cell");
cell.setAttribute("data-value", value);
// Then append the cell to your array container
document.querySelector(".array").appendChild(cell);
