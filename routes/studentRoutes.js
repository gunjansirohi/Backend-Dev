const express = require('express');
const app = express();
const router = express.Router();
const db = require('../models/studentModels');
const{getAllStudents, createStudent}=require('../controllers/studentControllers');
router.get("/",getAllStudents);
router.post('/', createStudent);
module.exports = router;