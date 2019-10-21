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
    describe("uninstallAProgram", () => {
        it("Return installedPrograms array without uninstalled program", () => {
            let actual = new Computer(4096, 7.5, 250000);
            actual.installAProgram('Word', 7300);
            actual.uninstallAProgram('Word');
            
            expect(actual.installedPrograms[0]).to.be.equal(undefined)
        })
        it("Throw error if program not exist", () => {
            let actual = new Computer(4096, 7.5, 250000);
            let errF = () => actual.uninstallAProgram('Word');

            expect(errF).to.throw(Error, "Control panel is not responding")
        })
    })

    describe("openAProgram", () => {
        it("Throw error if program in not present in installedPrograms", () => {
            let actual = new Computer(4096, 7.5, 250000);
            let errF = () => actual.openAProgram('Word');
            expect(errF).to.throw(Error, "The Word is not recognized")
        })
        it("Throw error if program is already open", () => {
            let actual = new Computer(4096, 7.5, 250000);
            actual.installAProgram('Word', 7300);
            actual.openAProgram('Word')
            let errF = () => actual.openAProgram('Word');
            expect(errF).to.throw(Error, "The Word is already open")
        })
    })

    describe("taskManagerView", () => {
        it("there is no opened program, the function returns All running smooth so far", () => {
            let actual = new Computer(4096, 7.5, 250000);
            expect(actual.taskManagerView()).to.be.equal("All running smooth so far")
        })
    })
})

