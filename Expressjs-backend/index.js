const express=require("express");
const app=express();
const PORT=8000;
const students=[
    {id:1,name:"John"},
    {id:2,name:"Jane"},
    {id:3,name:"Jim"}
];
app.get("/",(req,res)=>{
    res.send("Welcome to load page");
})

app.get("/students",(req,res)=>{
    res.json(students);
})
app.get("/students/:id",(req,res)=>{
    res.send();
})

app.get("/students/search",(req,res)=>{
    const searchQuery=req.query.search;
    console.log(searchQuery);
})
app.listen(PORT,()=>{
    console.log("Server is running on port 8000");
});