const express = require("express");
const db = require("../db");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, classes } = req.body;

  console.log(classes);
  if (Array.isArray(classes)) {
    db.get("students").push({ name: name, classes: classes });
    db.save();
    let data = [];
    db.get("classes")
      .value()
      .forEach((elem) => {
        classes.forEach((c, idx) => {
          if (c === elem.name) {
            db.get("classes").get(idx).get("students").push(name);
            db.save()
            data.push({ name: elem.name, students: elem.students });
          }
        });
      });
    
    res.json({
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
