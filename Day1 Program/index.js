const mongodb = require('mongodb').MongoClient;

const dburl = "mongodb://localhost:27017/Practice";

const client  =  new mongodb(dburl);

var documents = [
    {
        "fName" : "Swetha",
        "lName" : "Ragunathan",
        "Age" : 24
    },
    {
        "fName" : "Ramya",
        "lName" : "R",
        "Age" : 17
    },
    {
        "fName" : "Vijay",
        "lName" : "Kumar",
        "Age" : 25
    },
    {
        "fName" : "VK",
        "lName" : "Subramaniam",
        "Age" : 26
    }
]

client.connect((err,instance)=>{
    if(err)
        console.log("Error occured");
    else
        console.log("Database Connected")
         var db = instance.db("Practice");
         //db.createCollection("userInfo")
         db.collection("userInfo").updateOne(
            {"lName":"Ragunathan"},
            {"lName":"VijayaKumar"},
            
                    
                (err,response)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("Inserted successfully "+JSON.stringify(response));
                    }
                }
            )
})