const mongoose = require("mongoose");

//employees
const registration = mongoose.model("user", {
  firstname: {
    type: String,
    // required: true,
  },
  lastname: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  phone: {
    type: String,
  },
  age: {
    type: Number,
    // required: true,
  },
  photo: {
    type: String,
    default: "user.jpg"
  },
  role: {
    type: String,
    enum: ["Company", "Customer", "Admin"],
    default: "Customer",
  },
  projects: {
    type: String,
  },
  experience: {
    type: String,
  },
  company: {
    type: String,
  },
  foundedin: {
    type: String,
  },
  userbio:{
    type: String,
  },
  resume: {
    type:String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = registration;
