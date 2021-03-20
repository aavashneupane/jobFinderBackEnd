var mongoose = require('mongoose');
var User = require("./User");

//jobs
const SCHEMA = mongoose.Schema;
const jobSchema =new SCHEMA({
    
        jobtitle:{
            type: String,
          //  required: true
        },
        jobtype:{
            type: String,
            
        },
        jobdescription:{
            type: String,
          //  required: true,
            
        },
        requiredexperience:
        {
            type: String,
            
        },
    
        jobprice:{
            type: String,
        },
        date: {
            type: Date,
            default: Date.now,
          },
        creator: {
            type: SCHEMA.Types.ObjectId,
            ref: User,
          },
        
    
    
});

jobSchema.statics.dateExist = async function (date, creator) {
    let dateExist = await INCOME.findOne({ date: date, creator: creator });
    return dateExist;
  };

  jobSchema.methods.toJSON = function () {
    let job = this.toObject();
    delete job.createdAt;
    delete job.__v;
    return job;
  };


const JOB = mongoose.model("job", jobSchema);    
module.exports = JOB;