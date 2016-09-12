var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Routes
var routes = require('./routes/index');
var routeLogin = require('./routes/login');
var routesJokes = require('./routes/jokes');
var routesApi = require('./routes/server.routes.api');
// session
var session = require("express-session");
var uuid = require('uuid');

var jokes = require('./model/jokes');
//jokes.addJoke("add joke");
//for(var i = 0; i < 1; i++) {
//  console.log(jokes.getRandomJoke());
//}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// note: Since version 1.5.0, the cookie-parser middleware no longer needs to be used for this module to work
app.use(cookieParser());
app.use(session({secret:'secret_3162735',saveUninitialized:true, resave: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {

  var sessionUserName = req.session.userName;
  var formUserName = req.body.userName;
  //str.match(/ain/g);
  if( req.url.match(/^\/api\//).toString() === "/api/") return next();
  if(sessionUserName) return next();
  if(formUserName) {
    req.session.userName =  formUserName;
    req.session.randomCounter =  1;
    req.session.allCounter =  1;
    req.session.addCounter =  1;
    res.redirect("/");
  } else {
    req.url = "/login";
    next();
  }
});

app.use('/', routes);
app.use('/login', routeLogin);
app.use('/jokes', routesJokes);
app.use('/api', routesApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
