var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', isLoggedIn,function(req, res, next) {
  res.render('mypage', { title: 'Express' });
});

module.exports = router;