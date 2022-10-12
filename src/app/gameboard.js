import Ship from "./ship";

const Gameboard = function() {

    const patrol = Ship('P');
    const destroyer = Ship('D');
    const submarine = Ship('S');
    const battleShip = Ship('B');
    const carrier = Ship('C');

    // 10X10 grid
    const gameboard = [];
    const initGameboard = () => {
        for(let i=0; i<10; i++) {
            gameboard.push([]);
        }
    }

    const missedShots = [];
    const missedAttacks = [];
    const sunkShips = [];

    const setupGameboard = (pStart, dStart, sStart, bStart, cStart) => {
        // place all ships
        setupShip(patrol, pStart, true);
        setupShip(destroyer, dStart, true);
        setupShip(submarine, sStart, false)
        setupShip(battleShip, bStart, true)
        setupShip(carrier, cStart, true);
    }

    const setupShip = (ship, start, isHorizontal) => {
        const placement = ship.placeShip(start, isHorizontal);
        for(let i=0; i<placement.length; i++) {
            gameboard[placement[i][0]][placement[i][1]] = ship.mark;
        }
    }

    const receiveAttack = (coordinate) => {
        const gameboardValue = gameboard[coordinate[0]][coordinate[1]];
        // hit
        if (gameboardValue) {
            switch(gameboardValue) {
                case 'P':
                    patrol.hit(coordinate);
                    if (patrol.isSunk()) {
                        sunkShips.push(patrol);
                    }
                    break;
                case 'D':
                    destroyer.hit(coordinate);
                    if (destroyer.isSunk()) {
                        sunkShips.push(destroyer);
                    }
                    break;
                case 'S':
                    submarine.hit(coordinate);
                    if(submarine.isSunk()) {
                        sunkShips.push(submarine);
                    }
                    break;
                case 'B':
                    battleShip.hit(coordinate);
                    if(battleShip.isSunk()) {
                        sunkShips.push(battleShip);
                    }
                    break;
                case 'C':
                    carrier.hit(coordinate);
                    if(carrier.isSunk()) {
                        sunkShips.push(carrier);
                    }
                default:
                    break;
            }
        } else {
            missedShots.push(coordinate);
        }
    }

    const areAllSunk = () => {
        return sunkShips.length == 5;
    }

    return {initGameboard, setupGameboard, receiveAttack, areAllSunk, gameboard}

};

export default Gameboard;