import '../style.css';
import { createShipDiv, appendGrids } from './common_ui';

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
  
    const ships1 = displayShips();
    const ships2 = displayShips();
  
    progress.appendChild(ships1);
    progress.appendChild(ships2);
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

  function displayShips() {
    const shipsDiv = document.createElement('div');
    shipsDiv.classList.add('ships_chart');
    for (let i=0; i<5; i++) {
      shipsDiv.appendChild(createShipDiv(i))
    }
    return shipsDiv;
  }
  
  
