const expect = require('chai').expect;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('lookupChar', function(){
    //If first param is not a string
    it('Test with number as first param. Expected output is undefined', () => {
        expect(lookupChar(5, 0)).to.be.equal(undefined);
    })

    //If second param is not a valid number
    it('Test with string for second param. Expected output is undefined', () => {
        expect(lookupChar('I love you', 'Not really')).to.be.equal(undefined);
    })
    it('Test with string for second param. Expected output is undefined', () => {
        expect(lookupChar('I love you', 's')).to.be.equal(undefined);
    })
    it('Test with incorrect index for second param. Expected output is undefined', () => {
        expect(lookupChar('I love you', 5.5)).to.be.equal(undefined);
    })

    //If second param is incorrect index
    it('Test with incorrect index for second param. Expected output is "Incorrect index"', () => {
        expect(lookupChar('I love you', 15)).to.be.equal("Incorrect index");
    })
    it('Test with incorrect index for second param. Expected output is "Incorrect index"', () => {
        expect(lookupChar('I love you', -15)).to.be.equal("Incorrect index");
    })
    it('Test with incorrect index for second param. Expected output is "Incorrect index"', () => {
        expect(lookupChar('I love you', 10)).to.be.equal("Incorrect index");
    })

    //Test with valid params
    it('Test with valid params. Expected output is "e"', () => {
        expect(lookupChar('I love you', 5)).to.be.equal("e");
    })
})