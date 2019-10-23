const { expect } = require('chai');
const BookStore = require('./BookStore');

describe("BookStore Tests", () => {
    describe("Instantiation with one parameter", () => {
        it("String representing the bookstore name", () => {
            let actual = new BookStore('Store');
            expect(actual).to.have.property('name', 'Store');
            expect(actual.books).to.be.a("array");
            expect(actual.workers).to.be.a("array");
        })
    })
    describe("stockBooks", () => {
        it("Adds each of the elements from the input into the book's property", () => {
            let actual = new BookStore('Store');
            expect(actual.stockBooks(['Inferno-Dan Braun'])).to.be.a("array");
            expect(actual.stockBooks(['Harry Potter-J.Rowling'])).to.have.length(2);
        })
    })
    describe("hire", () => {
        it("The worker is hired, and a proper message is returned", () => {
            let actual = new BookStore('Store');
            actual.stockBooks(['Inferno-Dan Braun']);
            expect(actual.hire('George', 'seller')).to.be.equal('George started work at Store as seller');
            expect(actual.workers).to.have.length(1);
        })
        it("If the worker is already hired the function throws an error", () => {
            let actual = new BookStore('Store');
            actual.stockBooks(['Inferno-Dan Braun']);
            actual.hire('George', 'seller');
            let errF = () => actual.hire('George', 'seller');
            expect(errF).to.throw(Error, "This person is our employee");
        })
    })
    describe("fire", () => {
        it("If there is an employee with that name, he is fired", () => {
            let actual = new BookStore('Store');
            actual.stockBooks(['Inferno-Dan Braun']);
            actual.hire('George', 'seller');
            expect(actual.fire('George')).to.be.equal('George is fired');
            expect(actual.workers).to.have.length(0);
        })
        it("Otherwise, an error is thrown", () => {
            let actual = new BookStore('Store');
            actual.stockBooks(['Inferno-Dan Braun']);
            let errF = () => actual.fire('George')
            expect(errF).to.throw(Error, "George doesn't work here");
        })
    })
    describe("sellBook", () => {
        it("If the book is in stock and the given worker name is present in the workers property, the book is sold, and the current worker books sold counter is increased by 1", () => {
            let actual = new BookStore('Store');
            actual.stockBooks(['Inferno-Dan Braun']);
            actual.hire('George', 'seller');
            actual.sellBook('Inferno', 'George');
            expect(actual.workers[0]).to.have.property("booksSold", 1);
        })
        it("If books is not in stock throw error", () => {
            let actual = new BookStore('Store');
            actual.stockBooks(['Inferno-Dan Braun']);
            actual.hire('George', 'seller');
            let errF = () => actual.sellBook('Harry Potter', 'George');
            expect(errF).to.throw(Error, "This book is out of stock");
        })
        it("If worker name is invalid throw error", () => {
            let actual = new BookStore('Store');
            actual.stockBooks(['Inferno-Dan Braun']);
            actual.hire('George', 'seller');
            let errF = () => actual.sellBook('Inferno', 'Ivan');
            expect(errF).to.throw(Error, "Ivan is not working here");
        })
    })
    describe("printWorkers", () => {
        it("Prints all workers", () => {
            let actual = new BookStore('Store');
            actual.hire('George', 'seller');
            expect(actual.printWorkers()).to.be.equal(`Name:George Position:seller BooksSold:0`)
        })
    })
})