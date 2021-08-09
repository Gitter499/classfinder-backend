const {readFileSync} = require("fs");

const classFile = JSON.parse(readFileSync("classes.json"));

const Class = require("./models/Class");

const fill = () => {
  classFile.forEach((elem) => {
    Class.create({
      className: elem,
    });
  });
};

module.exports = fill;
