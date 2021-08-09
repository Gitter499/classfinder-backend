require("dotenv").config();

const { PORT } = process.env.PORT;

const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");

const db = require("./db");

const app = express();

const classFile = fs.readFileSync("classes.json");

app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Register routes
const submit = require("./routes/submit");
const classRoutes = require("./routes/classes");
const students = require("./routes/students");

app.use("/submit", submit);
app.use("/classes", classRoutes);
app.use("/students", students);
const main = async () => {
  app.listen(PORT || 4000, () => {
    console.info(`API running on ${PORT || 4000}`);
  });
  
};

main();
