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

    console.log(numCols, numRows);
    let setCols = numCols === 0 ? 1 : numCols;

    let newRow = document.createElement("tr");
    for(let i = 0; i < setCols; i++){
        console.log(numCols, numRows), setCols;
        console.log(setCols)
        let newCol = document.createElement("td");
        newCol.setAttribute('onclick', 'this.style.backgroundColor = colorSelected');
        newRow.appendChild(newCol);
    }
    numRows++;
    console.log(numCols, numRows);
    numCols = setCols;
    console.log(numCols, numRows);
    grid.appendChild(newRow);

    console.log(numCols, numRows);
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
            newCol.setAttribute('onclick', 'this.style.backgroundColor = colorSelected');
            rows[i].appendChild(newCol);
        }
        numCols++;
    }

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
}

// Fill all uncolored cells
function fillU(){

    // swithc to event lisenter?
    let cells = document.querySelectorAll("td");
    cells.forEach(cell => {
        if (cell.style.backgroundColor === "" || cell.style.backgroundColor === "white") {
            cell.style.backgroundColor = colorSelected; 
        }
    });
}

// Fill all cells
function fillAll(){
    let cells = document.querySelectorAll("td");
    cells.forEach(cell => {
            cell.style.backgroundColor = colorSelected; 
    });
}

// Clear all cells
function clearAll(){
    let cells = document.querySelectorAll("td");
    cells.forEach(cell => {
            cell.style.backgroundColor = ""; 
    });
}