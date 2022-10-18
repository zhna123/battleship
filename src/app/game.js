import Gameboard from "./gameboard";
import Player from "./player";
import { renderPlayer1Gameboard, renderAIPlayerGameboard, renderResult } from "./render";

const Game = function(playerName, firstPlayerName) {

    const player1 = Player(playerName);
    const player1Gameboard = Gameboard();

    const aiPlayer = Player('COMPUTER');
    const aiPlayerGameboard = Gameboard();
    
    const newGame = () => {

        // setup gameboards
        player1Gameboard.initGameboard();
        player1Gameboard.setupGameboard([2, 3], [0, 0], [0, 1], [2, 9], [1, 7]);
        renderPlayer1Gameboard(player1, player1Gameboard.gameboard)

        aiPlayerGameboard.initGameboard();
        aiPlayerGameboard.setupGameboard([2, 3], [0, 0], [0, 1], [2, 9], [1, 7]);
        renderAIPlayerGameboard(aiPlayer);

        if (firstPlayerName === 'COMPUTER') {
            // computer goes first
            computerAttack();
            doAttack();
            
        } else {
            // human goes first
            doAttack();
        }
    }

    function computerAttack() {
        const playerBoardDOM = document.querySelector('.gameboard:first-child > .game_grid');
        const attackedCoordinate = aiPlayer.attack();
        const rows = Array.from(playerBoardDOM.querySelectorAll('.row'));
        rows.forEach((row, rowIndex) => {
            const columns = Array.from(row.querySelectorAll('.column'));
            columns.forEach((column, columnIndex) => {
                if (rowIndex == attackedCoordinate[0] && columnIndex == attackedCoordinate[1]) {
                    if (player1Gameboard.gameboard[rowIndex][columnIndex] !== undefined) {
                        // get a hit
                        column.style.backgroundColor = 'indianred';
                        updateShipState(player1Gameboard.gameboard[rowIndex][columnIndex], player1);

                        player1Gameboard.receiveAttack([rowIndex, columnIndex]);
                    } else {
                        column.style.backgroundColor = 'lightblue'
                    }
                }
            })
        })
    }

    function doAttack() {
        const aiBoardDOM = document.querySelector('.gameboard:nth-child(2) > .game_grid')
        const rows = Array.from(aiBoardDOM.querySelectorAll('.row'));
        rows.forEach((row, rowIndex) => {
            const columns = Array.from(row.querySelectorAll('.column'));
            columns.forEach((column, columnIndex) => {
                // add event listener
                column.addEventListener('click', attackListener.bind(null, rowIndex, columnIndex, column), {once: true})
            })
        })
    }
    
    function attackListener(rowIndex, columnIndex, column) {
        const attackedMark = aiPlayerGameboard.gameboard[rowIndex][columnIndex];
        if (attackedMark !== undefined) {
            column.style.backgroundColor = 'indianred';
            column.textContent = attackedMark;
            updateShipState(attackedMark, aiPlayer);
            // update program
            aiPlayerGameboard.receiveAttack([rowIndex, columnIndex]);

            // check if game ends
            if (gameEnds(aiPlayerGameboard)) {
                console.log('game end - you won!')
                renderResult(player1);
                // end game
                return;
            } 
        } else {
            column.style.backgroundColor = 'lightblue'
        }

        computerAttack();
        if(gameEnds(player1Gameboard)) {
            // end game
            console.log('game end - computer won!')
            renderResult(aiPlayer);
            return;
        }        
    }

    function gameEnds(gameboard) {
        return gameboard.areAllSunk();
    }

    function updateShipState(symbol, player) {
        
        switch(symbol) {
            case 'P':
                let patrolShipState; 
                if (player === player1) {
                    patrolShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:first-child > .ship_state');
                } else {
                    patrolShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:first-child > .ship_state');
                }
                for(let i=0; i<2; i++) {
                    const square = patrolShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            case 'D':
                let destroyerShipState; 
                if (player === player1) {
                    destroyerShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:nth-child(2) > .ship_state');
                } else {
                    destroyerShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:nth-child(2) > .ship_state');
                }
                for(let i=0; i<3; i++) {
                    const square = destroyerShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            case 'S':
                let submarineShipState; 
                if (player === player1) {
                    submarineShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:nth-child(3) > .ship_state');
                } else {
                    submarineShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:nth-child(3) > .ship_state');
                }
                for(let i=0; i<3; i++) {
                    const square = submarineShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            case 'B':
                let battleshipShipState; 
                if (player === player1) {
                    battleshipShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:nth-child(4) > .ship_state');
                } else {
                    battleshipShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:nth-child(4) > .ship_state');
                }
                for(let i=0; i<4; i++) {
                    const square = battleshipShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            case 'C':
                let carrierShipState; 
                if (player === player1) {
                    carrierShipState = document.querySelector('.ships_chart:nth-child(1) > .ship:last-child > .ship_state');
                } else {
                    carrierShipState = document.querySelector('.ships_chart:nth-child(2) > .ship:last-child > .ship_state');
                }
                for(let i=0; i<5; i++) {
                    const square = carrierShipState.querySelector(`.state_square:nth-child(${i+1})`);
                    if(square.style.backgroundColor == 'indianred') {
                        continue;
                    } else {
                        square.style.backgroundColor = 'indianred';
                        break;
                    }
                }
                break;
            default:
                break;
                
        }
    }


    return {newGame}
};

export default Game;