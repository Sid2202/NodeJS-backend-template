const mongoose = require("mongoose");

const formdata = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  phrase: {
    type: String,
    required: true,
  },
});

const Data = mongoose.model("FormData", formdata);

module.exports = Data;