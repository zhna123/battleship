
function createShipDiv(i, draggable=false) {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
  
    const shipTitle = document.createElement('div');
    shipTitle.classList.add('ship_title');
    const shipState = document.createElement('div');
    shipState.classList.add('ship_state');
    if (draggable) {
        shipState.draggable = true;
        shipState.style.cursor = 'move';
    }
    // fill in ship names
    switch (i) {
      case 0:
        shipTitle.textContent = 'PATROL';
        initShipState(shipState, 2, 'P');
        break;
      case 1:
        shipTitle.textContent = 'DESTROYER';
        initShipState(shipState, 3, 'D');
        break;
      case 2:
        shipTitle.textContent = 'SUBMARINE';
        initShipState(shipState, 3, 'S');
        break;
      case 3:
        shipTitle.textContent = 'BATTLESHIP';
        initShipState(shipState, 4, 'B');
        break;
      case 4:
        shipTitle.textContent = 'CARRIER';
        initShipState(shipState, 5, 'C');
        break;
      default:
        break;
    }
    shipDiv.appendChild(shipTitle);
    shipDiv.appendChild(shipState);
    return shipDiv;
}
  
function initShipState(shipState, numberOfHoles, symbol) {
    for(let i=0; i<numberOfHoles; i++) {
      const stateSquare = document.createElement('div');
      stateSquare.classList.add('state_square');
      stateSquare.textContent = symbol;
      shipState.appendChild(stateSquare);
    }
    return shipState;
}

function appendGrids(div) {
    for (let i=0; i<10; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      for (let i=0; i<10; i++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        rowDiv.appendChild(columnDiv);
      }
      div.appendChild(rowDiv);
    }
    return div;
}

export {createShipDiv, appendGrids}