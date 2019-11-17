const submitForm = {
    formTitle: document.getElementById('formTitle'),
    title: document.getElementById('title'),
    author: document.getElementById('author'),
    isbn: document.getElementById('isbn'),
    button: document.getElementById('submit'),

    reset: function () {
        this.formTitle.innerHTML = 'Create Form';
        this.button.innerHTML = 'Create';
        this.title.value = '';
        this.author.value = '';
        this.isbn.value = '';
    }
}

export default submitForm;