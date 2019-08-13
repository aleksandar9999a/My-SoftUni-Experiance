const {expect} = require('chai');
const {sum, subtract} = require('./calculator');

it('expect sum(1, 2) to be equal to 3', () => {
    const expected = 3;

    const actual = sum(1, 2);

    expect(actual).to.be.equal(expected)
});

it('expect subtract(5, 2) to be equal to 3', () => {
    const expected = 3;

    const actual = subtract(5, 2);

    expect(actual).to.be.equal(expected)
});