import Ship from "./ship";
import { randomBoolean, randomCoordinate } from "./util";

const Gameboard = function() {

    const patrol = Ship('P', 2);
    const destroyer = Ship('D', 3);
    const submarine = Ship('S', 3);
    const battleShip = Ship('B', 4);
    const carrier = Ship('C', 5);

    // 10X10 grid
    let gameboard = [];
    const initGameboard = () => {
        for(let i=0; i<10; i++) {
            gameboard.push([]);
        }
    }

    function setGameboard(playerGameboard) {
        for(let i=0; i<10; i++) {
            gameboard.push(playerGameboard[i])
        }
    }

    const missedShots = [];
    const missedAttacks = [];
    const sunkShips = [];

    const setupGameboard = () => {
        initGameboard();
        // place all ships
        generateShipPlacement(8, patrol);
        generateShipPlacement(7, destroyer);
        generateShipPlacement(7, submarine)
        generateShipPlacement(6, battleShip);
        generateShipPlacement(5, carrier);
    }

    const generateShipPlacement = (coordinateUpperRange, ship) => {
        const isHorizontal = randomBoolean();
        generatePlacement(isHorizontal, coordinateUpperRange, ship);
    }

    const isNotOccupiedHorizontally = (coordinate, numberOfHoles) => {
        while (numberOfHoles > 0) {
            if (gameboard[coordinate[0] + (numberOfHoles - 1)][coordinate[1]]) {
                return false;
            }
            numberOfHoles--;
        }
        return true;
    }

    const isNotOccupiedVertically = (coordinate, numberOfHoles) => {
        while (numberOfHoles > 0) {
            if (gameboard[coordinate[0]][coordinate[1] + (numberOfHoles - 1)]) {
                return false;
            }
            numberOfHoles--;
        }
        return true;
    }

    const generatePlacement = (isHorizontal, coordinateUpperRange, ship) => {
        const numberOfHoles = ship.numberOfHoles;
        const mark = ship.mark;

        let coordinate = randomCoordinate(coordinateUpperRange)

        if (isHorizontal) {
            while(!isNotOccupiedHorizontally(coordinate, numberOfHoles)) {
                coordinate = randomCoordinate(coordinateUpperRange);
            }
            for (let i=0; i< numberOfHoles; i++) {
                gameboard[coordinate[0] + i][coordinate[1]] = mark;
            }
        } else {
            while(!isNotOccupiedVertically(coordinate, numberOfHoles)) {
                coordinate = randomCoordinate(coordinateUpperRange);
            }

            for (let i=0; i< numberOfHoles; i++) {
                gameboard[coordinate[0]][coordinate[1] + i] = mark;
            }
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

    return {setupGameboard, receiveAttack, areAllSunk, gameboard, initGameboard, setGameboard}

};

export default Gameboard;