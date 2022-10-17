import { createBoardForPlacement, createShipsForPlacement } from './form_ui';
import Game from './game';
import { constructGameUI } from './game_ui';

const StartForm = function() {

    function createForm() {
        createShipsForPlacement();
        createBoardForPlacement();
    }

    function submitForm() {
        const form = document.querySelector('form#game_info');
    
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const playerName = form.elements['player1_name'].value;
            let firstPlayer;

            const checkedRadio = document.querySelector('input[type=radio]:checked');
            if (checkedRadio.id == 'first') {
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
        const startForm = document.querySelector('.start_form_container');
        startForm.style.display = 'none';
    
        const mainContainer = document.querySelector('.container');
        mainContainer.style.display = 'block';
    }

    return {createForm, submitForm};
}();

export default StartForm;


