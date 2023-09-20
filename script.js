// dimensions
const COLS = 26;
const ROWS = 100;

// table components
const tHeadRow = document.getElementById("table-heading-row");
const tBody = document.getElementById("table-body");
const currentCellHeading = document.getElementById("current-cell");
const boldBtn = document.getElementById("bold-btn");

// cache
let currentCell;

function colGen(typeOfCell, tableRow, isInnerText, rowNumber) {
  for (let col = 0; col < COLS; col++) {
    const cell = document.createElement(typeOfCell);
    //   A,B,C,D
    // 0 -> 'A'
    // 0 -> 65 -> ascii char of 65
    //   fromCharCode will conver my dec to char
    // refer -> https://www.commfront.com/pages/ascii-chart
    if (isInnerText) {
      cell.innerText = String.fromCharCode(col + 65);
      cell.setAttribute("id", String.fromCharCode(col + 65));
    } else {
      // COL -> A,B,C,D
      cell.setAttribute("id", `${String.fromCharCode(col + 65)}${rowNumber}`);
      cell.setAttribute("contenteditable", true);
      //   event.target is my currentCell
      cell.addEventListener("focus", (event) => focusHandler(event.target));
    }
    tableRow.append(cell);
  }
}
// this is for heading
colGen("th", tHeadRow, true);

function setHeaderColor(colId, rowId) {
  const colHead = document.getElementById(colId);
  const rowHead = document.getElementById(rowId);
  colHead.style.backgroundColor = "#ddddff";
  rowHead.style.backgroundColor = "#ddddff";
}

function focusHandler(cell) {
  currentCell = cell;
  //   A1 ->
  // A-> cell.id[0];
  // 11 -> cell.id[0].substring(1)
  setHeaderColor(cell.id[0], cell.id.substring(1));
  currentCellHeading.innerText = cell.id + " " + "selected";
}

for (let row = 1; row <= ROWS; row++) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.innerText = row;
  th.setAttribute("id", row);
  tr.append(th);
  //   for (let col = 0; col < COLS; col++) {
  //     const td = document.createElement("td");
  //     tr.append(td);
  //   }
  //   this is for empty cell
  colGen("td", tr, false, row);
  tBody.append(tr);
}


// once you click on any cell
// headers get highlighted
// and when you click on any other cell
// the previous headers color should go away
