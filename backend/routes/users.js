const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// config
const connection = require('../config/connection');

//회원가입
router.post('/signUp', function (req, res) {
    const user = {
        'userid': req.body.user.userid,
        'name': req.body.user.name,
        'password': req.body.user.password
    }
    connection.query('SELECT userid FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
        if (row[0] === undefined){ //  동일한 아이디가 없을경우,
            const salt = bcrypt.genSaltSync();
            const encryptedPassword = bcrypt.hashSync(user.password, salt);
            connection.query('INSERT INTO users (userid,name,password) VALUES ("' + user.userid + '","' + user.name + '","' + encryptedPassword + '")', user, function (err, row2) {
                if (err) throw err;
            });
            res.json({
                success: true,
                message: 'Sing Up Success!'
            })
        }
        else {
            res.json({
                success: false,
                message: 'Sign Up Failed Please use anoter ID'
            })
        }
    });
});

router.get('/login', (req, res) => {
   if(!req.user){
       res.render('login')
   }else{
       res.redirect('/')
   }

});

//로그인
router.post('/login', function (req, res) {
    var user = {
        'userid': req.body.user.userid,
        'password': req.body.user.password,
    };

    connection.query('SELECT userid, password FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
        if (err) {
            res.json({ // 매칭되는 아이디 없을 경우
                success: false,
                message: 'Login failed please check your id or passwordd!'
            })
        }
        if (row[0] !== undefined && row[0].userid === user.userid) {
            bcrypt.compare(user.password, row[0].password, function (err, res2) {
                if (res2) {
                    console.dir(user);
                    req.session.user = user;
                    req.session.save(() => {
                        res.json({ // 로그인 성공
                            success: true,
                            message: '로그인 성공'
                        });
                    });
                } else {
                    res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우            success: false,
                        message: '비밀번호가 틀림미당!'
                    })
                }
            });
        }
    })
});

//로그아웃
router.get('/logout', (req, res) => {      // 3
    delete req.session.user;
    res.status(200).json({});
});

router.get('/', function (req, res) {
    //console.dir(req.session);

    if(req.session.user) {
        const {userid} = req.session.user;
        res.json({
            userid
        })
    } else {
        res.json({
            userid: null
        })
    }
});


module.exports = router;
