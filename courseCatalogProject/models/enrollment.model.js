module.exports=(mongoose)=>{
    const enrollment = mongoose.model("user",
         new mongoose.schema({
             userId : String,
             courseId : String
        })
        )
        return enrollment;
    }