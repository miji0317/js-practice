const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const blogSchema = mongoose.Schema;

autoIncrement.initialize(mongoose);

const blog = new blogSchema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    no: Number,
}, {
    timestamps: true
    // 데이터가 들어올 때 자동으로 시간 저장
});

blog.plugin(autoIncrement.plugin, {
    model: 'blog',
    field: 'no',
    startAt: 3,
    increment: 1
});

const blogModel = mongoose.model('blog', blog);
module.exports = blogModel;