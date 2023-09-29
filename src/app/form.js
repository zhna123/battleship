import { createBoardForPlacement, createDraggables, createShipsForPlacement } from './form_ui';
import Game from './game';
import { constructGameUI } from './game_ui';
import Gameboard from './gameboard';

const StartForm = function() {

    function loadForm() {
        createForm();
        showTab(0);
        addButtonControls();
        submitForm();
    }

    function createForm() {
        createShipsForPlacement();
        createBoardForPlacement();
        createDraggables();
    }

    function showTab(n) {
        const tabs = Array.from(document.querySelectorAll('.tab')); 
        tabs[n].style.display = 'block';

        const preBtn = document.querySelector('.page.pre');
        const nextBtn = document.querySelector('.page.next');
        const skip = document.querySelector('button[type=submit]#skip');
        const submit = document.querySelector('button[type=submit]#submit');
        if (n == 0) {
            tabs[1].style.display = 'none';
            preBtn.style.display = 'none';
            nextBtn.style.display = 'inline';
            skip.style.display = 'none'
            submit.style.display = 'none';
        } else {
            tabs[0].style.display = 'none';
            preBtn.style.display = 'inline';
            nextBtn.style.display = 'none';
            skip.style.display = 'inline'
            submit.style.display = 'inline';
            submit.style.backgroundColor = 'grey'
            submit.style.cursor = 'auto'
            submit.disabled = true
        }
    }

    function addButtonControls() {
        const nextBtn = document.querySelector('.page.next');
        const preBtn = document.querySelector('.page.pre');
        nextBtn.addEventListener('click', () => {
            if (validateForm()) {
                showTab(1);
            }
        })
        preBtn.addEventListener('click', () => {
            showTab(0);
        })
    }

    function validateForm() {
        const form = document.querySelector('form#game_form');
        const playerName = form.elements['name'].value;
        if(!playerName) {
            alert('must enter player name')
            return false;
        }
        return true;
    }


    function submitForm() {

        const skip = document.querySelector('button[type=submit]#skip');
        const submit = document.querySelector('button[type=submit]#submit');

        const form = document.querySelector('form#game_form');
        skip.addEventListener('click', e => {
            e.preventDefault();

            const playerName = form.elements['name'].value;
            let firstPlayer;

            const checkedbox = document.querySelector('input[type=checkbox]');
            if (checkedbox.checked) {
                firstPlayer = playerName;
            } else {
                firstPlayer = 'COMPUTER';
            }
            
            closeForm();
            constructGameUI();

            Game(playerName, firstPlayer).newGame();
        })
        submit.addEventListener('click', e => {
            e.preventDefault();

            const playerName = form.elements['name'].value;
            let firstPlayer;

            const checkedbox = document.querySelector('input[type=checkbox]');
            if (checkedbox.checked) {
                firstPlayer = playerName;
            } else {
                firstPlayer = 'COMPUTER';
            }
            
            closeForm();
            constructGameUI();

            Game(playerName, firstPlayer).newGame(getUserPlacedBoard());
        })
    }

    function getUserPlacedBoard() {
        const playerGameboard = Gameboard();
        playerGameboard.initGameboard()
        const gameboardArray = playerGameboard.gameboard
    
        const gameBoardDom = document.querySelector('.right')
        console.log(gameBoardDom)
        const rows = Array.from(gameBoardDom.querySelectorAll('.row'));
        rows.forEach((row, rowIndex) => {
            const columns = Array.from(row.querySelectorAll('.column'));
            columns.forEach((column, columnIndex) => {
                gameboardArray[rowIndex][columnIndex] = column.textContent ? column.textContent : ''
            })
        })
        return gameboardArray
    }

    function closeForm() {
        const startForm = document.querySelector('.form_container');
        startForm.style.display = 'none';
    
        const mainContainer = document.querySelector('.container');
        mainContainer.style.display = 'block';
    }

    return {loadForm};
}();

export default StartForm;


