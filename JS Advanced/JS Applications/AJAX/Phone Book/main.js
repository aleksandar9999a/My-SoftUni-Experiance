const SELECTORS = {
    name: '.person',
    phone: '.phone',
    submitBtn: '.submitBtn',
    list: '.myBook',
};

const btn = document.querySelector(SELECTORS.submitBtn);
const name = document.querySelector(SELECTORS.name);
const phone = document.querySelector(SELECTORS.phone);
const list = document.querySelector(SELECTORS.list);

let phoneBook = [];

btn.addEventListener('click', getPerson);

function getPerson() {
    if (name != '' && phone != '') {
        let currentPerson = {
            name: name.value,
            phone: phone.value,
        };

        console.log(currentPerson.phone);
        
        if (localStorage.getItem('phoneBook') === null) {
            phoneBook.push(currentPerson);
            localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
        }
        else {
            phoneBook = JSON.parse(localStorage.getItem('phoneBook'));
            phoneBook.push(currentPerson);
            localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
        }
    }

    clear();
    printPersons();
}

function clear() {
    name.value = '';
    phone.value = '';
}

function printPersons() {
    let currentPhoneBook = JSON.parse(localStorage.getItem('phoneBook'));

    for (let i = 0; i < currentPhoneBook.length; i++) {
        let name = currentPhoneBook[i].name;
        let phone = currentPhoneBook[i].phone;
        list.innerHTML += `<li> ${name}: ${phone}`;
    }
}