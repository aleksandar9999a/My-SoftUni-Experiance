const { expect } = require('chai');
const SoftUniFy = require('./SoftUniFy');

describe('SoftUniFy Tests', () => {
    describe('Properties test', () => {
        it('Should contain allSongs property that is initialized as an empty object', () => {
            let actual = new SoftUniFy();
            expect(actual.allSongs).to.be.a('object');
        })
    })
})