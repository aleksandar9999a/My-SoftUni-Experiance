const expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer', function(){
    //Tests for addFive Function
    describe('addFive', function(){
        //If input is not number
        it('Test with string as input. Expected result - undefined', () =>{
            expect(mathEnforcer.addFive('str')).to.be.equal(undefined);
        })
        it('Test with array as input. Expected result - undefined', () =>{
            expect(mathEnforcer.addFive([])).to.be.equal(undefined);
        })
        it('Test with object as input. Expected result - undefined', () =>{
            expect(mathEnforcer.addFive({})).to.be.equal(undefined);
        })
        //If input is number
        it('Test with positive number as input. Expected result - 15', () =>{
            expect(mathEnforcer.addFive(10)).to.be.equal(15);
        })
        it('Test with negative number as input. Expected result - -5', () =>{
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        })
    })

    //Tests for subtractTen Function
    describe('subtractTen', function(){
        //If input is not number
        it('Test with string as input. Expected result - undefined', () =>{
            expect(mathEnforcer.subtractTen('str')).to.be.equal(undefined);
        })
        it('Test with array as input. Expected result - undefined', () =>{
            expect(mathEnforcer.subtractTen([])).to.be.equal(undefined);
        })
        it('Test with object as input. Expected result - undefined', () =>{
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
        })
        //If input is number
        it('Test with number as input. Expected result - 5', () =>{
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        })
    })

    //Tests for sum Function
    describe('sum', function(){
        //If input is not number
        it('Test with string as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum('str', 'str')).to.be.equal(undefined);
        })
        it('Test with string as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum('str', 5)).to.be.equal(undefined);
        })
        it('Test with string as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum(5, 'str')).to.be.equal(undefined);
        })

        it('Test with array as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum([], [])).to.be.equal(undefined);
        })
        it('Test with array as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum([], 5)).to.be.equal(undefined);
        })
        it('Test with array as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum(5, [])).to.be.equal(undefined);
        })

        it('Test with object as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum({}, {})).to.be.equal(undefined);
        })
        it('Test with object as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum({}, 5)).to.be.equal(undefined);
        })
        it('Test with object as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum(5, {})).to.be.equal(undefined);
        })

        it('Test with object and array as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum([], {})).to.be.equal(undefined);
        })

        it('Test with object and array as input. Expected result - undefined', () =>{
            expect(mathEnforcer.sum({}, [])).to.be.equal(undefined);
        })
        
        //If input is number
        it('Test with numbers as input. Expected result - 10', () =>{
            expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        })
        it('Test with numbers as input. Expected result - -10', () =>{
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        })
    })
})
