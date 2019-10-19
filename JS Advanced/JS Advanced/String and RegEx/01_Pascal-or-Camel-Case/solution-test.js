const { expect } = require(`chai`);
const solve = require("./solution");

describe("Pascal/Camal Case Test", () => {
    it("Wrong type = 'Invalid input'", ()=> {
        expect(solve("Another Case", "Invalid Input")).to.equal('Error!')
    })

    it("Pascal Case = 'SecondExample'", ()=> {
        expect(solve("Pascal Case", "secOND eXamPLE")).to.equal('SecondExample')
    })
})