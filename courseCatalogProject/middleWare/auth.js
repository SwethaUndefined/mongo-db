const jwt = require('jsonwebtoken');

module.exports = (request,response,next)=>{
       const token = request.headers["authorization"];
       console.log(token);  //Here is a keyword that is used to extract that token from header url. We can use anything instead of authorization
       if(!token)//if token is not provided
       return response.status(401).send({
        message : "Access Denied, No token provided."
       })
       //if token is provided
       try{
        jwt.verify(token,"myprivatekey"); //this will verify the token, first parameter is token that the user provided and the next is secret key
        next();  //if token is correct then call the next() to move to next.   
    }
       catch(ex){
        response.status(401).send({
            message : "Access Denied, Invalid token."
           })
       }
}