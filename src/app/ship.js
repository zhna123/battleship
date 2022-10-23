
// create ship factory function
const Ship = function(mark, numberOfHoles) {
    const hitCoordinates = [];

    const hit = (coordinate) => hitCoordinates.push(coordinate);

    const isSunk = () => hitCoordinates.length == numberOfHoles;

    return {mark, numberOfHoles, hit, isSunk};
};

export default Ship;