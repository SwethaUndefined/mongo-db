const mongoose = require("mongoose");

var dburl = "mongodb://localhost:27017/mongoose-demo2";

let SchemaImport = require("./schema");

mongoose
  .connect(dburl)
  .then(() => {
    console.log("Database connection Successfull");

    let userInfo = new SchemaImport({
        fname : "Swetha",
        lname : "Vijay",
        email: "ramyaragu407@gmail.com"
    });

    userInfo 
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

