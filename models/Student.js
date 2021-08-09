const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    classes: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
    _id: true,
  }
);
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
