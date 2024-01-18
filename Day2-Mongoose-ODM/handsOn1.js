const mongoose = require("mongoose");

var dburl = "mongodb://localhost:27017/mongoose-demo1";

let SchemaImport = require("./handsOn");

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Database connection Successfull");

    let user1 = new SchemaImport({
       email: "msdbfbsdjf125admgnsa.com"//that validator package validate the email creteria.
    });

    // let initials=user1.getInitials();   //Helper method, like creat obj in one class and access the variables in another clss
    // console.log(initials);

    //schemaImport.findByEmail("ramyaragu407@gmail.com")
    user1 
      .save() 
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log("Error Creating user " + err);
      });
   })
  .catch((err) => {
    console.log("Connection Failed " + err);
  });

//Also give 2 paramater as {useNewUrlParser:
//true, useUnifiedTopology: true }, this is optional.
