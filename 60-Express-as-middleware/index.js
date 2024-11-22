const express = require('express');

const app = express();


const filter = (req,resp,next)=>{
  if(!req.query.age){
    resp.send('<h1> Please Provide Age in Query parameters <h1/>');
  }else if(req.query.age < 18){
    resp.send("You are not of legal age to use this site");
  }
  else{
    next();
  }

    
}

app.use(filter);

app.get('',(req,resp)=>{

    resp.send('Hello this is the Home Page');
});

app.get('/about',(req,resp)=>{

    resp.send('Hello this is the About Page');
});

app.listen(4000);