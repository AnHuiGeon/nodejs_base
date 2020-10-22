const express = require('express');

const router = express.Router();

router.get('/profile', (req, res)=> {
    res.rener('profile', { title: '내 정보 - Nodejs', user: null});
});

router.get('/join', (req, res) => {
    res.render('join', {
        title: '회원가입 - Nodejs',
        user: null,
        joinError: req.flash('joinError'),
    });
});

module.exports = router;