const { expect } = require('chai');
const StringBuilder = require('./String-Builder.js');

describe('StringBuilder', () => {
    it('Can be instantiated with a passed without anything', () => {
        let expected = new StringBuilder()
        expect(expected).to.be.a("object");
    })
    it('Can be instantiated with a passed in string argument', () => {
        let expected = new StringBuilder('Test');
        expect(expected._stringArray).to.have.lengthOf(4);
    })

    it('Function attached to instance', () => {
        let expected = new StringBuilder('Test');
        
        expect(expected).to.have.property('append');
        expect(expected).to.have.property('prepend');
        expect(expected).to.have.property('insertAt');
        expect(expected).to.have.property('remove');
        expect(expected).to.have.property('toString');
    })

    it('Converts the passed in string argument to an array and adds it to the end of the storage (append)', () => {
        let expected = new StringBuilder('Test');
        expected.append('Demo')
        let lastI = expected._stringArray.length;
        expect(expected._stringArray.slice(lastI - 4, lastI).join('')).to.be.equal('Demo');
    })

    it('Converts the passed in string argument to an array and adds it to the beginning of the storage (prepend)', () => {
        let expected = new StringBuilder('Test');
        expected.prepend('Demo');
        expect(expected._stringArray.slice(0, 4).join('')).to.be.equal('Demo');
    })

    it('Converts the passed in string argument to an array and adds it at the given index (insertAt)', () => {
        let expected = new StringBuilder('Test');
        expected.insertAt('Demo' , 2);
        expect(expected._stringArray.slice(2, 6).join('')).to.be.equal('Demo');
    })
    

    it('Removes elements from the storage, starting at the given index (inclusive), length number of characters (remove)', () => {
        let expected = new StringBuilder('Test');
        expected.remove(2, 4);
        expect(expected._stringArray.join('')).to.be.equal('Te');
    })

    it('Returns a string with all elements joined by an empty string (toString)', () => {
        let expected = new StringBuilder('Test');
        expected.append('Demo');
        expect(expected.toString()).to.be.equal('TestDemo');
    })

    it('All passed in arguments should be strings. If any of them are not, throws a type error with the following message: "Argument must be a string"', () => {
        let expected = new StringBuilder('Test');
        expect(() => expected.append(2)).to.Throw(TypeError);
        expect(() => expected.prepend(2)).to.Throw(TypeError);
        expect(() => expected.insertAt(2, 5)).to.Throw(TypeError);
        expect(() => new StringBuilder(2)).to.Throw(TypeError);
    })
})
