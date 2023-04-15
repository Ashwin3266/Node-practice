const {readFile,writeFile} = require('fs').promises

const start=async()=>{
    try{
        const first=await readFile('./content/first.txt','utf-8')
        const second=await readFile('./content/second.txt','utf-8')
        const result=await writeFile('./content/result-async.txt',
                        `Callbacks are changed to promises :\n ${first} \n ${second} \n\n`,
                        {flag:'a'})
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
    }
}

start();