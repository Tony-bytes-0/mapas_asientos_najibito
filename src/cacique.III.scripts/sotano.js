const commonSeat = "p-1 m-1 w-20 h-3/4 shadow-xl bg-blue-800 rounded-md";
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
generateSeatsTuple(51, 69, 3, 'topSeats', commonSeat)
generateSeatsTuple(50, 71, 3, 'topSeats2', commonSeat)
generateSeatsTuple(49, 70, 3, 'topSeats3', commonSeat)
//asientos del final
generateSeatsTuple(72,72,1, 'topSeats3', commonSeat)
generateSeatsTuple(73,73,1, 'topSeats2', commonSeat)
//asientos fantasma
generateSeatsTuple(1,1,1, 'midSeats', ghost)
generateSeatsTuple(1,1,1, 'midSeats2', ghost)
generateSeatsTuple(1,1,1, 'midSeats3', ghost)
generateSeatsTuple(25,46,3, 'midSeats', commonSeat)
generateSeatsTuple(24,48,3, 'midSeats2', commonSeat)
generateSeatsTuple(23,47,3, 'midSeats3', commonSeat)
//asientos de abajo - primera fila
generateSeatsTuple(3,4,1, 'bottomSeats', commonSeat)
generateSeatsTuple(7,16,3, 'bottomSeats', commonSeat)
generateSeatsTuple(18,22,2, 'bottomSeats', commonSeat)
//segunda fila
generateSeatsTuple(2,2,1, 'bottomSeats2', commonSeat)
generateSeatsTuple(1,1,1, 'bottomSeats2', ghost)
generateSeatsTuple(6,15,3, 'bottomSeats2', commonSeat)
generateSeatsTuple(17,21,2, 'bottomSeats2', commonSeat)
//tercera fila
generateSeatsTuple(1,1,1, 'bottomSeats3', commonSeat)
generateSeatsTuple(1,1,1, 'bottomSeats3', ghost)
generateSeatsTuple(5,14,3, 'bottomSeats3', commonSeat)
