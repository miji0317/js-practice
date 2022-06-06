const express = require('express');
const { regexpToText } = require('nodemon/lib/utils');
const BookSchema = require('../models/book');
const userSchema = require('../models/user');
const bookController = require('../controller/post');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('post');
});

router.get('/del', (req,res) => {
    res.render('delete');
})

router.get('/bookinfo/:id', bookController.getbookinfo);  // 컨트롤러

// // 'url/저자이름'에 접속하면, 해당 저자의 책을 검색하여 화면에 뿌림
// router.get('/bookinfo/:id', (req,res) => {
//     const authorname = req.params.id;

//     // 저자 검색

//     // find 혹은 findOne 사용법
//     // BookSchema.findOne({author: authorname}, (err, result) => {
//     //     if (result) {  // 검색 성공
//     //         return res.json(result);
//     //     } else {  // 검색 실패
//     //         return res.send('등록된 작가가 없습니다.');
//     //     }
//     // })

//     // then~catch 사용법
//     BookSchema.find({author: authorname})
//         .then(result => {
//             res.json(result);
//         }).catch(err => {
//             console.log(err);
//         })
// })

router.delete('/del/:id', (req,res) => {
    const bookname = req.params.id;

    BookSchema.findOneAndDelete({bookname:bookname})
        .then(result => {
            res.json({redirect: '/expost'});
        }).catch(err => {
            console(err);
        })
})

// 위와 같은 기능
// router.post('/del/:id', (req,res) => {
//     const bookname = req.params.id;

//     BookSchema.findOneAndDelete({bookname:bookname})
//         .then(result => {
//             res.json({redirect: '/expost'});
//         }).catch(err => {
//             console(err);
//         })
// })

router.post('/', (req,res) => {
    // 요청
    const name = req.body.name;
    const phone = req.body.phone;
    const date = req.body.date;
    // 응답
    res.json({name: name, phone: phone, date: date});
});

// 웹 통신 방식: 1요청 1응답

// router.post('/', (req,res) => {
//     res.redirect('/expost');  // 호출한 경로로 재접근
// })

router.post('/addbook', bookController.addbook);  // 컨트롤러

// router.post('/addbook', (req,res) => {
//     const bookname = req.body.bookname;
//     const author = req.body.author;
//     const price = req.body.price;
//     const date = req.body.date;

//     const priceCheck = price || 5000;

//     let bookData = new BookSchema({
//         bookname: bookname,
//         author: author,
//         price: priceCheck,
//         publish: date
//     });

//     bookData.save();
//     res.redirect('/expost');
// });

// REST API, async/await
// bookinfo에 있는 정보를 모두 가져오는 코드
router.get('/getlist', async(req, res) => {
    const result = await BookSchema.find({}).exec();
    return res.status(200).json(result);
});

router.get('/users', (req, res) => {
    res.render('user');
});

// router.post('/users', async (req, res, next) => {
//     try {
//         const userid = req.body.userid;
//         const job = req.body.job;
//         const user = new userSchema({
//             userid: userid,
//             job: job
//         });
//         const result = await user.save();
//         res.status(200).json({
//             result,
//             message: 'user saved'
//         });
//     } catch (error) {
//         console.log(error);
//         next(error);
//     }
// });

module.exports = router;