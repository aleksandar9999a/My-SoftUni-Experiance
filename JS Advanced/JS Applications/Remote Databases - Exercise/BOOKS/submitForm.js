const submitForm = {
    formTitle: document.getElementById('formTitle'),
    title: document.getElementById('title'),
    author: document.getElementById('author'),
    isbn: document.getElementById('isbn'),

    reset: function () {
        this.formTitle.innerHTML = 'FORM';
        this.title.value = '';
        this.author.value = '';
        this.isbn.value = '';
    }
}

export default submitForm;