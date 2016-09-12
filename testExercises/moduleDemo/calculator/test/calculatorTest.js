/**
 * Created by bo on 9/8/16.
 */


var expect = require("chai").expect;
var calculator = require('../lib/calculator');


describe("Test Calculators arithmetical functions", function(){

    describe("add to numbers", function() {

        it("Should return 4", function() {
            expect(calculator.add(2, 2)).to.equal(4);
        });
    }); // End of add numbers


    describe("Subtract to numbers", function() {
        it("should return 5", function() {
            expect(calculator.sub(10, 5)).to.equal(5);
        });
    }); // End of sub numbers

    describe("multiplication of two numbers", function() {
        it("should return 100", function() {
            expect(calculator.mul(10, 10)).to.equal(100);
        });
    }); // End of mul numbers

    describe("dividing of two numbers", function() {
        it("should return 1", function() {
            expect(calculator.div(10, 10)).to.equal(1);
        });
    }); // End of  numbers

    describe("divide by zero", function() {
        it("should throw exception", function() {

            expect(function() {
                calculator.div(10,0);
            }).to.throw(Error, "Attempt to divide by zero");
            //expect(() => calculator.div(10,0)).to.throw(Error, "Attempt to divide by zero");
        });
    }); // End of  numbers

}); // End of Calculator test







//var calculator = require('../lib/calculator');
//var assert = require('assert');
//
//describe('Array', function() {
//    describe('#indexOf()', function() {
//        it('should return -1 when the value is not present', function() {
//            assert.equal(-1, [1,2,3].indexOf(4));
//        });
//    });
//});



