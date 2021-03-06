var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');
require('dotenv').config();
var passport = require('passport');

var indexRouter = require('./routes/index');
var storesRouter = require('./routes/stores');
var welfareorgsRouter = require('./routes/welfareorgs');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var authRouter = require('./routes/auth');

var { sequelize } = require('./models');
var passportConfig = require('./passport');


var app = express();
sequelize.sync();
passportConfig(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave:false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stores', storesRouter);
app.use('/welfareorgs', welfareorgsRouter);
// app.use('/mypage', mypageRouter);
app.use('/login', loginRouter);
app.use('/auth', authRouter);

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

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});

module.exports = app;