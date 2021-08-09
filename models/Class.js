const mongoose = require("mongoose");
const { Schema } = mongoose;



const classSchema = new Schema(
  {
    students: {
      type: [String],
      required: false,
    },
    className: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    _id: true,
  }
);

const Class = mongoose.model("Class", classSchema);

module.exports = Class;
