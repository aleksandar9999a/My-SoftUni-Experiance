import requester from './components/Requester.js';
import catchForm from './components/CatchForm.js';
import addCatchForm from './components/AddCatchForm.js';

const BASE_URL = 'https://fisher-game.firebaseio.com/catches/';
const catchesDiv = document.getElementById('catches');

const action = {
    'load': async function () {
        const url = BASE_URL + '.json';
        catchesDiv.innerHTML = '';
        const data = await requester.get(url);
        if (data !== null) {
            Object.entries(data)
            .map(x => catchForm.generateCatch(x))
            .map(x => catchesDiv.appendChild(x));
        }
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
    'update': function(currCatch){
        const id = currCatch.getAttribute('data-id');

    },
    'delete': async function(currCatch){
        const id = currCatch.getAttribute('data-id');
        await requester.delete(`${BASE_URL}${id}.json`);
        this.load();
    },
}

function handleEvent(e) {
    if (typeof action[e.target.id] === 'function') {
        action[e.target.id](e.target.parentElement);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', handleEvent)
})