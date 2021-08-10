const express = require("express");
const router = express.Router();


const Student = require("../models/Student");
const Class = require("../models/Class");

router.post("/", async (req, res) => {
    const {name, classes} = req.body;
    if (Array.isArray(classes)) {

        if (await Student.findOne({name: name})) {
            res.json({
                message: "Student already exists"
            })
        } else {
            await Student.create({
                name: name,
                classes: classes,
            });

        }

        let data = [];

        for (const elem of classes) {
            await Class.findOneAndUpdate(
                {className: elem},
                {$push: {students: name}}
            );

            data.push((await Class.findOne({"className": elem}).select("students className -_id").exec()).toObject());


        }
        res.cookie("studentName", name).json({
            success: true,
            data: data,
        });
    } else {
        res.json({
            success: false,
            message: `TypeError: Classes should be an array. Found ${typeof classes} instead`,
        });
    }
});
module.exports = router;
