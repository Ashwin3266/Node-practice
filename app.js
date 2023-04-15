const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('Home page')
    }
    if(req.url === '/about')
    {
        res.end('About page')
    }
    res.end('Error Page')
})

server.listen(5000,()=> 
{
    console.log('Listening to port 5000 ....');
})