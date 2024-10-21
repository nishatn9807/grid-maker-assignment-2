// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

function addR() {
    let grid = document.getElementById("grid");
    let setCols = numCols === 0 ? 1 : numCols;

    let newRow = document.createElement("tr");
    for(let i = 0; i < setCols; i++){
        let newCol = document.createElement("td");
        newCol.setAttribute('onclick', 'this.style.backgroundColor = colorSelected');
        newRow.appendChild(newCol);
    }
    numRows++;
    numCols = setCols;
    grid.appendChild(newRow);
    
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