const express = require("express");
const router = express.Router();

const Class = require("../models/Class");
const Student = require("../models/Student");

router.post("/", async (req, res) => {
    const {name, classes} = req.body;
    if (await Student.findOne({name: name})) {
        let data = []
        for (const elem of classes) {
            data.push((await Class.findOne({"className": elem}).select("students className -_id").exec()).toObject());
        }
        return res.json({
            success: true,
            data: data
        })
    } else {
        return res.json({
            success: false,
            message: "Student does not exist"
        })
    }
})

module.exports = router
