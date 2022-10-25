import Gameboard from "../../src/app/gameboard";

test ('receive attack', () => {

    const gb = Gameboard();
    const gameboard = gb.gameboard;
    for(let i=0; i<10; i++) {
        gameboard.push([]);
    }
    gameboard[0][0] = 'P';
    gameboard[0][1] = 'P';

    gameboard[0][2] = 'D';
    gameboard[0][3] = 'D';
    gameboard[0][4] = 'D';

    gameboard[1][0] = 'S';
    gameboard[1][1] = 'S';
    gameboard[1][2] = 'S';

    gameboard[2][0] = 'B';
    gameboard[3][0] = 'B';
    gameboard[4][0] = 'B';
    gameboard[5][0] = 'B';

    gameboard[3][2] = 'C';
    gameboard[3][3] = 'C';
    gameboard[3][4] = 'C';
    gameboard[3][5] = 'C';
    gameboard[3][6] = 'C';

    gb.receiveAttack([0, 0]);
    gb.receiveAttack([0, 1]);

    gb.receiveAttack([0, 2]);
    gb.receiveAttack([0, 3]);
    gb.receiveAttack([0, 4]);

    gb.receiveAttack([1, 0]);
    gb.receiveAttack([1, 1]);
    gb.receiveAttack([1, 2]);

    expect(gb.areAllSunk()).toEqual(false);

    gb.receiveAttack([2, 0]);
    gb.receiveAttack([3, 0]);
    gb.receiveAttack([4, 0]);
    gb.receiveAttack([5, 0]);

    gb.receiveAttack([3, 2]);
    gb.receiveAttack([3, 3]);
    gb.receiveAttack([3, 4]);
    gb.receiveAttack([3, 5]);
    gb.receiveAttack([3, 6]);

    expect(gb.areAllSunk()).toEqual(true);

});