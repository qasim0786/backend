const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send("This is the home page of this app");
});

app.get('/about',(req,res)=>{
    res.send("This is the about  page of this app");
});

app.listen(8000);