const { expect } = require('chai');
const { assert } = require('chai');
const pizzUni = require('./PizzUni');

describe("Tests PizzUni", () => {
    describe("An instance of PizzUni class should have 3 properties", () => {
        it("PizzUni must return object", () => {
            let expected = new pizzUni();
            expect(expected).to.be.a("object");
        })
        it("PizzUni must have registeredUsers property", () => {
            let expected = new pizzUni();
            expect(expected).to.have.property("registeredUsers");
        })
        it("PizzUni must have availableProducts property", () => {
            let expected = new pizzUni();
            expect(expected).to.have.property("availableProducts");
        })
        it("PizzUni must have orders property", () => {
            let expected = new pizzUni();
            expect(expected).to.have.property("orders");
        })
    })

    describe("registerUser", ()=>{
        it("Must return current object", () => {
            let expected = new pizzUni();
            expect(expected.registerUser("alex@gmail.com")).to.be.a("object");
        })
        it("Must return error if exist", () => {
            let expected = new pizzUni();
            expected.registerUser("alex@gmail.com");
            let errF = () => expected.registerUser("alex@gmail.com");
            assert(errF, `This email address (alex@gmail.com) is already being used!`)
        })
    })
})