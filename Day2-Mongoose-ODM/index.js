const mongoose = require("mongoose");

var dburl = "mongodb://localhost:27017/mongoose-demo";

let SchemaImport = require("./userSchema");

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Database connection Successfull");

    let user = new SchemaImport({
      fname: "Swetha",
      lname: "Ragunathan",
      email: "ramyaragu407@gmail.com",
    });
    user //schemaImport.
      .save() //.find({}), we can use here also whatever we used in mongoDB and no need to convert to toString()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error Creating user " + err);
      });
  })

  
  7

//Also give 2 paramater as {useNewUrlParser:
//true, useUnifiedTopology: true }, this is optional.
