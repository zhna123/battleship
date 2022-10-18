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

function createDraggables() {
    const ships = Array.from(document.querySelectorAll('.left .ship_state'));
    ships.forEach(ship => {
        ship.addEventListener('dragstart', handleDragStart);
        ship.addEventListener('dragend', handleDragEnd);
    })

}

function handleDragStart(e) {
    this.style.opacity = '0.4';
}

function handleDragEnd(e) {
    this.style.opacity = '1';
}

export {createBoardForPlacement, createShipsForPlacement, createDraggables}

