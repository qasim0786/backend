const fs = require('fs');

const path = require('path');

const dirPath = path.join(__dirname, 'files');

for (let i = 1; i<= 5;i++){

   fs.writeFileSync(`${dirPath}/file${i}.txt`, `I am file number ${i}`);
}
