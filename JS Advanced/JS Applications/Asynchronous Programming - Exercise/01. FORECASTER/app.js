import { getRequester } from './requester.js';
const BASE_URL = 'https://judgetests.firebaseio.com/';

const weatherApp = {
    handleEvent: function (e) {
        if (typeof action[e.target.id] === 'function') {
            action[e.target.id]()
        }
    }
}

const action = {
    submit: function () {
        console.log('work');
        
    }
}
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', weatherApp)
})