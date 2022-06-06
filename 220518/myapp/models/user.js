const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userId: {
        type: String,    // 문자열
        required: true,  // 필수 속성
        unique: true     // 유일해야 함. 중복 X
    },
    job: {
        type: String,
        required: true
    }
});

const userData = mongoose.model('users', user);
module.exports = userData;