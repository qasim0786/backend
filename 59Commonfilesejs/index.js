const express = require('express');

const app = express();

app.set('view engine','ejs')


app.get('/home',(req,res)=>{

    const data = {
        name : 'qasim',
        age : 26,
        height : 180,
        profession : 'Software Developer',
        hobbies : ['coding','research', 'eating', 'joging','games']
    }

    res.render('home',{data});
});

app.get('/login',(_,resp)=>{

    resp.render('login');
})


app.listen(4000);