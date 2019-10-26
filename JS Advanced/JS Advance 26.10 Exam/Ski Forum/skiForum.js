class Forum {
    _users
    _questions
    _id 

    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    findUser(username, email) {
        for (let i = 0; i < this._users.length; i++) {
            if (username === this._users[i].username || email === this._users[i].email) {
                return [true, i];
            }
        }
        return [false]
    }

    findUserByNameAndPass(username, password){
        for (let i = 0; i < this._users.length; i++) {
            if (username === this._users[i].username && password === this._users[i].password) {
                return [true, i]
            }
        }
        return [false]
    }

    register(username, password, repeatPassword, email) {
        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }

        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        let isFind = this.findUser(username, email);
        if (isFind[0]) {
            throw new Error("This user already exists!");
        }

        this._users.push({ username, password, email, login: false });
        return `${username} with ${email} was registered successfully!`
    }

    login(username, password){
        let isFind = this.findUserByNameAndPass(username, password);
        if (isFind[0]) {
            this._users[isFind[1]].login = true;
            return "Hello! You have logged in successfully";
        }
        return "There is no such user";
    }

    logout(username, password){
        let isFind = this.findUserByNameAndPass(username, password);
        if (isFind[0]) {
            this._users[isFind[1]].login = false;
            return "You have logged out successfully";
        }
        return "There is no such user";
    }

    postQuestion(username, question){
        let isFind = this.findUser(username);
        
        if (!isFind[0] || !this._users[isFind[1]].login) {
            throw new Error("You should be logged in to post questions");
        }

        if (question === '') {
            throw new Error("Invalid question");
        }

        this._questions.push({username, question, answer: [], id: this._id});
        this._id++;
        return "Your question has been posted successfully";
    }

    findQuestion(questionId){
        for (let i = 0; i < this._questions.length; i++) {
            if (this._questions[i].id === questionId) {
                return [true, i];
            }
        }
        return [false];
    }

    postAnswer(username, questionId, answer){
        let isFind = this.findUser(username);
        if (!isFind[0] || !this._users[isFind[1]].login) {
            throw new Error("You should be logged in to post answers");
        }

        if (answer === '') {
            throw new Error("Invalid answer");
        }
        
        let question = this.findQuestion(questionId);
        if (!question[0]) {
            throw new Error("There is no such question");
        }

        this._questions[question[1]].answer.push({username, answer});
        return "Your answer has been posted successfully";
    }

    showQuestions(){
        return this._questions.map((x, i) => `Question ${x.id} by ${x.username}: ${x.question}
${x.answer.map(a => `---${a.username}: ${a.answer}`).join('\n')}`).join('\n');
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());
