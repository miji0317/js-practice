const BookSchema = require('../models/book');

const getbookinfo = (req, res) => {
    const authorname = req.params.id;

    // 저자 검색

    // find 혹은 findOne 사용법
    // BookSchema.findOne({author: authorname}, (err, result) => {
    //     if (result) {  // 검색 성공
    //         return res.json(result);
    //     } else {  // 검색 실패
    //         return res.send('등록된 작가가 없습니다.');
    //     }
    // })

    // then~catch 사용법
    BookSchema.find({author: authorname})
        .then(result => {
            res.json(result);
        }).catch(err => {
            console.log(err);
        });
}

const addbook = (req, res) => {
    const bookname = req.body.bookname;
    const author = req.body.author;
    const price = req.body.price;
    const date = req.body.date;

    const priceCheck = price || 5000;

    let bookData = new BookSchema({
        bookname: bookname,
        author: author,
        price: priceCheck,
        publish: date
    });

    bookData.save();
    res.redirect('/expost');
}

module.exports = {
    getbookinfo,
    addbook,
}