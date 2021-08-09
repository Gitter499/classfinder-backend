const express = require("express");


const router = express.Router();

router.get("/", async (req, res) => {
  
});
router.get("/name", (req, res) => {
  const { name } = req.body;
 
  res.json({
    data: students,
  });
});

module.exports = router;
