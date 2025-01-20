const dbconnection = require('./dbConnection/database');

const updateData= async ()=>{
   
    const collection = await dbconnection();
    let result = await collection.updateOne({name:'victous'},{
        $set:{price:'16000',name:'victous 15'}
    }
    );

    if(result.acknowledged){
        console.log('your data has been saved');
    }else{
        console.log('there has been issue with saving the data ');
    }

}

updateData();
