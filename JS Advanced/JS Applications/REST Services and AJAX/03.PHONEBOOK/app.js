const BASE_URL = 'https://phonebook-nakov.firebaseio.com/phonebook/';

const app = {
    handleEvent: function (e) {
        if (e.target.id === 'btnCreate') {
            this.createNewContact();
        }

        if (e.target.id === 'btnLoad') {
            this.loadList();
        }

        if (e.target.name === 'delete') {
            this.removeContact(e.target.parentElement);
        }
    },

    removeContact: function (element) {
        const key = element.id;
        fetch(BASE_URL + key + '.json', {method: 'DELETE'})
            .then(res => {
                this.notify('Contact is successful delete!');
                this.loadList();
            })
            .catch(res => this.notify('Something is wrong!'))
    },

    loadList: function () {
        const list = document.getElementById('phonebook');
        list.innerHTML = '';

        fetch(BASE_URL + '.json')
            .then(this.parseResult)
            .then(res => {
                this.createLiElements(res).map(x => list.innerHTML += x);
            })
            .catch(res => this.notify(`Something is wrong! Maybe you don't have contacts.`))
    },

    createLiElements: function (data) {
        const keys = Object.keys(data);
        return keys.map(x => `<li id='${x}'>${data[x].person}: ${data[x].phone}<button name='delete'>Delete</button></li>`);
    },

    createNewContact: function () {
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;

        if (person !== '' && phone !== '') {
            const data = { person, phone };

            fetch(BASE_URL + '.json', { method: 'POST', body: JSON.stringify(data) })
                .then(this.parseResult)
                .then(res => this.notify('Successful'))
                .catch(res => this.notify('Something is wrong!'))
        }
    },

    parseResult: function(result) {
        return result.json()
    },

    notify: function(message) {
        document.getElementById('notification').textContent = message;
        document.getElementById('notification').style.display = 'block';
        
        setTimeout(function(){
            document.getElementById('notification').style.display = 'none';
        }, 2000)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', app)
})