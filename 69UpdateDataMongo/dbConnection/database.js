const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/';
const dbname = 'store';

const client = new MongoClient(url);

async function dbconnect(){

    let connection = await client.connect();
    let db = connection.db(dbname);
    let collection = db.collection('products');

    return collection;

}

module.exports = dbconnect;