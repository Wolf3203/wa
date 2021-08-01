const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true

    },
    genres: {
        type: String,
        required: true
    },
    student_number: Number,
    status: String,
    due_date: Date
})

const Bookdb = mongoose.model('bookdb', schema);

module.exports = Bookdb;
