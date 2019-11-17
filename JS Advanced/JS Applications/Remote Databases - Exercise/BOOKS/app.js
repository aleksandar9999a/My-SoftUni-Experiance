import requester from './requester.js';
import trGenerator from './trGenerator.js';

const tableBody = document.getElementById('body');

const action = {
    'submit': function(){
        console.log('pedal');
        
    },
    'loadBooks': async function(){
        let data = await requester.get('appdata', 'books');
        resetHTMLElement(tableBody);
        data.map(x => trGenerator.createTr(x)).forEach(x => {
            tableBody.appendChild(x)
        });
        
    }
}

function resetHTMLElement(e){
    e.innerHTML = '';
}

function handleEvent(e) {
    e.preventDefault();
    if (typeof action[e.target.id] === 'function') {
        action[e.target.id]();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', handleEvent)
})