const express = require("express");
const router = express.Router();

const Student = require("../models/Student")
const Class = require("../models/Class")
router.post("/", async (req, res) => {
  const { name, classes } = req.body;
  if (Array.isArray(classes)) {

    Class.
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
