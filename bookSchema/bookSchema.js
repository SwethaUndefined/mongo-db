const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name : String,
    author : String,
    pages : Number,
    bestPrice : Number,
    kindleVersion : Number
})

module.exports = mongoose.model("BookSchema",bookSchema)