const db=require('../models/studentModels');
const getAllStudents=async(req,res)=>{
    try {
        const studentsData = await db.readStudentsData();
        if (!studentsData) {
            return res.status(404).json({err:'data not found' });
        }
        res.status(200).json(studentsData);

    } catch (err) {
        console.log('Failed to retrieve students',err);
    }   
}
const createStudent=async(req,res)=>{
    console.log("<<<<>>", req.body);
    try {
        const { name, age, grade } = req.body;
        if (!name || !age || !grade) {

            return res.status(400).json({ message: 'Name, age, and grade are required' });
        }
        const newStudent = { name, age, grade };
        const studentsData = await db.readStudentsData();
        studentsData.push(newStudent);
        // await db.writeStudentsData(studentsData);
        res.status(201).json({ message: 'Student created successfully', student: newStudent });
    } catch (err) {
        console.log('Failed to create student', err);
    }
}

module.exports= {getAllStudents, createStudent}