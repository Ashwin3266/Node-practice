const http = require('http');

const server=http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('Home page')
    }
    else if(req.url === '/about')
    {
        //Only after fetching this the other reloads get the value
        for(let i=0;i<50;i++)
        {
            for(let j=0;j<1000;j++)
            {
                console.log(`${i} ${j}`);
            }
        }
        res.end('About')
    }
    else
    {
        res.end('Error Page')
    }
})

server.listen(5000,()=> 
{
    console.log('Listening to port 5000 ....');
})