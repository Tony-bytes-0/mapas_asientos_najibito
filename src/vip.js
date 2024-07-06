const commonSeat = "p-1 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800";
const vipSeat = "p-1 ml-2 mr-2 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800";
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
//VIP
generateSeatsTuple(30, 5, 5, "vip1", vipSeat);
generateSeatsTuple(29, 4, 5, "vip2", vipSeat);
generateSeatsTuple(28, 3, 5, "vip3", vipSeat);
generateSeatsTuple(27, 2, 5, "vip4", vipSeat);
generateSeatsTuple(26, 1, 5, "vip5", vipSeat);
