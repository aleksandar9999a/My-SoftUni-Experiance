let SkiResort = require('./solution');
const { expect } = require('chai');

describe('SkiResort', function () {
    describe('Instantiation with one parameter, others are default', () => {
        it('Instantiation with one parameter', () => {
            let actual = new SkiResort('some');
            expect(actual).to.have.property('name', 'some');
        })
        it('Test default values', () => {
            let actual = new SkiResort('some');
            expect(actual.voters).to.be.equal(0);
            expect(actual.hotels).to.be.a("array");
        })
    })

    describe("bestHotel", () => {
        it('Returns the best hotel in a given format', () => {
            let actual = new SkiResort('some');
            actual.build("Sun", 10);
            actual.leave('Sun', 3, 2);
            expect(actual.bestHotel).to.be.equal("Best hotel is Sun with grade 6. Available beds: 13")
        })
        it("Return no votes yet return a proper message", () => {
            let actual = new SkiResort('some');
            actual.build("Sun", 10);
            expect(actual.bestHotel).to.be.equal("No votes yet")
        })
    })

    describe("build", () => {
        it('Throw error if beds < 1', () => {
            let actual = new SkiResort('some');
            let errF = () => actual.build("Sun", 0);
            expect(errF).to.throw(Error, "Invalid input");
        })
        it('Throw error if name is empty', () => {
            let actual = new SkiResort('some');
            let errF = () => actual.build("", 10);
            expect(errF).to.throw(Error, "Invalid input");
        })
        it("Function should add the hotel to the hotels array and return the proper message", () => {
            let actual = new SkiResort('some');
            expect(actual.build("Sun", 10)).to.be.equal("Successfully built new hotel - Sun");
            expect(actual.hotels).to.have.length(1);
        })
    })

    describe("book", () => {
        it("If the name is valid", () => {
            let actual = new SkiResort('some');
            actual.build("Sun", 10);
            expect(actual.book('Sun', 5)).to.be.equal("Successfully booked");
            expect(actual.hotels[0].beds).to.be.equal(5);
        })
        it("If input is invalid throw error", () => {
            let actual = new SkiResort('some');
            actual.build("Sun", 10);

            let errF = () => actual.book('', 5);
            expect(errF).to.throw(Error, "Invalid input");

            let errF2 = () => actual.book('Sun', 0);
            expect(errF2).to.throw(Error, "Invalid input");

            let errF3 = () => actual.book('SoftUniHotel', 5);
            expect(errF3).to.throw(Error, "There is no such hotel");

            let errF4 = () => actual.book('Sun', 15);
            expect(errF4).to.throw(Error, "There is no free space")
        })
    })

    describe("leave", () => {
        it("If input is invalid throw error", () => {
            let actual = new SkiResort('some');
            actual.build("Sun", 10);
            actual.book('Sun', 5);

            let errF = () => actual.leave('', 5, 5);
            expect(errF).to.throw(Error, "Invalid input");

            let errF2 = () => actual.leave('Sun', 0, 5);
            expect(errF2).to.throw(Error, "Invalid input");

            let errF3 = () => actual.leave('SoftUniHotel', 5, 5);
            expect(errF3).to.throw(Error, "There is no such hotel");
        })
        it("If input is valid return message", () => {
            let actual = new SkiResort('some');
            actual.build("Sun", 10);
            actual.book('Sun', 5);
            expect(actual.leave('Sun', 5, 5)).to.be.equal("5 people left Sun hotel")
            expect(actual.hotels[0].beds).to.be.equal(10);
            expect(actual.hotels[0].points).to.be.equal(25);
            expect(actual.voters).to.be.equal(5);
        })
    })

    describe("averageGrade", () => {
        it("if there aren’t any votes the proper message should be returned", () => {
            let actual = new SkiResort('some');
            expect(actual.averageGrade()).to.be.equal("No votes yet")
        })
        it("Return formated string", () => {
            let res = new SkiResort("Some");
            res.build("Sun", 10);
            res.build('Avenue', 5);
            res.book('Sun', 5);
            res.book('Avenue', 5);
            res.leave('Sun', 3, 2);
            res.leave('Avenue', 3, 3);
            res.book('Avenue', 3);
            res.leave('Avenue', 3, 0.5);
            expect(res.averageGrade()).to.be.equal("Average grade: 1.83")
        })
    })
});
