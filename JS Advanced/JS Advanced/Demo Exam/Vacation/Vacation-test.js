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
            expect(errF).to.throw(Error, "Ivan's money is not enough to go on vacation to San diego.")
        })
    })
})