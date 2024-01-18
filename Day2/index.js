const userSchema = require('./useSchema');
var dburl = "mongodb://localhost:27017/mongoose-demo";
const mongoose = require('mongoose');

mongoose.connect(dburl).then(()=>{
    console.log("Database connection Successfull");
    
    let DefineSchema = new userSchema({
        Name : "Swetha",
        Age : 24,
        Department : "BCA"
    })
    DefineSchema.save().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
}).catch(()=>{
    console.log("Error occured while connecting to DB")
})
