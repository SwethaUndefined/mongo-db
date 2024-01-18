
module.exports=(app)=>{
    const userController = require('../controller/userController');
    const userRouter = require('express').Router();

    userRouter.post("/login", userController.userLogin);
    userRouter.post("/signup",userController.createUser);

    app.use("/app",userRouter);
}

