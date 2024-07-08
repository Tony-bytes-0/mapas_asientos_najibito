const commonSeat = "p-1 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md";
const canteenSeats = "p-1 m-1 w-full h-1/4 flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md"
hideSignals = true; //controla la vista de las flechas 
if(hideSignals){
  document.getElementById('turistica.signal').className =  document.getElementById('turistica.signal').className + ' opacity-0'
}

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
//start, end, interval, id, tailWindClasses -------------------------------------------
console.log('terraza scrip')

/* generateSeatsTuple(172, 8, 8, 'terraza1', commonSeat)
generateSeatsTuple(171, 7, 8, 'terraza2', commonSeat)
generateSeatsTuple(170, 6, 8, 'terraza3', commonSeat)
generateSeatsTuple(169, 5, 8, 'terraza4', commonSeat)
generateSeatsTuple(168, 4, 8, 'terraza5', commonSeat)
generateSeatsTuple(167, 3, 8, 'terraza6', commonSeat)
generateSeatsTuple(166, 2, 8, 'terraza7', commonSeat)
generateSeatsTuple(165, 1, 8, 'terraza8', commonSeat) */ //si fueran 21 y 22 columnas

generateSeatsTuple(172, 169, 1, 'terraza0', canteenSeats)
generateSeatsTuple(168, 8, 8, 'terraza1', commonSeat)
generateSeatsTuple(167, 7, 8, 'terraza2', commonSeat)
generateSeatsTuple(166, 6, 8, 'terraza3', commonSeat)
generateSeatsTuple(165, 5, 8, 'terraza4', commonSeat)

generateSeatsTuple(164, 4, 8, 'terraza5', commonSeat)
generateSeatsTuple(163, 3, 8, 'terraza6', commonSeat)
generateSeatsTuple(162, 2, 8, 'terraza7', commonSeat)
generateSeatsTuple(161, 1, 8, 'terraza8', commonSeat)
//generateSeatsTuple(30, 5, 5, "vip1", "ss");