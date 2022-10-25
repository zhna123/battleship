import { getRandomInt } from "./util";

const Player = function(name) {
    const triedCoordinate = [];

    const hitMap = new Map();
    hitMap.set('P', []);
    hitMap.set('D', []);
    hitMap.set('S', []);
    hitMap.set('B', []);
    hitMap.set('C', []);

    // ai player uses this method to generate a coordinate to hit;
    // coordinate argument will be undefined
    const attack = (coordinate) => {
        // generate a coordinate
        if (coordinate == undefined) {
            const generated = generateCoordinate();
            // triedCoordinate.push(generated);
            return generated;
        }
        return coordinate;
    }


    function generateCoordinate() {
        let coordinate = checkHitMap();
        if (coordinate.length == 0) {
            coordinate = [getRandomInt(10), getRandomInt(10)];
            while (arrayContains(triedCoordinate, coordinate)) {
                coordinate = [getRandomInt(10), getRandomInt(10)];
            }
            triedCoordinate.push(coordinate);
        }
        return coordinate;
    }

    function arrayContains(arr, subArray) {
        if(arr.some(item => JSON.stringify(item) === JSON.stringify(subArray))) {
            return true
        }
        return false;
    }

    function checkHitMap() {
        
        // patrol
        if (hitMap.get('P').length == 1) {
            const lastHitCoordinate = hitMap.get('P')[0];
            return generate2ndCoordinate(lastHitCoordinate);
        } 
        // destroyer
        if (hitMap.get('D').length == 1) {
            const lastHitCoordinate = hitMap.get('D')[0];
            return generate2ndCoordinate(lastHitCoordinate);
        }
        if (hitMap.get('D').length == 2) {
            const firstHitCoordinate = hitMap.get('D')[0];
            const lastHitCoordinate = hitMap.get('D')[1];
            generateNextCoordinate(firstHitCoordinate, lastHitCoordinate);
        }
        // S
        if (hitMap.get('S').length == 1) {
            const lastHitCoordinate = hitMap.get('S')[0];
            return generate2ndCoordinate(lastHitCoordinate);
        }
        if (hitMap.get('S').length == 2) {
            const firstHitCoordinate = hitMap.get('S')[0];
            const lastHitCoordinate = hitMap.get('S')[1];
            generateNextCoordinate(firstHitCoordinate, lastHitCoordinate);
        }
        // B
        if (hitMap.get('B').length == 1) {
            const lastHitCoordinate = hitMap.get('B')[0];
            return generate2ndCoordinate(lastHitCoordinate);
        }
        if (hitMap.get('B').length == 2) {
            const firstHitCoordinate = hitMap.get('B')[0];
            const lastHitCoordinate = hitMap.get('B')[1];
            generateNextCoordinate(firstHitCoordinate, lastHitCoordinate);
        }
        if (hitMap.get('B').length == 3) {
            const firstHitCoordinate = hitMap.get('B')[0];
            const lastHitCoordinate = hitMap.get('B')[2];
            generateNextCoordinate(firstHitCoordinate, lastHitCoordinate);
        }
        // C
        if (hitMap.get('C').length == 1) {
            const lastHitCoordinate = hitMap.get('C')[0];
            return generate2ndCoordinate(lastHitCoordinate);
        }
        if (hitMap.get('C').length == 2) {
            const firstHitCoordinate = hitMap.get('C')[0];
            const lastHitCoordinate = hitMap.get('C')[1];
            generateNextCoordinate(firstHitCoordinate, lastHitCoordinate);
        }
        if (hitMap.get('C').length == 3) {
            const firstHitCoordinate = hitMap.get('C')[0];
            const lastHitCoordinate = hitMap.get('C')[2];
            generateNextCoordinate(firstHitCoordinate, lastHitCoordinate);
        }
        if (hitMap.get('C').length == 4) {
            const firstHitCoordinate = hitMap.get('C')[0];
            const lastHitCoordinate = hitMap.get('C')[3];
            generateNextCoordinate(firstHitCoordinate, lastHitCoordinate);
        } else {
            return [];
        }
    }

    function generate2ndCoordinate(lastHitCoordinate) {

        if (lastHitCoordinate[0] + 1 <= 9) {
            const coord = [lastHitCoordinate[0] + 1, lastHitCoordinate[1]];
            if (!arrayContains(triedCoordinate, coord)) {
                triedCoordinate.push(coord);
                console.log('first try....' + coord);
                return coord;
            }
        }
        if (lastHitCoordinate[1] + 1 <= 9) {
            const coord = [lastHitCoordinate[0], lastHitCoordinate[1] + 1];
            if(!arrayContains(triedCoordinate, coord)) {
                triedCoordinate.push(coord);
                console.log('second try....' + coord);
                return coord;
            }
        }
        if (lastHitCoordinate[0] - 1 >= 0) {
            const coord = [lastHitCoordinate[0] - 1, lastHitCoordinate[1]];
            if (!arrayContains(triedCoordinate, coord)) {
                triedCoordinate.push(coord);
                console.log('third try....' + coord);
                return coord;
            }
        }
        if (lastHitCoordinate[1] - 1 >= 0) {
            const coord = [lastHitCoordinate[0], lastHitCoordinate[1] - 1];
            if (!arrayContains(triedCoordinate, coord)) {
                triedCoordinate.push(coord);
                console.log('fourth try....' + coord);
                return coord;
            }
        }
        return [];
    }

    function generateNextCoordinate(firstHitCoordinate, lastHitCoordinate) {
        if ((firstHitCoordinate[0] == lastHitCoordinate[0]) && (lastHitCoordinate[1] > firstHitCoordinate[1])) {
            if (lastHitCoordinate[1] + 1 <= 9) {
                const coord = [lastHitCoordinate[0], lastHitCoordinate[1] + 1];
                if (!arrayContains(triedCoordinate, coord)) {
                    triedCoordinate.push(coord);
                    return coord;
                } else {
                    if (firstHitCoordinate[1] - 1 >=0 ) {
                        const coord = [lastHitCoordinate[0], firstHitCoordinate[1] - 1];
                        if (!arrayContains(triedCoordinate, coord)) {
                            triedCoordinate.push(coord);
                            return coord;
                        }
                    }
                }
            }
            
        } else if ((firstHitCoordinate[0] == lastHitCoordinate[0]) && (lastHitCoordinate[1] < firstHitCoordinate[1])) {
            if (firstHitCoordinate[1] + 1 <= 9) {
                const coord = [lastHitCoordinate[0], firstHitCoordinate[1] + 1];
                if (!arrayContains(triedCoordinate, coord)) {
                    triedCoordinate.push(coord);
                    return coord;
                } else {
                    if (lastHitCoordinate[1] - 1 >=0 ) {
                        const coord = [lastHitCoordinate[0], lastHitCoordinate[1] - 1];
                        if (!arrayContains(triedCoordinate, coord)) {
                            triedCoordinate.push(coord);
                            return coord;
                        }
                    }
                }
            }
        } else if ((firstHitCoordinate[1] == lastHitCoordinate[1]) && (firstHitCoordinate[0] < lastHitCoordinate[0])) {
            if (lastHitCoordinate[0] + 1 <= 9) {
                const coord = [lastHitCoordinate[0] + 1, lastHitCoordinate[1]];
                if (!arrayContains(triedCoordinate, coord)) {
                    triedCoordinate.push(coord);
                    return coord;
                } else {
                    if (firstHitCoordinate[0] - 1 >= 0) {
                        const coord = [firstHitCoordinate[0] - 1, lastHitCoordinate[1]];
                        if (!arrayContains(triedCoordinate, coord)) {
                            triedCoordinate.push(coord)
                            return coord;
                        }
                    }
                }
            }
        } else if ((firstHitCoordinate[1] == lastHitCoordinate[1]) && (firstHitCoordinate[0] > lastHitCoordinate[0])) {
            if (firstHitCoordinate[0] + 1 <= 9) {
                const coord = [firstHitCoordinate[0] + 1, lastHitCoordinate[1]];
                if (!arrayContains(triedCoordinate, coord)) {
                    triedCoordinate.push(coord);
                    return coord;
                } else {
                    if (lastHitCoordinate[0] - 1 >= 0) {
                        const coord = [lastHitCoordinate[0] - 1, lastHitCoordinate[1]];
                        if (!arrayContains(triedCoordinate, coord)) {
                            triedCoordinate.push(coord)
                            return coord;
                        }
                    }
                }
            }
        } else {
            return [];
        }
    }

    return {name, attack, hitMap};
}

export default Player;