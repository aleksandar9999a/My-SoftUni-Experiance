const { expect } = require('chai');
const BookStore = require('./BookStore');

describe("BookStore Tests", () => {
    describe("Instantiation with one parameter", () => {
        it("String representing the bookstore name", () => {
            let actual = new BookStore('Store');
            expect(actual).to.have.property('name', 'Store');
        })
    })
    describe("stockBooks", () => {
        it("Adds each of the elements from the input into the book's property", () => {
            let actual = new BookStore('Store');
            expect(actual.stockBooks(['Inferno-Dan Braun'])).to.be.a("array");
        })
    })
    describe("hire", () => {
        it("The worker is hired, and a proper message is returned", () => {
            let actual = new BookStore('Store');
            actual.stockBooks(['Inferno-Dan Braun']);
            expect(actual.hire('George', 'seller')).to.be.equal('George started work at Store as seller');
        })
    })
})