const BASE_URL = 'https://rest-messanger.firebaseio.com/messanger.json';

const app = {
    handleEvent: function (e) {
        if (e.target.id === 'submit') {
            this.handleSubmit();
        }

        if (e.target.id === 'refresh') {
            this.refresh();
        }
    },

    handleSubmit: function () {
        let author = document.getElementById('author').value;
        let content = document.getElementById('content').value;

        if (author !== '' && content !== '') {
            const data = { author, content };
            fetch(BASE_URL, { method: 'POST', body: JSON.stringify(data) })
                .then(res => this.notify('Message is successful sent!'))
                .catch(res => this.notify('Something is wrong'))
        }
    },

    parseResult: function (result) {
        return result.json()
    },

    refresh: function () {
        const messageField = document.getElementById('messages');
        messageField.innerHTML = '';

        fetch(BASE_URL)
            .then(this.parseResult)
            .then(res => Object.values(res).map(this.createPersonItem).map(x => messageField.innerHTML += x))
            .catch(res => this.notify('Something is wrong'))
    },

    createPersonItem: function (data) {
        return `${data.author}: ${data.content}\n`;
    },

    notify: function (message) {
        document.getElementById('notification').textContent = message;
        document.getElementById('notification').style.display = 'block';

        setTimeout(function () {
            document.getElementById('notification').style.display = 'none';
        }, 2000)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', app)
})