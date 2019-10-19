const { expect } = require(`chai`);
const solve = require("./solution");

describe("Split String Equally Test", () => {
    it("Input (a, 2) expect (aa)", () => {
        expect(solve("a", 2)).to.equal("aa");
    })
    it("Input (aa, 2) expect (aa)", () => {
        expect(solve("aa", 2)).to.equal("aa");
    })
    it("Input (abcd, 2) expect (ab cd)", () => {
        expect(solve("abcd", 2)).to.equal("ab cd");
    })
    it("Input (abc, 2) expect (ab ca)", () => {
        expect(solve("abc", 2)).to.equal("ab ca");
    })
    it("Input (RandomInput1234, 2) expect (Ra nd om In pu t1 23 4R)", () => {
        expect(solve("RandomInput1234", 2)).to.equal("Ra nd om In pu t1 23 4R");
    })
    it("Input (Test, 8) expect (TestTest)", () => {
        expect(solve("Test", 8)).to.equal("TestTest");
    })
    it("Input (JavaScript, 14) expect (JavaScriptJava)", () => {
        expect(solve("JavaScript", 14)).to.equal("JavaScriptJava");
    })
})