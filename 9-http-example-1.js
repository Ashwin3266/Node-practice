const http = require('http');

const server=http.createServer((req,res)=>{
    console.log('request end');
    res.end('Hello World');
})

server.listen(5000,()=> 
{
    console.log('Listening to port 5000 ....');
})