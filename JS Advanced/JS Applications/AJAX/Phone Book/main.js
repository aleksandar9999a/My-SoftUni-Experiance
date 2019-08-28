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

        if (localStorage.getItem('phoneBook') === null) {
            phoneBook.push(currentPerson);
            localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
        }
        else {
            phoneBook = JSON.parse(localStorage.getItem('phoneBook'));
            phoneBook.push(currentPerson);
            localStorage.setItem('phoneBook', JSON.stringify(phoneBook));
        }

        console.log(phoneBook);
        
    }

    
}