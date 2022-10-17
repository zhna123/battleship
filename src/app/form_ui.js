import { appendGrids, createShipDiv } from "./common_ui";

function createShipsForPlacement() {
    const leftDiv = document.querySelector('.board_container > .left');
    for (let i=0; i<5; i++) {
      leftDiv.appendChild(createShipDiv(i, true))
    }
}

function createBoardForPlacement() {
    const rightDiv = document.querySelector('.board_container > .right');
    appendGrids(rightDiv);
}

export {createBoardForPlacement, createShipsForPlacement}

