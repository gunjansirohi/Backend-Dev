const fs=require('fs');

fs.copyFile("./test.txt","./temp.txt",(err)=>{
    if(err){
        console.log("Error");
    }
    else{
        console.log("File copied succesfully");
    }
})

fs.copyFileSync("./test.txt","./temp.txt");
console.log("File is copied");

fs.unlink("./temp.txt",(err)=>{
    if(err){
        console.log("Error in deleting file");  
    }
    else{
        console.log("File deleted successfully");
    }
})
fs.unlinkSync("./temp.txt");
console.log("File deleted successfully");