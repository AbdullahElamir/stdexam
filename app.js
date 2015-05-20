var express = require('express');
<<<<<<< HEAD
var session = require('express-session');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var passport = require('passport');
=======
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

>>>>>>> 6233b46d276f7d7bbeb7e779449ccc0594ea1943
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

<<<<<<< HEAD
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'MctDev',resave: true,saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers
=======
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
>>>>>>> 6233b46d276f7d7bbeb7e779449ccc0594ea1943

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
<<<<<<< HEAD
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
=======
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
>>>>>>> 6233b46d276f7d7bbeb7e779449ccc0594ea1943
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
<<<<<<< HEAD
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
=======
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
>>>>>>> 6233b46d276f7d7bbeb7e779449ccc0594ea1943
});


module.exports = app;
