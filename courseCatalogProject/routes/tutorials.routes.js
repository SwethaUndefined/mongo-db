const middleware = require("../middleWare/auth");

module.exports = (app)=>{
    const tutorialRouter = require('express').Router();
const tutorial = require("../controller/tutorialContoller");
//Create a new Course
tutorialRouter.post("/add",tutorial.Create);

//Retrieve all courses
tutorialRouter.get("/",tutorial.findAllCoursers);

//Retrieve course by catagory
tutorialRouter.get("/catagories/:categoryName",tutorial.findByCategory)

//Retreive all Catogories
tutorialRouter.get("/catagories", tutorial.findAllCategories);

//Retrieve all the published courses
tutorialRouter.get("/published");

//Retrieve single course by id
tutorialRouter.get("/id",tutorial.findById);

//Update a course by id
tutorialRouter.put("/id",tutorial.update);

//Delete course by id
tutorialRouter.delete("/id",tutorial.deleteOne);

//Delete all the coures --Dangerous api
tutorialRouter.delete("/");


app.use("/app/tutorial/",middleware,tutorialRouter);

};

