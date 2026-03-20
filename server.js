const express= require('express');
const app=express();
const PORT=3000;
const studentRoutes=require("./routes/studentRoutes");
app.use(express.json());

app.use("/api/students",studentRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});