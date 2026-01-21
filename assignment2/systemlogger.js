const os = require('os');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'system.log');

function logSystemInfo() {
  const cpuInfo = os.cpus()[0].model;
  const totalMemory = (os.totalmem() / 1024 / 1024).toFixed(2);
  const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);
  const platform = os.platform();
  const timestamp = new Date().toISOString();

  const logEntry = `
[${timestamp}]
Platform: ${platform}
CPU: ${cpuInfo}
Total Memory: ${totalMemory} MB
Free Memory: ${freeMemory} MB
------------------------------
`;

  fs.appendFile(logFile, logEntry, (err) => {
    if (err) {
      console.error('Error writing to log file:', err);
    }
  });
}

setInterval(logSystemInfo, 5000);

console.log('System information logger started...');