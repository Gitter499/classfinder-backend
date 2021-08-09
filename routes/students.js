const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  const students = await db.get("students").value();
  console.log(students);
  res.json({
    data: students,
  });
});
router.get("/name", (req, res) => {
  const { name } = req.body;
  let students;
  db.get("students")
    .value()
    .forEach((elem) => {
      if (elem.name === name) {
        students = elem;
      }
    });
  console.log(students);
  res.json({
    data: students,
  });
});

module.exports = router;
