import Ship from "../../src/app/ship";

test ('determine if the ship is sunk', () => {
    const ship = Ship('P', 2);
    ship.hit([0, 0]);
    ship.hit([1, 0]);
    
    expect(ship.isSunk()).toEqual(true);

});

test ('determine if the ship is sunk - return false', () => {
    const ship = Ship('P', 2);
    ship.hit([0, 0]);
    
    expect(ship.isSunk()).toEqual(false);

});