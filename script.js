const tHeadRow = document.getElementById("table-heading-row");
const tBody = document.getElementById("table-body");
const COLS = 26;
const ROWS = 100;

function colGen(typeOfCell, tableRow, isInnerText) {
  for (let col = 0; col < COLS; col++) {
    const th = document.createElement(typeOfCell);
    //   A,B,C,D
    // 0 -> 'A'
    // 0 -> 65 -> ascii char of 65
    //   fromCharCode will conver my dec to char
    // refer -> https://www.commfront.com/pages/ascii-chart
    if (isInnerText) {
      th.innerText = String.fromCharCode(col + 65);
    }
    tableRow.append(th);
  }
}

colGen("th", tHeadRow, true);

for (let row = 1; row <= ROWS; row++) {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.innerText = row;
  tr.append(th);
//   for (let col = 0; col < COLS; col++) {
//     const td = document.createElement("td");
//     tr.append(td);
//   }
  colGen("td", tr, false);
  tBody.append(tr);
}
