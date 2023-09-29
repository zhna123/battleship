export let pVertical = false
export let dVertical = false
export let sVertical = false
export let bVertical = false
export let cVertical = false

function createShipDiv(i, draggable=false, orientationControl=false) {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
  
    const shipTitle = document.createElement('div');
    shipTitle.classList.add('ship_title');
    let shipState = document.createElement('div');
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
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            pVertical = !pVertical
            shipState = transform(shipState, pVertical) 
          })
        }    
        break;
      case 1:
        shipTitle.textContent = 'DESTROYER';
        initShipState(shipState, 3, 'D');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            dVertical = !dVertical
            shipState = transform(shipState, dVertical) 
          })
        }    
        break;
      case 2:
        shipTitle.textContent = 'SUBMARINE';
        initShipState(shipState, 3, 'S');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            sVertical = !sVertical
            shipState = transform(shipState, sVertical) 
          })
        }    
        break;
      case 3:
        shipTitle.textContent = 'BATTLESHIP';
        initShipState(shipState, 4, 'B');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            bVertical = !bVertical
            shipState = transform(shipState, bVertical) 
          })
        }    
        break;
      case 4:
        shipTitle.textContent = 'CARRIER';
        initShipState(shipState, 5, 'C');
        if (orientationControl) {
          shipState.addEventListener("click", e => {
            cVertical = !cVertical
            shipState = transform(shipState, cVertical) 
          })
        }    
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
    shipState.id = symbol
    return shipState;
}

function transform(shipState, isVertical) {
  if (isVertical) {
    shipState.style.transform = 'rotate(90deg)';
  } else {
    shipState.style.transform = 'rotate(0)';
  }
  return shipState
}

function appendGrids(div) {
    for (let i=0; i<10; i++) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      for (let j=0; j<10; j++) {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        columnDiv.id = i.toString() + j.toString();
        rowDiv.appendChild(columnDiv);
      }
      div.appendChild(rowDiv);
    }
    return div;
}

export {createShipDiv, appendGrids}