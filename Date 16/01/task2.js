const fs=require('fs');
if(pathname=='./admin'){
  if(user=='admin' && pass=='1234'){
    fs.readFileSync('./admin_dashboard.html',(err,data)=>{
      if(err){
        console.log("error");
      }else{
        res.end();
      }
    });

    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(data);
  }
  else{
    res.writeHead(401,{'Content-Type':'text/plain'});
  }
}
else{
  console.log("Access denied");
}