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

    const targets = Array.from(document.querySelectorAll('.right .column'));
    targets.forEach(target => {
        target.addEventListener('dragover', handleDragOver);
        target.addEventListener('dragenter', handleDragEnter);
        target.addEventListener('dragleave', handleDragLeave);
        target.addEventListener('drop', handleDrop);
    })

}

function handleDragStart(e) {
    this.style.opacity = '0.4';

    e.dataTransfer.setData('text/plain', 'P');
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    const targets = Array.from(document.querySelectorAll('.right .column'));
    targets.forEach(target => {
        target.classList.remove('over');
    })
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    this.classList.add('over');
    const nextSibling = this.nextSibling;
    if (nextSibling) {
        this.nextSibling.classList.add('over'); 
    }  
}

function handleDragLeave(e) {
    // works when going from left to right
    this.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    const data = e.dataTransfer.getData('text/plain');
    this.innerHTML = data;
    this.nextSibling.innerHTML = data;
    return false;
}

export {createBoardForPlacement, createShipsForPlacement, createDraggables}

