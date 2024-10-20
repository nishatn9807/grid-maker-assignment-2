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
    let table = document.getElementById("grid");
    // no rows add col. 
    if (numRows == 0) {
        addR();
    } else {
        let rows = table.getElementsByTagName("tr");
        for (let i = 0; i < numRows; i++) {
            let newCol = document.createElement("td");
            rows[i].appendChild(newCol);
        }
    }
    numCols++;
    updateCountDisplay();
}

// Remove a row
function removeR() {
    let table = document.getElementById("grid");
    // do i want to add alert?
    if (numRows > 0) {
        table.deleteRow(-1);
        numRows--;
        // handle all rows deleted
        if (numRows === 0) {
            numCols = 0; 
        }
    }
    updateCountDisplay();
    
}

// Remove a column
function removeC() {
    let table = document.getElementById("grid");
    if (numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            table.rows[i].deleteCell(-1);
        }
        numCols--;
        if (numCols === 0) {
            numRows = 0;
        }
    }
    updateCountDisplay();
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