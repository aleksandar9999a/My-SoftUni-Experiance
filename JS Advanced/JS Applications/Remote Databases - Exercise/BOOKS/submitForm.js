const submitForm = {
    title: document.getElementById('title'),
    author: document.getElementById('author'),
    isbn: document.getElementById('isbn'),

    reset: function(){
        this.title.value = '';
        this.author.value = '';
        this.isbn.value = '';
    }
}

export default submitForm;