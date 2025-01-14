const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/'; 
const dbname = 'store';

const client = new MongoClient(url);

async function getData(){
    const connection = await client.connect();
    console.log("the connection to the database is sucessfull");

    let db = connection.db(dbname);
    console.log('the desired db is connected sucessfully');

    let collection = db.collection('prducts');

    let result = await collection.find({}).toArray();

    console.log(result);  

}
getData();

