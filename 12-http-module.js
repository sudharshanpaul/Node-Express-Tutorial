const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`Welcome to the Home Page`)
        return
    }
    if(req.url === '/about'){
        res.end(`Welcome to the About Page`)
        return
    }
    
    res.end(
        `
        <h1>Oops..!</h1>
        <p>We can't seemm to find the page that you are looking for</p>
        <a href='/'> Back to Home </a>
        `
    );
})

server.listen(5000)