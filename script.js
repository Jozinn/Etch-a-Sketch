const container = document.getElementById("container");
const reset = document.getElementById("reset");
function getBox(boxSize) {
    let rows = [];
    let squares = [];
    for(let i=0; i<boxSize; i++) {
        rows[i] = document.createElement("div");
        rows[i].classList.add("row");
        for(let j=0; j<boxSize; j++) {
            squares[j] = document.createElement("div");
            squares[j].classList.add("square");
            rows[i].appendChild(squares[j]);
        }
        container.appendChild(rows[i]);
    }
}
getBox(16);
container.addEventListener("mouseover", e => {
    const target = e.target;
    target.classList.add("color");
});
reset.addEventListener("click", () => {
    container.innerHTML = "";
    let boxSize = prompt("Give a box size: ");
    if (boxSize > 100) {
        alert("The given box size is too big. Enter a number equal 100 or less.");
        return;
    } 
    getBox(boxSize);
})