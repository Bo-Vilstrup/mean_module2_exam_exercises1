/**
 * Created by bo on 9/4/16.
 */
"use strict";

var jokesArr = [
    "A day without sunshine is like, night.",
    "At what age is it appropriate to tell my dog that he's adopted?",
    "I intend to live forever, or die trying"
];


var jokes = function() {
    return jokesArr;
};

var _getRandomJoke = function() {
    var index = Math.round( Math.random() * (jokesArr.length - 1));
    return jokesArr[index];
};

var _addJoke = function(joke) {
    jokesArr.push(joke);
    return jokesArr[jokesArr.length - 1];
};

module.exports = {
    allJokes : jokes,
    getRandomJoke : _getRandomJoke,
    addJoke : _addJoke
};