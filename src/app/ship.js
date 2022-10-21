
// create ship factory function
const Ship = function(mark, numberOfHoles) {
    const hitCoordinates = [];

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

    return {mark, numberOfHoles, hit, isSunk, hitCoordinates};
};

export default Ship;