const shipMap = new Map();
shipMap.set('P', 2);
shipMap.set('D', 3);
shipMap.set('S', 3);
shipMap.set('B', 4);
shipMap.set('C', 5);
// create ship factory function
const Ship = function(mark) {
    const numberOfHoles = shipMap.get(mark);
    const hitCoordinates = [];

    const placeShip = (start, isHorizontal) => {
        let shipPlacement = [];
        if (isHorizontal) {
            for(let i=0; i<numberOfHoles; i++) {
                shipPlacement.push([start[0]+i, start[1]]);
            }
        } else {
            for(let i=0; i<numberOfHoles; i++) {
                shipPlacement.push([start[0], start[1]+i])
            }
        }
        return shipPlacement;
    }

    const hit = (coordinate) => {
        hitCoordinates.push(coordinate);}

    const isSunk = () => {
        if(hitCoordinates.length == numberOfHoles) {
            console.log('mark:' + mark+ ' is sunk!');
            console.log(hitCoordinates.length);
            console.log(numberOfHoles);

            return true;
        }
        return false;
    }

    return {mark, hit, isSunk, placeShip, hitCoordinates};
};

export default Ship;