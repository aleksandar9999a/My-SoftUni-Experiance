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
            expect(actual.registerChild('Ivan', '5', 1500)).to.be.equal("Ivan's money is not enough to go on vacation to San diego.");
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

    describe('toString', () => {
        it('If no kids for the trip', () => {
            let actual = new Vacation('Mr Pesho', 'San diego', 2000);
            expect(actual.toString()).to.be.equal(`No children are enrolled for the trip and the organization of Mr Pesho falls out...`)
        })
        it('If have kids', () => {
            let vacation = new Vacation('Miss. Elizabeth', 'The bahamas', 400);

            vacation.registerChild('Gosho', 12, 3400);
            vacation.registerChild('Pesho', 12, 400);
            vacation.registerChild('Pesho', 12, 400);
            vacation.registerChild('Skaro', 11, 400);
            vacation.registerChild('Gosho', 11, 3444);


            expect(vacation.toString()).to.be.equal("Miss. Elizabeth will take 4 children on trip to The bahamas\nGrade: 11\n1. Skaro-400\n2. Gosho-3444\nGrade: 12\n1. Gosho-3400\n2. Pesho-400\n")
        })
    })
})