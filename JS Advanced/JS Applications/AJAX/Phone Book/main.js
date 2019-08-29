const SELECTORS = {
    name: '.person',
    phone: '.phone',
    submitBtn: '.submitBtn',
    list: '.contacts',
};

const btn = document.querySelector(SELECTORS.submitBtn);
const personName = document.querySelector(SELECTORS.name);
const personPhone = document.querySelector(SELECTORS.phone);
const list = document.querySelector(SELECTORS.list);

let phoneBook = [];

btn.addEventListener('click', addPerson);

function addPerson() {
    if (personName.value != '' && personPhone.value != '') {
        let currentPerson = {
            name: personName.value,
            phone: personPhone.value,
        };

        if (localStorage.getItem('phoneBook') === null) {
            phoneBook.push(currentPerson);
            localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
        }
        else {
            phoneBook = JSON.parse(localStorage.getItem('phoneBook'));
            let isContent = false;
            for (let i = 0; i < phoneBook.length; i++) {
                if (phoneBook[i].name === currentPerson.name) {
                    isContent = true;
                }
            }

            if (!isContent) {
                phoneBook.push(currentPerson);
                localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
            }
        }

        clear();
        printPersons();
    }
}

function printPersons() {
    let currentPhoneBook = JSON.parse(localStorage.getItem('phoneBook'));
    list.innerHTML = '';

    for (let i = 0; i < currentPhoneBook.length; i++) {
        let name = currentPhoneBook[i].name;
        let phone = currentPhoneBook[i].phone;
        list.innerHTML += '<div>' +
        '<h3>' + name + ': ' + phone +
        ' <a onclick="deletePersons(\'' + name + '\')" class = "btn" href="#">Delete</a> ' +
        '</h3>' + '</div>';
    }
}

function deletePersons(person) {
    let currentPhoneBook = JSON.parse(localStorage.getItem('phoneBook'));
    currentPhoneBook = currentPhoneBook.filter(p => p.name != person);
    localStorage.setItem('phoneBook', JSON.stringify(currentPhoneBook));
    printPersons();
}

function clear() {
    personName.value = '';
    personPhone.value = '';
}