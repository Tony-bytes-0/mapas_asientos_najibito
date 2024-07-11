const commonSeat =
  "p-1 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md";
const tableContainerStyles = "flex flex-col w-1/4 h-full";
const tableStyles = "bg-amber-800 flex w-1/4 h-full rounded-b-full ml-2 mr-2";
const tableSeats =
  "p-1 mt-1 mb-1 w-full flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md";

function generateSeatsTuple(start, end, interval, id, seatStyle) {
  const seats = document.getElementById(id);
  for (let index = start; index <= end; index += interval) {
    const newItem = document.createElement("div");
    let indexString = index.toString();
    newItem.className = seatStyle;
    while (indexString.length < 3) {
      indexString = "0" + indexString;
    }
    newItem.textContent = indexString;
    seats.appendChild(newItem); // añadir el div al elemento seleccionado
  }
}
function reverseTuple(start, end, interval, id, seatStyle) {
  const seats = document.getElementById(id);
  for (let index = start; index >= end; index -= interval) {
    const newItem = document.createElement("div");
    let indexString = index.toString();
    newItem.className = seatStyle;
    while (indexString.length < 3) {
      indexString = "0" + indexString;
    }
    newItem.textContent = indexString;
    seats.appendChild(newItem); // añadir el div al elemento seleccionado
  }
}
function reverseRow(start, end, interval, id, seatStyle, newContainerId) {
  const selector = document.getElementById(id);
  const tableContainer = document.createElement("div");
  tableContainer.id = newContainerId;
  tableContainer.className = tableContainerStyles;
  selector.appendChild(tableContainer);
  reverseTuple(start, end, interval, tableContainer.id, seatStyle);
}
function createTable(id) {
  const selector = document.getElementById(id);
  const table = document.createElement("div");
  table.className = tableStyles;
  selector.appendChild(table);
}
function dobleSeatTable(start, end, interval, mainDivId, leftDiv, rightDiv, seatStyle) {
  reverseRow(start, end, interval, mainDivId, seatStyle, leftDiv); //, "left1", "right2"
  createTable(mainDivId);
  reverseRow(start + 3, end + 3, interval, mainDivId, seatStyle, rightDiv);
}