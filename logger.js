const fs = require('fs');
function logActivity(message) {
  const timestamp = new Date().toLocaleString();
  const logMessage = `${timestamp} - ${message}`;
  fs.appendFile('activity.log', logMessage, (err) => {
    if (err){
      console.log('Failed to write log');
    }
  });
  fs.readFile("activity.log",(err,data)=>{ 
    if(err){
      console.log("Failed to read a file");
    }
    else{
      console.log("Read file successfully")
    }
  } );
}
module.exports = { logActivity };