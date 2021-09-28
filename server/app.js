var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRotas = require('./routes/index');
var usuariosRotas = require('./routes/usuarios');
var adminRotas = require('./routes/admin')
var loginRotas = require('./routes/login')

const authMiddleware = require('./middlewares/auth')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({ secret: 'YWhNbGtEb2lkbw==', cookie: { maxAge: 60000 } }))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/usuarios', usuariosRotas);
app.use('/login', loginRotas);
app.use('/', indexRotas);

app.use(authMiddleware)

app.use('/admin', adminRotas);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
