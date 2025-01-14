const express = require('express');
const filter = require('./middleware/middleware.js');

const app = express();




app.get('',filter,(req,resp)=>{

    resp.send('Hello this is the Home Page');
});

app.get('/about',(req,resp)=>{

    resp.send('Hello this is the About Page');
});

app.get('/contact',(req,resp)=>{

    resp.send('Hello this is the contact Page');
});

app.listen(4000);