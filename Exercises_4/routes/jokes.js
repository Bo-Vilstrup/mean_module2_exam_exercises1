/**
 * Created by bo on 9/4/16.
 */
var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');



/* GET home page. */
router.get('/random', function(req, res, next) {
    res.render('jokes', { title: 'The Joke Site', counts: req.session.randomCounter++ ,mode: false, jokes: [  jokes.getRandomJoke() ] });
});
router.get('/all', function(req, res, next) {
    res.render('jokes', { title: 'The Joke Site', counts: req.session.allCounter++ ,mode: false, jokes: jokes.allJokes() });
});
router.get('/add', function(req, res, next) {
    res.render('jokes', { title: 'The Joke Site', counts: req.session.addCounter++ ,mode: true, jokes: [] });
});
router.get('/store', function(req, res, next) {
    req.session.addCounter--;
    var newJoke = req.query.newJoke;
    jokes.addJoke(newJoke);
    res.redirect('/jokes/add');
});

module.exports = router;