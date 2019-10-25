class Library{
    constructor(libraryName){
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        }
    }

    foudSubscriber(name){
        return this.subscribers.find(x => x.name === name);
    }

    removeSubscriber(name, x, i){
        if (x.name === name) {
            this.subscribers.splice(i, 1);
        }
    }
    
    subscribe(name, type){
        if (!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`);
        }

        let newSubscriber = {name, type, books: []}
        let subscriber = this.foudSubscriber(name);
        if (!subscriber) {
            this.subscribers.push(newSubscriber);
        }else{
            subscriber.type = type;
        }

        return subscriber ? subscriber : this.subscribers[this.subscribers.length - 1];
    }

    unsubscribe(name) {
        let subscriber = this.foudSubscriber(name);
        if (!subscriber) {
            throw new Error(`There is no such subscriber as ${name}`);
        }
        this.subscribers.map((x, i) => this.removeSubscriber(name, x, i));

        return this.subscribers;
    }

    receiveBook(name, title, author){
        let subscriber = this.foudSubscriber(name);
        if (!subscriber) {
            throw new Error(`There is no such subscriber as ${name}`);
        }

        if (subscriber.books.length >= this.subscriptionTypes[subscriber.type]) {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[subscriber.type]}!`)
        }

        let bookData = {title, author};

        subscriber.books.push(bookData);
        return subscriber;
    }

    subscriberDataFormat(x){
        return `Subscriber: ${x.name}, Type: ${x.type}\nReceived books: ${x.books.map(b => `${b.title} by ${b.author}`).join(', ')}\n`
    }

    noInfo(){
        return `${this.libraryName} has no information about any subscribers`;
    }

    showInfo(){
        if (this.subscribers.length > 0) {
            return this.subscribers.map(this.subscriberDataFormat).join('');
        }
        return this.noInfo()
    }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');

console.log(lib.unsubscribe('Peter'));


module.exports = Library;