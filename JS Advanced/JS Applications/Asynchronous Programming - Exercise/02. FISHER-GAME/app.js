import requester from './components/Requester.js';
import catchForm from './components/CatchForm.js';
import addCatchForm from './components/AddCatchForm.js';

const BASE_URL = 'https://fisher-game.firebaseio.com/catches/';
const catchesDiv = document.getElementById('catches');

const action = {
    'load': async function () {
        const url = BASE_URL + '.json';
        catchesDiv.innerHTML = '';
        Object.entries(await requester.get(url))
            .map(x => catchForm.generateCatch(x))
            .map(x => catchesDiv.appendChild(x));
    },
    'add': async function () {
        const url = BASE_URL + '.json';
        const body = {
            angler: addCatchForm.angler.value,
            weight: addCatchForm.weight.value,
            species: addCatchForm.species.value,
            location: addCatchForm.location.value,
            bait: addCatchForm.bait.value,
            captureTime: addCatchForm.captureTime.value,
        }

        requester.post(url, body);
        this.load();
        addCatchForm.reset();
    },
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