var mongoClient = require('mongodb').MongoClient;

//connect to the db url
var dburl = "mongodb://localhost:27017/demo";

var client = new mongoClient(dburl);

var documents = [
    {
        "fName" : "Swetha",
        "lName" : "Ragunathan",
        "Age" : 23
    },
    {
        "fName" : "Swetha",
        "lName" : "Ragunathan",
        "Age" : 23
    },
    {
        "fName" : "Swetha",
        "lName" : "Ragunathan",
        "Age" : 23
    },
    {
        "fName" : "Swe",
        "lName" : "Swetha",
        "Age" : 24
    },
    {
        "fName" : "VK",
        "lName" : "Kumar",
        "Age" : 25
    }
]

// client.connect((err,instance)=>{
//     if(err)
//     console.log("Error connecting DB");
//     else
//     console.log("Connection successfull")
//     var db= instance.db("demo");
     
//     //  db.createCollection("usersData");
//     db.collection("usersData").find(
//         // {age: {$gte:24}}
//         ).sort({fname : 1}).toArray(   
//         // documents,
//         (err,response)=>{
//             if(err){
//                 console.log("Failed to insert");
//             }
//             else{
//                 console.log("Inserted successfully "+JSON.stringify(response));
//             }
//         }
//     )
// })
//------------------------------------------------------------------------------------

client.connect((err,instance)=>{
    if(err)
    console.log("Error connecting DB");
    else
    console.log("Connection successfull")
    var db= instance.db("demo");
     
    //  db.createCollection("usersData");  db.createCollection("Genres")
    db.collection("usersData").deleteMany(
        {fName: "Swetha"},
        (err,response)=>{
            if(err){
                console.log("Failed to insert");
            }
            else{
                console.log("Inserted successfully "+JSON.stringify(response));
            }
        }
    )
}
);