const mongoose = require("mongoose");

const childSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String
})

const child = mongoose.model(
    "children",
    childSchema
    // new mongoose.Schema({ //Here im going to do the embedded model so i put the entire schema in seperate object and then put that object name here
    //     name : String,
    //     age : Number,
    //     gender : String
    // })
)

module.exports = {child,childSchema};