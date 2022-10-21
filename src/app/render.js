import WhoaImage from '../images/whoa.gif'
/*
    DOM manipulations
*/
function renderPlayer1Gameboard(player1, gameboard) {

    const playerNameDOM = document.querySelector('.gameboard:first-child > .name');
    playerNameDOM.textContent = player1.name;

    const playerBoardDOM = document.querySelector('.gameboard:first-child > .game_grid')
    const rows = Array.from(playerBoardDOM.querySelectorAll('.row'));
    rows.forEach((row, rowIndex) => {
        const columns = Array.from(row.querySelectorAll('.column'));
        columns.forEach((column, columnIndex) => {
            column.textContent = gameboard[rowIndex][columnIndex];
        })
    })

}

function renderAIPlayerGameboard(aiPlayer) {
    const playerNameDOM = document.querySelector('.gameboard:nth-child(2) > .name');
    playerNameDOM.textContent = aiPlayer.name;
}

function renderResult(winner) {
    const overlayDiv = document.querySelector('.overlay');
    const gameEndDiv = document.querySelector('.game_end');
    overlayDiv.style.display = 'block';
    gameEndDiv.style.display = 'block';

    gameEndDiv.textContent = 'WINNER IS: ' + winner.name;

    const endImage = new Image();
    endImage.src = WhoaImage;
    endImage.classList.add('img');
    gameEndDiv.appendChild(endImage);
    
    // restart button
    const restart = document.createElement('button');
    restart.classList.add('restart');
    restart.textContent = 'PLAY AGAIN';

    restart.addEventListener('click', () => {
        location.reload();
    })

    gameEndDiv.appendChild(restart);
    
}

export {renderPlayer1Gameboard, renderAIPlayerGameboard, renderResult};