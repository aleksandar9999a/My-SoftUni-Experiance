const {expect} = require('chai');

it('Expect 2 + 1 to be equal to 3', () => {
    const result = 2 + 1;
    const expected = 3;
    expect(result).to.be.equal(expected);
})