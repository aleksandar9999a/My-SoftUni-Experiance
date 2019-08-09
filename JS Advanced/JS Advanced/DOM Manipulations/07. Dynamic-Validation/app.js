function validate() {
    const email = document.getElementById('email');
    email.addEventListener('change', validation);

    function validation() {
        let email = this.value;
        let pattern = /[a-z]+@[a-z]+.[a-z]+/g;

        if (pattern.test(email)) {
            this.classList.remove('error');
        }
        else{
            this.classList.add('error')
        }
    }
}