const { expect } = require(`chai`);
const solve = require("./solution");

describe("Extract User Data Tests", () => {
    it(`Test with multi data`, () => {
        expect(solve(["George Smith +359 2 123 456 George@gmail.com", "G S +359-5-759-684 valid@gmail.com", "Smith +359-5 789 654 smith@gmail.com"]))
        .to.equal(`Invalid data
- - -
Name: G S
Phone Number: +359-5-759-684
Email: valid@gmail.com
- - -
Invalid data
- - -`);
    })
})