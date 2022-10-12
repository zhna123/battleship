const Player = function(name) {
    const triedCoordinate = [];

    const attack = (coordinate) => {
        // generate a coordinate
        if (coordinate === undefined) {
            const generated = generateCoordinate();
            triedCoordinate.push(generated);
            return generated;
        }
        return coordinate;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function generateCoordinate() {
        let coordinate = [getRandomInt(10), getRandomInt(10)];
        while (triedCoordinate.includes(coordinate)) {
            coordinate = [getRandomInt(10), getRandomInt(10)];
        }
        return coordinate;
    }

    return {name, attack};
}

export default Player;