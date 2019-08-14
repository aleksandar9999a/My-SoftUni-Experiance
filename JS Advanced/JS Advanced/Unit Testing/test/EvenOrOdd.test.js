const expect = require('chai').expect;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('isOddOrEven', function(){
    // If input is not string
    it('Test with number expect to be equal to undefined', () => {
        const actual = isOddOrEven(5);

        expect(actual).to.be.equal(undefined)
    });

    it('Test with array expect to be equal to undefined', () => {
        const actual = isOddOrEven([]);

        expect(actual).to.be.equal(undefined)
    });

    // If input is Object
    it('Test with object expect to be equal to undefined', () => {
        const actual = isOddOrEven({});

        expect(actual).to.be.equal(undefined)
    });

    //If input is string with even length
    it('Test with pedali expect to be equal to even', () => {
        const actual = isOddOrEven('pedali');

        expect(actual).to.be.equal('even')
    });

    //If input is string with odd length
    it('Test with pedal expect to be equal to odd', () => {
        const actual = isOddOrEven('pedal');

        expect(actual).to.be.equal('odd')
    });
})

