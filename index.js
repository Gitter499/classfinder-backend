require("dotenv").config();

const {PORT, MONGO_URL} = process.env;

const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Register routes
const submit = require("./routes/submit");
const classRoutes = require("./routes/classes");
const students = require("./routes/students");
const update = require("./routes/update");

app.use("/submit", submit);
app.use("/classes", classRoutes);
app.use("/students", students);
app.use("/update", update);

const main = async () => {
    app.listen(PORT || 4000, () => {
        console.info(`API running on ${PORT || 4000}`);
    });
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

};

main();
