const fs = require('fs');

const path = require('path');

const pathdir = path.join(__dirname, 'files');

const filedir = `${pathdir}/hello.txt`;


// fs.writeFileSync(pathdir+'/hello.txt', 'I am an apple');

// fs.readFile(filedir,'utf8',(err,item)=>{
//     console.log(item);
// })


// fs.appendFile(filedir,' and I am very tasty',(err)=>{
//     if(!err) console.log("File Updated");
// })

fs.unlinkSync(filedir)