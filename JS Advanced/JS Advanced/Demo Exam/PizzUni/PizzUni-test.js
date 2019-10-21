const { expect } = require('chai');
const PizzUni = require('./PizzUni');

describe("Tests PizzUni", () => {
    describe("Constructor", ()=>{
        it("Must be instantiated without anything", () => {
            let actual = new PizzUni();
            expect(actual).to.be.a("object");
        })
    })
    describe("registerUser", ()=>{
        it("If email exist throw error", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            expect(() => actual.registerUser("alex@gmail.com")).to.throw(Error, 'This email address (alex@gmail.com) is already being used!');
        })
        it("If email doesn't exist then add to register", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            expect(actual.registeredUsers[0].email).to.be.equal("alex@gmail.com");
        })
    })
    describe("makeAnOrder", () => {
        it("If email is not registered throw error", () => {
            let actual = new PizzUni();
            expect(() => actual.makeAnOrder("alex@gmail.com", "Italian Style", "Fanta")).to.throw(Error, "You must be registered to make orders!");
        })
        it("If pizza doesn't exist throw error", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            expect(() => actual.makeAnOrder("alex@gmail.com", "Bulgarian Style", "Fanta")).to.throw(Error, "You must order at least 1 Pizza to finish the order.");
        })
        it("If data is valid return index of order", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            expect(actual.makeAnOrder("alex@gmail.com", "Italian Style", "Fanta")).to.be.equal(0)
        })
        it("Should return number of orders from orderHistory", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            actual.makeAnOrder("alex@gmail.com", "Italian Style", "Fanta");
            expect(actual.registeredUsers[0].orderHistory.length).to.be.equal(1)
        })
        it("Should return the number of drinks in first orders", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            actual.makeAnOrder("alex@gmail.com", "Italian Style", "Fanta");
            expect(actual.orders[0].orderedDrink[0].length).to.be.equal(1);
        })
        it("Should return order status pendind", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            actual.makeAnOrder("alex@gmail.com", "Italian Style", "Fanta");
            expect(actual.orders[0].status).to.be.equal("pending");
        })
    })
    describe("completeOrder", () => {
        it("Should change the order status from pending to completed", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            actual.makeAnOrder("alex@gmail.com", "Italian Style", "Fanta");
            actual.completeOrder();
            expect(actual.orders[0].status).to.be.equal("completed")
        })
        it("Should return current order", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            actual.makeAnOrder("alex@gmail.com", "Italian Style", "Fanta");
            expect(actual.completeOrder()).to.be.equal(actual.orders[0])
        })
    })
    describe("detailsAboutMyOrder", () => {
        it("Returns the status of order", () => {
            let actual = new PizzUni();
            actual.registerUser("alex@gmail.com");
            actual.makeAnOrder("alex@gmail.com", "Italian Style", "Fanta");
            actual.completeOrder();
            expect(actual.detailsAboutMyOrder(0)).to.be.equal("Status of your order: completed")
        })
    })
})