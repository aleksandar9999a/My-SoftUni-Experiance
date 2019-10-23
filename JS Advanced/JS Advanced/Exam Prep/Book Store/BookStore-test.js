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
        
    })
})