import UserService from './services/userService.js';
const BASE_URL = 'https://ticktactoe-ec82d.firebaseio.com/';

function makeURL(extension){
    return BASE_URL + extension;
}

let submit = document.getElementById('submit');
submit.addEventListener('click', async function (e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let allUsers = await UserService.getData(makeURL('Users.json'));
    console.log(allUsers);


})