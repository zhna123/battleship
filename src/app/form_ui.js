import { appendGrids, bVertical, cVertical, createShipDiv, dVertical, sVertical } from "./common_ui";
import { pVertical } from "./common_ui";

let pPlaced = false
let dPlaced = false
let sPlaced = false
let bPlaced = false
let cPlaced = false

function createShipsForPlacement() {
    const leftDiv = document.querySelector('.board_container > .left');
    for (let i=0; i<5; i++) {
      leftDiv.appendChild(createShipDiv(i, true, true))
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
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.id);
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    const targets = Array.from(document.querySelectorAll('.right .column'));
    targets.forEach(target => {
        if (target.textContent === e.target.id) {
            e.target.draggable = false
            e.target.style.cursor = 'auto'
        }
        target.classList.remove('over');
    })
    if (pPlaced && dPlaced && sPlaced && bPlaced && cPlaced) {
        const submit = document.querySelector('button[type=submit]#submit');
        submit.style.backgroundColor = 'lightseagreen'
        submit.style.cursor = 'pointer'
        submit.disabled = false

        const preBtn = document.querySelector('.page.pre');
        preBtn.style.backgroundColor = 'grey'
        preBtn.style.cursor = 'auto'
        preBtn.disabled = true
    }
}

function handleDragOver(e) {
    // prevent default drop operation
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    e.target.classList.add('over');
}

function handleDragLeave(e) {
    // for each grid
    e.target.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation(); // stops the browser from redirecting.
    const data = e.dataTransfer.getData('text/plain');
    let length
    const elementId = e.target.id
    const rowIndex = elementId.split('')[0]
    const colIndex = elementId.split('')[1]
    switch(data) {
        case 'P': 
            length = 2
            pPlaced = true
            if (pVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                return 
            }
            break
        case 'D':
            length = 3
            dPlaced = true
            if (dVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                const thridElementId = (Number(rowIndex)+2).toString() + colIndex
                const thirdElement = document.getElementById(thridElementId)
                thirdElement.innerHTML = data;
                return
            }
            break
        case 'S':
            length = 3
            sPlaced = true
            if (sVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                const thridElementId = (Number(rowIndex)+2).toString() + colIndex
                const thirdElement = document.getElementById(thridElementId)
                thirdElement.innerHTML = data;
                return 
            }
            break
        case 'B':
            length = 4
            bPlaced = true
            if (bVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                const thridElementId = (Number(rowIndex)+2).toString() + colIndex
                const thirdElement = document.getElementById(thridElementId)
                thirdElement.innerHTML = data;
                const fourthElementId = (Number(rowIndex)+3).toString() + colIndex
                const fourthElement = document.getElementById(fourthElementId)
                fourthElement.innerHTML = data;
                return
            }
            break
        case 'C':
            length = 5
            cPlaced = true
            if (cVertical) {
                if (!isVerticalSpaceEmpty(e, length)) {
                    return
                }
                this.innerHTML = data
                const nextElementId = (Number(rowIndex)+1).toString() + colIndex
                const nextElement = document.getElementById(nextElementId)
                nextElement.innerHTML = data;
                const thridElementId = (Number(rowIndex)+2).toString() + colIndex
                const thirdElement = document.getElementById(thridElementId)
                thirdElement.innerHTML = data;
                const fourthElementId = (Number(rowIndex)+3).toString() + colIndex
                const fourthElement = document.getElementById(fourthElementId)
                fourthElement.innerHTML = data;
                const fifthElementId = (Number(rowIndex)+4).toString() + colIndex
                const fifthElement = document.getElementById(fifthElementId)
                fifthElement.innerHTML = data;
                return 
            }
            break
        default:
            break
    }
        
    if (isPassingEndOfBoard(e, length) || !isSpaceEmpty(e, length)) {
        return
    }
    
    this.innerHTML = data;
    let nextSibling = this.nextSibling
    for(let i=0; i<length-1; i++) {
        if (nextSibling) {
            nextSibling.innerHTML = data;
            nextSibling = nextSibling.nextSibling
        }
    }
    return false;
}

function isPassingEndOfBoard(e, length) {
    const elementId = e.target.id
    const rowIndex = elementId.split('')[0]
    const colIndex = elementId.split('')[1]
    if (colIndex > (10 - length)) {
        return true
    }
    return false
}

function isSpaceEmpty(e, length) {
    if (e.target.textContent !== '') {
        return false
    }
    let nextSibling = e.target.nextSibling
    for(let i=0; i<length-1; i++) {
        if (nextSibling && nextSibling.textContent !== '') {
            return false
        }
        nextSibling = nextSibling.nextSibling
    }
    return true
}

function isVerticalSpaceEmpty(e, length) {
    const currentElementId = e.target.id
    let rowIndex = currentElementId.split('')[0]
    let colIndex = currentElementId.split('')[1]
    while(length > 0) {
        const elementId = rowIndex + colIndex
        const element = document.getElementById(elementId)
        if (!element || element.textContent !== '') {
            return false
        }
        rowIndex++
        length--
    }
    return true
}

export {createBoardForPlacement, createShipsForPlacement, createDraggables}

