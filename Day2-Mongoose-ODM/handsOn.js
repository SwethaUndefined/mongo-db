const mongoose = require('mongoose');

const validator = require('validator');

const schemaUser = new mongoose.Schema(
    {
        email:{
         type : String,
         required: true,
        //  unique : true, not working for us
         lowercase : true,
         validate : (value)=>{
            return validator.isEmail(value);
         }
        }
    }
);
           //Instance method
// schemaUser.methods.getInitials = function(){
//     return this.email;
// }

           //Static methods
// schemaUser.statics.findByEmail = (value)=>{
//     this.find({email:value},(err,user1)=>{
//         console.log(user1)
//     })
// }
module.exports = mongoose.model("userEmail",schemaUser);