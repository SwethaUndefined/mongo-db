const mongoose = require('mongoose');

const validator = require('validator');

const timerStampPlugin = require('../timerStampPlugin');

const schemaUser1 = new mongoose.Schema(

    {
        fname: String,
        lname : String,
        createdAt : Date,  //it takes date as datatype
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

schemaUser1.plugin (timerStampPlugin);  //here it is used that pre hook here.

// schemaUser1.pre ('save',function (next){  //that next parameter is must. use save to save the time. pre is hook.
//     let now = Date.now(); //this next is for next do to post method.
//     this.createdAt = now;

//     next();
// });

schemaUser1.post ('save',(user)=>{ //here next is not needed because, there is no next after the post.
        console.log(`post save sata ${user}`);
});

module.exports = mongoose.model("userInfo",schemaUser1);