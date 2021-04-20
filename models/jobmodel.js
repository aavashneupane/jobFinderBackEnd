const mongoose = require("mongoose");
var User = require("./user");
const SCHEMA = mongoose.Schema;
//jobs
const jobSchema = new SCHEMA({
  jobtitle: {
    type: String,
     required: true
  },
  jobtype: {
    type: String,
    required: true
  },
  jobdescription: {
    type: String,
     required: true,
  },
  requiredexperience: {
    type: String,
    required: true
  },
  jobprice: {
    type: String,
    required: true
  },
  photo: {
    type: String,
  //  default: "user.jpg"
  },
  creator: {
    type: SCHEMA.Types.ObjectId,
    ref: User,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const JOB = mongoose.model("job", jobSchema);
module.exports = JOB;
