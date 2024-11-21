const express = require('express');

const app = express();

app.set('view engine','ejs')


app.get('/home',(req,res)=>{

    const data = {
        name : 'qasim',
        age : 26,
        height : 180,
        profession : 'Software Developer'
    }

    res.render('home',{data});
});


app.listen(4000);