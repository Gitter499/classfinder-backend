const express = require("express");
const Student = require("../models/Student");


const router = express.Router();

router.get("/", async (req, res) => {

});
router.get("/name", async (req, res) => {
    const {name} = req.body;


    const students = await Student.findOne({name: name});

    students ?
        res.json({
            data: students,
        }) : res.json({
            message: "Student doesn't exist"
        })

});

module.exports = router;
