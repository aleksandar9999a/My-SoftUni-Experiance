import Cat from './catSeeder.js';

let cats = [
    ['100', 100, 'Continue', './images/cat100.jpg'],
    ['200', 200, 'Ok', './images/cat200.jpg'],
    ['204', 204, 'No content', './images/cat204.jpg'],
    ['301', 301, 'Moved permanently', './images/cat301.jpg'],
    ['304', 304, 'Not modified', './images/cat304.jpg'],
    ['400', 400, 'Bad request', './images/cat400.jpg'],
    ['404', 404, 'Not Found', './images/cat404.jpg'],
    ['406', 406, 'Not Acceptable', './images/cat406.jpg'],
    ['410', 410, 'Gone', './images/cat410.jpg'],
    ['500', 500, 'Internal Server Error', './images/cat500.jpg'],
    ['511', 500, 'Network Authentication Required', './images/cat511.jpg']
];

const list = document.getElementById('list')
cats.map(x => new Cat(...x).render()).map(x => list.appendChild(x));
