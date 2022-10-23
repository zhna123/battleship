// return integer coordinate with upper range n
// eg: when n=9, return coordinate range 0-9
function randomCoordinate(n) {
    const x = Math.floor(Math.random() * (n+1));
    const y = Math.floor(Math.random() * (n+1));
    return [x, y];
}

function randomBoolean() {
    return Math.random() < 0.5;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export {randomCoordinate, randomBoolean, getRandomInt}



