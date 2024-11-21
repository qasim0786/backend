const express = require('express');

const app = express();

app.get('',(req,res)=>{

   if(req.query.age < 18){
    res.send("You are not of legal age to access this site")
   }else{
    res.send("This is the home page of this app");
   }
    
});

app.get('/about',(req,res)=>{
    res.send("This is the about  page of this app");
});

app.listen(8000);