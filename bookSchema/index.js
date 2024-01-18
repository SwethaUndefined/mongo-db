const ImportBookSchema = require("./bookSchema");
const mongoose = require('mongoose');
const dburl = "mongodb://localhost:27017/mongoose-bookSchema";

mongoose.connect(dburl).then(()=>{
    console.log("DB connected")

    // let defineBookSchema = new ImportBookSchema({
    // name : "PS",
    // author : "Kalki",
    // pages : 1500,
    // bestPrice : 1500,
    // kindleVersion : 2
    // })

    // ImportBookSchema.insertMany(
    //     [
    //         { name: 'Node.js Guide', author: 'Rocky & Prachi', pages: 250, bestPrice: 850, kindleVersion: 1 },
    //         { name: 'Python Programming', author: 'Suven', pages: 230, bestPrice: 2050, kindleVersion: 1 },
    //         { name: 'Databases', author: 'Ifrah Malik', pages: 150, bestPrice: 230.50, kindleVersion: 0 },    
    //         { name: 'Javascript', author: 'Prachi Agarwal', pages: 290, bestPrice: 560.75, kindleVersion: 1 }
    //     ]
    // )
    ImportBookSchema.updateOne(
        //  {bestPrice : {$gt : 2000}},
        //  {bestPrice : 1999}
        // {kindleVersion : 0}
        // {kindleVersion : 1}
        {name : 'node.js Guide'}, {$set : {name : 'node.js'}}
    ).then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err);
    })
}).catch(()=>{
    console.log("Failed to connect")
})
