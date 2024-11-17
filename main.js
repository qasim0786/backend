const http = require('http');

const qasim = require('./components.js')


http.createServer((req,res)=>{

    res.writeHead(200, {'content-type': 'text/html'})

    res.write(qasim);
    res.end();

}).listen(4000);