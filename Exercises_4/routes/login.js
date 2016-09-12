/**
 * Created by bo on 9/6/16.
 */
var express = require('express');
var router = express.Router();

/*  */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});


module.exports = router;