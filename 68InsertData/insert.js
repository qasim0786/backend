const dbconnection = require('./dbConnection/database');

let dummyData = [
    {
        name: 'ElectroPro',
        price: '24999',
        brand: 'Dell',
        category: 'Laptop',
        stock: 50,
        description: 'A high-performance laptop for professionals.'
    },
    {
        name: 'TechMate',
        price: '19999',
        brand: 'HP',
        category: 'Laptop',
        stock: 30,
        description: 'A reliable laptop for everyday use.'
    },
    {
        name: 'GamerXtreme',
        price: '59999',
        brand: 'Asus',
        category: 'Gaming Laptop',
        stock: 15,
        description: 'A top-notch gaming laptop with powerful specs.'
    },
    {
        name: 'SmartTab',
        price: '9999',
        brand: 'Samsung',
        category: 'Tablet',
        stock: 40,
        description: 'A versatile tablet for work and entertainment.'
    },
    {
        name: 'UltraPhone',
        price: '7999',
        brand: 'Xiaomi',
        category: 'Smartphone',
        stock: 100,
        description: 'A budget smartphone with excellent features.'
    }
];


let insertdata = async (dataToSend)=>{

    let collection = await dbconnection();
    const result = await collection.insertMany(dataToSend)

    if(result.acknowledged){
        console.log('Data has been saved');
    }else{
        console.log('there has been some error in saving the data')
    }


    
}


insertdata(dummyData);