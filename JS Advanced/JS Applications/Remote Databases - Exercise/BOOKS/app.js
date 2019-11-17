import requester from './requester.js';
import trGenerator from './trGenerator.js';
import submitForm from './submitForm.js';

const tableBody = document.getElementById('body');

let state = {
    id: '',
    isEdit: false
}

const action = {
    'submit': async function () {
        const body = {
            title: submitForm.title.value,
            author: submitForm.author.value,
            isbn: submitForm.isbn.value
        }

        if (state.isEdit) {
            await requester.put('appdata', 'books', state.id, body);
            state.isEdit = false;
        } else {
            await requester.post('appdata', 'books', body)
        }

        this.loadBooks();
        submitForm.reset();
    },
    'loadBooks': async function () {
        let data = await requester.get('appdata', 'books');
        resetHTMLElement(tableBody);
        data.map(x => trGenerator.createTr(x)).forEach(x => { tableBody.appendChild(x) });
    },
    'delete': async function (id) {
        await requester.del('appdata', 'books', id);
        this.loadBooks();
    },
    'edit': async function (id) {
        submitForm.formTitle.innerHTML = 'EDIT FORM';
        state.isEdit = true;
        state.id = id;
        const data = await requester.get('appdata', 'books', id);
        submitForm.title.value = data.title;
        submitForm.author.value = data.author;
        submitForm.isbn.value = data.isbn;
    }
}

function resetHTMLElement(e) {
    e.innerHTML = '';
}

function handleEvent(e) {
    e.preventDefault();
    if (typeof action[e.target.id] === 'function') {
        action[e.target.id]();
    }
    if (typeof action[e.target.className] === 'function') {
        const id = e.target.parentElement.parentElement.getAttribute('data-id');
        action[e.target.className](id);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', handleEvent)
})