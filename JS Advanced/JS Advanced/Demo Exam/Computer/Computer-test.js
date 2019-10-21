const { expect } = require('chai');
const Computer = require('./Computer');

describe("Computer Tests", () => {
    describe("installAProgram", () => {
        it("Return object", () => {
            let actual = new Computer(4096, 7.5, 250000);
            expect(actual.installAProgram('Word', 7300)).to.be.a("object");
        })
        it("Return object, stored in installedPrograms array", () => {
            let actual = new Computer(4096, 7.5, 250000);
            actual.installAProgram('Word', 7300);
            expect(actual.installedPrograms[0]).to.be.a("object");
        })
        it("Throw error if hddMemory is exceeded", () => {
            let actual = new Computer(4096, 7.5, 250000);
            let errF = () => actual.installAProgram('Word', 250001).
            expect(errF).to.throw(Error, "There is not enough space on the hard drive");
        })
    })
})