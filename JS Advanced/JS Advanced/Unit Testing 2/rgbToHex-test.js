const { expect } = require('chai');
const rgbToHex = require('./rgbToHex');

describe("RGB to HEX", () => {
    it("non integer returns undefined", () => {
        expect(rgbToHex(1.1, 1, 1)).to.equal(undefined);
        expect(rgbToHex(1, 1.1, 1)).to.equal(undefined);
        expect(rgbToHex(1, 1, 1.1)).to.equal(undefined);
    })
    it("less than 0 returns undefined", () => {
        expect(rgbToHex(-1, 1, 1)).to.equal(undefined);
        expect(rgbToHex(1, -1, 1)).to.equal(undefined);
        expect(rgbToHex(1, 1, -1)).to.equal(undefined);
    })
    it("Gt than 255 returns undefined", () => {
        expect(rgbToHex(256, 1, 1)).to.equal(undefined);
        expect(rgbToHex(1, 256, 1)).to.equal(undefined);
        expect(rgbToHex(1, 1, 256)).to.equal(undefined);
    })
    it("{0, 0, 0} => #000000", () => {
        expect(rgbToHex(0, 0, 0)).to.equal("#000000");
    })
    it("{255, 255, 255} => #FFFFFF", () => {
        expect(rgbToHex(255, 255, 255)).to.equal("#FFFFFF");
    })
})