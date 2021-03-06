var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var viewRouter = require('./routes/views');
var createRouter = require('./routes/create');
// var deleteRouter = require('./routes/delete');
var updateRouter = require('./routes/update');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
// support parsing of application/json type post data
app.use(bodyParser.json());
// Create application/json parser
var jsonParser = bodyParser.json();


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/views', viewRouter);
app.use('/create', createRouter);
app.use('/create', updateRouter);
// app.use('/delete', deleteRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
