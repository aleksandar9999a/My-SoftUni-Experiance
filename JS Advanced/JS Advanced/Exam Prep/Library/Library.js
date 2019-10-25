class Library{
    constructor(libraryName){
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: libraryName.length,
            special: libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name, type){
        if (!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`);
        }

        let newSubscriber = {name, type, books: []}
        let isThere = this.subscribers.find(x => x.name === name);
        if (!isThere) {
            this.subscribers.push(newSubscriber);
        }else{
            isThere.type = type;
        }

        return newSubscriber;
    }

    unsubscribe(name) {
        let isThere = this.subscribers.find(x => x.name === name);
        if (!isThere) {
            throw new Error(`There is no such subscriber as ${name}`);
        }
        this.subscribers.map((x, i) => {
            if (x.name === name) {
                this.subscribers.splice(i, 1);
            }
        })

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor){
        let isThere = this.subscribers.find(x => x.name === subscriberName);
        if (!isThere) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        let isContainMaxBooks = isThere.books.length < this.subscriptionTypes[isThere.type];
        if (isContainMaxBooks) {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[isThere.type]}!`)
        }

        let bookData = {title: bookTitle,
        author: bookAuthor};

        isThere.books.push(bookData);
        return isThere;
    }

    showInfo(){
        let hasSubscribers = this.subscribers.length > 0;
        if (hasSubscribers) {
            return this.subscribers.map(x => `Subscriber: ${x.name}, Type: ${x.type}
            Received books: ${x.books.map(b => `${b.title} by ${b.author}`).join(' ')}`);
        }
        return `${this.libraryName} has no information about any subscribers`
    }
}

let myLibrary = new Library('Lib');
myLibrary.subscribe('Alex', 'normal');
myLibrary.subscribe('Alex', 'vip');
console.log(myLibrary.subscribers[0]);

module.exports = Library;