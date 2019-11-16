import requester from './components/Requester.js';

const action = {
    'load': function(){
        
    },
    'add': '',
    'update': '',
    'delete': '',
}

function handleEvent(e){
    if (typeof action[e.target.id] === 'function') {
        action[e.target.id]();
    }
}

document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', handleEvent)
})