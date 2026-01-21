
const fs=require('fs');
//create a directory
// fs.mkdir("newDirectory",(err)=>{
//     if(err){
//         return;
//     }
//     console.log("Directory is created");
// });
// fs.mkdir("folder/folder1/folder2",{recursive:true},(err)=>{
//     if(err){
//         console.log("error"); 
//         return;
//     }
//     console.log("Directory is created");
    
// });

fs.readdir("newDirectory",(err,files)=>{
    if(err){
        console.log("Error");
        return;
    }
    console.log(files);
});

fs.rmdir("newDirectory",(err)=>{
    if(err){
        console.log("error");
        return;
    }
    console.log("Directory deleted successfully");
});
fs.rm("newDirectory",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Directory deleted successfully");
});