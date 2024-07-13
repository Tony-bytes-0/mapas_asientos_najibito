const commonSeat = "p-1 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md";
const bottomSeat = "pr-5 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md";
const fullcontainerSizeSeat = "p-1 m-1 w-5/6 flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md";

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
  //tableContainer.style.transform = 'rotate(45deg)'
  selector.appendChild(tableContainer);
  reverseTuple(start, end, interval, tableContainer.id, seatStyle);
}

generateSeatsTuple(247, 265, 2, 'bottomSeat', bottomSeat)
generateSeatsTuple(246, 264, 2, 'bottomSeat2', bottomSeat)
//
generateSeatsTuple(283, 297, 2 , 'topSeat', commonSeat)
generateSeatsTuple(282, 296, 2 , 'topSeat2', commonSeat)
//
generateSeatsTuple(267, 281, 2 , 'midSeat', commonSeat)
generateSeatsTuple(266, 280, 2 , 'midSeat2', commonSeat)
//
