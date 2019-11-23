import monkeys from './monkeys.js';
import Monkey from './Monkey.js';

function createMonkey(data) {
    return new Monkey(data).render();
}

function appendElementtoMonkeyDiv(e) {
    const root = document.getElementsByClassName('monkeys')[0];
    root.appendChild(e);
}

monkeys.map(createMonkey).forEach(appendElementtoMonkeyDiv);