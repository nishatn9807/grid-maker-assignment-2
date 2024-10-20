// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 


function updateCountDisplay() {
    document.getElementById("rowCountDisplay").innerHTML = `Rows: ${numRows}`;
    document.getElementById("colCountDisplay").innerHTML = `Columns: ${numCols}`;
    document.getElementById("colorValue").innerHTML = `Color: ${colorSelected}`;
}


function addR() {

    // new row makes colums 
    let grid = document.getElementById("grid");

    setCols = numCols == 0 ? 1 : numCols;

    let newRow = document.createElement("tr");
    for(let i = 0; i < setCols; i++){
        let newCol = document.createElement("td");
        newRow.appendChild(newCol);
    }
    numRows++;
    grid.appendChild(newRow);

    updateCountDisplay();
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}