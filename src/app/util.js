function randomCoordinate() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y];
}

function randomBoolean() {
    return Math.random() < 0.5;
}

export {randomCoordinate, randomBoolean}



