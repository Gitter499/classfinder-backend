const express = require("express");
const router = express.Router();
const fs = require("fs");
router.get("/", (req, res) => {
  const classes = JSON.parse(fs.readFileSync("classes.json"));

  let names = [];
  classes.forEach((element) => {
    names.push(element["name"]);
  });

  res.send(names);
});

module.exports = router;
