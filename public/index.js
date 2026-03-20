const http=require('http');
const express=require('express');
const app=express();
const PORT=5500;

// use for stack files css,html,js;
app.use(express.static('public'));  //middleware to serve static files from the 'public' directory

app.use(express.json());        //middleware to parse JSON data from request body
app.use(express.urlencoded({extended:true}));   //middleware to parse URL-encoded data from request body (like form data)

app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/public/form.html');
})


app.post('/register',(req,res)=>{
    console.log("form data: ",req.body);
    res.send("Register");
});


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});