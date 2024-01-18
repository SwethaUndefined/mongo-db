const db = require("../models");

const tutorial = db.tutorials;


//Create and save the tutorial
exports.Create = async(request,response)=>{
  const {title,description,published,skills,chapter, priceInRupees,priceAfterDiscount,category,imageURL,videoURL,notesURL,duration,popularity}=request.body;

  //validate request
    if(title==""){//if the title is not present
          response.status(400).send({
            message : "Content cannot be empty"
          });
          // return;
    }
     const newCourse =await new db.tutorials({
      title,
      description,
      published,
      skills,  //request.body.skills.toString().split(",")
      chapter, //:request.body.chapter.toString().split(",")
      priceInRupees,
      priceAfterDiscount,
      category,
      imageURL,
      videoURL,
      notesURL,
      duration,
      popularity
     })
     newCourse.save()
     .then(()=>{
      response.status(200).send({
        status : true,
        message : "Added new Course"
      })
    })
    .catch((err)=>{
      console.log(err);
      response.status(500).send({
          status : false,
          message : "Internal server error"
      })
     })
    }

//To get or fetch all the courses
exports.findAllCoursers = (request,response)=>{
  tutorial.find({})
  .then((data)=>{
    response.send(data)
  }).catch((err)=>{
    response.status(500).send({
      status : false,
      message : "Failed to fetch"
    })
  })
 }   

//Retreive course by id

exports.findById = (request,response)=>{
  const id = request.params.id; //Get that id in the router url.

  if(id==""){
      response.status(400).send({
        message : "Please provide id to continue"
      });
      return;//If the id is not present the below part is no need to exceute then put return.
  } 
  else{
    tutorial.find({_id : id})
    .then((data)=>{
      response.send(data)
    })
    .catch((err)=>{
      response.status(500).send({
        status : false,
        message: "Error occured while fetching the course"
      });
    });
  }
}
//Find all categories

exports.findAllCategories = (request,response)=>{
tutorial.find({}).select("category").distinct("category")  //This is first find all the queries and then category and then use distinct because if the MERN is having more then one it will give only once.
.then((data)=>{
  response.send(data)
})
.catch((err)=>{
  response.status(500).send({
    status : false,
    message: "Error occured while fetching the catagories"
  });
});
}


//Find by category name
exports.findByCategory = (request,response)=>{
  const category = request.params.category; //Get that id in the router url.

  if(category==""){
      response.status(400).send({
        message : "Please provide category to continue"
      });
      return;//If the id is not present the below part is no need to exceute then put return.
  } 
  else{
    tutorial.find({category : category})
    .then((data)=>{
      response.send(data)
    })
    .catch((err)=>{
      response.status(500).send({
        status : false,
        message: "Error occured while fetching the course"
      });
    });
  }
}

//Find and update

exports.update = (request,response)=>{
  const id = request.params.id; //Get that id in the router url.

  if(id==""){
      response.status(400).send({
        message : "Please provide id to continue"
      }); 
}
else{
  if(!request.body){
    response.status(400).send({
      message : "Please provide data, cannot be empty"
    });
  }
  
  else{
    tutorial.finOneAndUpdate({_id:id},
      request.body).then((data)=>{
        if(!data){
          response.status(500).send({
            message : "Cannot be update with erros"
          });
        }
        else{
          response.send({
             message : "Course updated sucessfully"
          });
        }
      }).catch((err)=>{
            response.send(500).send({
              status : false,
              message : "Internal server error"
            })
          })
        }
      }
    }

//DeleteOne from the course

exports.deleteOne = (request,response)=>{
  const id = request.params.id; //Get that id in the router url.

  if(id==""){
      response.status(400).send({
        message : "Please provide id to continue"
      });
      return;//If the id is not present the below part is no need to exceute then put return.
  } 
  else{
    tutorial.findOneAndDelete({_id : id})
    .then((data)=>{
      if(!data){   //if the id is incorrect, will not delete
        response.status(500).send({
          message : "Cannot delete the course, May be course not found"
        });
      }
      else{
        response.send({
           message : "Course deleted sucessfully"
        });
      response.send(data)
    }
  })
    .catch((err)=>{
      response.status(500).send({
        status : false,
        message: "Error occured while fetching the course"
      });
    });
  }
}