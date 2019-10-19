const { expect } = require(`chai`);
const solve = require("./solution");

describe("Extract User Data Tests", () => {
    it(`Martin Chaov +359-0-000-000 martin@martin.martin => Name: Martin Chaov`, () => {
        expect(solve(["Martin Chaov +359-0-000-000 martin@martin.martin"])).to.equal(`Name: Martin Chaov
Phone number: +359-0-000-000
Email: martin@martin.martin`);
    })

    it(`Martin +359-0-000-000 martin@martin.martin => Invalid`, () => {
        expect(solve(["Martin +359-0-000-000 martin@martin.martin"])).to.equal(`Invalid`);
    })
    it(`Martin Chaov +359 0-000-000 martin@martin.martin => Invalid`, () => {
        expect(solve(["Martin +359 0-000-000 martin@martin.martin"])).to.equal(`Invalid`);
    })
    it(`Martin Chaov +359-0-000-000 Martin@martin.martin => Invalid`, () => {
        expect(solve(["Martin +359-0-000-000 Martin@martin.martin"])).to.equal(`Invalid`);
    })
})