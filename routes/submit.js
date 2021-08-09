const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, classes } = req.body;

  console.log(classes);
  if (Array.isArray(classes)) {
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
