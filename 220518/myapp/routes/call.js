const express = require('express');
const { route } = require('.');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('hello express');
    // next는 현재 미들웨어의 기능을 마치고, 다음 미들웨어로 연결을 하는 역할
    next();  
});

router.get('/member', (req, res) => {
    res.send('call member')
})

// : 뒤에는 고정이 아닌 아무거나 올 수 있음
router.get('/member/:id', (req, res) => {
    const member = req.params.id;
    console.log(member);
    res.send(`${member}`);
})

module.exports = router;  // ==> app.js