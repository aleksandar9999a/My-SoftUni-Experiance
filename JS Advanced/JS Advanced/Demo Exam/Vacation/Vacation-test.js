const { expect } = require('chai');
const Vacation = require('./Vacation');

describe('Vacation Tests', () => {
    describe('4 properties - kids with default value', () => {
        it('Test default value for kids', () => {
            let actual = new Vacation('Mr Pesho', 'San diego', 2000);
            expect(actual.kids).to.be.a('object');
        })
        it('Others values test', () => {
            let actual = new Vacation('Mr Pesho', 'San diego', 2000);
            expect(actual.organizer).to.be.equal('Mr Pesho');
            expect(actual.destination).to.be.equal('San diego');
            expect(actual.budget).to.be.equal(2000);
        })
    })

    describe('registerChild', () => {
        it('If the budget is not enough throw error', () => {
            let actual = new Vacation('Mr Pesho', 'San diego', 2000);
            let errF = () => actual.registerChild('Ivan', '5', 1500);
            expect(errF).to.throw(Error, "Ivan's money is not enough to go on vacation to San diego.");
        })
        it('If current kid is already into that grade the method should return string', () => {
            let actual = new Vacation('Mr Pesho', 'San diego', 2000);
            actual.registerChild('Ivan', '5', 20000);
            expect(actual.registerChild('Ivan', '5', 20000)).to.be.equal('Ivan is already in the list for this San diego vacation.');
        })
        it('Expect to have one kid in kids propertie', () => {
            let actual = new Vacation('Mr Pesho', 'San diego', 2000);
            actual.registerChild('Ivan', '5', 20000);
            expect(actual.kids[5]).to.be.have.length(1);
        })
    })

    describe('removeChild', () => {
        it('If kid does not exist return string', () => {
            let actual = new Vacation('Mr Pesho', 'San diego', 2000);
            expect(actual.removeChild('Ivan', 5)).to.be.equal("We couldn't find Ivan in 5 grade.")
        })
        it('If exist then remove it', () => {
            let actual = new Vacation('Mr Pesho', 'San diego', 2000);
            actual.registerChild('Ivan', 5, 5000);
            expect(actual.removeChild('Ivan', 5)).to.be.equal(actual.kids[5]);
            expect(actual.kids[5]).to.have.length(0);
        })
    })
})