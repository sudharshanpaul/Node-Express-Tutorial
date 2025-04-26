// const http = require('http')

// http.createServer((req, res)=>{
//     res.setHeader('Content-type','text/plain');
//     res.write('Welcome to my Server');
//     res.end();
// }).listen(5000);

const http = require('http')

const port = 5000;
const hostname = '127.0.0.1'

const fs = require('fs');

fs.readFile('12-http-module-2.html',(err, data)=>{
    if(err){
        throw err;
    }
    const server = http.createServer((req, res)=>{
        res.setHeader('Content-type','text/html');
        res.write(data);
        res.end();
    })

    server.listen(port,hostname, ()=>{
        console.log('Server started at port:'+port);
    })
})