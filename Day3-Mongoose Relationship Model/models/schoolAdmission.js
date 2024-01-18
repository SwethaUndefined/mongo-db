const mongoose = require('mongoose');

const ChildSchema = require('./Child').childSchema

const Enrollment = mongoose.model(
    "Enrollment",   //name of the collection
    new mongoose.Schema({
        enrollmentCode : String,
        // child_id : {
        //     type : mongoose.Schema.Types.ObjectId //Datatype for that automated created id.
        // }
        child : ChildSchema //Instead of giving the entire schema and put it in one obj and then import that and giving that obj name which contains schema
    })
)

module.exports = Enrollment;