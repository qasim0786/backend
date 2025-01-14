module.exports =   filter = (req,resp,next)=>{
    if(!req.query.age){
      resp.send('<h1> Please Provide Age in Query parameters <h1/>');
    }else if(req.query.age < 18){
      resp.send("You are not of legal age to use this site");
    }
    else{
      next();
    }
  
      
  }