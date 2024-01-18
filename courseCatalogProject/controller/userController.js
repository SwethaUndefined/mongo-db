const db = require("../models");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const user = db.users;
 
exports.createUser = async (request,response)=>{
    
    const{firstName,lastName,email,password} = request.body;
    console.log(firstName,lastName,email,password); 
    if(firstName==""|| lastName=="" || email=="" || password == ""){
       response.status(400).send({
        status : false,
        message : "missing user details"
       });
       return; //if anything not provided then the program will stopped here.
     }

     const filter = {email : email}
     user.findOne(filter,(err,user)=>{
        if(user==null){
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password,salt);
            console.log(hash);
            const newuser = new db.users({
                firstName,
                lastName,
                email,
                password : hash,
                role : request.body.role ?  request.body.role : "user",
                isLoggenIn : true
            })
            newuser.save().then(()=>{
                response.status(200).send({
                    status : true,
                    message : "Successfully created"
                })
            }).catch((err)=>{
                response.status(500).send({
                    status : false,
                    message : "Internal server error"
                })
            })
        }
        else{
            response.status(400).send({
                message : "User already exist"
            })
        }
     })
     }
    

exports.userLogin = async (request,response)=>{
    const{firstName,lastName,email,password} = request.body;
    if(email=="" || password == ""){
        response.status(400).send({
         status : false,
         message : "missing user details"
        });
        return; //if anything not provided then the program will stopped here.
      }
      else{
        user.findOne({email:email},(err,user)=>{
            console.log(user);
            if(user==null){
                response.status(401).send({
                    message:"Email or password is incorrect"
                });
            }
            else{
                //bcrypt.compareSync(password,user.password);
                if(bcrypt.compareSync(password,user.password)){   //password===user.password
                    //authendicate the user
                    const token = jwt.sign({_id : user._id},"myprivatekey");  //sign has 2 parameters (payload and secret unique key)
                    //console.log(token);
                    user.token = token;
                    response.send(user);
                }
                else{
                    response.status(401).send({
                        message : "Password incorrect"
                    })
                }
            }
        })
      }
    }

