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
})