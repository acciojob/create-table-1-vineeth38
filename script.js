function insert_Row() {
    //Write your code here
  // Get the reference to the table
var table = document.getElementById("sampleTable");

// Create a new row element
var newRow = table.insertRow(0);

// Insert cells into the new row
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);

// Set the cell values
cell1.innerHTML = "New Cell1";
cell2.innerHTML = "New Cell2";

  
}
