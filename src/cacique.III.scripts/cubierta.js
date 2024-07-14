const commonSeat = "p-1 m-1 w-20 h-14 flex-shrink shadow-xl bg-blue-800 rounded-md";
const ghost = "p-1 m-1 w-20 h-3/4 shadow-xl bg-blue-800 rounded-md opacity-0";
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
console.log('kjahsdkjashdasdasdasd')

generateSeatsTuple(120,132,3, 'topSeats', commonSeat)
generateSeatsTuple(133,142,3, 'topSeats', commonSeat)
generateSeatsTuple(119,131,3, 'topSeats2', commonSeat)
generateSeatsTuple(1,1,1, 'topSeats2', ghost)
generateSeatsTuple(134,140,3, 'topSeats2', commonSeat)
generateSeatsTuple(118,130,3, 'topSeats3', commonSeat)
generateSeatsTuple(1,1,1, 'topSeats3', ghost)
generateSeatsTuple(134,141,3, 'topSeats3', commonSeat)
//
generateSeatsTuple(1,2,1,'midleSeats', ghost)
generateSeatsTuple(1,2,1,'midleSeats2', ghost)
generateSeatsTuple(1,2,1,'midleSeats3', ghost)
generateSeatsTuple(1,2,1,'midleSeats4', ghost)
generateSeatsTuple(1,2,1,'midleSeats5', ghost)
generateSeatsTuple(97,117,4,'midleSeats', commonSeat)
generateSeatsTuple(96,116,4,'midleSeats2', commonSeat)
generateSeatsTuple(95,95,1,'midleSeats3', commonSeat)
generateSeatsTuple(94,94,1,'midleSeats4', commonSeat)
generateSeatsTuple(99,115,4,'midleSeats4', commonSeat)
generateSeatsTuple(93,93,1,'midleSeats5', commonSeat)
generateSeatsTuple(98,114,4,'midleSeats5', commonSeat)
//
generateSeatsTuple(76,88, 3, 'bottomSeats', commonSeat)
generateSeatsTuple(89,92, 1, 'bottomSeats', commonSeat)
generateSeatsTuple(75,87, 3, 'bottomSeats2', commonSeat)
generateSeatsTuple(74,86, 3, 'bottomSeats3', commonSeat)
//
generateSeatsTuple(1,1,1,'right4', ghost)
generateSeatsTuple(1,1,1,'right5', ghost)
generateSeatsTuple(1,1,1,'right6', ghost)
generateSeatsTuple(1,1,1,'right7', ghost)
generateSeatsTuple(1,1,1,'right8', ghost)
generateSeatsTuple(1,1,1,'right9', ghost)
generateSeatsTuple(1,1,1,'right10', ghost)
//
generateSeatsTuple(212,239,3,'right', commonSeat)
generateSeatsTuple(241,245,2, 'right', commonSeat)
generateSeatsTuple(211,238,3,'right2', commonSeat)
generateSeatsTuple(240,242,2,'right2', commonSeat)
generateSeatsTuple(210,237,3,'right3', commonSeat)
generateSeatsTuple(193,209,2,'right4', commonSeat)
generateSeatsTuple(192,208,2,'right5', commonSeat)
//
generateSeatsTuple(175,191,2,'right6', commonSeat)
generateSeatsTuple(174,190,2,'right7', commonSeat)
generateSeatsTuple(145,169,3,'right8', commonSeat)
//generateSeatsTuple(1,1,1, 'right8', commonSeat)
generateSeatsTuple(144,171,3,'right9', commonSeat)
generateSeatsTuple(173,173,1,'right9', commonSeat)
generateSeatsTuple(143,170,3,'right10', commonSeat)
generateSeatsTuple(172,172,1,'right10', commonSeat)