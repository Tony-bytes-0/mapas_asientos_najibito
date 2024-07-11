const commonSeat =
  "p-1 m-1 w-2 flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md";
const tableContainerStyles = "flex flex-col w-1/4 h-full";
const tableStyles = "bg-amber-800 flex w-1/4 h-full rounded-b-full ml-2 mr-2";
const squareTableStyles = "bg-amber-800 flex w-1/4 h-2/3 mt-2 mb-2";
const circleTableStyles = "bg-orange-950 flex w-2/5 h-1/3 rounded-full mt-8"
const tableSeats = "p-1 mt-1 mb-1 w-full h-1/4 flex-shrink flex-grow shadow-xl bg-blue-800 rounded-md";
const circleTableSeats = "p-1 mt-3 mb-3 w-full h-1/4 flex-shrink shadow-xl bg-blue-600 rounded-md"


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
function createTable(id, opcionalTableStyles) {
    const localTableStyles = (typeof opcionalTableStyles === 'undefined') ? tableStyles : opcionalTableStyles;
  const selector = document.getElementById(id);
  const table = document.createElement("div");
  table.className = localTableStyles;
  selector.appendChild(table);
}
function dobleSeatTable(start, end, interval, numberOfSeats, mainDivId, leftDiv, rightDiv, seatStyle, tableStyle) {
  reverseRow(start, end, interval, mainDivId, seatStyle, leftDiv, tableStyle); //, "left1", "right2"
  createTable(mainDivId, tableStyle);
  reverseRow(start + numberOfSeats, end + numberOfSeats, interval, mainDivId, seatStyle, rightDiv, tableStyle);
}
function dobleSeatTableIncremental(start, end, interval,  mainDivId, leftDiv, rightDiv, seatStyle, tableStyle) {
    generateSeatsTuple(start, start, interval, mainDivId, seatStyle, leftDiv); //, "left1", "right2"
    createTable(mainDivId, tableStyle);
    generateSeatsTuple(end,  end,  interval, mainDivId, seatStyle, rightDiv);
  }


generateSeatsTuple(276,279,3, 'topSeats1', commonSeat)
generateSeatsTuple(275,278,3, 'topSeats2', commonSeat)
generateSeatsTuple(274,277,3, 'topSeats3', commonSeat)
//
generateSeatsTuple(283,295,4, 'topSeats4', commonSeat)
generateSeatsTuple(282,294,4, 'topSeats5', commonSeat)
generateSeatsTuple(281,293,4, 'topSeats6', commonSeat)
generateSeatsTuple(280,292,4, 'topSeats7', commonSeat)
//
generateSeatsTuple(300,325,5, 'topSeats8', commonSeat)
generateSeatsTuple(299,324,5, 'topSeats9', commonSeat)
generateSeatsTuple(298,323,5, 'topSeats10', commonSeat)
generateSeatsTuple(297,322,5, 'topSeats11', commonSeat)
generateSeatsTuple(296,321,5, 'topSeats12', commonSeat)
// ----------------- mesas -------------------
dobleSeatTableIncremental(328,331, 1, 'smallTables', 'smallTablesLeft', 'smallTablesRight', commonSeat, squareTableStyles)
dobleSeatTableIncremental(334,337, 1, 'smallTables2', 'smallTablesLeft2', 'smallTablesRight2', commonSeat, squareTableStyles)
dobleSeatTableIncremental(340,343, 1, 'smallTables3', 'smallTablesLeft3', 'smallTablesRight3', commonSeat, squareTableStyles)//aqui en vez de 346 - 349, el mapa tiene 346 - 348
dobleSeatTableIncremental(346,349, 1, 'smallTables4', 'smallTablesLeft4', 'smallTablesRight4', commonSeat, squareTableStyles)
dobleSeatTableIncremental(352,355, 1, 'smallTables5', 'smallTablesLeft5', 'smallTablesRight5', commonSeat, squareTableStyles)
dobleSeatTableIncremental(358,361, 1, 'smallTables6', 'smallTablesLeft6', 'smallTablesRight6', commonSeat, squareTableStyles)// segun el mapa termina en 360 tambien, pues se saltaron el puesto 347
//
dobleSeatTable(327,326, 1, 3, 'table', 'leftTable', 'rightTable', circleTableSeats, circleTableStyles)
dobleSeatTable(333,332, 1, 3, 'table2', 'leftTable2', 'rightTable2', circleTableSeats, circleTableStyles)
dobleSeatTable(339,338, 1, 3, 'table3', 'leftTable3', 'rightTable3', circleTableSeats, circleTableStyles)
dobleSeatTable(345,344, 1, 3, 'table4', 'leftTable4', 'rightTable4', circleTableSeats, circleTableStyles)
dobleSeatTable(351,350, 1, 3, 'table5', 'leftTable5', 'rightTable5', circleTableSeats, circleTableStyles)
dobleSeatTable(357,356, 1, 3, 'table6', 'leftTable6', 'rightTable6', circleTableSeats, circleTableStyles)
//
generateSeatsTuple(158,161,3, 'bottomSeats1', commonSeat)
generateSeatsTuple(157,160,3, 'bottomSeats2', commonSeat)
generateSeatsTuple(156,159,3, 'bottomSeats3', commonSeat)
//
generateSeatsTuple(165,181,4, 'bottomSeats4', commonSeat)
generateSeatsTuple(164,180,4, 'bottomSeats5', commonSeat)
generateSeatsTuple(163,179,4, 'bottomSeats6', commonSeat)
generateSeatsTuple(162,178,4, 'bottomSeats7', commonSeat)
//
generateSeatsTuple(186,211,5, 'bottomSeats8', commonSeat)
generateSeatsTuple(185,210,5, 'bottomSeats9', commonSeat)
generateSeatsTuple(184,209,5, 'bottomSeats10', commonSeat)
generateSeatsTuple(183,208,5, 'bottomSeats11', commonSeat)
generateSeatsTuple(182,207,5, 'bottomSeats12', commonSeat)
//aqui me falta una columna
generateSeatsTuple(241,257,4, 'lastSeat', commonSeat)
generateSeatsTuple(240,256,4, 'lastSeat2', commonSeat)
generateSeatsTuple(239,255,4, 'lastSeat3', commonSeat)
generateSeatsTuple(238,254,4, 'lastSeat4', commonSeat)