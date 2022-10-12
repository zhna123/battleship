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
            // add event listener
        })
    })

}

function renderAIPlayerGameboard(aiPlayer) {
    const playerNameDOM = document.querySelector('.gameboard:nth-child(2) > .name');
    playerNameDOM.textContent = aiPlayer.name;
}

function renderResult(winner) {
    const progressChartDivs = Array.from(document.querySelectorAll('.progress_chart'));
    progressChartDivs.forEach(div => div.style.display = 'none');
    
    const resultDivs = Array.from(document.querySelectorAll('.result_chart'));
    resultDivs.forEach((div, index) => {
        div.style.display = 'flex';
        if (winner.name == 'COMPUTER') {
            if (index == 0) {
                div.textContent = 'LOST';
            } else {
                div.textContent = 'WON';
            }
        } else {
            if (index == 0) {
                div.textContent = 'WON';
            } else {
                div.textContent = 'LOST';
            }
        }
        
    })
    
}

export {renderPlayer1Gameboard, renderAIPlayerGameboard, renderResult};