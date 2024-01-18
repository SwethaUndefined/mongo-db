const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/Relationship_DB")
.then(()=>{
    console.log("Connection Established")
}).catch((err)=>{
    console.log("Connection Failed" +err);
})

const child = require("./models/Child").child;
const Enrollment = require('./models/schoolAdmission');

var Child =  new child({
    name: "Swetha",
    age : 24,
    gender : "Female"
});
Child.save().then((data)=>{
    console.log("Inserted Sucessfully" +data)
    var enrollment = new Enrollment(
        {
        enrollmentCode : child._id.toString().subString(0,10).toUpperCase(), //Im taking the enrollmentcode as child id of first ten char.
        //child : child._id.toString()  //Here im referencing the data model
        child : data//Here im storing the entire schema of child instead of id in above line
    }
    )
    enrollment.save();
}).catch((err)=>{
    console.log("Connection Failed" +err);
})  