// db.js
const fs = require('fs');
const path = require('path');

// students.json file ka path
const filePath = path.join(__dirname, 'students.json');

// Read students data
function readStudentsData() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Write students data
function writeStudentsData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { readStudentsData, writeStudentsData };