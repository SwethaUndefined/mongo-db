//This entire index.js will have all mongoose files, we can export it here for whatever we need to export
//we can export it here. So that index.js is created, just for commonly export one file. This file
//contain all the db info.


const dbConfig = require("../config/db.config");

const mongoose = require("mongoose");

const db = {}; //Here im creating the object, after that i have add all the mongoose object inside the db object

db.mongoose = mongoose; //Here i put the mongoose in that db object.
db.url = dbConfig.dburl;
db.tutorials = require("./tutorial.model")(mongoose);
db.users = require("./user.model");

module.exports = db;  //this db will have all mongoose, url, tutorials and users.


