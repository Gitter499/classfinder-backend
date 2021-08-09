const express = require("express");
const {readFileSync} = require("fs");
const router = express.Router();
router.get("/", (req, res) => {
    const classes = JSON.parse(readFileSync("classes.json"));
    res.send(classes);
});

module.exports = router;
