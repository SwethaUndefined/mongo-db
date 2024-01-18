//Entry file
const express = require('express');
const bodyparser =  require('body-parser');
const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}))
//MongoDB connection

const db = require("./models");
db.mongoose.connect(db.url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected to database")
})
.catch(
    (err)=>{
        console.log("Connection to DB failed "+err);
        process.exit();//if error occured then come out of the request.
    }
)

app.get("/",(request,response)=>{
    response.json({
        message : "Welcome to EdTech Project"
    })
});

//Here no need to import mongoose, because we already export it along with schema.
require("./routes/tutorials.routes") (app);
require("./routes/user.routes") (app);
// var userRoutes = require("./routes/user.routes");
// userRoutes(app);


const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

