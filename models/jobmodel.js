const mongoose = require("mongoose");
var User = require("./user");
const SCHEMA = mongoose.Schema;
//jobs
const jobSchema = new SCHEMA({
  jobtitle: {
    type: String,
    //  required: true
  },
  jobtype: {
    type: String,
  },
  jobdescription: {
    type: String,
    //  required: true,
  },
  requiredexperience: {
    type: String,
  },
  jobprice: {
    type: String,
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
