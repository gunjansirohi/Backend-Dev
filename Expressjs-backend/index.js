// const express=require("express");
// const app=express();
// const PORT=8000;
// const students=[
//     {id:1,name:"John"},
//     {id:2,name:"Jane"},
//     {id:3,name:"Jim"}
// ];
// app.get("/",(req,res)=>{
//     res.send("Welcome to load page");
// })


// app.get("/students",(req,res)=>{
//     res.json(students);
// })
// app.get("/students/:id",(req,res)=>{
//     res.send();
// })

// app.get("/students/search",(req,res)=>{
//     const searchQuery=req.query.search;
//     console.log(searchQuery);
// })
// app.listen(PORT,()=>{
//     console.log("Server is running on port 8000");
// });



const express = require("express");
const app = express();
const PORT = 8000;
const fs = require("fs");
app.use(express.json());
// const students = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Jim" }
// ];
app.get("/", (req, res) => {
    res.send("Welcome to load page");
})

app.get("/students", (req, res) => {
    fs.readFile("students.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading file");
        }
        const students = JSON.parse(data || "[]");
        res.json(students);
    });
})

app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    res.json(student);
});




app.post("/students", (req, res) => {
    const data = req.body;
    if (!data || !data.name) {
        return res.status(400).send("Details are missing");
    }
    fs.readFile("students.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).send("check txt read file");
        }
        const students = JSON.parse(data || "[]");
        const newStudent = {
            id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
            name: data.name
        };
        students.push(newStudent);
        fs.writeFile("students.json", JSON.stringify(students, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Error writing file");
            }
            return res.status(201).json({
                message: "Student added successfully",
                student: newStudent
            });
        });
    });
    // res.status(201).json({
    //     message: "Student added successfully",
    //     student: newStudent
    // });
});

app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    const updatedStudent = {
        ...student,
        ...data
    };
    const index = students.findIndex(s => s.id === id);
    students[index] = updatedStudent;

    res.json({
        message: "Student updated successfully",
        student: updatedStudent
    });
});

app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).send("Student not found");
    }
    students.splice(index, 1);
    res.json({
        message: "Student deleted successfully"
    });
});

app.get("/students/search", (req, res) => {
    const searchQuery = req.query.search;
    console.log(searchQuery);
})
app.listen(PORT, () => {
    console.log("Server is running on port 8000");
});