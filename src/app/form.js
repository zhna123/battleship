import { createBoardForPlacement, createDraggables, createShipsForPlacement } from './form_ui';
import Game from './game';
import { constructGameUI } from './game_ui';

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
        const submit = document.querySelector('button[type=submit]');
        if (n == 0) {
            tabs[1].style.display = 'none';
            preBtn.style.display = 'none';
            nextBtn.style.display = 'inline';
            submit.style.display = 'none';
        } else {
            tabs[0].style.display = 'none';
            preBtn.style.display = 'inline';
            nextBtn.style.display = 'none';
            submit.style.display = 'inline';
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
        const form = document.querySelector('form#game_form');
    
        form.addEventListener('submit', (e) => {
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
        });
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


