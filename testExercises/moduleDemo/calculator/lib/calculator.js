/**
 * Created by bo on 9/8/16.
 */

var add = function(a, b) {return a + b;};
var subtract = function(a, b) {return a - b;};
var multiply = function(a, b) {return a * b;};
var divide = function(a, b) {
    if(b === 0) throw new Error("Attempt to divide by zero"); //throw new Error("Attempt to divide by zero" );
    return a / b
};

module.exports = {
    add : add,
    sub : subtract,
    mul : multiply,
    div : divide
};

