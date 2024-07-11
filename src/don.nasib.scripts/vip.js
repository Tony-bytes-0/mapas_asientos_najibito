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
//start, end, interval, id, tailWindClasses -------------------------------------------
dobleSeatTable(122, 120, 1, "topTable1", "left1", "right1", tableSeats)
dobleSeatTable(128, 126, 1, "topTable2", "left2", "right2", tableSeats)
dobleSeatTable(134, 132, 1, "topTable3", "left3", "right3", tableSeats)
dobleSeatTable(140, 138, 1, "topTable4", "left4", "right4", tableSeats)
dobleSeatTable(146, 144, 1, "topTable5", "left5", "right5", tableSeats)
dobleSeatTable(152, 150, 1, "topTable6", "left6", "right6", tableSeats)
//
generateSeatsTuple(71, 75, 2, "topSeats1", commonSeat);
generateSeatsTuple(70, 74, 2, "topSeats2", commonSeat);
//
generateSeatsTuple(78, 99, 3, "topSeats3", commonSeat);
generateSeatsTuple(77, 98, 3, "topSeats4", commonSeat);
generateSeatsTuple(76, 97, 3, "topSeats5", commonSeat);
generateSeatsTuple(103, 119, 4, "topSeats6", commonSeat);
generateSeatsTuple(102, 118, 4, "topSeats7", commonSeat);
generateSeatsTuple(101, 117, 4, "topSeats8", commonSeat);
generateSeatsTuple(100, 116, 4, "topSeats9", commonSeat);
//
generateSeatsTuple(60, 69, 3, "mainSeats1", commonSeat);
generateSeatsTuple(59, 68, 3, "mainSeats2", commonSeat);
generateSeatsTuple(58, 67, 3, "mainSeats3", commonSeat);
//
generateSeatsTuple(3, 57, 3, "mainSeats4", commonSeat);
generateSeatsTuple(2, 56, 3, "mainSeats5", commonSeat);
generateSeatsTuple(1, 55, 3, "mainSeats6", commonSeat);
