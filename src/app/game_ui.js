import '../style.css';

export function constructGameUI() {
    createTitle();
    createGameboards();
    createProgressDisplay();
  }
    
  function createTitle() {
    const title = document.querySelector('.title');
    title.textContent = 'BATTLESHIP'
  }
  
  function createGameboards() {
    const gameboards = document.querySelector('.gameboards');
    const gameboard1 = drawGameboard();
    const gameboard2 = drawGameboard();
    gameboards.appendChild(gameboard1);
    gameboards.appendChild(gameboard2);
  }
  
  function createProgressDisplay() {
    const progress = document.querySelector('.progress');
  
    const gameProgress1 = displayGameProgress();
    const gameProgress2 = displayGameProgress();
  
    progress.appendChild(gameProgress1);
    progress.appendChild(gameProgress2);
  }
  
  function drawGameboard() {
    const gameboardDiv = document.createElement('div');
    gameboardDiv.classList.add('gameboard');
    
    return createBoardLayout(gameboardDiv);
    
  }
  
  function createBoardLayout(div) {
    const playerName = document.createElement('div');
    playerName.classList.add('name');
    const gameGrid = document.createElement('div');
    gameGrid.classList.add('game_grid');
    const grids = appendGrids(gameGrid);
    div.append(playerName, grids);
    return div;
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
  
  function displayGameProgress() {
    const progressDiv = document.createElement('div');
    progressDiv.classList.add('progress_chart');
    for (let i=0; i<5; i++) {
      progressDiv.appendChild(createShipDiv(i))
    }
    return progressDiv;
  }
  
  function createShipDiv(i) {
    const shipDiv = document.createElement('div');
    shipDiv.classList.add('ship');
  
    const shipTitle = document.createElement('div');
    shipTitle.classList.add('ship_title');
    const shipState = document.createElement('div');
    shipState.classList.add('ship_state');
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