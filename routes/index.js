var express = require('express');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

var router = express.Router();

/* GET home page. */
router.get('/', isNotLoggedIn, (req, res, next) => {
  res.render('index', {
  title: 'Index',
  user: req.user,
  loginError: req.flash('loginError'),
 });
});

router.get('/mypage', isLoggedIn, (req, res) => {
  res.render('mypage', {
    title: 'mypage',
    user: req.user,
  });
});

router.get('/join', isNotLoggedIn, (req, res) => {
  res.render('join', {
    title: 'join',
    user: req.user,
    joinError: req.flash('joinError'),
  });
});

module.exports = router;