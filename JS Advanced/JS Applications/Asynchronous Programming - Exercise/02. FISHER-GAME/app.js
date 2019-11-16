import requester from './components/Requester.js';
import catchForm from './components/CatchForm.js';

const BASE_URL = 'https://fisher-game.firebaseio.com/catches/';
const catchesDiv = document.getElementById('catches');

const action = {
    'load': async function () {
        const url = BASE_URL + '.json';
        Object.entries(await requester.get(url))
            .map(x => catchForm.generateCatch(x))
            .map(x => catchesDiv.appendChild(x));
    },
    'add': '',
    'update': '',
    'delete': '',
}

function handleEvent(e) {
    if (typeof action[e.target.id] === 'function') {
        action[e.target.id]();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', handleEvent)
})