const express = require('express');
const path = require('path');

const filePath = path.join(__dirname,'public');

const app = express();


app.get('',(_,res)=>{

    res.sendFile(`${filePath}/home.html`);
});

app.get('/about-us',(_,res)=>{

    res.sendFile(`${filePath}/about.html`);
});

app.get('/contact',(_,res)=>{

    res.sendFile(`${filePath}/contact-us.html`);
});

app.get('*',(_,res)=>{
    res.sendFile(`${filePath}/pagenotFound.html`)
})

app.listen(4000);

