const fs = require("fs");

const inputFile = "input.txt";
const outputFile = "output.txt";

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const wordcount = data.trim().split(/\s+/).length;
  const result = `Word count: ${wordcount}`;

  fs.writeFile(outputFile, result, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return;
    }
    console.log("Word count written to output.txt");
  });
});