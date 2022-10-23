import Player from "../../src/app/player";

test ('return player name', () => {
    const player = Player('player 1');
    expect(player.name).toEqual('player 1');
});

test ('human player attack return coordinate passed in', () => {
    const player = Player('player 1');
    expect(player.attack([0, 0])).toEqual([0, 0]);
})

test ('ai player attack without coordinate passed in', () => {
    const player = Player('player 1');
    expect(player.attack().length).toEqual(2);
})