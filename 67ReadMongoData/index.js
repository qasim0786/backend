const dbConnection = require('./dbConnection/database');


dbConnection().then((response)=>{
    response.find({name : 'macbook pro'}).toArray().then((data)=>{
        console.log(data)
    })
})


