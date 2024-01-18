const mongoose = require('mongoose');

let useSchema = new mongoose.Schema({
    Name : {
        typeof: String,
    },
    Age : {
        typeof : Number,
    },
    Department : {
        typeof : String,
    }
}) 

module.exports = mongoose.model("userSchemas",useSchema);