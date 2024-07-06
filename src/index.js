const commonSeat = "p-1 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800";
const vipSeat = "p-1 ml-3 mr-3 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800";
//const seatColor = "bg-blue-800";

function generateSeatsTuple(start, end, interval, id, seatStyle) {
  const seats = document.getElementById(id);

  for (let index = start; index >= end; index -= interval) {
    const newItem = document.createElement("div");
    let indexString = index.toString();
    newItem.className = seatStyle;
    while (indexString.length < 3) {
      indexString = '0' + indexString
    }
    newItem.textContent = indexString
    seats.appendChild(newItem); // añadir el div al elemento seleccionado
  }
}
//start, end, interval -------------------------------------------
//Turistica

generateSeatsTuple(154, 140, 2, "canteenSeatsUp", commonSeat);
generateSeatsTuple(153, 139, 2, "canteenSeatsDown", commonSeat);
//midseats
generateSeatsTuple(138, 26, 8, "midSeats1", commonSeat);
generateSeatsTuple(137, 25, 8, "midSeats2", commonSeat);
generateSeatsTuple(136, 24, 8, "midSeats3", commonSeat);
generateSeatsTuple(135, 23, 8, "midSeats4", commonSeat);
generateSeatsTuple(134, 22, 8, "midSeats5", commonSeat);
//aisle
generateSeatsTuple(133, 21, 8, "midSeats6", commonSeat);
generateSeatsTuple(132, 20, 8, "midSeats7", commonSeat);
generateSeatsTuple(131, 19, 8, "midSeats8", commonSeat);
//lastSeats
generateSeatsTuple(15, 5, 5, "lastSeats1", commonSeat);
generateSeatsTuple(14, 4, 5, "lastSeats2", commonSeat);
generateSeatsTuple(18, 3, 5, "lastSeats3", commonSeat);
generateSeatsTuple(17, 2, 5, "lastSeats4", commonSeat);
generateSeatsTuple(16, 1, 5, "lastSeats5", commonSeat); 

//Turistica
//start, end, interval -------------------------------------------
//VIP

