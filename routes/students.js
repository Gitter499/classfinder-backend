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
 
  res.json({
    data: students,
  });
});

module.exports = router;
