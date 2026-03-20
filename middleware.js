const fs = require("fs").promises;
const express = require("express");
const app = express();

app.use(express.json())

const PORT= 8000;
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.log("Server is listening on port:8000");
});

app.use((req, res, next) => {
    console.log("i am middleware 1")
    next();

})

const fileAuthMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  if
  (token === "mysecrettoken") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }

}

app.use((req, res, next) => {
  const log = `${new Date().toISOString()} - ${req.method} ${req.url}`;
  fs.appendFile("log.txt", log ,(err)=> {
    if(err){
        console.error("Error writing to log file:", err);
    const token = req.headers["authorization"];
  }})
})

const readStudentsFromFile = async () => {
  const data = await fs.readFile("./students.json", "utf-8");
  return JSON.parse(data || "[]");
};

const writeStudentsToFile = async (records) => {
  await fs.writeFile("./students.json", JSON.stringify(records, null, 2));
};

    


app.get("/students",fileAuthMiddleware , async(req, res) => {
    const students= await readStudentsFromFile();
    return res.status(200).json(students);
})
