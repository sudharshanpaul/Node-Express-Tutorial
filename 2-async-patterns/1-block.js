const http = require('http')

const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Home Page');
        return
    }
    if(req.url === '/about'){
        // Blocking 
        for( let i=0; i<1000; i++){
            for(let j=0;j<1000;j++){
                console.log(`${i} and ${j}`)
            }
        }
        res.end('About Page');
        return
    }
    res.end('Error page')

})

server.listen(5000,()=>{
    console.log('Server is listening on port: 5000')
})