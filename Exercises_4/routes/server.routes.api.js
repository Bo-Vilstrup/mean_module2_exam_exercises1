/**
 * Created by bo on 9/7/16.
 */
var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');
//var bodyParser = require('body-parser');

/* GET home page. */
router.get('/random', function(req, res, next) {
    res.json( {  jokes: [  jokes.getRandomJoke() ] } );
});
router.get('/all', function(req, res, next) {
    res.json( { jokes: jokes.allJokes() } );
});
router.post('/add', function(req, res, next) {

    var newJoke = req.body.newJoke;
    var jokeAdded = jokes.addJoke(newJoke);
    res.json({newJoke : jokeAdded});
    //res.json( jokes.addJoke(newJoke) );
});


module.exports = router;
