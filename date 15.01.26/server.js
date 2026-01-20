// const logger=require('./logger');
// logger.logActivity('User logged in');
const url = require('url');
const fs=require('fs');
const http=require('http');
const Server=http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.end("Response is closed");wq
    
    const finalprice=0;
    const parsedUrl=url.parse(req.url,true);
    const {name,email}=parsedUrl.query;
    console.log(name,email);

    // const timestamp=new Date().toLocaleString();
    // const log=`${"user is required at :",timestamp,"for request"`${req.url}`}`;
    // fs.appendFile('./server_log.txt',log(),(err,data)=>{
    //     if(err){
    //         console.log("error");
    //     }
    //     else{
    //         console.log("logged successfully");
    //     }
    // })
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end("<h1>Welcome to Home Page</h1>");
            break;
        case '/about':
            const name=query.name || 'Guest';
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(`<h1>Welcome ${name}to About${email} Page</h1>`);
            break;
        default:
            res.writeHead(404,{'Content-Type':'application/json'});
            res.end({username:"",phone:""});
            break;
    }
}) 
Server.listen(8000,()=>{
    console.log('Server is listening on port 8000');
})