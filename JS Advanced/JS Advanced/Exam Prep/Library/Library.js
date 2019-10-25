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
}

let myLibrary = new Library('Lib');
myLibrary.subscribe('Alex', 'normal');
myLibrary.subscribe('Alex', 'vip');
console.log(myLibrary.subscribers[0]);

module.exports = Library;